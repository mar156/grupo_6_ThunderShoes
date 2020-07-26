let shopdesplegables = document.querySelectorAll('.menudesplegable');

shopdesplegables.forEach(desplegable => {
    desplegable.onclick = function(e){
        let elementoDondeHizoClick = e.target; 
        let elementoPadre = elementoDondeHizoClick.parentNode.parentNode;
        if(elementoDondeHizoClick.classList[3] === undefined){
            elementoDondeHizoClick.classList.add('desplegado');
            elementoPadre.querySelector('span').style.display = "block";
        }
        else{
            elementoPadre.querySelector('span').style.display = "none";
            elementoDondeHizoClick.classList.remove('desplegado');
        }
        e.preventDefault();
    }
});
