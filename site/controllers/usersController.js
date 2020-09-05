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
            if((users[i].email == req.body.user) && (users[i].password == req.body.password)){
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
            res.send(usersJson);
        }
        else{
            res.send('Hubo un error, seguramente no pusiste bien las contraseñas');
        }
    }
}

module.exports= controller;
