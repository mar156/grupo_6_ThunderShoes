const express = require('express');
const router = express.Router();
const path = require('path');
const guestMiddleware = require('../../middlewares/guestMiddleware');
const usersController= require(path.join(__dirname, '/../../controllers/usersController'));
const multer = require('multer');
const authMiddleware = require('../../middlewares/authMiddleware');


var storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, path.join(__dirname,'../../public/img/users'))//carpeta donde se guardará el archivo
    },
    filename: (req, file, callback)=>{
        callback(null, file.fieldname +'user'+Date.now())//nombre con el que se guardará el archivo
    }
});
var upload = multer({storage:storage});


router.get('/login', guestMiddleware, usersController.login);
router.post('/login', guestMiddleware, usersController.authuser);

router.get('/logout', authMiddleware, usersController.logout);

router.get('/register',guestMiddleware,  usersController.register);
router.post('/register', guestMiddleware, upload.single('avatar') ,usersController.userRegister)

module.exports = router;
