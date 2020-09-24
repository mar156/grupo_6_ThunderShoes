const path = require ('path')
const fs = require('fs');
const filePath =  path.join(__dirname, '../../data/products.json');

const {product, brand, gender, image, category, user, color, size } = require('../../database/models');

module.exports = async (req, res) => {
    /* let id = Number(req.params.id);
    let products = fs.readFileSync(filePath, 'utf-8');
    products = JSON.parse(products);
    products = products.filter( product => product.id !== id )
    fs.writeFileSync(filePath, JSON.stringify(products), 'utf-8');
 */
    let id = Number(req.params.id);
    
    try{
        productExist = await product.findByPk(id); 
        await productExist.setCategories([]);
        await productExist.setColors([]);
        await productExist.setSizes([]);
        await productExist.setImages([]);

        /* newProduct.setCategories(categories); */

        await productExist.destroy()
        return res.redirect('/admin/product/');

    }catch(error){
        console.log(error);
        res.send("Error en el borrado")
    }
}
