let product = {
    nombre: 'Nombre de producto 5',
    precio: 4250,
    descripcion: 'Nuestro clásico zapato de 3 ojales. 1461 El segundo estilo creado por Dr. Martens, hecho para el trabajo duro pero adoptado por generaciones de inconformistas. Esta versión es cruda, resistente y tiene un look desgastado desde el primer paso. Estos zapatos están hechos de cuero Ambassador, el cual conserva sus características y marcas naturales para envejecer de forma única.',
    colores: {
        rojo: 'checked',
        verde: '',
        negro: '',
    },
    talles: [
        7,
        7.5,
        8
    ],
    imagenes: [
        'file1.jpg',
        'file2.jpg'
    ],
    categorias: {
        hombre: 'checked',
        mujer: '',
        tennis: 'checked',
        
    }
};

const controller = {
    createProduct: (req, res)=>{
        res.render('admin/createProduct');
    },
    editProduct: (req, res) => {
        product.id = req.params.id;
        res.render('admin/editProduct', { product });
    }
}

module.exports = controller;