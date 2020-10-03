// Capturar elementos

const form = document.getElementById('product');
const inputName = document.getElementById('name');
const inputPrice = document.getElementById('price');
const inputOnSale = document.getElementById('on_sale');
const inputDescription = document.getElementById('description');
const inputImage = document.getElementById('image');

form.addEventListener('submit', (e) => {
    let hasErrors = false;
    const categoriesElement = document.getElementsByName('category');
    categoriesElement.forEach(categoryElement => {
        if (!categoryElement.checked) {
            hasErrors = true;
        }
    });

    if (hasErrors) {
        e.preventDefault();
        // Logica de mostrar los errores
        
    }
});