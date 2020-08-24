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
        let indiceMayor = 0;
            products.forEach( producto => {
            indiceMayor = producto.id > indiceMayor ? producto.id : indiceMayor;
        })
        let siguienteIndice = indiceMayor + 1;


        let newProduct = {
            id: siguienteIndice,
            name: req.body.name,
            brand: req.body.brand,
            description: req.body.description,
            gender: req.body.gender,
            category:req.body.category,
            onSale: req.body.onSale,
            colors: req.body.colors,
            sizes: req.body.sizes,
            price: req.body.price,
            image: " " ,
            stock: 1, //cuando tengamos una planilla de stock
            //puedo usarla para leer la cantidad de productos de ese tipo que
            //hay y actualizar el número en función a ello
            

        }
       

        products.push(newProduct);
        let listaProductosJSON= JSON.stringify(products, null, " ");
        fs.writeFileSync(filePath, listaProductosJSON, 'utf-8');
        return res.send(newProduct);
}

};

module.exports = createProducts;