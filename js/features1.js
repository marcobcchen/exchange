$(function(){
  var ww;
  var contentId_2 = 0;
  var contentId_4 = 0;
  var timer;

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

    // timer =setInterval(slide, 10);
  }
  init();

  function onResize(){
    ww = $(window).innerWidth();
  }

  function animation(){
    TweenMax.to($('.content-1 .des .icon'), .6, {rotation: -20, yoyo: true, repeat: -1, ease: Power2.easeOut});

    var _w = $('.text-img-1 .text').innerWidth();

    // TweenMax.fromTo($('.text-img-1 .text'), 3, {x: 0}, {x: -ww, ease: Power0.easeNone, repeat: -1, delay: 0.1});
    // TweenMax.fromTo($('.text-img-3 .text'), 1, {x: 0}, {x: 170, ease: Power0.easeNone, repeat: -1, yoyo: true, delay: 1});
    // TweenMax.fromTo($('.text-img-2 .text'), 1, {x: 170}, {x: 0, ease: Power0.easeNone, repeat: -1, yoyo: true, delay: 0.2});
    // TweenMax.fromTo($('.text-img-4 .text'), 1, {x: 170}, {x: 0, ease: Power0.easeNone, repeat: -1, yoyo: true, delay: 2});
  }

  var space = 0;

  function slide(){
    space = 2;
    // console.log(0-space);
    // $('.text-img-1 .text-1').css('left', text_1_1 1);
    // $('.text-img-1 .text-2').css('left', text_1_2 - 1);
    
    var text_1_1 = parseInt($('.text-img-1 .text-1').css('left'));
    var text_1_2 = parseInt($('.text-img-1 .text-2').css('left'));
    var text_3_1 = parseInt($('.text-img-3 .text-1').css('left'));
    var text_3_2 = parseInt($('.text-img-3 .text-2').css('left'));
    var text_2_1 = parseInt($('.text-img-2 .text-1').css('left'));
    var text_2_2 = parseInt($('.text-img-2 .text-2').css('left'));
    var text_4_1 = parseInt($('.text-img-4 .text-1').css('left'));
    var text_4_2 = parseInt($('.text-img-4 .text-2').css('left'));

    if(text_1_1 < -2164){
      $('.text-img-1 .text-1').css('left', 2163);
    } else{
      TweenMax.set($('.text-img-1 .text-1'), {left: text_1_1 - space});
    }
    if(text_1_2 < -2164){
      $('.text-img-1 .text-2').css('left', 2163);
    } else{
      TweenMax.set($('.text-img-1 .text-2'), {left: text_1_2 - space});
    }

    if(text_3_1 < -2164){
      $('.text-img-3 .text-1').css('left', 2163);
    } else{
      TweenMax.set($('.text-img-3 .text-1'), {left: text_3_1 - space});
    }
    if(text_3_2 < -2164){
      $('.text-img-3 .text-2').css('left', 2163);
    } else{
      TweenMax.set($('.text-img-3 .text-2'), {left: text_3_2 - space});
    }

    if(text_2_1 > 2164){
      $('.text-img-2 .text-1').css('left', -2163);
    } else{
      TweenMax.set($('.text-img-2 .text-1'), {left: text_2_1 + space});
    }
    if(text_2_2 > 2164){
      $('.text-img-2 .text-2').css('left', -2163);
    } else{
      TweenMax.set($('.text-img-2 .text-2'), {left: text_2_2 + space});
    }

    if(text_4_1 > 2164){
      $('.text-img-4 .text-1').css('left', -2163);
    } else{
      TweenMax.set($('.text-img-4 .text-1'), {left: text_4_1 + space});
    }
    if(text_4_2 > 2164){
      $('.text-img-4 .text-2').css('left', -2163);
    } else{
      TweenMax.set($('.text-img-4 .text-2'), {left: text_4_2 + space});
    }
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