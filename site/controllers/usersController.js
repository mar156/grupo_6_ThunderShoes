const path = require ('path')
const fs = require("fs");
const filePath =  path.join(__dirname, '../data/users.json');


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
    }
}

module.exports= controller;
