window.addEventListener("load",function() {

    let btn = document.getElementById("btn-menu");
    let menu = document.getElementById("menu");

    btn.addEventListener("click", function(e){
        if(menu.style.left == "-100vw"){
            menu.style.left = "0vw";
        } else {
            menu.style.left = "-100vw";
        }
    });

    let toggleSummaryCartElements = document.getElementsByClassName("toggle-summary");
    for ( element of toggleSummaryCartElements) {
        let summaryCart = document.getElementById("summary-container");
        element.addEventListener('click', () => {
            
            if ( summaryCart.style.display === "none" ) {
                summaryCart.style.display = "block";
            } else {
                summaryCart.style.display = "none";
            }
        });
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

    // Colores vista Detail

    let colors = document.getElementsByClassName("color-label");
    let codes = ["0011","0022","0033","0044","0055","0066","0077"]
    let colores = ["red","blue","yellow","green","black","white","gray"]

    // console.log(colors);


        // for (let i = 0; i < codes.length; i++) {
        //     if(colors.classList == codes[i]){
        //         colors.style.backgroundColor = colores[i];
        //     }
        // }
    for(let d = 0; d < colors.length; d++){
        for (let i = 0; i < codes.length; i++) {
            if(colors[d].classList.contains(codes[i])){
                colors[d].style.backgroundColor = colores[i];
            }
        }
    }
})