var BurgerOpen = document.querySelector('.Header__nav__burger');
var Menu = document.querySelector('.Menu');
var MenuClose = document.querySelector('.Menu__close');

BurgerOpen.addEventListener('click', function(){
  document.body.style.overflow="hidden";
  Menu.style.opacity = "1";
  Menu.style.zIndex = "999";
});

MenuClose.addEventListener('click', function (){
  Menu.style.display = "none";
  document.body.style.overflow="";
});









var BackToTop = document.querySelector('.BackToTop');
BackToTop.addEventListener('click',function () {
window.scroll({
top: 0,
left: 0,
behavior: 'smooth'
});
})
