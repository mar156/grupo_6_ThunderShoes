window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel-lista'), {//todos esos elementos serán parte del carousel
        //opciones del carousel... 
        slidesToShow: 1,//muestra un elemento
        slidesToScroll: 1,
        arrows: {
            prev: '.carousel-anterior',
            next: '.carousel-siguiente'
        },
        responsive: [
            {
              // al llegar a 450px que muestre 2
              breakpoint: 450,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },{
              // al llegar a 800px que muestre 4 :D
              breakpoint: 800,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            }
          ]
    });
});