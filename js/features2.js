$(function(){
  TweenMax.fromTo(
    $('.richart .hand'), 
    1, 
    {rotation: 10}, 
    {rotation: -10, ease: Power2.easeNone, repeat: -1, yoyo: true, delay: 0.1}
  );

  function init(){
    $(window).on('scroll', onScroll);
    onScroll();

    TweenMax.set($('.item-1 .item-center'), {alpha: 0});
    TweenMax.set($('.item-2 .item-center'), {alpha: 0});
    TweenMax.set($('.item-3 .item-center'), {alpha: 0});
    TweenMax.set($('.item-4 .item-center'), {alpha: 0});
    TweenMax.set($('.item-5 .item-center'), {alpha: 0});
  }

  function onScroll(){
    var st = $(window).scrollTop();

    if(st > $('.bg-1').offset().top){
      animation();
    }
  }

  function animation(){
    TweenMax.to($('.item-1 .item-center'), 0.4, {alpha: 1, delay: 0});
    TweenMax.to($('.item-2 .item-center'), 0.4, {alpha: 1, delay: 0.4});
    TweenMax.to($('.item-3 .item-center'), 0.4, {alpha: 1, delay: 0.8});
    TweenMax.to($('.item-4 .item-center'), 0.4, {alpha: 1, delay: 1.2});
    TweenMax.to($('.item-5 .item-center'), 0.4, {alpha: 1, delay: 1.6});
  }

  init();
});