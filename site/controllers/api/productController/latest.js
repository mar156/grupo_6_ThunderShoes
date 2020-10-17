const {product, brand, gender, image, category, color, size, sequelize } = require('../../../database/models');

module.exports = (req, res) => {
    let response = {
        meta: {
            status: 500,
            msg: 'ocurrió un error inesperado',
        },
        data: {
            product: {
                id: -1,
                name: '',
                brand: '',
                description: '',
                gender: '',
                discount: -1,
                price: -1,
                images: [],
                categories: [],
                colors: [],
                sizes: []
            },
        }
    }

    product.findOne({ 
        order: [
            ['id', 'DESC']
        ],
        include: [ brand, gender, image, category, color, size ]
    })
    .then( result => JSON.parse(JSON.stringify(result)))
    .then( result => {
        response.meta.status = 200;
        response.meta.msg = 'última zapatilla encontrada exitosamente';

        response.data.product.id = result.id;
        response.data.product.name = result.name;
        response.data.product.description = result.description;
        response.data.product.price = result.price;
        response.data.product.discount = result.on_sale;
        response.data.product.brand = result.brand.name;
        response.data.product.gender = result.gender.name;
        response.data.product.images = result.images.map( image => `/img/${image.file_name}` );
        response.data.product.categories = result.categories.map( category => category.name );
        response.data.product.colors = result.colors.map( color => color.code );
        response.data.product.sizes = result.sizes.map( size => size.size );
        res.json(response)
    })
    .catch( err => {
        console.log(err);
        res.status(500).json(response)
    });
}