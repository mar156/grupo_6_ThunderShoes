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

