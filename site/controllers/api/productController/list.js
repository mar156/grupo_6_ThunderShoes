const path = require ('path')

const {product, brand, gender, image, category, user, color, size } = require('../../../database/models');

module.exports = (req, res) => {

    let response = {
        status: 'error',
        msg: '',
        count: 0,
        countByBrands: {},
        products: []
    }

    let findAndCountAllProducts = product.findAndCountAll( {include: [ brand, gender, image, category, color, size ]} );
    let findAndCountAllbrand = brand.findAndCountAll();
    Promise.all( [findAndCountAllProducts, findAndCountAllbrand] )
    .then( result => {
        let products = result[0];
        let brands = result[1];
        brands.rows.forEach(brand => {
            response.countByBrands[brand.name] = 0;
        });
        response.count = products.rows.length;
        response.products = products.rows.map( row => {
            response.countByBrands[row.brand.name]++;
            let product = {
                id: row.id,
                name: row.name,
                description: row.description,
                categories: row.categories.map(cat => cat.name),
                url: `http://localhost:3000/api/products/${row.id}`   //Capturar location host y agregar a la url al comienzo
            }
            return product
        });
        response.status = 'ok';
        response.msg = 'Listado de productos obtenido exitsamente';
        return res.json(response);
    })
    .catch( err => {
        response.msg = 'Error inesperado al obtener listado de productos';
        console.log(err);
        return res.json(response);
    });
}