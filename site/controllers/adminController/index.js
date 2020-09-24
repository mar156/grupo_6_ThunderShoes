const path = require ('path')
const fs = require('fs');
const filePath =  path.join(__dirname, '../../data/products.json');

const {product, brand, gender, image, category, user, color, size } = require('../../database/models');


module.exports = async (req, res)=>{
   
    /* let products = fs.readFileSync(filePath, 'utf-8');
    products = JSON.parse(products);  */


   try {
    let products = await product.findAll({ include: [ brand, gender, image, category, color, size ]});
    res.render('admin/listProducts', {products});
    } catch (e) {
        console.log("Error");
    }
 
    
}