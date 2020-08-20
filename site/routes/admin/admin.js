const express = require('express');
const router = express.Router();
const path = require('path');
const adminController= require(path.join(__dirname, '/../../controllers/adminController'));

// http://localhost:3000/admin/product/
router.get('/product', adminController.listProduct);             // Vista    - Listado de productos 


//router.get('/product/create', adminController.createProduct);       // Vista    - Creación de productos
//router.post('/product/', adminController.addProduct);            // Post     - Agregar un producto

//router.get('/product/:id/edit', adminController.editProduct);       // Vista    - Editar producto
//router.put('/product/:id', adminController.updateProduct);       // Put      - Editar producto

//router.delete('product/:id', adminController.deleteProduct);     // Delete   - Eliminar producto

module.exports = router;