$(window).on('load',function(){
  $(".loading").delay(600).fadeOut('slow');
  $("loading__inner").delay(400).fadeOut('slow');
});
$(function() {
  $('.nav-toggle').on('click', function(event) {
    $(this).toggleClass('active');
    $('.navi').toggleClass('is-open');
  });
  $(document).click(function(event) {
  
    if ($(event.target).closest('.nav-toggle').length) {
      return;
    }
    $('.nav-toggle').removeClass('active');
    $('.navi').removeClass('is-open');
  });
  $('.navi-list > ul > li > a').on('click', function(event) {
    $('.nav-toggle').removeClass('active');
    $('.navi').removeClass('is-open');
  });
});
$(function(){
  $(window).scroll(function(){
    if ($('.mv-ttl').offset().top > $(window).scrollTop() ) {
      $('#header').removeClass('scroll');
    } else
    $('#header').addClass('scroll');
  });
});

if(navigator.userAgent.match(/(iPhone|Android)/)){
$(window).scroll(function() {
  var scroll_len = $(window).scrollTop();
  if ( scroll_len > 300 ) {
    $('#mobile-nav').animate({height: 'show'}, 'slow' );
  } else {
    $('#mobile-nav').animate({height: 'hide'}, 'slow' );
  }
});
}
window.WebFontConfig = {
  google: { families: ['Roboto:wght@500;700;900'] },
  active: function() {
    sessionStorage.fonts = true;
  }
};
(function() {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
if (navigator.userAgent.indexOf('iPhone') > 0) {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('iPhone');
}
if (navigator.userAgent.match(/iPad|Macintosh/) && 'ontouchend' in document) {
  let body = document.getElementsByTagName('body')[0];
  body.classList.add('iPad');
}
var headerHeight = $('#header01').outerHeight();
var urlHash = location.hash;
if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({scrollTop:position}, 500);
    }, 100);
}
$(function () {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
     var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});
var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
if(touch) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}
$.ajax({
  type: 'get',
  url: 'img/common/sprite.svg'
}).done(function(data) {
  var svg = $(data).find('svg');
  $('body').prepend(svg);
});
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(function(){
  $(window).scroll(function (){
      $('.truck-object > img').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('is-truck-anima');
          }
      });
      $('.truck-object1').each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 200){
          $(this).addClass('is-truck-anima2');
        }
    });
    $('.truck-object2').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200){
        $(this).addClass('is-truck-anima3');
      }
  });
  });
});
