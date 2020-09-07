module.exports = (req, res, next) => {
    if(req.session.userLoggedIn != undefined){
        let user = {
            name: req.session.userLoggedIn.first_name + ' ' + req.session.userLoggedIn.last_name,
            id: req.session.userLoggedIn.id
        }
        res.locals.user = user;
    }else{
        res.locals.user = '';
        res.locals.user.id = '';
    }
    next();
};