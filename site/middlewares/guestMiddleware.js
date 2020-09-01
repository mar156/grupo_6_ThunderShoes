function guestMiddleware(req, res, next){
    if(req.session.userLoggedIn == undefined){
        next();
    }else{
        res.redirect("/");
    }
}

module.exports = guestMiddleware;