const path = require ('path');
const fs = require("fs");
const filePath =  path.join(__dirname, '../data/users.json');

const bcrypt = require('bcrypt');

const { validationResult } = require('express-validator');


// Modelos
const { user, category_user, product } = require('../database/models');

const controller = {

    login: (req, res) => {
        let error;
        error = {
            msg: ""
        }
        res.render("users/login", { error });
    },
    // userLoggin: (req, res)=> {
    //    let email=req.body.user;
    //    let password = req.
    

    authuser: (req, res) => {
        let email = req.body.user;
        let password = req.body.password;
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            user.findOne({ 
                attributes: [
                    'id',
                    'first_name', 
                    'last_name', 
                    'email', 
                    'phone',
                    'address',
                    'password',
                    'avatar',
                    'city',
                    'state',
                    'postal_code'

                // 'favorites'  // No implementado aún
                ],
                where: { email },
                include: [category_user, product]
            })
            .then( user => {
                let error;

                if ( user && bcrypt.compareSync(password, user.password)) {
                    let userToLogin = user;

                    if(req.body.remember != undefined){
                        res.cookie("remember", userToLogin.email, {maxAge: 120000000});
                    }
                    req.session.userLoggedIn = userToLogin;
                    res.redirect("/");  // Falta capturar URL desde donde se le pidio logueo.
                } else {
                    error = {
                        msg: "El email o la contraseña son incorrectas"
                    };
                    return res.render('users/login', { error: error});
                }
            })
            .catch( err => {
                console.log('Hubo un error: ', err);    // Ver como informar a la vista.
            });

        }
       // else {
       //     res.render('users/login', {error: errors})
       // }
       else{
            let errorsMapped = errors.mapped();
            res.render('users/login', {error: errorsMapped});
        }      
    },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },

    register: (req, res)=>{
        res.render('users/register');
    },

    userRegister: async function(req, res){
        
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let newUser = req.body;
            let check;

        
        newUser.avatar = 'default-profile.jpg';
        
        if( (req.body.password) && (req.body.passwordConfirm) ){
            check = req.body.password === req.body.passwordConfirm;
        }
        if(check){
            newUser.password = bcrypt.hashSync(req.body.password, 10);
            delete newUser.passwordConfirm;
            newUser.category_id = 1; // Por defecto se asigna categoria 'user' que es id:1

            user.create( newUser )
                .then( result => {
                    if (req.file) { // Si subió una imagen, reemplazar la imagen por defecto. 
                        // Ya tenemos el ID, renombramos la imagen avatar con id.
                        
                        fs.renameSync(
                            path.join(__dirname, `/../public/img/users/${req.file.filename}`), 
                            path.join(__dirname, `/../public/img/users/avatar_${result.id}.jpg`)
                        );
                        // Actualizamos el valor de la propiedad al nuevo nombre
                        result.avatar = `avatar_${result.id}.jpg`;
                        // Guardamos los cambios efectuados en DB. (el nombre del archivo avatar)
                        result.save();
                        console.log('Esto está en el controlador:');
                        console.log(req.file);
                    }

                    req.session.userLoggedIn = newUser;
                    res.redirect('/');
                })
                .catch( err => {
                    console.log('--------- Error ---------- >>>> ', err);
                    res.redirect('/users/register'); // (Pendiente) Agregar error a mostrar
                });
            
        }
        else{
            res.send('Hubo un error, seguramente no pusiste bien las contraseñas');
            }
        }
        else{
            let errorsMapped = errors.mapped();
            res.render('users/register', {errors: errorsMapped});
        }
        
    },

    profile: (req, res) => {
        // Leer Session para obtener el usuario logueado.
        let profileStatus = {
            result: '',
            msg: '',
        }
        let userToEdit = req.session.userLoggedIn;
            // Renderizar vista enviando objeto usuario a editar
        res.render('users/profile', { userToEdit, profileStatus });
    },

    update: (req, res) => {
        // Pendiente a resolver: Cuando se actualizan los datos, session no se actualiza inmediatamente y no se muestran los cambios hasta cambiar a una nueva vista.

        let userToEdit = req.session.userLoggedIn;
        let profileStatus = {};
        let newPassword = '';
        if ( !!req.body.password || !!req.body.passwordConfirm ) {
            if ( req.body.password === req.body.passwordConfirm ) {
                newPassword = bcrypt.hashSync(req.body.password, 10);
            } else {
                // Esta verificación será reemplazada de otra manera cuando se 
                // implemente middleware para verificar los datos, y aquí sólo llegue el nuevo
                // password en caso de pasar las validaciones y no se encontraron errores.
                profileStatus.result = 'error';
                profileStatus.msg = 'Las contraseñas ingresadas no coinciden';
                return res.render('users/profile', { userToEdit, profileStatus })
            }
        }

        user.findByPk(1, { 
            attributes: [
                'id',
                'first_name', 
                'last_name', 
                'email', 
                'phone',
                'address',
                'password',
                'avatar',
                'city',
                'state',
                'postal_code'
                // 'favorites'  // No implementado aún
            ],
            include: [category_user, product]
        })
        .then( user => {
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
            user.email = req.body.email;
            user.phone = Number(req.body.phone);
            user.address = req.body.address;
            user.postal_code = Number(req.body.postal_code);
            user.state = req.body.state;
            user.city = req.body.city;
            user.password = newPassword ? newPassword : user.password;

            if (req.file) { // Si subió una imagen, reemplazar la imagen anterior. 
                // Ya tenemos el ID, renombramos la imagen avatar con id.
                fs.renameSync(
                    path.join(__dirname, `/../public/img/users/${req.file.filename}`),
                    path.join(__dirname, `/../public/img/users/avatar_${user.id}.jpg`)
                );
                // Actualizamos el valor de la propiedad al nuevo nombre
                user.avatar = `avatar_${user.id}.jpg`;
                // Guardamos los cambios efectuados en DB. (el nombre del archivo avatar)
            }

            user.save();

            profileStatus.result = 'done';
            profileStatus.msg = 'Sus datos fueron actualizados exitosamente';
            let userToEdit = user;
            req.session.userLoggedIn = userToEdit;
            return res.render('users/profile', { userToEdit, profileStatus })
        })
        .catch( err => {
            console.log('-----------------Error ----------------');
            console.log(err);

            profileStatus.result = 'error';
            profileStatus.msg = 'Error al actualizar los datos';
            return res.render('users/profile', { user, profileStatus })
        });
    }
}

module.exports= controller;
