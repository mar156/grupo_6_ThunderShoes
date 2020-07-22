let desplegables = document.querySelectorAll('.desplegable');

desplegables.forEach(desplegable => {
    desplegable.onclick = function(e){
        let elementoDondeHizoClick = e.target; //icono... yo quiero q vaya al contenedor del párrafo
        
        if(elementoDondeHizoClick.classList[3] === undefined){
            elementoDondeHizoClick.classList.add('desplegado')
            let elementoPadre = elementoDondeHizoClick.parentNode.parentNode;
            elementoPadre.querySelector('p').style.display = "block";
        }
        else{
            let elementoPadre = elementoDondeHizoClick.parentNode.parentNode;
            elementoPadre.querySelector('p').style.display = "none";
            elementoDondeHizoClick.classList.remove('desplegado');
        }

        e.preventDefault();
    }
});
