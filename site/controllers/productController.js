const path = require ('path')

const controller = {
index: (req, res) => {
    res.render('shop');
},
detail: (req, res)=>{
    res.render('productDetail');
},
cart: (req, res)=>{
    res.render('productCart');
}
}

module.exports= controller;