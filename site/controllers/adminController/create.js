const path = require ('path')
const fs = require('fs');
const filePath =  path.join(__dirname, '../../data/products.json');

const { validationResult } = require('express-validator');

const {product, brand, gender, image, category, user, color, size } = require('../../database/models');

const createProducts = {
  
    addProduct: async function(req,res) {

        let errors = validationResult(req);

        if(errors.isEmpty()){ 
            try {

                let images = req.image;
                let categories = req.body.category;
                let colors = req.body.colors; 
                let sizes = req.body.sizes;

                let genderId = req.body.gender;
                let brandId = req.body.brand;
            
                let newProduct = await product.create({
                    name: req.body.name,
                    price: req.body.price,
                    on_sale: req.body.on_sale,
                    description: req.body.description,
                    brand_id: brandId,
                    gender_id: genderId
                    
                }, {
                    include: [brand, gender, image, category, color, size ]
                }); 

                /* newProduct.addImages(images);     MULTER */
                newProduct.setImages([7,9,10,11]);
                newProduct.setCategories(categories);
                newProduct.setColors(colors);
                newProduct.setSizes(sizes); 
                
                res.redirect('/admin/product/');
            }catch (error) {
                console.log(error);
                res.status(500).send('Error');
            }
        }else{
            let errorsMapped = errors.mapped();
            res.render('admin/createProduct', {errors: errorsMapped});
        }
    }

        /* 
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
        return res.send(newProduct); */

    
};

module.exports = createProducts;