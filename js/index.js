$(function(){
  var ww;
  var nowId = 1;
  var size = '';

  function init(){
    $(window).on('resize', onResize);
    onResize();

    $('.prev').on('click', function(){
      if(nowId <= 1) return false;

      TweenMax.to($('.item-' + nowId), 0.6, {x: ww, autoAlpha: 0, ease: Power3.easeOut});
      nowId--;
      TweenMax.set($('.item-' + nowId), {x: -ww, ease: Power3.easeOut});
      TweenMax.to($('.item-' + nowId), 0.6, {x: 0, autoAlpha: 1, ease: Power3.easeOut});

      return false;
    });

    $('.next').on('click', function(){
      if(nowId >= 3) return false;

      TweenMax.to($('.item-' + nowId), 0.6, {x: -ww, autoAlpha: 0, ease: Power3.easeOut});
      nowId++;
      TweenMax.set($('.item-' + nowId), {x: ww, ease: Power3.easeOut});
      TweenMax.to($('.item-' + nowId), 0.6, {x: 0, autoAlpha: 1, ease: Power3.easeOut});

      return false;
    });
    
    var pos = [
      {left: 50, top: 20},
      {left: 50, top: 30},
      {left: 50, top: 20},
    ]

    // $('.item').on('mousemove', function(e){
    //   var id = $(this).data('id');
    //   var box1 = $(this).find('.box-1');
    //   var box2 = $(this).find('.box-2');

    //   var _left = $(this).offset().left;
    //   var _top = $(this).offset().top;
    //   var _x = (e.pageX - _left) * 0.02;
    //   var _y = (e.pageY - _top) * 0.01;

    //   var moveX1 = pos[id].left - _x + '%';
    //   var moveY1 = pos[id].top - _y + '%';
    //   var moveX2 = pos[id].left + _x + '%';
    //   var moveY2 = pos[id].top + _y + '%';

    //   TweenMax.to(box1, 0.6, {top: moveY1, left: moveX1, ease: Power3.easeOut, delay: 0.1});
    //   TweenMax.to(box2, 0.6, {top: moveY2, left: moveX2, ease: Power3.easeOut, delay: 0.1});
    // });
  }
  init();

  function onResize(){
    ww = $(window).innerWidth();

    if(ww < 992){
      if(size == 'xs') return;
      size = 'xs';

      nowId = 1;
      TweenMax.set($('.item-1'), {autoAlpha: 1});
      TweenMax.set($('.item-2'), {autoAlpha: 0});
      TweenMax.set($('.item-3'), {autoAlpha: 0});
    }else{
      if(size == 'md') return;
      size = 'md';

      TweenMax.set($('.item-1'), {x: 0, autoAlpha: 1});
      TweenMax.set($('.item-2'), {x: 0, autoAlpha: 1});
      TweenMax.set($('.item-3'), {x: 0, autoAlpha: 1});
    }
  }
  
});