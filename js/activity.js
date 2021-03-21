$(function(){
  var times = 0;
  var timer;

  function init(){
    $(window).on('scroll', onScroll);
    onScroll();

    TweenMax.to($('.content-1 .title .icon'), .6, {rotation: -20, yoyo: true, repeat: -1, ease: Power2.easeOut});
    TweenMax.set($('.item-1 .item-center'), {alpha: 0});
    TweenMax.set($('.item-2 .item-center'), {alpha: 0});
    TweenMax.set($('.item-3 .item-center'), {alpha: 0});
    TweenMax.set($('.big-ball .smoke'), {scale: 0.6, alpha: 0});

    timer = setInterval(loop, 100);
  }

  function onScroll(){
    var st = $(window).scrollTop();

    if(st > $('.content-3').offset().top){
      animation();
    }
  }

  function animation(){
    TweenMax.to($('.item-1 .item-center'), 0.4, {alpha: 1, delay: 0});
    TweenMax.to($('.item-2 .item-center'), 0.4, {alpha: 1, delay: 0.4});
    TweenMax.to($('.item-3 .item-center'), 0.4, {alpha: 1, delay: 0.8});
  }

  function loop(){
    if(times > 20){
      clearInterval(timer);
      TweenMax.to($('.big-ball .smoke-1'), 0.2, {scale: 1, alpha: 1, ease: Power3.easeOut, delay: 0.18});
      TweenMax.to($('.big-ball .smoke-2'), 0.3, {scale: 1, alpha: 1, ease: Power3.easeOut, delay: 0.1});
      TweenMax.to($('.big-ball .smoke-3'), 0.2, {scale: 1, alpha: 1, ease: Power3.easeOut, delay: 0.18});
      TweenMax.to($('.big-ball .smoke-4'), 0.2, {scale: 1, alpha: 1, ease: Power3.easeOut, delay: 0.18});
      TweenMax.to($('.big-ball .smoke-5'), 0.3, {scale: 1, alpha: 1, ease: Power3.easeOut, delay: 0.1, onComplete: reset});
    }

    times++;
    var random1X = Math.random()*(15-8)+8;
    var random1Y = Math.random()*(15-8)+8;
    
    TweenMax.set($('.big-ball'), {x: random1X, y:-random1Y});
  }

  function reset(){
    times = 0;
    TweenMax.to($('.big-ball .smoke'), 0.2, {alpha: 0, ease: Power3.easeOut, delay:2, onComplete: reStart});
  }

  function reStart(){
    TweenMax.set($('.big-ball .smoke'), {scale: 0.6, alpha: 0});
    timer = setInterval(loop, 100);
  }

  init();
});