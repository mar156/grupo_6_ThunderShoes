let $desplegables = document.querySelectorAll('.menu-desplegable');
let $btnCerrar = document.querySelector('.cerrar');

function desplegar(elementoADesplegar){
    if(elementoADesplegar.classList.contains('oculto')){
        elementoADesplegar.classList.remove('oculto');
        elementoADesplegar.style.display = "block";
    }
    else{
        elementoADesplegar.classList.add('oculto');
        elementoADesplegar.style.display="none";
    }
}

/*Desplegar filtros*/
document.querySelector('.filtrar').onclick = function(e){
    let $filtros = document.querySelector('.filtros');
    desplegar($filtros);
    e.preventDefault();
}

/*Desplegar ordenar por*/
document.querySelector('.ordenar').onclick = function(e){
    let $lista = document.querySelector('.ordenar-por');
    desplegar($lista);
    e.preventDefault();
}

/*Cerrar filtros al hacer click en cerrar*/
$btnCerrar.addEventListener('click', cerrarFiltros);
function cerrarFiltros(){
    document.querySelector('.filtros').classList.add('oculto');
    document.querySelector('.filtros').style.display = "none";
}

/*Desplegar cada uno de los filtros (sexo, talle y deportes)*/
$desplegables.forEach($desplegable=>{
    $desplegable.onclick = function(e){
        let $elementoDondeHizoClick = e.target;
        let $contenedorContOculto = $elementoDondeHizoClick.parentNode.parentNode;
        let $contenidoOculto = $contenedorContOculto.querySelector('.contenido');
        
        if($contenidoOculto.classList.contains('oculto')){
            $contenidoOculto.classList.remove('oculto');
        }
        else{
            $contenidoOculto.classList.add('oculto');
        }
        e.preventDefault();
    }
});

