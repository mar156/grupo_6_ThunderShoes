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
            brand: productToEdit.brand,
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
                red: '',        // de cada producto se obtiene que colors seleccionados posee y se marca en 'checked' para pasar a la vista. 
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
         

        res.render('admin/editProduct', { product , id });

    },
    update: function(req, res){

        // Me paso el ID por url --> form action="/product/detail/<%= product && id %>?_method=PUT" method="POST"

        let id = req.params.id;
        let readProducts = fs.readFileSync(filePath, 'utf-8');
        let products = JSON.parse(readProducts);
        
        // Al producto que me viene del form le añado el id (Como solucionar los cambios de ID cuando se elimina un producto?)

        let productToEdit = req.body;

        productToEdit.id = id;



    }
}




module.exports = editProduct;