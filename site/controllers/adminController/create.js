const path = require ('path')
const fs = require('fs');
const filePath =  path.join(__dirname, '../../data/products.json');

const createProduct = {
    //createVista: function (req, res) {
    //res.render()
    //},
    guardarProducto: function(req,res) {
    let products = fs.readFileSync(filePath, 'utf-8');
    let archivoJSON= JSON.parse(products);
    let newProduct = {
        id: "",
        name:"",
        brand: "",
        description: "",
        gender: "",
        category:'' ,
        onSale: "",
        colors: "",
        sizes: 2 ,
        price: 3  ,
        image: "" ,
        

    

    }
}
};

module.exports = createProduct;