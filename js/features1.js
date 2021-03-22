$(function(){
  var ww;
  var contentId_2 = 0;
  var contentId_4 = 0;

  function init(){
    $(window).on('resize', onResize);
    onResize();

    content4();
    content2();
    animation();

    $('.content-1 .normal-link').on('click', function(){
      $('.lb-container').fadeIn();
      return false;
    });

    $('.lb-container .lb-close').on('click', function(){
      $('.lb-container').fadeOut();
      return false;
    });
  }
  init();

  function onResize(){
    ww = $(window).innerWidth();
  }

  function animation(){
    TweenMax.to($('.content-1 .des .icon'), .6, {rotation: -20, yoyo: true, repeat: -1, ease: Power2.easeOut});

    var _w = $('.text-img-1 .text').innerWidth();

    TweenMax.fromTo($('.text-img-1 .text'), 1, {x: 0}, {x: 170, ease: Power0.easeNone, repeat: -1, yoyo: true, delay: 0.1});
    TweenMax.fromTo($('.text-img-3 .text'), 1, {x: 0}, {x: 170, ease: Power0.easeNone, repeat: -1, yoyo: true, delay: 1});
    TweenMax.fromTo($('.text-img-2 .text'), 1, {x: 170}, {x: 0, ease: Power0.easeNone, repeat: -1, yoyo: true, delay: 0.2});
    TweenMax.fromTo($('.text-img-4 .text'), 1, {x: 170}, {x: 0, ease: Power0.easeNone, repeat: -1, yoyo: true, delay: 2});
  }

  function content2(){
    var _w2 = $('.content-2 .list .item').innerWidth();

    $('.content-2 .prev').on('click', function(){
      if(contentId_2 > 0){
        contentId_2--
      }
      // TweenMax.to($('.content-2 .list'), 0.6, {scrollTo: {x: _w2 * contentId_2, ease: Power3.easeOut}});
      $('.content-2 .list').animate({
        scrollLeft: _w2 * contentId_2
      }, 600);
      return false;
    });

    $('.content-2 .next').on('click', function(){
      if(contentId_2 < 2){
        contentId_2++
      }
      // TweenMax.to($('.content-2 .list'), 0.6, {scrollTo: {x: '100'}});

      $('.content-2 .list').animate({
        scrollLeft: _w2 * contentId_2
      }, 600);
      return false;
    });
  }

  function content4(){
    var _w4 = $('.content-4 .list .item').innerWidth();

    $('.content-4 .prev').on('click', function(){
      if(contentId_4 > 0){
        contentId_4--
      }
      // TweenMax.to($('.content-4 .list'), 0.6, {scrollTo: {x: _w4 * contentId_4, ease: Power3.easeOut}});
      $('.content-4 .list').animate({
        scrollLeft: _w4 * contentId_4
      }, 600);
      return false;
    });

    $('.content-4 .next').on('click', function(){
      if(contentId_4 < 4){
        contentId_4++
      }
      // TweenMax.to($('.content-4 .list'), 0.6, {scrollTo: {x: _w4 * contentId_4, ease: Power3.easeOut}});
      $('.content-4 .list').animate({
        scrollLeft: _w4 * contentId_4
      }, 600);
      return false;
    });
  }
  
});