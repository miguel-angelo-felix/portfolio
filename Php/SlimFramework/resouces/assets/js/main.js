//footer relative
$(document).ready(function(){
    var maxHeight = 700;   
    var maxHeightMobile = 500;  
    var mainHeight = $('main').height();
    var mainWidth = $('main').width();
if(mainWidth < 900){
 if(mainHeight < maxHeightMobile){
      $('main').addClass('footer-relative');
    }
}else{
 if(mainHeight < maxHeight){
      $('main').addClass('footer-relative');
    }
}
   
});

//menu mobile
$(".img-menu-mobile").on("click", function(){
    $('.menu-mobile').toggleClass('mobile-on');
})