
let form = document.getElementById('product');

const genderElements = document.getElementsByName('gender');
const brandElements = document.getElementsByName('brand');
const categoryElements = document.getElementsByName('category');
const colorElements = document.getElementsByName('colors');
const sizeElements = document.getElementsByName('sizes');

    
form.addEventListener('submit', function (e) {
        let hasErrors = { 
            gender: true,
            brand: true,
            category: true,
            color: true,
            size: true
        };

        // Hay errores hasta que se demuestre lo contrario. 
        genderElements.forEach(function(gender){
            if(gender.checked){
                hasErrors.gender = false; 
            }else{
                hasErrors.gender = hasErrors.gender;
            }
        })

        brandElements.forEach(function(brand){
            if(brand.checked){
                hasErrors.brand = false;
            }else{
                hasErrors.brand = hasErrors.brand;
            }
        })

        categoryElements.forEach(function(category){
            if(category.checked){
                hasErrors.category = false;
            }else{
                hasErrors.category = hasErrors.category;
            }
        })

        colorElements.forEach(function(color){
            if(color.checked){
                hasErrors.color = false;
            }else{
                hasErrors.color = hasErrors.color;
            }
        })

        sizeElements.forEach(function(size){
            if(size.checked){
                hasErrors.size = false;
            }else{
                hasErrors.size = hasErrors.size;
            }
        })

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
    

// Nombre

let nameInput = document.getElementById("name");
nameInput.addEventListener("blur", function(){
    let nameError = document.getElementById("name_error");
    if(!this.value){
        nameError.innerText = "El nombre no puede estar vacío";
        this.classList.add("error-input");
    }
    if(this.value && this.value.length < 5){
        nameError.innerText = "El nombre debe tener al menos 5 caracteres";
        this.classList.add("error-input");
    }
    if(this.value.length >= 5){
        this.classList.remove("error-input");
        nameError.innerText = "";
    }   
})

// Precio

let priceInput = document.getElementById("price");

priceInput.addEventListener("blur", function(){
    let priceError = document.getElementById("price_error");
    if(!this.value){
        priceError.innerText = "El precio no puede estar vacío";
        this.classList.add("error-input");
    }
    if(this.value && this.value <= 0){
        priceError.innerText = "El precio debe ser mayor a 0";
        this.classList.add("error-input");
    }
    if(this.value > 0){
        priceError.innerText = "";
        this.classList.remove("error-input");
    }
})

// Descuento

let discountInput = document.getElementById("on_sale");

discountInput.addEventListener("blur", function(){
    let discountError = document.getElementById("on_sale_error");
    if(this.value && this.value < 0){
        discountError.innerText = "El descuento no puede ser negativo";
        this.classList.add("error-input");
    }

    if (this.value >= 0 || !this.value) {
        discountError.innerText = "";
        this.classList.remove("error-input");
    }
})


// Descripcion
let descriptionInput = document.getElementById("description");

descriptionInput.addEventListener("blur", function () {
    let descriptionError = document.getElementById("description_error");
    if (this.value.length < 20){
        descriptionError.innerText = 'La descripción debe tener al menos 20 caracteres';
        this.classList.add("error-input");
    }else{
        descriptionError.innerText = "";
        this.classList.remove("error-input");
    }
});


// Imagenes

let inputImage = document.getElementById("image");

inputImage.addEventListener("change", function () {
    let imageError = document.getElementById("image_error");
    for (file of this.files) {
        let ext = file.name.split('.')[1];
        console.log(ext);
        if ( ext !== 'jpg' && ext !== 'jpeg' && ext !== 'png' && ext !== 'gif' ) {
            imageError.innerText = 'Solo se permite formato .gif, .png, .jpg y .jpeg';
            this.classList.add("error-input");
        }
    }
    if (this.files.length != 4) {
        imageError.innerText = 'Se deben subir 4 imágenes';
        this.classList.add("error-input");
    }
    if(this.files.length == 4){
    imageError.innerText = '';
    this.classList.remove("error-input");
    }
});


