
let form = document.getElementById('product');

form.addEventListener("submit", function(e){   
    
    let genders = document.getElementsByName("gender");
    let brands = document.getElementsByName("brand");
    let categories = document.getElementsByName("category");
    let colors = document.getElementsByName("colors");
    let sizes = document.getElementsByName("sizes");
    
    // Géneros    
    let genderError = true;
    genders.forEach(function(gender){
        if(!gender.checked){
            genderError = false;
        }
    }) 
        if(!genderError){
            document.getElementById('gender_error').innerText = '';
        } else{
            e.preventDefault();
            document.getElementById('gender_error').innerText = 'Debe seleccionar un género';
        }


    // Marcas
    let brandError = true;
    brands.forEach(function(brand){
        if(!brand.checked){
            brandError = false;
        }
    }) 
            if(!brandError){
                document.getElementById('brand_error').innerText = '';
            } else{
                e.preventDefault();
                document.getElementById('brand_error').innerText = 'Debe seleccionar una marca';
            }

    // Categorías
    let categoryError = true;
    categories.forEach(function(category){
        if(!category.checked){
            categoryError = false;
        }
    }) 
            if(!categoryError){
                document.getElementById('category_error').innerText = '';
            } else{
                e.preventDefault();
                document.getElementById('category_error').innerText = 'Debe seleccionar al menos una categoría';
            }


    // Colores

    let colorError = true;
    colors.forEach(function(color){
        if(!color.checked){
            colorError = false;
        }
    }) 
            if(!colorError){
                document.getElementById('color_error').innerText = '';
            } else{
                e.preventDefault();
                document.getElementById('color_error').innerText = 'Debe seleccionar al menos un color';
            }

    // Talles

    let sizeError = true;
    sizes.forEach(function(size){
        if(!size.checked){
            sizeError = false;
        }
    }) 
            if(!sizeError){
                document.getElementById('size_error').innerText = '';
            } else{
                e.preventDefault();
                document.getElementById('size_error').innerText = 'Debe seleccionar al menos un talle';
            }

})



// Nombre

let nameInput = document.getElementById("name");
nameInput.addEventListener("blur", function(){
    let nameError = document.getElementById("name_error");
    if(this.value && this.value.length < 5){
        nameError.innerText = "El nombre debe tener al menos 5 caracteres";
        this.classList.add("error-input");
    }else if (this.value.length >= 5){
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





