$(".label-tier").on("click", function(){
    $(".checkmark").removeClass("active");
    $(this).children('.checkmark').addClass("active");
});

$(".checkmark-tutorial").on("click", function(){
    $(this).toggleClass('active');
});

$(".box-class > div label img").on("click", function(){
    $(this).toggleClass("active");
});

$(".box-others > div label img").on("click", function(){
    $(this).toggleClass("active");
});

$(".box-filter-itens > div label img").on("click", function(){
    $(this).toggleClass("active");
});

$(".box-filter-class > label img").on("click", function(){
    $(this).toggleClass("active");
});

