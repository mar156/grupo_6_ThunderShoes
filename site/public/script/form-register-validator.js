//Capturar elementos 

const user = require("../../validators/user");

const form = document.getElementById('form-register');
const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');

//Eventos

form.addEventListener('submit', function(e){
    let hasError = {
        firstName: userNameValidator(),
        lastName: userLastNameValidator(),
        email: userEmailValidator(),
        phone: userPhoneValidator(),
        password: userPasswordValidator(),
        passwordConfirm: userPasswordConfirmValidator()
    }
    if(hasError.firstName || hasError.lastName || hasError.email || hasError.phone || hasError.password || hasError.passwordConfirm) 
    e.preventDefault();
    
});
firstName.addEventListener('blur', userNameValidator);
lastName.addEventListener('blur', userLastNameValidator);
email.addEventListener('blur', userEmailValidator);
phone.addEventListener('blur', userPhoneValidator);
password.addEventListener('blur', userPasswordValidator);
passwordConfirm.addEventListener('blur', userPasswordConfirmValidator);
//inputImage.addEventListener('change', imageValidator);

// Funciones 
writeMsg = ( ...arrToWrite ) => {
    arrToWrite.forEach( elemToWrite => {
        document.getElementById(elemToWrite.id).innerText = elemToWrite.msg;
    });
}

function userNameValidator(){
    let id = 'name_error';
    if (!firstName.value) {
        writeMsg( { id, msg: 'El nombre no puede estar vacío' } );
        firstName.classList.add('error-input');
        return true
    } else if (first_name.value.length < 3) {
        writeMsg( { id, msg: 'El nombre debe tener almenos 3 caracteres' } );
        firstName.classList.add('error-input');
        return true
    }
    writeMsg( { id, msg: '' } );
    firstName.classList.remove('error-input');
    return false
}