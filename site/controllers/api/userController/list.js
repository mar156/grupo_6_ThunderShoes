const { user } = require('../../../database/models');

module.exports = (req, res) => {
    user.findAll( { attributes:['id', 'first_name', 'last_name', 'email']} )
        .then(users=>{
            if(users.length){
                
                let response = {
                    meta: {
                        status: 200,
                        count: users.length
                    },
                    data: []
                }
                users.forEach(user => {
                    response.data.push({
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        detail: `/api/users/${user.id}`
                    })
                });

                return res.json(response);
            }
            else{
                return res.status(404).json( {error: 'No results found'} );
            }
        })
        .catch(error=>{
            return res.status(500).json( { error: 'Could not connect to database' } );;
        })       
}