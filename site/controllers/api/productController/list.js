const {product, brand, gender, image, category, color, size } = require('../../../database/models');

module.exports = (req, res) => {

    let response = {
        meta: {
            status: 500,
            msg: '',
        },
        data: {
            count: 0,
            countByBrand: {},
            products: [],
            countByCategory: {},
            countByGender: {},
            countByColor: {},
            countBySize: {},
        }
    }

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
        let categories = result[2];
        let genders = result[3];
        let colors = result[4];
        let sizes = result[5];
        
        brands.forEach(brand => {
            response.data.countByBrand[brand.name] = 0;
        });
        categories.forEach( category => {
            response.data.countByCategory[category.name] = 0;
        });
        genders.forEach( gender => {
            response.data.countByGender[gender.name] = 0;
        });
        colors.forEach( color => {
            response.data.countByColor[color.code] = 0;
        });
        sizes.forEach( size => {
            response.data.countBySize[size.size] = 0;
        });

        response.data.countByBrand.totalBrands = brands.length;
        response.data.countByCategory.totalCategories = categories.length;
        response.data.countByGender.totalGenders = genders.length;
        response.data.countByColor.totalColors = colors.length;
        response.data.countBySize.totalSizes = sizes.length;
        response.data.count = products.rows.length;

        response.data.products = products.rows.map( row => {
            response.data.countByBrand[row.brand.name]++;
            response.data.countByGender[row.gender.name]++;
            row.categories.forEach( category => response.data.countByCategory[category.dataValues.name]++);
            row.colors.forEach( color => response.data.countByColor[color.dataValues.code]++);
            row.sizes.forEach( size => response.data.countBySize[size.dataValues.size]++);

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