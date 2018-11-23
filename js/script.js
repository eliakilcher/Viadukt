/*** MENU ***/
$(document).ready(function() {
  $('.menu-burger').click(function(event) {
    $(".menu").toggleClass("menu-gross");
    $(".menu-oeffnen").toggleClass("menu-oeffnen-weg");
  });
});

/*** PARALLAX ***/
$(window).scroll(function(e){
	parallax();
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.parallax-01').css('top', -(scrolled * 0.1) + 'px');
}

/*** PARALLAX REGEMSCJRO ***/
$(window).scroll(function(e){
	regenschirm();
});

function regenschirm(){
    var scrolled = $(window).scrollTop();
    $('#regenschirm').css('margin-left', +(scrolled * 0.3) + 'px');
}

/*** TIMER ***/
function time() {
    i++;
    document.getElementById('preis').innerHTML = i;
  }
var i=1;
var interval = window.setInterval('time()', 1000);


/*** BESTELLEN ***/
$(document).ready(function() {
  $('.bestelllink').click(function(event) {
    $(".bestellformular").addClass("dp-block");
    $(".plane").addClass("dp-block");
  });
});
$(document).ready(function() {
  $('.close').click(function(event) {
    $(".bestellformular").removeClass("dp-block");
    $(".plane").removeClass("dp-block");
  });
});















//
//
// /*** ONSCROLL NAV EVENT ***/
// $(document).on("scroll",function(){
//    if($(document).scrollTop()>1)
//    {
//         $("header").removeClass("nuet").addClass("header-scroll");
//    }
//    else
//     {
//         $("header").removeClass("header-scroll").addClass("nuet");
//     }
// });
//
//
// $('a.burger').click(function(event) {
//     $('a.burger').toggleClass('burger-cross');
//     $('div.sidebar').toggleClass('sidebar-full');
//     $('div.sidebar').toggleClass('sidebar-full-height');
//     $('div.nav-bg').toggleClass('nav-bg-pos');
// });
//
//
//
// /*** SCROLL DOWN ***/
//
// //var offsetHeight = document.getElementById('myDiv').offsetHeight;
//
//
// $(document).ready(function() {
//     $('.scroll-action').click(function(event){
//         $('html, body').animate({scrollTop: '+=240px'}, 400);
//     });
// });
