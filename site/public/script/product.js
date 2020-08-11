let checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach( input =>{
    input.addEventListener('change', function (e) {
        let labelParent = this.parentElement;
        labelParent.classList.toggle('checked');
    });
});