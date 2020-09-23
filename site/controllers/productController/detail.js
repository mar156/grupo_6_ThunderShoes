const path = require ('path')
const fs = require('fs');
const filePath =  path.join(__dirname, '../../data/products.json');
const db = require('../../database/models');

module.exports = (req, res) => { 
    let id = Number(req.params.id);
    db.Product.findByPk(id)
        .then((product)=>{
            res.render('products/productDetail', {product});
        })
        .catch(error=>{
            res.status(404).send('Página no encontrada - Vista error 404 pendiente de construir')
        });
    /*let products = fs.readFileSync(filePath, 'utf-8');
    products = JSON.parse(products);
    let product = products.find(product => product.id === id);
    if (product) {
        res.render('products/productDetail', {product});
    } else {
        res.status(404).send('Página no encontrada - Vista error 404 pendiente de construir');
    }*/
};