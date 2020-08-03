const path = require ('path')

const controller = {
index: (req, res) => {
    res.render('products/shop');
},
detail: (req, res)=>{
    res.render('products/productDetail');
},
cart: (req, res)=>{
    res.render('products/productCart');
}
}

module.exports= controller;