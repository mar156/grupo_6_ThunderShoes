const path = require ('path')
const fs = require('fs');
const filePath =  path.join(__dirname, '../../data/products.json');


const editProduct = {
    edit: function(req, res){
        let id = req.params.id;
        let readProducts = fs.readFileSync(filePath, 'utf-8');
        let products = JSON.parse(readProducts);
        let productToEdit = products.find(function(product){
            return product.id == id;
        });

        

        let product = {
            name: productToEdit.name,
            price: productToEdit.price,
            description: productToEdit.description,
            gender: {
                male:'',
                female: ''
            },
            colors: {                  // la lista de colors se carga desde BD/FileJson y se genera el listado de la propiedad colors, 
                red: '',        // de cada producto se obtiene que colors seleccionados posee y se marca en 'checked' para pasar a la vista. 
                green: '',              // Idem 'Talles' y 'Categorías'.
                black: '',
                blue: '',
                yellow: '',
                gray: ''
            },
            sizes: {
                t35: '',
                t36: '',
                t37: '',
                t38: '',
                t39: '',
                t40: ''
            },
            images: [
                'file1.jpg',
                'file2.jpg'
            ],
            category: {
                tennis: '',
                running: '',
                volley: '',
                football: '',
                collection: ''
            }
        };
 
        // Colores

        productToEdit.colors.forEach(function(color){
            for (const propiedad in product.colors) {
                if (color == propiedad) {
                    product.colors[propiedad] = 'checked';
                } 
            }
        }); 

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
         


        



            
            
 /*            for (const propiedad in product.colores) {

                productToEdit.colors.forEach(function(color){
                    
                if (color == propiedad) {
                    
                    product.colores[propiedad] = 'checked';
                
                } else{

                    product.colores[propiedad] = '';

                }
            })
            } */



        res.render('admin/editProduct', { product , id });

    },
    update: function(req, res){





    }
}




module.exports = editProduct;