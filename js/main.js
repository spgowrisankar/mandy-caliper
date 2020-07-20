var $ = window.jQuery;

$(document).ready(function(){
    $('.alert-close-link').on('click', function(){
        $('.alert-bar').fadeOut()
    })
    $('.menu-button').on('click', function(){
        var menu =  document.getElementsByClassName(".main-navbar");
        if(menu.style.display === "none") {
            menu.style.display = "block";
        }
        else {
        menu.style.display = "none"
        }
    })
})
