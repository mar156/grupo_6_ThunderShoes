const express = require('express');
const router = express.Router();
const brandController = require('../../controllers/api/brandController');
const productController = require('../../controllers/api/productController');
const userController = require('../../controllers/api/userController');


router.get('/users', userController.list);                  // Listado de usuarios
router.get('/users/latest', userController.latest);         // Ultimo usuario creado
router.get('/users/:id', userController.detail);            // Detalle de usuario
router.get('/users/isEmailAvailable/:email',
    userController.isEmailAvailable
);                  // {isAvailable:boolean} valida el email recibo esté disponible

router.get('/products', productController.list);            // Detalle de producto
router.get('/products/latest', productController.latest);   // Ultimo producto creado
router.get('/products/:id', productController.detail);      // Detalle de producto

router.get('/brand', brandController.list);                 // Listado de marcas

module.exports = router