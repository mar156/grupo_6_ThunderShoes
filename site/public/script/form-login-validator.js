let errors = {};

let form = document.getElementById('form-login');

const user = document.getElementById('user');
const password = document.getElementById('password');


let validateEmail = function(){
    let feedback = '';
    let feedbackElement = user.nextElementSibling;

    if(user.value.trim() == '' ){
        feedback = 'El email no puede estar vacío';
    }
    //else if(expresión regular) -

    if(feedback){
        user.classList.add('error-input');
        errors.user = feedback;
    }
    else{
        user.classList.remove('error-input');
        //feedbackElement.remove();
        delete errors.user;
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

user.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);

form.addEventListener('submit', function(e){
    validateEmail();
    validatePassword();
    if(Object.keys(errors).length){
        e.preventDefault();
    }
})