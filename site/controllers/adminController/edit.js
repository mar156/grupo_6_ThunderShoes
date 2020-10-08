const path = require ('path')
const fs = require('fs');
const filePath =  path.join(__dirname, '../../data/products.json');

const { validationResult } = require('express-validator');

const {product, brand, gender, image, category, user, color, size } = require('../../database/models');

const editProduct = {
    edit: function(req, res){
        
        let id = req.params.id;
        /* let readProducts = fs.readFileSync(filePath, 'utf-8');
        let products = JSON.parse(readProducts);
        let productToEdit = products.find(function(product){
            return product.id == id;
        }); */
        
        product.findByPk(id, { include: [brand, gender, image, category, color, size] })
       .then(function(productToEdit){
        
            let productToShow = {
                name: productToEdit.name,
                brand: {
                    newbalance:'',
                    puma: '',
                    nike:'',
                    adidas:''
                },
                description: productToEdit.description,
                gender: {
                    male:'',
                    female: '',
                    unisex: ''
                },
                category: {
                    tennis: '',
                    running: '',
                    volley: '',
                    football: '',
                    collection: ''
                },
                on_sale: productToEdit.on_sale,
                colors: {                  // la lista de colors se carga desde BD/FileJson y se genera el listado de la propiedad colors, 
                    red: '',                // de cada producto se obtiene que colors seleccionados posee y se marca en 'checked' para pasar a la vista. 
                    green: '',              // Idem 'Talles' y 'Categorías'.
                    black: '',
                    blue: '',
                    yellow: '',
                    gray: '',
                    white: ''
                },
                sizes: {
                    t34: '',
                    t35: '',
                    t36: '',
                    t37: '',
                    t38: '',
                    t39: '',
                    t40: ''
                },
                price: productToEdit.price,
                image: [
                    'file1.jpg',
                    'file2.jpg'
                ],
                stock: productToEdit.stock
            };

            // Marca
        
            for (const propiedad in productToShow.brand) {
                if (productToEdit.brand.name.split(" ").join("").toLowerCase() == propiedad) {
                    productToShow.brand[propiedad] = 'checked';
                } 
            }

            // Género

            for (const propiedad in productToShow.gender) {
                if (productToEdit.gender.name.toLowerCase() == propiedad) {
                    productToShow.gender[propiedad] = 'checked';
                } 
            }

            // Categorias

            productToEdit.categories.forEach(function(category){
                for (const propiedad in productToShow.category) {
                    if (category.name.toLowerCase() == propiedad) {
                        productToShow.category[propiedad] = 'checked';
                    } 
                }
            });  

            // Colores

            productToEdit.colors.forEach(function(color){
                for (const propiedad in productToShow.colors) {
                    if (color.code == "0011" && propiedad == "red") {
                        productToShow.colors[propiedad] = 'checked';
                    } 
                    else if (color.code == "0022"&& propiedad == "green"){ productToShow.colors[propiedad] = 'checked';}
                    else if (color.code == "0033" && propiedad == "black"){ productToShow.colors[propiedad] = 'checked';}
                    else if (color.code == "0044" && propiedad == "blue"){ productToShow.colors[propiedad] = 'checked';}
                    else if (color.code == "0055" && propiedad == "yellow"){ productToShow.colors[propiedad] = 'checked';}
                    else if (color.code == "0066" && propiedad == "grey"){ productToShow.colors[propiedad] = 'checked';}
                    else if (color.code == "0077" && propiedad == "white"){ productToShow.colors[propiedad] = 'checked';}
                }
            });

            // Talles

            productToEdit.sizes.forEach(function(size){
                for (const propiedad in productToShow.sizes) {
                    if (("t"+size.size) == propiedad) {
                        productToShow.sizes[propiedad] = 'checked';
                    } 
                }
            }); 


            return res.render('admin/editProduct', { product: productToShow , id });

        })
        .catch(function(error){
             console.log(error);
        });   
    
    },
    update: async function(req, res){

       let errors = validationResult(req);
       if(errors.isEmpty()){    
           
            let id = req.params.id;
            let categories = req.body.category;
            let colors = req.body.colors; 
            let sizes = req.body.sizes;
            let images = req.files;

            try{ 
                productExist = await product.findByPk(id);   
                
                if(images){
                    let filesname = images.map(function(image){
                        return {file_name: image.filename};
                    })
                    let savedImages = await image.bulkCreate(filesname)
                    await productExist.setImages(savedImages);
                }
                await productExist.setCategories(categories);
                await productExist.setColors(colors);
                await productExist.setSizes(sizes); 

                productExist.name = req.body.name,
                productExist.description = req.body.description,
                productExist.on_sale = req.body.on_sale,
                productExist.price = req.body.price,
                productExist.gender_id = req.body.gender,
                productExist.brand_id = req.body.brand,
                productExist.save();

                return res.redirect('/admin/product/');

            } catch(error){
                console.log(error);
            }
        }else{

        product.findByPk(id, { include: [brand, gender, image, category, color, size] })
        .then(function(productToEdit){
            
             let productToShow = {
                 name: productToEdit.name,
                 brand: {
                     newbalance:'',
                     puma: '',
                     nike:'',
                     adidas:''
                 },
                 description: productToEdit.description,
                 gender: {
                     male:'',
                     female: '',
                     unisex: ''
                 },
                 category: {
                     tennis: '',
                     running: '',
                     volley: '',
                     football: '',
                     collection: ''
                 },
                 on_sale: productToEdit.on_sale,
                 colors: {                  // la lista de colors se carga desde BD/FileJson y se genera el listado de la propiedad colors, 
                     red: '',                // de cada producto se obtiene que colors seleccionados posee y se marca en 'checked' para pasar a la vista. 
                     green: '',              // Idem 'Talles' y 'Categorías'.
                     black: '',
                     blue: '',
                     yellow: '',
                     gray: '',
                     white: ''
                 },
                 sizes: {
                     t34: '',
                     t35: '',
                     t36: '',
                     t37: '',
                     t38: '',
                     t39: '',
                     t40: ''
                 },
                 price: productToEdit.price,
                 image: [
                     'file1.jpg',
                     'file2.jpg'
                 ],
                 stock: productToEdit.stock
             };
 
             // Marca
         
             for (const propiedad in productToShow.brand) {
                 if (productToEdit.brand.name.split(" ").join("").toLowerCase() == propiedad) {
                     productToShow.brand[propiedad] = 'checked';
                 } 
             }
 
             // Género
 
             for (const propiedad in productToShow.gender) {
                 if (productToEdit.gender.name.toLowerCase() == propiedad) {
                     productToShow.gender[propiedad] = 'checked';
                 } 
             }
 
             // Categorias
 
             productToEdit.categories.forEach(function(category){
                 for (const propiedad in productToShow.category) {
                     if (category.name.toLowerCase() == propiedad) {
                         productToShow.category[propiedad] = 'checked';
                     } 
                 }
             });  
 
             // Colores
 
             productToEdit.colors.forEach(function(color){
                 for (const propiedad in productToShow.colors) {
                     if (color.code == "0011" && propiedad == "red") {
                         productToShow.colors[propiedad] = 'checked';
                     } 
                     else if (color.code == "0022"&& propiedad == "green"){ productToShow.colors[propiedad] = 'checked';}
                     else if (color.code == "0033" && propiedad == "black"){ productToShow.colors[propiedad] = 'checked';}
                     else if (color.code == "0044" && propiedad == "blue"){ productToShow.colors[propiedad] = 'checked';}
                     else if (color.code == "0055" && propiedad == "yellow"){ productToShow.colors[propiedad] = 'checked';}
                     else if (color.code == "0066" && propiedad == "grey"){ productToShow.colors[propiedad] = 'checked';}
                     else if (color.code == "0077" && propiedad == "white"){ productToShow.colors[propiedad] = 'checked';}
                 }
             });
 
             // Talles
 
             productToEdit.sizes.forEach(function(size){
                 for (const propiedad in productToShow.sizes) {
                     if (("t"+size.size) == propiedad) {
                         productToShow.sizes[propiedad] = 'checked';
                     } 
                 }
             }); 
 
             let errorsMapped = errors.mapped();
             return res.render('admin/editProduct', {errors: errorsMapped, id, product: productToShow});
         })
         .catch(function(error){
              console.log(error);
         });   
    }
    }
}




module.exports = editProduct;