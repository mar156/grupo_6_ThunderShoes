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
            // Leer id de params
        let id = Number(req.params.id);
            // Leer datos nuevos usuario de body
        // let newUser = req.body;
            // Leer archivo
        let usuariosJSON = fs.readFileSync(filePath, 'utf-8');
        let users = JSON.parse(usuariosJSON);
            // Buscar usuario
        let userToEdit = users.find( user => {
            return user.id === id
        });
            // Eliminamos la contraseña 
        delete userToEdit.password;

            // Renderizar vista enviando objeto usuario
        res.render('users/profile', { userToEdit });
    },
    update: (req, res) => {
        let userToEdit = {
            id: Number(req.params.id),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: Number(req.body.phone),
            address: {
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                postal_code: Number(req.body.postal_code)
            },
            image: 'user_' + req.params.id + '.jpg',
            password: ''
        };

        if ( req.body.password != '' && req.body.passwordConfirm != '' ) {
            if ( req.body.password === req.body.passwordConfirm ) {
                userToEdit.password = bcrypt.hashSync(req.body.password, 10);
            } else {
                    // Esta verificación será reemplazada de otra manera cuando se 
                    // implemente middleware para verificar los datos, y aquí sólo llegue el nuevo
                    // password en caso de pasar las validaciones y no se encontraron errores.
                userToEdit.result = 'error';
                userToEdit.msg = 'Las contraseñas ingresadas no coinciden';
                return res.render('users/profile', { userToEdit })
            }
        }

        const usuariosJSON = fs.readFileSync(filePath, 'utf-8');
        const users = JSON.parse(usuariosJSON);

        let newUsers = users.map( user => {
            if ( user.id === userToEdit.id ) {
                user.first_name = userToEdit.first_name;
                user.last_name = userToEdit.last_name;
                user.email = userToEdit.email;
                user.phone = userToEdit.phone;
                user.address = userToEdit.address;
                user.password = userToEdit.password != '' ? userToEdit.password : user.password;

                let userToLogin = user;
                req.session.userLoggedIn = userToLogin;
            }
            return user
        });

        // Probando método asincrono writeFile de fs. Se usa con callback como tercer parametro
        // (Callback no recibe ningún parametro)
        fs.writeFile(filePath, JSON.stringify(newUsers, null, ' '), () => {
            userToEdit.result = 'done';
            userToEdit.msg = 'Sus datos fueron actualizados exitosamente';
            return res.render('users/profile', { userToEdit })
        });
    }
}

module.exports= controller;
