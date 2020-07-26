document.querySelector('.filtrar').onclick = function(e){
    let $filtros = document.querySelector('.filtros');
    /*document.querySelector('.filtros').style.display = "none";*/
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