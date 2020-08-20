const path = require ('path')
const fs = require('fs');
const filePath =  path.join(__dirname, '../../data/products.json');

module.exports = (req, res)=>{
   
    let products = fs.readFileSync(filePath, 'utf-8');
    products = JSON.parse(products);
    
    res.render('admin/listProducts', {products});
}