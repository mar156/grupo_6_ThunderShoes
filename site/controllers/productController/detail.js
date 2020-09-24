const path = require ('path')
const fs = require('fs');
const filePath =  path.join(__dirname, '../../data/products.json');
const db = require('../../database/models');
const {product, brand, gender, image, category, user, color, size } = require('../../database/models');

module.exports = (req, res) => { 
    let id = Number(req.params.id);
    product.findByPk(id,{ include: [ brand, gender, image, category, color, size ]} )
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