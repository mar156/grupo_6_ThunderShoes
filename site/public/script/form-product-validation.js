// Capturar elementos

const form = document.getElementById('product');
const inputName = document.getElementById('name');
const inputPrice = document.getElementById('price');
const inputOnSale = document.getElementById('on_sale');
const inputDescription = document.getElementById('description');
const inputImage = document.getElementById('image');


form.addEventListener('submit', function (e) {
    let hasErrors = { // Hay errores hasta que se demuestre lo contrario.
        gender: true,
        brand: true,
        category: true,
        color: true,
        size: true
    };
    const genderElements = document.getElementsByName('gender');
    const brandElements = document.getElementsByName('brand');
    const categoryElements = document.getElementsByName('category');
    const colorElements = document.getElementsByName('colors');
    const sizeElements = document.getElementsByName('sizes');
    genderElements.forEach(genderElement => { hasErrors.gender = genderElement.checked ? false : hasErrors.gender });
    brandElements.forEach(brandElement => { hasErrors.brand = brandElement.checked ? false : hasErrors.brand });
    categoryElements.forEach(categoryElement => { hasErrors.category = categoryElement.checked ? false : hasErrors.category });
    colorElements.forEach(colorElement => { hasErrors.color = colorElement.checked ? false : hasErrors.color });
    sizeElements.forEach(sizeElement => { hasErrors.size = sizeElement.checked ? false : hasErrors.size });

    if ( hasErrors.gender || hasErrors.brand || hasErrors.category ) e.preventDefault();
    document.getElementById('gender_error').innerText = hasErrors.gender ? 'Debe seleccionar un genero': '';
    document.getElementById('brand_error').innerText = hasErrors.brand ? 'Debe seleccionar una marca': '';
    document.getElementById('category_error').innerText = hasErrors.category ? 'Debe seleccionar almenos una categoría' : '';
    document.getElementById('color_error').innerText = hasErrors.color ? 'Debe seleccionar almenos un color' : '';
    document.getElementById('size_error').innerText = hasErrors.size ? 'Debe seleccionar almenos un talle' : '';

});

inputName.addEventListener('blur', function () {
    let errorName = document.getElementById('name_error');
    if (!this.value) errorName.innerText = 'El nombre no puede estar vacío';
    if (this.value && this.value.length < 5) errorName.innerText = 'El nombre debe tener almenos 5 caracteres';
    if (this.value.length >= 5) errorName.innerText = '';
});

inputPrice.addEventListener('blur', function () {
    let priceError = document.getElementById('price_error');
    if (!this.value) priceError.innerText = 'El precio no puede estar vacío';
    if (this.value && this.value <= 0) priceError.innerText = 'El precio debe ser mayor a 0';
    if (this.value > 0) priceError.innerText = '';
});

inputOnSale.addEventListener('blur', function () {
    let onSaleError = document.getElementById('on_sale_error');
    if (this.value && this.value < 0) onSaleError.innerText = 'El descuento no puede ser negativo';
    if (this.value >= 0 || !this.value) onSaleError.innerText = '';
});

inputDescription.addEventListener('blur', function () {
    let descriptionError = document.getElementById('description_error');
    if (this.value.length < 20) descriptionError.innerText = 'La descripción debe tener almenos 20 caracteres';
    if (this.value.length >= 20) descriptionError.innerText = '';
});

inputImage.addEventListener('change', function () {
    let imageError = document.getElementById('image_error');
    let hasAnyWrongExtFile = false;
    for (file of this.files) {
        let ext = file.name.split('.')[1];
        console.log(ext);
        if ( ext !== 'jpg' && ext !== 'jpeg' && ext !== 'png' && ext !== 'gif' ) {
            hasAnyWrongExtFile = true;
            imageError.innerText = 'Solo se permite formato .gif, .png, .jpg y .jpeg';
            return true
        }
    }

    if (this.files.length != 4) {
        imageError.innerText = 'Se deben subir 4 imágenes';
        return true
    }

    imageError.innerText = '';
    return false
});