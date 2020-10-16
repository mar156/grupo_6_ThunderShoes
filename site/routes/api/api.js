const express = require('express');
const router = express.Router();
const branchController = require('../../controllers/api/branchController');
const productController = require('../../controllers/api/productController');
const userController = require('../../controllers/api/userController');


router.get('/users', userController.list);                  // Listado de usuarios
router.get('/users/latest', userController.latest);         // Ultimo usuario creado
router.get('/users/:id', userController.detail);            // Detalle de usuario

router.get('/products', productController.list);            // Detalle de producto
router.get('/products/latest', productController.latest);   // Ultimo producto creado
router.get('/products/:id', productController.detail);      // Detalle de producto

router.get('/branches', branchController.list);             // Listado de marcas

module.exports = router