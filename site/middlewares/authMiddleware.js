function authMiddleware(req, res, next){
    if(req.session.userLoggedIn != undefined){
        next();
    }else{
        res.redirect("/users/login");
    }
}

module.exports = authMiddleware;