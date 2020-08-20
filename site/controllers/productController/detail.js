const path = require ('path')
const fs = require('fs');
const filePath =  path.join(__dirname, '../../data/products.json');

module.exports = (req, res) => { 
    let id = Number(req.params.id);
    let products = fs.readFileSync(filePath, 'utf-8');
    products = JSON.parse(products);
    let product = products.find(product => product.id === id);
    if (product) {
        res.render('products/productDetail', {product});
    } else {
        res.status(404).send('Página no encontrada - Vista error 404 pendiente de construir');
    }
};