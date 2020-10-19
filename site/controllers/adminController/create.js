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
        } else {
            // Se elimina las imagenes subidas en caso de error - 
            let filesname = req.files.map(image => filename = {file_name: image.filename});
            if ( filesname.length ) {
                filesname.forEach(file => {
                    if ( fs.existsSync( path.join(__dirname, `../../public/img/${file.file_name}`)) ) {
                        fs.unlink( path.join(__dirname, `../../public/img/${file.file_name}`), // Podría ser Sync, pero no se toma acción en caso de error o pos eliminado el archivo.
                        err => {if (err) console.log(err)} ) 
                    }
                });
            }

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
};

module.exports = createProducts;