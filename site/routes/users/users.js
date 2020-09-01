const express = require('express');
const router = express.Router();
const path = require('path');
const guestMiddleware = require('../../middlewares/guestMiddleware');
const usersController= require(path.join(__dirname, '/../../controllers/usersController'));



router.get('/login', guestMiddleware, usersController.login);
router.post('/login', guestMiddleware, usersController.authuser);


router.get('/register',guestMiddleware,  usersController.register);

module.exports = router;
