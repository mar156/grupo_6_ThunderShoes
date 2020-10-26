module.exports = (req, res, next) => {
    if(req.session.userLoggedIn != undefined){
        res.locals.user = {
            name: req.session.userLoggedIn.first_name + ' ' + req.session.userLoggedIn.last_name,
            id: req.session.userLoggedIn.id,
            category: req.session.userLoggedIn.category_user.id
        }
    }else{
        res.locals.user = '';
        res.locals.user.id = '';
    }
    next();
};