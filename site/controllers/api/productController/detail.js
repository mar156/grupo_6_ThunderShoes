
const {product, brand, gender, image, category, color, size } = require('../../../database/models');

module.exports = (req, res) => {
    let id = Number(req.params.id);
    product.findByPk(id,{ include: [ brand, gender, image, category, color, size ]} )
        .then((product)=>{

            // All product images
      /*       let allProductImages = [];
            product.images.forEach(image => {
                allProductImages.push(image.file_name);
            }); */

            // 1st image of product
            let firstImage = product.images[0].file_name;

            // Categories
            let allProductCategories = [];
            product.categories.forEach(category => {
                allProductCategories.push(category.name);
            });


            // Colors
            let allProductColors = [];
            product.colors.forEach(color => {
                allProductColors.push(color.code);
            });


            // Sizes
            let allProductSizes = [];
            product.sizes.forEach(size => {
                allProductSizes.push(size.size);
            });



            let response = {
               meta: {
                    status: 200
               },
               data:{
                    name: product.name,
                    description: product.description,
                    on_sale: product.on_sale,
                    price: product.price,
                    brand: product.brand.name,
                    gender: product.gender.name,
                    url_image: `http://localhost:3000/img/${firstImage}`,
                    category: allProductCategories,
                    colors: allProductColors,
                    size: allProductSizes
                }
            }
            res.json(response) 
        })
        .catch(error=>{
            res.status(404).send('Página no encontrada - Vista error 404 pendiente de construir')
        });

}