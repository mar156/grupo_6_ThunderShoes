let product = {
    nombre: 'Nombre de producto 5',
    precio: 4250,
    descripcion: 'Nuestro clásico zapato de 3 ojales. 1461 El segundo estilo creado por Dr. Martens, hecho para el trabajo duro pero adoptado por generaciones de inconformistas. Esta versión es cruda, resistente y tiene un look desgastado desde el primer paso. Estos zapatos están hechos de cuero Ambassador, el cual conserva sus características y marcas naturales para envejecer de forma única.',
    colores: {                  // la lista de colores se carga desde BD/FileJson y se genera el listado de la propiedad colores, 
        rojo: 'checked',        // de cada producto se obtiene que colores seleccionados posee y se marca en 'checked' para pasar a la vista. 
        verde: '',              // Idem 'Talles' y 'Categorías'.
        negro: '',
        azul: 'checked',
        amarillo: '',
        gris: 'checked'
    },
    talles: {
        t35: 'checked',
        t36: 'checked',
        t37: '',
        t38: '',
        t39: '',
        t40: 'checked'
    },
    imagenes: [
        'file1.jpg',
        'file2.jpg'
    ],
    categorias: {
        hombre: 'checked',
        mujer: '',
        tennis: 'checked',
        running: '',
        volley: 'checked',
        football: ''
    }
};
const destroyProduct = require("./adminController/delete");
const listProduct = require("./adminController/index");
const editProduct = require("./adminController/edit");
const createProducts= require("./adminController/create");

const controller = {
    listProduct: listProduct,
    createProduct: (req, res)=>{
        res.render('admin/createProduct');
    },
    addProduct: createProducts.addProduct,
    // storeProduct: ,
    editProduct: editProduct.edit,
        // leer el archivo y crear un array. 
        // buscar id. si lo encontras lo separas.
        // al obj producto lo completas con todos los datos incluido ID
       

    update: editProduct.update,
    destroyProduct: destroyProduct
}

module.exports = controller;