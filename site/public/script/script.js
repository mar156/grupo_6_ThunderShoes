let btn = document.getElementById("btn-menu");
let menu = document.getElementById("menu");

btn.addEventListener("click", function(e){

if(menu.style.left == "-100vw"){


    menu.style.left = "0vw";

} else {


    menu.style.left = "-100vw";

}

});