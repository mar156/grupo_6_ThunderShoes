let errors = {};

//Capturar elementos 

const form = document.getElementById('form-register');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

let validateFirstName = function(){
    //console.log(mensaje);
    let feedback = '';
    let feedbackElement = firstName.nextElementSibling;

    if(firstName.value.trim() == '' ){
        feedback = 'El nombre no puede estar vacío';
    }
    else if(firstName.value.trim().length < 3){
        feedback = 'El nombre tiene que tener por lo menos tres caracteres';
    }

    if(feedback){
        firstName.classList.add('error-input');
        errors.firstName = feedback;
    }
    else{
        firstName.classList.remove('error-input');
        //feedbackElement.remove();
        delete errors.firstName;
    }

    feedbackElement.innerText = feedback;
}

let validateLastName = function(){
    let feedback = '';
    let feedbackElement = lastName.nextElementSibling;

    if(lastName.value.trim() == '' ){
        feedback = 'El apellido no puede estar vacío';
    }
    else if(lastName.value.trim().length < 3){
        feedback = 'El apellido tiene que tener por lo menos tres caracteres';
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

let validateEmail = function(){
    let feedback = '';
    let feedbackElement = email.nextElementSibling;

    if(email.value.trim() == '' ){
        feedback = 'El email no puede estar vacío';
    }
    //else if(expresión regular) -

    if(feedback){
        email.classList.add('error-input');
        errors.email = feedback;
    }
    else{
        email.classList.remove('error-input');
        //feedbackElement.remove();
        delete errors.email;
    }

    feedbackElement.innerText = feedback;
}

let validatePhone = function(){
    let feedback = '';
    let feedbackElement = phone.nextElementSibling;

    if(phone.value.trim() == '' ){
        feedback = 'El Teléfono no puede estar vacío';
    }
    else if(phone.value.length != 10){
        feedback = 'El teléfono tiene que tener 10 dígitos';
    }
    //else if(expresión regular para verificar que sólo ingrese numeros ) -

    if(feedback){
        phone.classList.add('error-input');
        errors.phone = feedback;
    }
    else{
        phone.classList.remove('error-input');
        //feedbackElement.remove();
        delete errors.phone;
    }

    feedbackElement.innerText = feedback;
}

let validatePassword = function(){
    let feedback = '';
    let feedbackElement = password.nextElementSibling;

    if(password.value.trim() == '' ){
        feedback = 'El campo contraseña no puede estar vacío';
    }
    else if(password.value.length < 8){
        feedback = 'La contraseña tiene que tener por lo menos 8 caracteres';
    }

    if(feedback){
        password.classList.add('error-input');
        errors.password = feedback;
    }
    else{
        password.classList.remove('error-input');
        //feedbackElement.remove();
        delete errors.password;
    }

    feedbackElement.innerText = feedback;
}

let validatePasswordConfirm = function(){
    let feedback = '';
    let feedbackElement = passwordConfirm.nextElementSibling;

    if(passwordConfirm.value.trim() == '' ){
        feedback = 'El campo contraseña no puede estar vacío';
    }
    else if(passwordConfirm.value.length < 8){
        feedback = 'La contraseña tiene que tener por lo menos 8 caracteres';
    }

    if(feedback){
        passwordConfirm.classList.add('error-input');
        errors.passwordConfirm = feedback;
    }
    else{
        passwordConfirm.classList.remove('error-input');
        //feedbackElement.remove();
        delete errors.passwordConfirm;
    }

    feedbackElement.innerText = feedback;
}


firstName.addEventListener('blur', validateFirstName);
lastName.addEventListener('blur', validateLastName);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);
password.addEventListener('blur', validatePassword);
passwordConfirm.addEventListener('blur', validatePasswordConfirm);

form.addEventListener('submit', function(e){
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePhone();
    validatePassword();
    validatePasswordConfirm();
    if(Object.keys(errors).length){
        e.preventDefault();
    }
})