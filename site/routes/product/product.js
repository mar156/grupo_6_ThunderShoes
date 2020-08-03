
const express = require('express');
const router = express.Router();
const path = require('path');
const productController= require(path.join(__dirname, '/../../controllers/productController'));



router.get('/', productController.index );

router.get('/detail', productController.detail);

router.get('/cart', productController.cart );

module.exports = router;