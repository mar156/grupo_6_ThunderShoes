const path = require ('path')

const controller = {
index: (req, res) => {
    res.sendFile(path.join(__dirname, '/../views/shop.html'));
},
detail: (req, res)=>{
    res.sendFile(path.join(__dirname, '/../views/productDetail.html'));
},
cart: (req, res)=>{
    res.sendFile(path.join(__dirname, '/../views/productCart.html'));
}
}

module.exports= controller;