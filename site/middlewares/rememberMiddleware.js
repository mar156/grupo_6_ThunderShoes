const path = require("path");

const { user, category_user, product } = require('../database/models');

function rememberMiddleware(req, res, next){
    if(req.cookies.remember != undefined && req.session.userLoggedIn == undefined){
        let email = req.cookies.remember;

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
                req.session.userLoggedIn = user;
                next();
            })
            .catch( err => {
                console.log('Hubo un error: ', err);    // Ver como informar a la vista.
            });
    } else {
        next();
    }

    
}

module.exports = rememberMiddleware;