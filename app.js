$(function() {
    
    /* FIXED HEADER */
    
let header =  $("#header");
let intro =  $("#intro");    
let introH =  intro.innerHeight();
let scrolPos =  $(window).scrollTop();
let nav = $("#nav");
let navToggle = $("#navToggle");
    
$(window).on("scroll load resize", function() {
    let introH =  intro.innerHeight();
    scrolPos = $(this).scrollTop();
    
    if(scrolPos > introH) {
       header.addClass("fixed");   
    } else {
        header.removeClass("fixed");
    }
     
});    
    
/* SMOOTH SCROOL */
    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
    
        nav.removeClass("show");/*удаление всплывающий навигации при нажатие на одну из них*/
        
        $("html, body").animate({
           scrollTop: elementOffset - 70
        }, 600);
    });
    
    /* NAV TOGGLE */
    
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass("show");
    });
    
    /*REVIEWS*/
    
    let slider = $("#reviewsSlider");
    
    slider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
    fade:false,
  arrows: false,
        dots:true
});
    
    
}); /*После того как загрузятся основные элементы, будет грузится js*/