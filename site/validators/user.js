const { check } = require('express-validator');
const path = require('path');

module.exports = {
    register: [
        check('first_name')
            .notEmpty().withMessage('Debe ingresar un nombre').bail()
            .isLength({min: 3 }).withMessage('El campo nombre debe tener al menos 3 caracteres'),
        check('last_name')
            .notEmpty().withMessage('Debe ingresar su apellido').bail()
            .isLength({min: 3}).withMessage('El campo apellido debe tener al menos 3 caracteres'),
        check('email')
            .notEmpty({ignore_whitespace:true }).withMessage('Debe ingresar un email').bail()
            .isEmail().withMessage('Debe ingresar un email válido'),
        check('phone')
            .notEmpty({ignore_whitespace:true }).withMessage('Debe ingresar un teléfono').bail()
            .isNumeric().withMessage('Debe ingresar sólo números')
            .isLength({min:10}).withMessage('Debe ingresar un número válido'),
        /*check('avatar')
            .custom( image => {           
                let isExtValid = true;
                if (!(image.mimetype == "image/png" || image.mimetype == "image/jpg" || image.mimetype == "image/jpeg")){
                    isExtValid = false;
                }
                return isExtValid;
            }).withMessage("Solo se permite formato .png, .jpg y .jpeg").bail()
            .custom( image => {
                if(image.length != 1){ 
                    return false;
                }
                return true;
            }).withMessage("Se debe subir una imagen"),*/
        check('password')
            .notEmpty({ignore_whitespace:true }).withMessage('Debe ingresar una contraseña')
            .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
        check('passwordConfirm')
            .notEmpty({ignore_whitespace:true }).withMessage('Debe ingresar una contraseña')
            .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
    ],
    login: [
        check('user')
           .notEmpty().withMessage('Debe ingresar con su email de registro').bail(),
        check('password')
           .notEmpty().withMessage('Debes ingresar con su contraseña de registro').bail()
    ]
}