const {user} = require('../../../database/models');

module.exports = (req, res) => {
    let id = Number(req.params.id); 
    user.findByPk(id,{attributes:['first_name', 'last_name', 'email', 'phone', 'address', 'postal_code', 'state', 'city']})
    .then(result => {
    
    if(result){ 

    let response = {
        meta: {
            status: 200
        },
        data: {
            id : result.id,
            first_Name : result.first_Name,
            last_Name : result.last_Name,
            email : result.email,
            phone: result.phone,
            address: result.address,
            postal_code: result.postal_code,
            state : result.state,
            city : result.city

        }
    }
    return res.json(response)
    }    else {
                res.status(404).json({
                    meta : {
                        status : 404,
                        statusMsg : "User not found"
                    },
                    data : []
                });
            }

        })
        .catch(error => {
            res.status(500).json({
                meta : {
                    status : 500,
                    statusMsg : "Internal server error"
                },
                data : []
            });
        });
}

