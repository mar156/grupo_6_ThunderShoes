
const brands = document.getElementsByClassName("brand","checked");

const nike = document.getElementById("product-c-nike");
const adidas = document.getElementById("product-c-adidas");
const puma = document.getElementById("product-c-puma");
const newbalance = document.getElementById("product-c-newbalance");


nike.addEventListener("click", function(){

    if(this.classList.contains("checked")){
        // this.classList.toggle("checked");
        this.classList.remove("checked");
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