
// Marcas

const nikeCheck = document.getElementById("product-c-nike");
const adidasCheck = document.getElementById("product-c-adidas");
const pumaCheck = document.getElementById("product-c-puma");
const newbalanceCheck = document.getElementById("product-c-newbalance"); 

const nikeLabel = document.getElementById("product-m-nike");
const adidasLabel = document.getElementById("product-m-adidas");
const pumaLabel = document.getElementById("product-m-puma");
const newbalanceLabel = document.getElementById("product-m-newbalance");


nikeCheck.addEventListener("click", function(){
    if(this.checked){
        nikeLabel.classList.add("checked");
    } else{
        nikeLabel.classList.remove("checked");
    }
})


adidasCheck.addEventListener("click", function(){
    if(this.checked){
        adidasLabel.classList.add("checked");
    } else{
        adidasLabel.classList.remove("checked");
    }
})

pumaCheck.addEventListener("click", function(){
    if(this.checked){
        pumaLabel.classList.add("checked");
    } else{
        pumaLabel.classList.remove("checked");
    }
})


newbalanceCheck.addEventListener("click", function(){
    if(this.checked){
        newbalanceLabel.classList.add("checked");
    } else{
        newbalanceLabel.classList.remove("checked");
    }
})

// Genero

const femaleCheck = document.getElementById("product-c-mujer");
const maleCheck = document.getElementById("product-c-hombre");
const unisexCheck = document.getElementById("product-c-unisex");

const femaleLabel = document.getElementById("product-m-mujer");
const maleLabel = document.getElementById("product-m-hombre");
const unisexLabel = document.getElementById("product-m-unisex");

femaleCheck.addEventListener("click", function(){
    if(this.checked){
        femaleLabel.classList.add("checked");
        if(!maleCheck.checked){
            maleLabel.classList.remove("checked");
        }
        if(!unisexCheck.checked){
            unisexLabel.classList.remove("checked");
        }
    } 
})

maleCheck.addEventListener("click", function(){
    if(this.checked){
        maleLabel.classList.add("checked");
        if(!femaleCheck.checked){
            femaleLabel.classList.remove("checked");
        }
        if(!unisexCheck.checked){
            unisexLabel.classList.remove("checked");
        }
    }
})

unisexCheck.addEventListener("click", function(){
    if(this.checked){
        unisexLabel.classList.add("checked");
        if(!maleCheck.checked){
            maleLabel.classList.remove("checked");
        }
        if(!femaleCheck.checked){
            femaleLabel.classList.remove("checked");
        }
    } 
})





// Categorias

const tennisCheck = document.getElementById("product-c-tennis");
const runningCheck = document.getElementById("product-c-running");
const footballCheck = document.getElementById("product-c-football");
const volleyCheck = document.getElementById("product-c-volley"); 
const collectionCheck = document.getElementById("product-c-collection"); 

const tennisLabel = document.getElementById("product-m-tennis");
const runningLabel = document.getElementById("product-m-running");
const footballLabel = document.getElementById("product-m-football");
const volleyLabel = document.getElementById("product-m-volley");
const collectionLabel = document.getElementById("product-m-collection"); 


tennisCheck.addEventListener("click", function(){
    if(this.checked){
        tennisLabel.classList.add("checked");
    } else{
        tennisLabel.classList.remove("checked");
    }
})

runningCheck.addEventListener("click", function(){
    if(this.checked){
        runningLabel.classList.add("checked");
    } else{
        runningLabel.classList.remove("checked");
    }
})

footballCheck.addEventListener("click", function(){
    if(this.checked){
        footballLabel.classList.add("checked");
    } else{
        footballLabel.classList.remove("checked");
    }
})

volleyCheck.addEventListener("click", function(){
    if(this.checked){
        volleyLabel.classList.add("checked");
    } else{
        volleyLabel.classList.remove("checked");
    }
})

collectionCheck.addEventListener("click", function(){
    if(this.checked){
        collectionLabel.classList.add("checked");
    } else{
        collectionLabel.classList.remove("checked");
    }
})


// Colores

const whiteCheck = document.getElementById("product-c-white");
const redCheck = document.getElementById("product-c-rojo");
const blueCheck = document.getElementById("product-c-azul");
const yellowCheck = document.getElementById("product-c-amarillo");
const blackCheck = document.getElementById("product-c-negro");
const greenCheck = document.getElementById("product-c-verde");
const grayCheck = document.getElementById("product-c-gris");

const whiteLabel = document.getElementById("product-m-white");
const redLabel = document.getElementById("product-m-red");
const blueLabel = document.getElementById("product-m-blue");
const yellowLabel = document.getElementById("product-m-yellow");
const blackLabel = document.getElementById("product-m-black");
const greenLabel = document.getElementById("product-m-green");
const grayLabel = document.getElementById("product-m-gray");

