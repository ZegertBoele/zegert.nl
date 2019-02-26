window.onscroll = function() {stickynav()};

var nav = document.getElementById("nav");

var sticky = nav.offsetTop;

function stickynav() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}