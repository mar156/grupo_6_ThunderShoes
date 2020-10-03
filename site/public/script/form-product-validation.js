// Capturar elementos

const form = document.getElementById('product');
const inputName = document.getElementById('name');
const inputPrice = document.getElementById('price');
const inputOnSale = document.getElementById('on_sale');
const inputDescription = document.getElementById('description');
const inputImage = document.getElementById('image');
const genderElements = document.getElementsByName('gender');
const brandElements = document.getElementsByName('brand');
const categoryElements = document.getElementsByName('category');
const colorElements = document.getElementsByName('colors');
const sizeElements = document.getElementsByName('sizes');

// Eventos
form.addEventListener('submit', function (e) {
    let hasErrors = { 
        gender: true,
        brand: true,
        category: true,
        color: true,
        size: true,
        name: nameValidator(),
        price: priceValidator(),
        onSale: onSaleValidator(),
        description: descriptionValidator(),
        image: imageValidator()
    };
    
    // Hay errores hasta que se demuestre lo contrario.
    genderElements.forEach(genderElement => { hasErrors.gender = genderElement.checked ? false : hasErrors.gender });
    brandElements.forEach(brandElement => { hasErrors.brand = brandElement.checked ? false : hasErrors.brand });
    categoryElements.forEach(categoryElement => { hasErrors.category = categoryElement.checked ? false : hasErrors.category });
    colorElements.forEach(colorElement => { hasErrors.color = colorElement.checked ? false : hasErrors.color });
    sizeElements.forEach(sizeElement => { hasErrors.size = sizeElement.checked ? false : hasErrors.size });

    if ( hasErrors.gender || hasErrors.brand || hasErrors.category || hasErrors.color || hasErrors.size || 
        hasErrors.name || hasErrors.price || hasErrors.onSale || hasErrors.description || hasErrors.image 
    ) e.preventDefault();

    document.getElementById('gender_error').innerText = hasErrors.gender ? 'Debe seleccionar un genero': '';
    document.getElementById('brand_error').innerText = hasErrors.brand ? 'Debe seleccionar una marca': '';
    document.getElementById('category_error').innerText = hasErrors.category ? 'Debe seleccionar almenos una categoría' : '';
    document.getElementById('color_error').innerText = hasErrors.color ? 'Debe seleccionar almenos un color' : '';
    document.getElementById('size_error').innerText = hasErrors.size ? 'Debe seleccionar almenos un talle' : '';

});

inputName.addEventListener('blur', nameValidator);
inputPrice.addEventListener('blur', priceValidator);
inputOnSale.addEventListener('blur', onSaleValidator);
inputDescription.addEventListener('blur', descriptionValidator);
inputImage.addEventListener('change', imageValidator);


// Funciones 
writeMsg = ( ...arrToWrite ) => {
    arrToWrite.forEach( elemToWrite => {
        document.getElementById(elemToWrite.id).innerText = elemToWrite.msg;
    });
}

function nameValidator () {
    let id = 'name_error';
    if (!inputName.value) {
        writeMsg( { id, msg: 'El nombre no puede estar vacío' } );
        inputName.classList.add('error-input');
        return true
    } else if (inputName.value.length < 5) {
        writeMsg( { id, msg: 'El nombre debe tener almenos 5 caracteres' } );
        inputName.classList.add('error-input');
        return true
    }
    writeMsg( { id, msg: '' } );
    inputName.classList.remove('error-input');
    return false
}


function priceValidator () {
    let id = 'price_error';
    if (!inputPrice.value) {
        writeMsg( { id, msg: 'El precio no puede estar vacío' } );
        inputPrice.classList.add('error-input');
        return true
    } else if (inputPrice.value <= 0) {
        writeMsg( { id, msg: 'El precio debe ser mayor a 0' } );
        inputPrice.classList.add('error-input');
        return true
    }
    writeMsg( { id, msg: '' } );
    inputPrice.classList.remove('error-input');
    return false
}

function onSaleValidator () {
    let id = 'on_sale_error';
    if (inputOnSale.value && inputOnSale.value < 0) {
        writeMsg( { id, msg: 'El descuento no puede ser negativo' } ) ;
        inputOnSale.classList.add('error-input');
        return true
    } else if (inputOnSale.value >= 0 || !inputOnSale.value) {
        writeMsg( { id, msg: '' } );
        inputOnSale.classList.remove('error-input');
        return false
    }
}

function descriptionValidator () {
    let id = 'description_error';
    if (inputDescription.value.length < 20) {
        writeMsg( { id, msg: 'La descripción debe tener almenos 20 caracteres' } );
        inputDescription.classList.add('error-input');
        return true
    }
    writeMsg( { id, msg: '' } );
    inputDescription.classList.remove('error-input');
    return false
}

function imageValidator () {
    let id = 'image_error';
    let hasAnyWrongExtFile = false;
    for (file of inputImage.files) {
        let ext = file.name.split('.')[1];
        console.log(ext);
        if ( ext !== 'jpg' && ext !== 'jpeg' && ext !== 'png' && ext !== 'gif' ) {
            hasAnyWrongExtFile = true;
            writeMsg( { id, msg: 'Solo se permite formato .gif, .png, .jpg y .jpeg' } );
            inputImage.classList.add('error-input');
            return true
        }
    }

    if (inputImage.files.length != 4) {
        writeMsg( { id, msg: 'Se deben subir 4 imágenes' } );
        inputImage.classList.add('error-input');
        return true
    }

    writeMsg( { id, msg: '' } );
    inputImage.classList.remove('error-input');
    return false
}

//      Pendiente, no usar - No se usa en código de arriba
//      **************************************************
// validate = (...arrToValidate) => { 
//     arrToValidate.forEach(objToValidate =>{
//     });
// };