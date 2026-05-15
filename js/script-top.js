window.onscroll = function(){
  var scrollTop = window.scrollY;
  var navHeight = jQuery( '.about' ).outerHeight();
  if (scrollTop > navHeight ) {
    $('#header01').addClass('scroll');
  }
  else {
    $('#header01').removeClass('scroll');
  }
}
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
  scale: 1.2,
  delay: .6,
  transition: 'cubic-bezier(0,0,0,1)'
});

$(function(){
  $('.faq-title').click(function(){
    $(this).toggleClass('active');
    $(this).next('.faq-inner').slideToggle();
  });
});


$(window).scroll(function () {
  $('.loop__bg').each(function () {
    var hit = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();
    var customTop = 300;
    if (hit + customTop < wHeight + scroll) {
      $(this).addClass("is-animated");
    }
  });
});
