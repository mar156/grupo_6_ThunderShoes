const express = require('express');
const router = express.Router();
const path = require('path');
const adminController= require(path.join(__dirname, '/../../controllers/adminController'));
const multer = require('multer');

const validator = require('../../validators/admin');

var storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, path.join(__dirname,'../../public/img'))//carpeta donde se guardará el archivo
    },
    filename: (req, file, callback)=>{
        callback(null, 'zapatilla' + Date.now() + path.extname(file.originalname))//nombre con el que se guardará el archivo
    }
});
var upload = multer({storage:storage});


// http://localhost:3000/admin/product/
router.get('/', adminController.listProduct)                        // Vista    - Listado de productos
router.get('/product', adminController.listProduct);                // Vista    - Listado de productos 

router.get('/product/create', adminController.createProduct);       // Vista    - Creación de productos
router.post('/product/create', upload.array('image', 4), adminController.addProduct);         // Post     - Agregar un producto

router.get('/product/:id/edit', adminController.editProduct);       // Vista    - Editar producto
router.put('/product/:id', adminController.update);                 // Put      - Editar producto

router.delete('/product/:id', adminController.destroyProduct);      // Delete   - Eliminar producto

module.exports = router;