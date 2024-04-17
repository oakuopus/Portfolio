$( function() {
    $( ".accordion-items" ).accordion({
        collapsible: true,
        active: false,
        icons: false
    });    
    $(window).on("scroll", function(){
        if($(window).scrollTop() == 0){
            $("header").css({
                "background-color": "initial"
            });
        }else{
        $("header").css({
            "background-color": "#1B1B1B",
        });
        }   
    });
});