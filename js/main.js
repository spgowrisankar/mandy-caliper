var $ = window.jQuery;

// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i=0; i < acc.length; i++ ) {
    acc[i].onclick = function(){
        this.nextElementSibling.classList.toggle("show");
    }
}
// Accordion

$(document).ready(function(){
    $('.alert-close-link').on('click', function(){
        $('.alert-bar').fadeOut()
    });
    $('.menu-button').on('click', function(){
        var menu =  document.getElementsByClassName(".main-navbar");
        if(menu.style.display === "none") {
            menu.style.display = "block";
        }
        else {
        menu.style.display = "none"
        }
    });

    // Slick-Js
    $('.banner-wrapper').slick({
        infinite:true,
        dots:true,
        arrows:false,
        rows:0
    });
    $('.carousel-section').slick({
        infinite:true,
        arrows:true,
        rows:0,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/Left.svg'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='./images/Right.svg'>"
    });
    // Slick-Js

    // Counter-Js
    $('.counter').counterUp({
    delay: 20,
    time: 1000
    });
    // Counter-Js
})
