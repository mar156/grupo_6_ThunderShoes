const { check } = require('express-validator');
const path = require('path');


module.exports = {
    formProduct: [
        check('name')
            .notEmpty().withMessage('El campo nombre no puede estar vacío').bail()
            .isLength({min: 5 }).withMessage('El campo nombre debe tener al menos 5 caracteres'),

        check('price')
            .notEmpty().withMessage('El precio no puede estar vacío').bail()
            .custom(price => price >= 0).withMessage('El precio debe ser un valor positivo').bail()
            .custom(price => price > 0).withMessage('El precio no puede ser 0'),

        check('on_sale')
            .custom(onSale => onSale >= 0).withMessage('El descuento debe ser un valor positivo'),

        check('description')
            .isLength({min: 20 }).withMessage('El campo descripción debe tener al menos 20 caracteres'),

        check("image")
            .custom( images => {           
              let isExtValid = true;
                images.forEach(image => {
                  if (!(image.mimetype == "image/png" || image.mimetype == "image/jpg" || image.mimetype == "image/jpeg" || image.mimetype == "image/gif")){
                    isExtValid = false;
                  }
                });
                return isExtValid;
            }).withMessage("Solo se permite formato .gif, .png, .jpg y .jpeg").bail()
            .custom( images => {
              if(images.length < 4){
                return false;
              }
                return true;
            }).withMessage("Se deben subir 4 imágenes"),

        check("gender")
            .isIn([1,2,3]).withMessage("Debes seleccionar uno de los géneros"),

        check("brand")
            .isIn([1,2,3,4]).withMessage("Debes seleccionar una de las marcas disponibles"),

        check("category")
            .isIn([1,2,3,4,5]).withMessage("Debes seleccionar una de las categorías disponibles"),

        check("colors")
            .isIn([1,2,3,4,5,6,7]).withMessage("Debes seleccionar uno de los colores disponibles"),

        check("sizes")
            .isIn([1,2,3,4,5,6]).withMessage("Debes seleccionar uno de los talles disponibles"),          

        ]
    }



               






