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
                let loadedData = {
                    name : req.body.name,
                    price: req.body.price,
                    on_sale: req.body.on_sale,
                    description: req.body.description,
                    brand_id: req.body.gender, 
                    gender_id: req.body.brand
                }
                let filesname = req.files.map(image => filename = {file_name: image.filename});
                let categories = req.body.category;
                let colors = req.body.colors; 
                let sizes = req.body.sizes;

                let newProduct = await product.create(loadedData, {
                    include: [brand, gender, image, category, color, size ]
                }); 

                let savedImages = await image.bulkCreate(filesname)
                let idImages = savedImages.map( image => image.dataValues.id);
                // await newProduct.addImages(files);     // addImages() agrega imagenes sin eliminar las que estan, pero agrega la asociacion. hay que pasar los ID... No agrega las imagenes a la tabla images.
                await newProduct.setImages(idImages);     // setImages() setea las relaciones eliminando toda relacion anterior.
                await newProduct.setCategories(categories);
                await newProduct.setColors(colors);
                await newProduct.setSizes(sizes); 
                
                res.redirect('/admin/product/');
            }catch (error) {
                console.log(error);
                res.status(500).send('Error');
            }
        }else{
            let product = {
                name: req.body.name,
                price: req.body.price,
                on_sale: req.body.on_sale,
                description: req.body.description,
                images: req.image,
                gender_id: req.body.gender,
                brand_id: req.body.brand,
                categories: req.body.category,
                colors: req.body.colors, 
                sizes: req.body.sizes,
            };

            let errorsMapped = errors.mapped();
            res.render('admin/createProduct', {errors: errorsMapped, product});
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