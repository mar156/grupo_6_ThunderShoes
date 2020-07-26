let btn = document.getElementById("btn-menu");
let menu = document.getElementById("menu");

let summaryCart = document.getElementById("summary-container");

let thumnails = document.getElementsByClassName("thumnails");



btn.addEventListener("click", function(e){

if(menu.style.left == "-100vw"){


    menu.style.left = "0vw";

} else {


    menu.style.left = "-100vw";

}

});


// function toogleSummary () {
//     if ( summaryCart.style.display === "none" ) {
//         summaryCart.style.display = "block";
//     } else {
//         summaryCart.style.display = "none";
//     }
// }

// for (let i, )

// for ( let i in thumnails ) {
//     thumnail[i].addEventListener("click", e => {
//         let imgPrincipal = document.getElementById("img-principal");
//         // thumnail[i]
//         console.log(e);
//     });
// }

// thumnails.map( thumnail => {
// });