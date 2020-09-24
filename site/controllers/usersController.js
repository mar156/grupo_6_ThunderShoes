const path = require ('path');
const fs = require("fs");
const filePath =  path.join(__dirname, '../data/users.json');

const bcrypt = require('bcrypt');

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

    authuser: (req, res) => {
        let email = req.body.user;
        let password = req.body.password;

        // user.findOne( { where: { email }, include: category_user } )
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
    },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },

    register: (req, res)=>{
        res.render('users/register');
    },

    userRegister: (req, res)=>{
        // Verificar que haya completado todos los campos, por el momento vamos a confiar en que completó todo
        
        let usuariosJSON = fs.readFileSync(filePath, 'utf-8'); // 
        let users = JSON.parse(usuariosJSON); // 
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
                    }
                })
                .catch( err => {
                    console.log('--------- Error ---------- >>>> ', err);
                });
            
            req.session.userLoggedIn = newUser;
            res.redirect('/');
        }
        else{
            res.send('Hubo un error, seguramente no pusiste bien las contraseñas');
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
        let userToEdit = req.session.userLoggedIn;
        let profileStatus = {};

        if ( !!req.body.password || !!req.body.passwordConfirm ) {
            if ( req.body.password === req.body.passwordConfirm ) {
                userToEdit.password = bcrypt.hashSync(req.body.password, 10);
            } else {
                // Esta verificación será reemplazada de otra manera cuando se 
                // implemente middleware para verificar los datos, y aquí sólo llegue el nuevo
                // password en caso de pasar las validaciones y no se encontraron errores.
                profileStatus.result = 'error';
                profileStatus.msg = 'Las contraseñas ingresadas no coinciden';
                return res.render('users/profile', { userToEdit, profileStatus })
            }
        }

        userToEdit.first_name = req.body.first_name;
        userToEdit.last_name = req.body.last_name;
        userToEdit.email = req.body.email;
        userToEdit.phone = Number(req.body.phone);
        userToEdit.address = {
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            postal_code: Number(req.body.postal_code)
        };

        const usuariosJSON = fs.readFileSync(filePath, 'utf-8');
        const users = JSON.parse(usuariosJSON);

        let isUpdated = false;
        let newUsers = users.map( user => {
            if (user.id && user.id === userToEdit.id) {
                isUpdated = true;
                // req.session.userLoggedIn = userToEdit;
                return userToEdit
            }
            return user
        });

        // Probando método asincrono writeFile de fs. Se usa con callback como tercer parametro
        // (Callback no recibe ningún parametro)
        if (isUpdated) {
            fs.writeFile(filePath, JSON.stringify(newUsers, null, ' '), () => {
                profileStatus.result = 'done';
                profileStatus.msg = 'Sus datos fueron actualizados exitosamente';
                req.session.userLoggedIn = userToEdit;
                return res.render('users/profile', { userToEdit, profileStatus })
            });
        } else {
            profileStatus.result = 'error';
            profileStatus.msg = 'Error al actualizar los datos';
            return res.render('users/profile', { userToEdit, profileStatus })
        }
    }
}

module.exports= controller;
