$( function() { //ensures document is loaded before any jquery is ran.
    $( ".accordion-items" ).accordion({ //method from the accordion library, simple options to alter it in my liking.
        collapsible: true,
        active: true,
        icons: false
    }); 

    $('.about-info').css('height', '27vw'); //.css used to override any css I did not want that was forced with the accordion library
    $('.contact-info').css('height', '8vw');
    $('.work-info').css('height', '34vw');

    $(".item-header").on("click", function(){ // function to keep opened accordions hover styles
        $(this).toggleClass("dropped").siblings().removeClass("dropped");
    });

    $(window).on("scroll", function(){ // function to create dynamic header, which only shows when scrollTop is not 0
        if($(window).scrollTop() == 0){
            $("header").css({
                "background-color": "initial"
            });
        }else{
        $("header").css({
            "background-color": "#1B1B1B",
            "opacity": "80%",
        });
        }   
    });

    const swiper = new Swiper('.swiper', { // The given code from swiper javascript library to easily create a carousel.
        direction: 'horizontal',
        loop: true,
        slides: 3,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});
