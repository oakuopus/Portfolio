$(function(){
    $(".item-header").click(function(){
        $(".accordian-item").removeClass("active")
        $(this).parent().addClass("active")
    });
});