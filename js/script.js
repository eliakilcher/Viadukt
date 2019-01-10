/*** MENU ***/
$(document).ready(function() {
  $('.menu-burger').click(function(event) {
    $(".menu").toggleClass("menu-gross");
    $(".menu-oeffnen").toggleClass("menu-oeffnen-weg");
  });
});


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


function hochgeladen() {
  alert("Vielen Dank! Dein Bild wird von uns geprüft und in kürze wird man es auf unserer Webseite bestaunen können. 🖐");
}
