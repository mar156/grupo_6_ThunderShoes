
let form = document.getElementById('product');

const genderElements = document.getElementsByName('gender');
const brandElements = document.getElementsByName('brand');
const categoryElements = document.getElementsByName('category');
const colorElements = document.getElementsByName('colors');
const sizeElements = document.getElementsByName('sizes');

let nameInput = document.getElementById("name");
let priceInput = document.getElementById("price");
let discountInput = document.getElementById("on_sale");
let descriptionInput = document.getElementById("description");
let inputImage = document.getElementById("image");

form.addEventListener('submit', function (e) {
        let hasErrors = { 
            gender: true,
            brand: true,
            category: true,
            color: true,
            size: true,
            name: nameValidator(),
            price: priceValidator(),
            onSale: discountValidator(),
            description: descriptionValidator(),
            image: imageValidator()
        };
         
        genderElements.forEach(genderElement => { hasErrors.gender = genderElement.checked ? false : hasErrors.gender });
        brandElements.forEach(brandElement => { hasErrors.brand = brandElement.checked ? false : hasErrors.brand });
        categoryElements.forEach(categoryElement => { hasErrors.category = categoryElement.checked ? false : hasErrors.category });
        colorElements.forEach(colorElement => { hasErrors.color = colorElement.checked ? false : hasErrors.color });
        sizeElements.forEach(sizeElement => { hasErrors.size = sizeElement.checked ? false : hasErrors.size }); 

        if ( hasErrors.gender || hasErrors.brand || hasErrors.category || hasErrors.color || hasErrors.size || 
            hasErrors.name || hasErrors.price || hasErrors.onSale || hasErrors.description || hasErrors.image 
        ){ 
            e.preventDefault();
            document.getElementById('gender_error').innerText = hasErrors.gender ? 'Debe seleccionar un género': '';
            document.getElementById('brand_error').innerText = hasErrors.brand ? 'Debe seleccionar una marca': '';
            document.getElementById('category_error').innerText = hasErrors.category ? 'Debe seleccionar al menos una categoría' : '';
            document.getElementById('color_error').innerText = hasErrors.color ? 'Debe seleccionar al menos un color' : '';
            document.getElementById('size_error').innerText = hasErrors.size ? 'Debe seleccionar al menos un talle' : '';
        }
    
    });

    nameInput.addEventListener("blur", nameValidator);
    priceInput.addEventListener("blur", priceValidator);
    discountInput.addEventListener("blur", discountValidator);
    descriptionInput.addEventListener("blur", descriptionValidator);
    inputImage.addEventListener("blur", imageValidator);


// Nombre


function nameValidator(){
    let nameError = document.getElementById("name_error");
    if(!nameInput.value){
        nameError.innerText = "El nombre no puede estar vacío";
        nameInput.classList.add("error-input");
        return true;
    }
    if(nameInput.value && nameInput.value.length < 5){
        nameError.innerText = "El nombre debe tener al menos 5 caracteres";
        nameInput.classList.add("error-input");
        return true;
    }
    if(nameInput.value.length >= 5){
        nameInput.classList.remove("error-input");
        nameError.innerText = "";
        return false;
    }   
}

// Precio

function priceValidator(){
    let priceError = document.getElementById("price_error");
    if(!priceInput.value){
        priceError.innerText = "El precio no puede estar vacío";
        priceInput.classList.add("error-input");
        return true;
    }
    if(priceInput.value && priceInput.value <= 0){
        priceError.innerText = "El precio debe ser mayor a 0";
        priceInput.classList.add("error-input");
        return true;
    }
    if(priceInput.value > 0){
        priceError.innerText = "";
        priceInput.classList.remove("error-input");
       return false;
    }
}

// Descuento



function discountValidator(){
    let discountError = document.getElementById("on_sale_error");
    if(discountInput.value && discountInput.value < 0){
        discountError.innerText = "El descuento no puede ser negativo";
        discountInput.classList.add("error-input");
        return true;
    }

    if (discountInput.value >= 0 || !discountInput.value) {
        discountError.innerText = "";
        discountInput.classList.remove("error-input");
        return false;
    }
}


// Descripcion


function descriptionValidator () {
    let descriptionError = document.getElementById("description_error");
    if (descriptionInput.value.length < 20){
        descriptionError.innerText = 'La descripción debe tener al menos 20 caracteres';
        descriptionInput.classList.add("error-input");
        return true;
    }else{
        descriptionError.innerText = "";
        descriptionInput.classList.remove("error-input");
        return false;
    }
}


// Imagenes



function imageValidator() {
    let imageError = document.getElementById("image_error");
    for (file of inputImage.files) {
        let ext = file.name.split('.')[1];
        console.log(ext);
        if ( ext !== 'jpg' && ext !== 'jpeg' && ext !== 'png' && ext !== 'gif' ) {
            imageError.innerText = 'Solo se permite formato .gif, .png, .jpg y .jpeg';
            inputImage.classList.add("error-input");
            return true;
        }
    }
    if (inputImage.files.length != 4) {
        imageError.innerText = 'Se deben subir 4 imágenes';
        inputImage.classList.add("error-input");
        return true;
    }
    if(inputImage.files.length == 4){
    imageError.innerText = '';
    inputImage.classList.remove("error-input");
    return false;
    }
}


