const { check } = require('express-validator');
const path = require('path');


module.exports = {
    createForm: [
        check('name')
            .notEmpty().withMessage('El campo no nombre no puede estar vacío').bail()
            .isLength({min: 5 }).withMessage('El campo nombre debe tener al menos 5 caracteres'),

        check('price')
            .notEmpty().withMessage('El precio no puede estar vacío').bail()
            .custom(price => price >= 0).withMessage('El precio debe ser un valor positivo').bail()
            .custom(price => price > 0).withMessage('El precio no puede ser 0'),

        check('on_sale')
            .custom(onSale => onSale >= 0).withMessage('El descuento debe ser un valor positivo'),

        check('description')
            .isLength({min: 20 }).withMessage('El campo descripción debe tener al menos 20 caracteres'),

        check()
            .custom( image => {
                // Ver- no funciona-
                let ext = path.extname(req.file.filename);
                if ( ext.toLowerCase() === 'jpg' || ext.toLowerCase() === 'jpeg' || ext.toLowerCase() === 'png' || ext.toLowerCase() === 'gif' ) {
                    return true
                }
                return false
            })
    ]
}