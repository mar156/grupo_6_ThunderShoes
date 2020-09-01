function adminMiddleware(req, res, next){
    if(req.session.userLoggedIn != undefined && req.session.userLoggedIn.category == "admin" ){
        next();
    }else{
        res.redirect("/");
    }
}

module.exports = adminMiddleware;