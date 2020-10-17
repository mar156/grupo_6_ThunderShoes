const { user } = require('../../../database/models');

module.exports = (req, res) => {

    let email = req.params.email;
    let response = {
        meta: {
            status: 500
        },
        data: {
            isAvailable: false
        }
    }

    user.findOne({ 
        attributes: [
            'id',
            'first_name', 
            'last_name', 
            'email', 
        ],
        where: {email},  
    })
    .then( result => {
        response.meta.status = 200;
        if ( !result ) response.data.isAvailable = true;
        return res.json(response);
    })
    .catch( err => {
        res.json(response)
    });
}