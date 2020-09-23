const path = require ('path')
const fs = require('fs');
const filePath =  path.join(__dirname, '../../data/products.json');

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
                    female: ''
                },
                category: {
                    tennis: '',
                    running: '',
                    volley: '',
                    football: '',
                    collection: ''
                },
                onSale: productToEdit.onSale,
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


        res.render('admin/editProduct', { product: productToShow , id });

        })
        .catch(function(error){
             console.log(error);
        });   
         

        //    res.render('admin/editProduct', { product , id }); 
           /* res.send(producto); */    
      
        
       /*  let product = {
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
                female: ''
            },
            category: {
                tennis: '',
                running: '',
                volley: '',
                football: '',
                collection: ''
            },
            onSale: productToEdit.onSale,
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
 
        // Colores

        if (Array.isArray(productToEdit.colors)){
            productToEdit.colors.forEach(function(color){
                for (const propiedad in product.colors) {
                    if (color == propiedad) {
                        product.colors[propiedad] = 'checked';
                    } 
                }
            })
        };

       if (Array.isArray(productToEdit.colors) && Array.isArray(productToEdit.colors[0])){
            productToEdit.colors[0].forEach(function(color){
                for (const propiedad in product.colors) {
                    if (color == propiedad) {
                        product.colors[propiedad] = 'checked';
                    } 
                }
            })
        }; 

        // Talles

        productToEdit.sizes.forEach(function(size){
            for (const propiedad in product.sizes) {
                if (("t"+size) == propiedad) {
                    product.sizes[propiedad] = 'checked';
                } 
            }
        }); 

        // Categorias

        productToEdit.category.forEach(function(category){
            for (const propiedad in product.category) {
                if (category == propiedad) {
                    product.category[propiedad] = 'checked';
                } 
            }
        }); 

        // Género

        for (const propiedad in product.gender) {
            if (productToEdit.gender.toLowerCase() == propiedad) {
                product.gender[propiedad] = 'checked';
            } 
        }

        // Marca
        
        for (const propiedad in product.brand) {
            if (productToEdit.brand.split(" ").join("").toLowerCase() == propiedad) {
                product.brand[propiedad] = 'checked';
            } 
        }
         
       */
        
        /* res.render('admin/editProduct', { product , id }); */

    },
    update: function(req, res){

        // Me paso el ID por url --> form action="/product/detail/<%= product && id %>?_method=PUT" method="POST"

        let id = req.params.id;
        let readProducts = fs.readFileSync(filePath, 'utf-8');
        let products = JSON.parse(readProducts);
        
        // Al producto que me viene del form le añado el id (Como solucionar los cambios de ID cuando se elimina un producto?)

        let productToEdit = req.body;
        productToEdit.id = id;

        // console.log(productToEdit);


        // Updateo el producto ( terminar las propiedades )
        
         let updatedProducts = products.map(function(product){
            if(product.id == productToEdit.id){
                let updatedOneProduct = product;
                updatedOneProduct.name = productToEdit.name;
                updatedOneProduct.price = Number(productToEdit.price);
                //brand
                updatedOneProduct.brand = productToEdit.brand;
                updatedOneProduct.description = productToEdit.description;
                // updatedOneProduct.image = productToEdit.image;  MULTER --> agregar más de una imagen, tiene que llegar como array. No lo puse para que no se quede sin imagen testeando.
                // Corregir gender si elige unisex (Male-Female --> llega como array. En BDJson esta como string)
                updatedOneProduct.gender = productToEdit.gender;
                updatedOneProduct.category = productToEdit.category;
                updatedOneProduct.onSale = Number(productToEdit.onSale);
                //Colores
                let colorArray = [];
                colorArray.push(productToEdit.colors);
                updatedOneProduct.colors = colorArray;
                
                updatedOneProduct.sizes = productToEdit.sizes;
                updatedOneProduct.stock = Number(productToEdit.stock);
                return updatedOneProduct;
            } else{
                return product;
            }
        })   
            
        // escribo el JSON con el nuevo producto editado

        let content = JSON.stringify(updatedProducts, null, " ");
        fs.writeFileSync(filePath, content, 'utf-8'); 

        res.redirect('/admin/product/');

    }
}




module.exports = editProduct;