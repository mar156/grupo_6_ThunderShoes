const path = require ('path')
const fs = require('fs');
const filePath =  path.join(__dirname, '../../data/products.json');

const createProducts = {
    //createVista: function (req, res) {
    //res.render()
    //},
    addProduct: function(req,res) {
        let productsJSON = fs.readFileSync(filePath, 'utf-8');
        let products= JSON.parse(productsJSON);
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
       

        products.push(newProduct);
        let listaProductosJSON= JSON.stringify(products);
        fs.writeFileSync(filePath, listaProductosJSON, 'utf-8');
        return res.send(newProduct);
}

};

module.exports = createProducts;