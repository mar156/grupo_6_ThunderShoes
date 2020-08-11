const express = require('express');
const router = express.Router();
const path = require('path');
const adminController= require(path.join(__dirname, '/../../controllers/adminController'));

router.get('/product/create', adminController.createProduct);
router.get('/product/edit/:id', adminController.editProduct);

module.exports = router;