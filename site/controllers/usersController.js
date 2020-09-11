const path = require ('path')
const fs = require("fs");
const filePath =  path.join(__dirname, '../data/users.json');

const bcrypt = require('bcrypt');

const controller = {
    login: (req, res)=>{
        let error;
        error = {
            msg: ""
        }
        res.render("users/login", { error })
    },
    authuser: (req, res)=>{
        let usuariosJSON = fs.readFileSync(filePath, 'utf-8');
        let users = JSON.parse(usuariosJSON);

        let userToLogin;
        let error;

        for(let i=0; i< users.length; i++){
            if((users[i].email == req.body.user) && (bcrypt.compareSync(req.body.password, users[i].password))){
                userToLogin = users[i];
                break;
            }
        }

        if(userToLogin == undefined){
             error = {
                 msg: "El email o la contraseña son incorrectas"
             }
            
            res.render('users/login', { error: error});
        }else{
            if(req.body.remember != undefined){
                res.cookie("remember", userToLogin.email, {maxAge: 120000000});
            }
            req.session.userLoggedIn = userToLogin;
            res.redirect("/");
        }

    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },
    register: (req, res)=>{
        res.render('users/register');
    },
    userRegister: (req, res)=>{
        //Verificar que haya completado todos los campos, por el momento vamos a confiar en que completó todo
        
        let usuariosJSON = fs.readFileSync(filePath, 'utf-8');
        let users = JSON.parse(usuariosJSON);
        let newUser = req.body;
        let check;
        
        if(req.file){
            newUser.image = req.file.filename
        }
        else{
            newUser.image = "default-profile.png"
        }
        //Que la contraseña sea correcta, es decir que sea igual la contraseña con confirmar contraseña
        if((req.body.password)&&(req.body.passwordConfirm)){
            newUser.password = bcrypt.hashSync(req.body.password, 10);
            check = bcrypt.compareSync(req.body.passwordConfirm, newUser.password);
            newUser.passwordConfirm = '';//que no guarde ese dato en el JSON
        }
        if(check){//si la contraseña y el confirmar contraseña son iguales, entonces que cree el usuario
            users.push(newUser);
            let usersJson= JSON.stringify(users, null, " ");
            fs.writeFileSync(filePath, usersJson);
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
