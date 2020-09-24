const {product, brand, gender, image, category, user, color, size } = require('../../database/models');
const { Op } = require("sequelize");


let searchController = {
    search: async function(req,res){

        let searchQuery = req.query.search;
        console.log(searchQuery);
    try {
        let products = await product.findAll({
            where: { name: 
                { [Op.like] : `%${searchQuery}%` } 
            }, 
            include: [ brand, gender, image, category, color, size ]
         })
         
            return res.render('products/shop', {products});
         
        }   catch(error){
             console.log("Ocurrió un error en la búsqueda");
         };

 



         





        // res.send(searchQuery);
        // res.render('products/shop', {products});
    }


}




module.exports = searchController;
