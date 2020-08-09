let btn = document.getElementById("btn-menu");
let menu = document.getElementById("menu");

let summaryCart = document.getElementById("summary-container");

btn.addEventListener("click", function(e){
    if(menu.style.left == "-100vw"){
        menu.style.left = "0vw";
    } else {
        menu.style.left = "-100vw";
    }
});

function toogleSummary () {
    if ( summaryCart.style.display === "none" ) {
        summaryCart.style.display = "block";
    } else {
        summaryCart.style.display = "none";
    }
}

/* Prueba slideshow product detail*/

let thumnails = document.getElementsByClassName("thumnails");
let selectedImg = document.getElementsByClassName("thumnails selected")

for(let i = 0; i < thumnails.length; i++){
    thumnails[i].addEventListener("mouseover", function(){
        if(selectedImg.length > 0){
            selectedImg[0].classList.remove("selected");
        }
        this.classList.add("selected");
        document.getElementById("img-principal").src = this.src;
    });
}