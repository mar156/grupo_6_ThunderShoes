const fs = require("fs");
const path = require("path");
const filePath =  path.join(__dirname, '../data/users.json');


function rememberMiddleware(req, res, next){
    if(req.cookies.remember != undefined && req.session.userLoggedIn == undefined){
        let usuariosJSON = fs.readFileSync(filePath, 'utf-8');
        let users = JSON.parse(usuariosJSON);

        for(let i=0; i< users.length; i++){
            if(users[i].email == req.cookies.remember){
                req.session.userLoggedIn = users[i];
                break;
            }
        }
    }

    next();
    
}

module.exports = rememberMiddleware;