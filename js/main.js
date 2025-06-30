$(function AccodrionOpen(){
    $(".accordion__item .accordion__item--top").on("click", function () {    
      $(this).parent().toggleClass("accordion-open"), $(this).next(".accordion__item-content").slideToggle(500);    
    });
});
$(function Scroll(){
  let header = document.querySelector('.header'),
      headerH = document.querySelector('.header').clientHeight;

  document.onscroll = function(){
    let scroll = window.scrollY;

    if(scroll > headerH){
      header.classList.add('header-scroll');
      document.body.style.paddingTop = headerH + 'px';
    }else{
      header.classList.remove('header-scroll');
      document.body.removeAttribute('style');
    }
  }    
});
$(function BurgerMenu(){
  $('.burger').on('click', function(){
    $('.burger').toggleClass('burger-opened');
    $('.header__content').toggleClass('menu-open');
    $('body').toggleClass('lock');
  });
});