$(function(){
  var ww;
  var _w;
  var nowId = 0;
  var size = '';
  var timer;

  function init(){
    $(window).on('resize', onResize);
    onResize();

    content();

    $('.q-container').on('click', function(){
      var answer = $(this).parent().find('.a-container');

      if(answer.css('display') == 'none'){
        $(this).addClass('active');
        answer.slideDown();
      }else{
        $(this).removeClass('active');
        answer.slideUp();
      }
    });

    $('.content-1 .normal-link').on('click', function(){
      $('.lb-container').fadeIn();
      return false;
    });

    $('.lb-container .lb-close').on('click', function(){
      $('.lb-container').fadeOut();
      return false;
    });

    $('.lb-container .tab-1').on('click', function(){
      $('.lb-container .tab a').removeClass('active');
      $(this).addClass('active');

      $('.lb-container .price-1').show();
      $('.lb-container .price-2').hide();
      return false;
    });

    $('.lb-container .tab-2').on('click', function(){
      $('.lb-container .tab a').removeClass('active');
      $(this).addClass('active');

      $('.lb-container .price-2').show();
      $('.lb-container .price-1').hide();
      return false;
    });
  }
  init();

  function onResize(){
    ww = $(window).innerWidth();
    _w = $('.content-1 .list .item').innerWidth();

    if(ww < 768){
      if(size == 'xs') return;
      size = 'xs';

      $('.step').hide();
      $('.step-' + nowId).show();
      $('.step .num').removeClass('active');

      reset();
      clearInterval(timer);
    }else if(ww >= 768 && ww < 992){
      if(size == 'sm') return;
      size = 'sm';

      $('.step').show();

      reset();
      clearInterval(timer);
    }else{
      if(size == 'md') return;
      size = 'md';

      $('.step').show();

      nowId = 0;
      timer = setInterval(autoPlay, 3000);
    }

    if(ww < 992){
      $('.item').removeClass('active');
    }
  }

  function reset(){
    console.log('reset');
    nowId = 0;

    contentScroll();
  }

  function autoPlay(){
    
    contentClick();
    nowId < 2 ? nowId++ : nowId = 0;
  }

  function content(){
    $('.content-1 .prev').on('click', function(){
      if(nowId > 0){ nowId-- }

      contentScroll();
      return false;
    });

    $('.content-1 .next').on('click', function(){
      if(nowId < 2){ nowId++ }

      contentScroll();
      return false;
    });

    $('.step').on('click', function(){
      if(ww < 768) return;

      nowId = $(this).data('id');
      
      if(ww >= 768 && ww < 992){
        $('.step .num').removeClass('active');
        $('.step-' + nowId + ' .num').addClass('active');

        contentScroll();
      }

      if(ww >= 992){
        contentClick();
      }
    });
  }

  function contentClick(){
    $('.item').removeClass('active');
    $('.item-' + nowId).addClass('active');

    $('.step .num').removeClass('active');
    $('.step-' + nowId + ' .num').addClass('active');
  }

  function contentScroll(){
    $('.content-1 .list').animate({
      scrollLeft: _w * nowId
    }, 600);

    if(ww < 768){
      $('.step').hide();
      $('.step-' + nowId).show();
    }else{
      $('.step').show();
    }

    if(ww >= 768 && ww < 992){
      $('.step .num').removeClass('active');
      $('.step-' + nowId + ' .num').addClass('active');
    }
  }
});