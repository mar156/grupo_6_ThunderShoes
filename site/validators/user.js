const { check } = require('express-validator');
const path = require('path');
const { stringify } = require('querystring');

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
        check('avatar')
            .custom( image => {
                if (image) return (image.mimetype == "image/png" || image.mimetype == "image/jpg" || image.mimetype == "image/jpeg");
                return true
            }).withMessage("Solo se permite formato .png, .jpg y .jpeg"),
        check('password')
            .notEmpty({ignore_whitespace:true }).withMessage('Debe ingresar una contraseña').bail()
            .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres').bail()
            .custom( value => {
                let pwdRegEx = /^[A-z]+/;
                return pwdRegEx.test(value);
            }).withMessage('La contraseña debe comenzar con una letra').bail()
            .custom( value => {
                let pwdRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-])[A-Za-z][A-Za-z\d!@#$%^&*()_+]{7,}$/;
                return pwdRegEx.test(value);
            }).withMessage('La contraseña debe incluir mayúscula, minúscula, número y caracter especial'),
            
        check('passwordConfirm')
            .notEmpty({ignore_whitespace:true }).withMessage('Debe ingresar una contraseña').bail()
            .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres').bail()
            .custom( value => {
                let pwdRegEx = /^[A-z]+/;
                return pwdRegEx.test(value);
            }).withMessage('La contraseña debe comenzar con una letra').bail()
            .custom( value => {
                let pwdRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-])[A-Za-z][A-Za-z\d!@#$%^&*()_+]{7,}$/;
                return pwdRegEx.test(value);
            }).withMessage('La contraseña debe incluir mayúscula, minúscula, número y caracter especial'),
    ],
    login: [
        check('user')
           .notEmpty().withMessage('Debe ingresar con su email de registro').bail(),
        check('password')
           .notEmpty().withMessage('Debes ingresar con su contraseña de registro').bail()
    ],
    profile: [
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
        check('avatar')
            .custom( image => {
                if (image) return (image.mimetype == "image/png" || image.mimetype == "image/jpg" || image.mimetype == "image/jpeg");
                return true
            }).withMessage("Solo se permite formato .png, .jpg y .jpeg"),
        check('password')
            .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres').bail()
            .custom( value => {
                let pwdRegEx = /^[A-z]+/;
                return pwdRegEx.test(value);
            }).withMessage('La contraseña debe comenzar con una letra').bail()
            .custom( value => {
                let pwdRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-])[A-Za-z][A-Za-z\d!@#$%^&*()_+]{7,}$/;
                return pwdRegEx.test(value);
            }).withMessage('La contraseña debe incluir mayúscula, minúscula, número y caracter especial'),
        check('passwordConfirm')
            .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres').bail()
            .custom( value => {
                let pwdRegEx = /^[A-z]+/;
                return pwdRegEx.test(value);
            }).withMessage('La contraseña debe comenzar con una letra').bail()
            .custom( value => {
                let pwdRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-])[A-Za-z][A-Za-z\d!@#$%^&*()_+]{7,}$/;
                return pwdRegEx.test(value);
            }).withMessage('La contraseña debe incluir mayúscula, minúscula, número y caracter especial'),
    ]
}