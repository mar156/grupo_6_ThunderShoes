const {product, brand, gender } = require('../../../database/models');
const { Op } = require("sequelize");

/*

Ruta endpoint ejemplo: 

http://localhost:3000/api/products/?query={"page":"1","perPage":"2","name":"","description":""}

Ruta base: http://localhost:3000/api/products/ (Que devuelve listado completo)

Ruta paginada: http://localhost:3000/api/products/?query={} (JSON query) 
    -ruta minima para alcanzar paginado con los siguientes valores por defecto [iniciales]:
        -page: 1
        -perPage: 10
        -name: ''
        -desription: ''
        -price: ''

La ruta paginada devuelve un objeto JSON que indica: 
    En meta: 
        -> status: 500 || 404 || 200
        -> msg: (Mensaje de error o exito acorde a cada status)
        -> count: 0 a N cantidad de registros totales encontrados
        -> next: Objeto literal con las propiedades de query y url de la siguiente página. 
    En data: 
*/



module.exports = (req, res) => {
    let query = JSON.parse(req.query.query);

    let response = {
        meta: {
            status: 500,
            msg: 'ocurrió un error inesperado',
            count: 0,
            totalPages: 0,
            next: null,
            prev: null,
            query: {
                page: parseInt(query.page) || 1,
                perPage: parseInt(query.perPage) || 10,
                name: query.name || '',
                description: query.description || '',
                url: `http://localhost:3000/api/products/?query=${JSON.stringify(query)}`
            }
        },
        data: {
            list: [
                {
                    id: null,
                    name: '',
                    description: '',
                    price: null,
                    gender: '',
                    url: '',
                },
            ]
        }
    };

    let offset = (response.meta.query.page -1) * response.meta.query.perPage;

    product.findAndCountAll({ 
        where: { 
            name: { [Op.substring]: response.meta.query.name }, 
            description: { [Op.substring]: response.meta.query.description }, 
        },
        order: [ 
            ['name', 'DESC'], 
        ],
        limit: response.meta.query.perPage,
        offset,
        distinct: true,
        include: [ brand, gender ]
    })
    .then( result => JSON.parse(JSON.stringify(result)) )
    .then( result => {
        if (result.rows.length) {
            response.meta.status = 200;
            response.meta.msg = 'Listado de productos paginado obtenido exitosamente';
            response.meta.count = result.count;
            response.meta.totalPages = Math.ceil(response.meta.count / response.meta.query.perPage);

            let currentPage = response.meta.query;
            if ( currentPage.page < response.meta.totalPages ) {
                response.meta.next = {
                    page: currentPage.page + 1,
                    perPage: currentPage.perPage,
                    name: currentPage.name,
                    description: currentPage.description,
                };
                response.meta.next.url = `http://localhost:3000/api/products/?query=${JSON.stringify(response.meta.next)}`;
            }
            
            if ( currentPage.page > 1 ) {
                response.meta.prev = {
                    page: currentPage.page - 1,
                    perPage: currentPage.perPage,
                    name: currentPage.name,
                    description: currentPage.description,
                };
                response.meta.prev.url = `http://localhost:3000/api/products/?query=${JSON.stringify(response.meta.prev)}`;
            }

            response.data.list = result.rows.map(row => {
                let product = {
                    id: row.id,
                    name: row.name,
                    description: row.description,
                    price: row.price,
                    gender: row.gender.name,
                    url: `http://localhost:3000/api/products/${row.id}`   //Capturar location host y agregar a la url al comienzo
                }
                return product
            });
    
            return res.json(response)
        }

        response.meta.status = 404;
        response.meta.msg = 'Not found';
        res.status(404).json(response)

    })
    .catch( err => {
        console.log(err);
        res.status(500).json(response)
    });
}