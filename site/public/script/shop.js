let $desplegables = document.querySelectorAll('.menu-desplegable');
let $btnCerrar = document.querySelector('.cerrar');

/*Desplegar filtros*/
document.querySelector('.filtrar').onclick = function(e){
    let $filtros = document.querySelector('.filtros');
    if($filtros.classList.contains('oculto')){
        $filtros.classList.remove('oculto');
        $filtros.style.display = "block";
    }
    else{
        $filtros.classList.add('oculto');
        $filtros.style.display="none";
    }
    e.preventDefault();
}

/*Desplegar ordenar por*/
document.querySelector('.ordenar').onclick = function(e){
    let $lista = document.querySelector('.ordenar-por');
    if($lista.classList.contains('oculto')){
        $lista.classList.remove('oculto');
        $lista.style.display = "block";
    }
    else{
        $lista.classList.add('oculto');
        $lista.style.display="none";
    }
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

