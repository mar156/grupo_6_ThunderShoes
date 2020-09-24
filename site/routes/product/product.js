const express = require('express');
const router = express.Router();
const path = require('path');
const authMiddleware = require('../../middlewares/authMiddleware');
const productController= require(path.join(__dirname, '/../../controllers/productController'));



router.get('/', productController.index );

router.get('/search', productController.search);

router.get('/detail/:id?', productController.detail);   //Quitar el '?' opcional, se deja sólo para que funcione la vista actual.  

router.get('/cart', authMiddleware ,productController.cart );

/* Routes Header */
router.get('/:gender/:category?', productController.index);     

// router.get('/hombres', productController.index);
// router.get('/mujeres', productController.index);
// router.get('/coleccion', productController.index);
// router.get('/ofertas', productController.index);

/* Routes Index*/
// router.get('/basketball', productController.index);
// router.get('/football', productController.index);
// router.get('/tennis', productController.index);
// router.get('/running', productController.index);

module.exports = router;
