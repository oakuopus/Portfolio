$( function() {
    $( ".accordion-items" ).accordion({
        collapsible: true,
        active: true,
        icons: false
    }); 
    $('.about-info').css('height', '27vw');
    $('.contact-info').css('height', '8vw');
    $('.work-info').css('height', '34vw');
    $(".item-header").on("click", function(){
        $(this).toggleClass("dropped").siblings().removeClass("dropped");

    });
    $(window).on("scroll", function(){
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

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true, 

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});
