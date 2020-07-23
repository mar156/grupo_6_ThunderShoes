let desplegables = document.querySelectorAll('.desplegable');

desplegables.forEach(desplegable => {
    desplegable.onclick = function(e){
        let elementoDondeHizoClick = e.target; 
        let elementoPadre = elementoDondeHizoClick.parentNode.parentNode;
        if(elementoDondeHizoClick.classList[3] === undefined){
            elementoDondeHizoClick.classList.add('desplegado');
            elementoPadre.querySelector('p').style.display = "block";
        }
        else{
            elementoPadre.querySelector('p').style.display = "none";
            elementoDondeHizoClick.classList.remove('desplegado');
        }
        e.preventDefault();
    }
});