whiteCheck.addEventListener("click", function(){
    if(this.checked){
        whiteLabel.classList.add("checked");
    } else{
        whiteLabel.classList.remove("checked");
    }
})

redCheck.addEventListener("click", function(){
    if(this.checked){
        redLabel.classList.add("checked");
    } else{
        redLabel.classList.remove("checked");
    }
})

blueCheck.addEventListener("click", function(){
    if(this.checked){
        blueLabel.classList.add("checked");
    } else{
        blueLabel.classList.remove("checked");
    }
})

yellowCheck.addEventListener("click", function(){
    if(this.checked){
        yellowLabel.classList.add("checked");
    } else{
        yellowLabel.classList.remove("checked");
    }
})

blackCheck.addEventListener("click", function(){
    if(this.checked){
        blackLabel.classList.add("checked");
    } else{
        blackLabel.classList.remove("checked");
    }
})

greenCheck.addEventListener("click", function(){
    if(this.checked){
        greenLabel.classList.add("checked");
    } else{
        greenLabel.classList.remove("checked");
    }
})

grayCheck.addEventListener("click", function(){
    if(this.checked){
        grayLabel.classList.add("checked");
    } else{
        grayLabel.classList.remove("checked");
    }
})

// Talles


const talle35Check = document.getElementById("product-t-35");
const talle36Check = document.getElementById("product-t-36");
const talle37Check = document.getElementById("product-t-37");
const talle38Check = document.getElementById("product-t-38");
const talle39Check = document.getElementById("product-t-39");
const talle40Check = document.getElementById("product-t-40");


const talle35Label = document.getElementById("product-m-t-35");
const talle36Label = document.getElementById("product-m-t-36");
const talle37Label = document.getElementById("product-m-t-37");
const talle38Label = document.getElementById("product-m-t-38");
const talle39Label = document.getElementById("product-m-t-39");
const talle40Label = document.getElementById("product-m-t-40");


talle35Check.addEventListener("click", function(){
    if(this.checked){
        talle35Label.classList.add("checked");
    } else{
        talle35Label.classList.remove("checked");
    }
})

talle36Check.addEventListener("click", function(){
    if(this.checked){
        talle36Label.classList.add("checked");
    } else{
        talle36Label.classList.remove("checked");
    }
})

talle37Check.addEventListener("click", function(){
    if(this.checked){
        talle37Label.classList.add("checked");
    } else{
        talle37Label.classList.remove("checked");
    }
})

talle38Check.addEventListener("click", function(){
    if(this.checked){
        talle38Label.classList.add("checked");
    } else{
        talle38Label.classList.remove("checked");
    }
})

talle39Check.addEventListener("click", function(){
    if(this.checked){
        talle39Label.classList.add("checked");
    } else{
        talle39Label.classList.remove("checked");
    }
})

talle40Check.addEventListener("click", function(){
    if(this.checked){
        talle40Label.classList.add("checked");
    } else{
        talle40Label.classList.remove("checked");
    }
})


/* 
<script>
$(document).ready(function () {
    $("#23").click(function () {
        CheckSelected();
    })
})

function CheckSelected() {
    if(document.getElementById('23').checked) {
        $("#23_span").removeClass("unchecked").addClass("checked");
        alert("checked");
    }
    else {
        $("#23_span").removeClass("checked").addClass("unchecked");
        alert("unchecked");
    }
}
</script>

 */

/* 

nike.addEventListener("click", function(){
    if(this.classList.contains("checked")){
        // this.classList.toggle("checked");
        this.classList.remove("checked");
        this.toggleAttribute
    } else {
        this.classList.add("checked");
    }
})

adidas.addEventListener("click", function(){

    if(this.classList.contains("checked")){
        // this.classList.toggle("checked");
        this.classList.remove("checked");
    } else {
        this.classList.add("checked");
    }
})


puma.addEventListener("click", function(){

    if(this.classList.contains("checked")){
        // this.classList.toggle("checked");
        this.classList.remove("checked");
    } else {
        this.classList.add("checked");
    }
})


newbalance.addEventListener("click", function(){

    if(this.classList.contains("checked")){
        // this.classList.toggle("checked");
        this.classList.remove("checked");
    } else {
        this.classList.add("checked");
    }
})
  */

// newbalance.addEventListener("click", function(){

//     if(this.classList.contains("checked")){
//         this.classList.toggle("checked");
//     } 
// })


/* for(let i=0; i< brands.length;i++){
    brands[i].addEventListener("click", function(){
        if(brands[i].classList.contains("checked")){
            brands[i].classList.remove("checked");
            brandscript[i].removeAttribute("checked");
        } else{
            brands[i].classList.add("checked");
            brandscript[i].setAttribute("checked", "");
        }
    });
}
 */
/* 
for(let i=0; i< brands.length;i++){
    brands[i].addEventListener("click", function(){
        if(this.classList.contains("checked")){
            this.classList.remove("checked");
        } else{
            this.classList.add("checked")
        }
    });
}

 */