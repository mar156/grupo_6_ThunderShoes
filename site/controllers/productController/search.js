const {product, brand, gender, image, category, user, color, size } = require('../../database/models');
const { Op } = require("sequelize");


let searchController = {
    search: async function(req,res){

        let searchQuery = req.query.search;
        
    try {
        let products = await product.findAll({
            where: { name: 
                { [Op.like] : `%${searchQuery}%` } 
            }, 
            include: [ brand, gender, image, category, color, size ]
         })
         
            return res.render('products/shop', {products});
         
        }   catch(error){
             console.log(error);
         };

    }


}




module.exports = searchController;
