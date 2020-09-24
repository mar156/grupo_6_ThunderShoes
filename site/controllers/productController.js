const path = require ('path')
const fs = require('fs');
const filePath =  path.join(__dirname, '../data/products.json');

const {product, brand, gender, image, category, user, color, size } = require('../database/models');

const detail = require('./productController/detail');
const search = require('./productController/search');

const controller = {
    index: async (req, res) => {
        //Leer el json con los productos
        //Traer los productos
        //Mandarselos a la vista en formato Javascript
        //Recibirlos en la vista como corresponde... 
      /*   let products = fs.readFileSync(filePath, 'utf-8');
        products = JSON.parse(products); */
        //res.send(products);

            // console.log(products[0].images[0].file_name); 

        try {
            let products = await product.findAll({ include: [ brand, gender, image, category, color, size ]});
            res.render('products/shop', {products});
            } catch (e) {
                console.log("Error");
            }

    },
    detail: detail,
    cart: (req, res)=>{
        res.render('products/productCart');
    },
    search: search.search
}

module.exports= controller;
