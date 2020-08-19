const path = require ('path')
const fs = require('fs');
const filePath =  path.join(__dirname, '../data/productsExample.json');
const controller = {
    index: (req, res) => {
        //Leer el json con los productos
        //Traer los productos
        //Mandarselos a la vista en formato Javascript
        //Recibirlos en la vista como corresponde... 
        let products = fs.readFileSync(filePath, 'utf-8');
        products = JSON.parse(products);
        //res.send(products);
        res.render('products/shop', {products});
    },
    detail: (req, res)=>{
        res.render('products/productDetail');
    },
    cart: (req, res)=>{
        res.render('products/productCart');
    }
}

module.exports= controller;
