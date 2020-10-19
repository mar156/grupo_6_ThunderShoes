const { user, product } = require('../../../database/models');

module.exports = (req, res) => {
    let response = {
        meta: {
            status: 500,
            msg: 'ocurrió un error inesperado',
        },
        data: {
            user: {
                id: -1,
                firstName: '',
                lastName: '',
                email: '',
                phone: -1,
                address: -1,
                postalCode: -1,
                state: '',
                city: '',
                avatar: '',
                favorites: []
            },
        }
    }

    user.findOne({ 
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
        order: [
            ['id', 'DESC']
        ],
        include: [ product ]
    })
    .then( result => JSON.parse(JSON.stringify(result)))
    .then( result => {
        response.meta.status = 200;
        response.meta.msg = 'último usuario obtenido exitosamente';
        console.log(result);

        response.data.user.id = result.id;
        response.data.user.firstName = result.first_name;
        response.data.user.lastName = result.last_name;
        response.data.user.email = result.email;
        response.data.user.phone = result.phone;
        response.data.user.address = result.address;
        response.data.user.postalCode = result.postal_code;
        response.data.user.state = result.state;
        response.data.user.city = result.city;
        response.data.user.avatar = `http://localhost:3000/img/users/${result.avatar}`;
        response.data.user.favorites = result.products.map( fav => {
            return {
                id: fav.id,
                name: fav.name,
                description: fav.description,
                url: `http://localhost:3000/api/products/${fav.id}`,
            }
        });
        res.json(response)
    })
    .catch( err => {
        console.log(err);
        res.status(500).json(response)
    });
}