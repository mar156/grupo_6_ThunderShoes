module.exports = (req, res, next) => {
    if(req.session.userLoggedIn != undefined){
        res.locals.user = req.session.userLoggedIn.email;
    }else{
        res.locals.user = '';
    }
    next();
};