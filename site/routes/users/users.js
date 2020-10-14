const express = require('express');
const router = express.Router();
const path = require('path');
const guestMiddleware = require('../../middlewares/guestMiddleware');
const usersController= require(path.join(__dirname, '/../../controllers/usersController'));
const multer = require('multer');
const authMiddleware = require('../../middlewares/authMiddleware');
const validate = require('../../validators/user');


var storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, path.join(__dirname,'../../public/img/users'))//carpeta donde se guardará el archivo
    },
    filename: (req, file, callback)=>{
        callback(null, 'user' + Date.now() + path.extname(file.originalname))//nombre con el que se guardará el archivo
    }
});

var upload = multer({storage:storage});

const fileNameLoader = function (req,res,next){
    if (req.file) req.body.avatar = req.file;
    next();
}


router.get('/login', guestMiddleware, usersController.login);
router.post('/login', guestMiddleware, validate.login, usersController.authuser);

router.get('/logout', authMiddleware, usersController.logout);

router.get('/register',guestMiddleware,  usersController.register);
router.post('/register', guestMiddleware, upload.single('avatar'), fileNameLoader, validate.register, usersController.userRegister);

router.get('/profile/', authMiddleware, usersController.profile);
router.put('/profile/', authMiddleware, upload.single('avatar'), fileNameLoader, validate.profile, usersController.update);

module.exports = router;
