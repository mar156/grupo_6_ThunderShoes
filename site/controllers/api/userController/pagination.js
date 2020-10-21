const { user, product } = require('../../../database/models');
const { Op } = require("sequelize");

/*

Ruta endpoint ejemplo: 

http://localhost:3000/api/users/?query={"page":"1","perPage":"2","firstName":"mati","lastName":"vie","email":"matit"}

Ruta base: http://localhost:3000/api/users/ (Que devuelve listado completo)

Ruta paginada: http://localhost:3000/api/users/?query={} (JSON query)
    -ruta minima para alcanzar paginado con los siguientes valores por defecto [iniciales]:
        -page: 1
        -perPage: 10
        -firstName: ''
        -lastName: ''
        -email: ''

        
La ruta paginada devuelve un objeto JSON que indica: 
    En meta: 
        -> status: 500 || 404 || 200
        -> msg: (Mensaje de error o exito acorde a cada status)
        -> count: 0 a N cantidad de registros totales encontrados
        -> next
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
                firstName: query.firstName || '',
                lastName: query.lastName || '',
                email: query.email || '',
                url: `http://localhost:3000/api/users/?query=${JSON.stringify(query)}`
            }
        },
        data: {
            users: [
                {
                    id: null,
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: null,
                    address: null,
                    postalCode: null,
                    state: '',
                    city: '',
                    avatar: '',
                    favorites: []
                },
            ]
        }
    };

    let offset = (response.meta.query.page -1) * response.meta.query.perPage;

    user.findAndCountAll({ 
        attributes: [
            'id',
            'first_name', 
            'last_name', 
            'email', 
            'phone',
            'address',
            'password',
            'avatar',
            'city',
            'state',
            'postal_code'
        ],
        where: { 
            first_name: { [Op.substring]: response.meta.query.firstName }, 
            last_name: { [Op.substring]: response.meta.query.lastName }, 
            email: { [Op.substring]: response.meta.query.email }, 
        },
        order: [ 
            ['first_name', 'DESC'], 
            ['last_name', 'DESC'], 
            ['email', 'DESC'] 
        ],
        limit: response.meta.query.perPage,
        offset,
        include: [ product ]
    })
    .then( result => JSON.parse(JSON.stringify(result)) )
    .then( result => {
        if (result.rows.length) {
            response.meta.status = 200;
            response.meta.msg = 'Listado de usuarios paginado obtenido exitosamente';
            response.meta.count = result.rows.length;
            response.meta.totalPages = Math.ceil(response.meta.count / response.meta.query.perPage);

            let currentPage = response.meta.query;
            if ( currentPage.page < response.meta.totalPages ) {
                response.meta.next = {
                    page: currentPage.page + 1,
                    perPage: currentPage.perPage,
                    firstName: currentPage.firstName,
                    lastName: currentPage.lastName,
                    email: currentPage.email,
                };
                response.meta.next.url = `http://localhost:3000/api/users/?query=${JSON.stringify(response.meta.next)}`;
            }
            
            if ( currentPage.page > 1 ) {
                response.meta.prev = {
                    page: currentPage.page - 1,
                    perPage: currentPage.perPage,
                    firstName: currentPage.firstName,
                    lastName: currentPage.lastName,
                    email: currentPage.email
                };
                response.meta.prev.url = `http://localhost:3000/api/users/?query=${JSON.stringify(response.meta.prev)}`;
            }

            response.data.users = result.rows.map(row => {
                let user = {
                    id: row.id,
                    firstName: row.first_name,
                    lastName: row.last_name,
                    email: row.email,
                    phone: row.phone,
                    address: row.address,
                    postalCode: row.postal_code,
                    state: row.state,
                    city: row.city,
                    avatar: `http://localhost:3000/img/users/${row.avatar}`,
                    favorites: row.products.map( fav => {
                        return {
                            id: fav.id,
                            name: fav.name,
                            description: fav.description,
                            url: `http://localhost:3000/api/products/${fav.id}`,
                        }
                    })
                };

                return user;
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