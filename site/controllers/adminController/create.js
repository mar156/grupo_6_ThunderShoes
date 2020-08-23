const path = require ('path')
const fs = require('fs');
const filePath =  path.join(__dirname, '../../data/products.json');

const createProducts = {
    //createVista: function (req, res) {
    //res.render()
    //},
    addProduct: function(req,res) {
        let products = fs.readFileSync(filePath, 'utf-8');
        let archivoJSON= JSON.parse(products);
        let newProduct = {
            id: 1,
            name: req.body.name,
            brand: req.body.brand,
            description: req.body.description,
            gender: req.body.gender,
            category:req.body.category,
            onSale: " ",
            colors: req.body.colors,
            sizes: req.body.sizes,
            price: req.body.price,
            image: "" ,
            

        }
        return res.send(newProduct);
}

};

module.exports = createProducts;