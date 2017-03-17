var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


var link = document.querySelector(".product__btn");
var addBasket = document.querySelector(".catalog__basket");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".modal__overlay");
var close = popup.querySelector(".modal__btn");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal__show");
  overlay.classList.add("modal__overlay-show");
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal__show");
  overlay.classList.remove("modal__overlay-show");
});
window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
  if (popup.classList.contains("modal__show")) {
    popup.classList.remove("modal__show");
    overlay.classList.remove("modal__overlay-show");
  }
}
});