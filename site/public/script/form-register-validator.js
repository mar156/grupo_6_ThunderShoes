let errors = {};

// Regex
const startWithLetter = /^[A-z]+/;
const isValidPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-])[A-Za-z][A-Za-z\d!@#$%^&*()_+]{7,}$/;

//Capturar elementos 
const form = document.getElementById('form-register');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const file = document.getElementById('file');

let fieldIsEmpty = function(field){
    if(field.value.trim() == '' ){
        return 'Este campo no puede estar vacío';
    }
    else{
        return '';
    }
}

let fieldMin = function(field, min){
    if(field.value.trim().length < min){
        return `Este campo tiene que tener por lo menos ${min} caracteres`;
    }
    else{
        return '';
    }
}

let fieldRegex = function(field, regex, message){
    if(!regex){//Si contiene números o caracteres raros
        return message;
    }
    else{
        return '';
    }
}

const fileExtValidate = function (path, msg, values ) {
    let pathExt = path.split('.')[path.split('.').length - 1 ];

    return values.some(value => value === pathExt) ? '' : msg;
}

const isEmailAvailable = function (email) {
    let host = window.location.href.replace('users/register', 'api/users/isEmailAvailable/');
    return new Promise(resolve => {
        fetch(host + email)
        .then(response => response.json())
        .then(data => {
            if (data.data.isAvailable) resolve (true)
            resolve (false)
        })
        .catch( err => {
            console.log(err);
            throw (err)
        });
    });
}

// /api/users/isEmailAvailable/

const areSameValues = (value1, value2, msg) => value1 == value2 ? '' : msg ;

let validateFirstName = function(){
    let feedback = '';
    let feedbackElement = firstName.nextElementSibling;
    let regex = /^[A-zÁÉÍÓÚáéíóúñNüÜöÖËë\- ']+$/.test(firstName.value);
    let message = 'El nombre no puede contener números, "," o ";"';

    if(fieldIsEmpty(firstName)){
        feedback = fieldIsEmpty(firstName);
    }
    else if(fieldMin(firstName, 3)){
        feedback = fieldMin(firstName, 3);
    }
    else if(fieldRegex(firstName, regex, message)){
        feedback = fieldRegex(firstName, regex, message);
    }

    if(feedback){
        firstName.classList.add('error-input');
        errors.firstName = feedback;
    }
    else{
        firstName.classList.remove('error-input');
        delete errors.firstName;
    }

    feedbackElement.innerText = feedback;
}

let validateLastName = function(){
    let feedback = '';
    let feedbackElement = lastName.nextElementSibling;
    let regex =  /^[A-zÁÉÍÓÚáéíóúñNüÜöÖËë\- ']+$/.test(lastName.value);
    let message = 'El nombre no puede contener números, "," o ";"';
    if(fieldIsEmpty(lastName)){
        feedback = fieldIsEmpty(lastName);
    }
    else if(fieldMin(lastName, 3)){
        feedback = fieldMin(lastName, 3);
    }
    else if(fieldRegex(lastName, regex, message)){
        feedback = fieldRegex(lastName, regex, message);
    }

    if(feedback){
        lastName.classList.add('error-input');
        errors.lastName = feedback;
    }
    else{
        lastName.classList.remove('error-input');
        //feedbackElement.remove();
        delete errors.lastName;
    }

    feedbackElement.innerText = feedback;
}

let validateEmail = async function(){
    let feedback = '';
    let feedbackElement = email.nextElementSibling;
    let emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(fieldIsEmpty(email)){
        feedback = fieldIsEmpty(email);
    } else if ( !emailRegEx.test(email.value) ) {
        feedback = 'Debe ingresar un email valido';
    } else if ( !(await isEmailAvailable(email.value)) ) {
        feedback = 'El email ingresado ya existe';
    }
    

    if(feedback){
        email.classList.add('error-input');
        errors.email = feedback;
    }
    else{
        email.classList.remove('error-input');
        delete errors.email;
    }

    feedbackElement.innerText = feedback;
}

let validatePhone = function(){
    let feedback = '';
    let feedbackElement = phone.nextElementSibling;
    let regex = /[0-9]{10}$/.test(phone.value);
    let message = "Ingrese sólo números";

    if(fieldIsEmpty(phone)){
        feedback = fieldIsEmpty(phone);
    }
    else if(phone.value.length != 10){
        feedback = 'El teléfono tiene que tener 10 dígitos';
    }
    else if(fieldRegex(regex, message)){
        feedback = fieldRegex(regex, message);
    }

    if(feedback){
        phone.classList.add('error-input');
        errors.phone = feedback;
    }
    else{
        phone.classList.remove('error-input');
        delete errors.phone;
    }

    feedbackElement.innerText = feedback;
}

let validateFileName = function () {
    let validExt = [ 'jpg', 'jpeg', 'png'];
    let errorMsg = 'Solo se permite formato .png, .jpg y .jpeg';
    let feedback = !!file.value ? fileExtValidate( file.value, errorMsg, validExt ) : '';
    let feedbackElement = file.nextElementSibling;
    if (!!feedback) {
        file.classList.add('error-input');
        errors.file = feedback;
    } else {
        file.classList.remove('error-input');
        delete errors.file;
    }

    feedbackElement.innerText = feedback;
}

let validatePassword = function(){
    let feedback = '';
    let feedbackElement = password.nextElementSibling;

    if(fieldIsEmpty(password)){
        feedback = fieldIsEmpty(password);
    } else if ( fieldMin(password, 8) ) {
        feedback = fieldMin(password, 8);
    } else if ( !startWithLetter.test(password.value) ) {
        feedback = 'La contraseña debe comenzar con letra/s';
    } else if ( !isValidPwd.test(password.value) ){
        feedback = 'La contraseña debe incluir mayúscula, minúscula, número y caracter especial';
    }
    
    if(feedback){
        password.classList.add('error-input');
        errors.password = feedback;
    }
    else{
        password.classList.remove('error-input');
        delete errors.password;
    }

    feedbackElement.innerText = feedback;
}

let validatePasswordConfirm = function() {
    let feedback = '';
    let feedbackElement = passwordConfirm.nextElementSibling;

    if(fieldIsEmpty(passwordConfirm)){
        feedback = fieldIsEmpty(passwordConfirm);
    } else if ( fieldMin(passwordConfirm, 8) ) {
        feedback = fieldMin(passwordConfirm, 8);
    } else if ( !startWithLetter.test(passwordConfirm.value) ) {
        feedback = 'La contraseña debe comenzar con letra/s';
    } else if ( !isValidPwd.test(passwordConfirm.value) ){
        feedback = 'La contraseña debe incluir mayúscula, minúscula, número y caracter especial';
    } else if( areSameValues(password.value, passwordConfirm.value, 'Las contraseñas ingresadas no coinciden') ) {
        feedback = areSameValues(password.value, passwordConfirm.value, 'Las contraseñas ingresadas no coinciden');
    }

    if(feedback) {
        passwordConfirm.classList.add('error-input');
        errors.passwordConfirm = feedback;
    } else {
        passwordConfirm.classList.remove('error-input');
        delete errors.passwordConfirm;
    }

    feedbackElement.innerText = feedback;
}

firstName.addEventListener('blur', validateFirstName)
lastName.addEventListener('blur', validateLastName);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);
password.addEventListener('blur', validatePassword);
password.addEventListener('keyup', validatePassword);
passwordConfirm.addEventListener('blur', validatePasswordConfirm);
passwordConfirm.addEventListener('keyup', validatePasswordConfirm);
file.addEventListener('change', validateFileName);

form.addEventListener('submit', function(e){
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePhone();
    validatePassword();
    validatePasswordConfirm();
    validateFileName();
    if(Object.keys(errors).length){
        e.preventDefault();
    }
})