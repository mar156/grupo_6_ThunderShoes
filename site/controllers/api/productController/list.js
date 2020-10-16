const {product, brand, gender, image, category, color, size } = require('../../../database/models');

module.exports = (req, res) => {

    let response = {
        meta: {
            status: 500,
            msg: '',
        },
        data: {
            count: 0,
            countByBrands: {},
            products: []
        }
    }
    // Pendiente: Incluir categorías, colores y talles, en el resumen de cantidad
    let promises = [
        product.findAndCountAll( {include: [ brand, gender, image, category, color, size ]} ),
        brand.findAll(),
        category.findAll(),
        gender.findAll(),
        color.findAll(),
        size.findAll(),
    ];
    Promise.all( promises )
    .then( result => {
        let products = result[0];
        let brands = result[1];
        brands.forEach(brand => {
            response.data.countByBrands[brand.name] = 0;
        });
        response.data.countByBrands.totalBrands = brands.length;
        response.data.count = products.rows.length;
        response.data.products = products.rows.map( row => {
            response.data.countByBrands[row.brand.name]++;
            let product = {
                id: row.id,
                name: row.name,
                description: row.description,
                categories: row.categories.map(cat => cat.name),
                url: `http://localhost:3000/api/products/${row.id}`   //Capturar location host y agregar a la url al comienzo
            }
            return product
        });
        response.meta.status = 200;
        response.meta.msg = 'Listado de productos obtenido exitsamente';
        return res.json(response);
    })
    .catch( err => {
        response.meta.msg = 'Error inesperado al obtener listado de productos';
        console.log(err);
        return res.status(500).json(response);
    });
}