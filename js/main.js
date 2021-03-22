
var winH, winW;
var headerH;
var hamburgerC;
var navW;
var pathname;
var nowSize = '';

var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

$(function(){

	// $.html5Loader({
    //     filesToLoad: 'js/resource.json',
    //     onBeforeLoad: function () {
    //         //console.log('on BeforeLoad');
    //         $('body').addClass('modal-open');

    //         var loading = bodymovin.loadAnimation({
    //             container: document.getElementById('loading'),
    //             path: 'images/loading.json',
    //             renderer: 'svg',
    //             loop: true,
    //             autoplay: true,
    //         })
    //     },
    //     onComplete: function () {
    //         //console.log('on complete');
    //         TweenMax.to($(".loading"), 1, {autoAlpha:0, delay:1, onComplete:function(){
    //             $('body').removeClass('modal-open');
    //             init()
    //         }})
    //     },
    //     onElementLoaded: function ( obj, elm) {
    //         //console.log(elm);
    //     },
    //     onUpdate: function ( percentage ) {
    //         //console.log(loadingAlpha);
    //     }
    // });

    init();

    var lightning1;
    var lightning2;

	function init(){
        $("header").load("header.html", function(){
            console.log("header done");
            setting();
            setAnimation();

            $(window).on('resize', onResize);
            $(window).on('scroll', onScroll);
            onResize();
            onScroll();
        });

        $(".kv-container").load("kv.html", function(){
            console.log("kv done");

            lightning1 = $('.kv .lightning-1');
            lightning2 = $('.kv .lightning-2');

            $('.anchor').on('click', function(){
                console.log('anchor');
                var anchorTop = $('#anchor').offset().top;
    
                $body.animate({
                    scrollTop: anchorTop - 90
                }, 1000);
    
                return false;
            })
            
            kvAnimation();
        });

        

        // $("footer").load("footer.html", function(){
        //     console.log("footer done");
        // });
    }

    function onScroll(){
        var st = $(window).scrollTop();

        if(st > winH) {
            $('.back-to-top').addClass('active');
        }else{
            $('.back-to-top').removeClass('active');
        }

        //選單背景需要直接出現的頁面
        // if(
        //     pathname.includes('news') || 
        //     pathname.includes('access') || 
        //     pathname.includes('terms') || 
        //     pathname.includes('privacy') ||
        //     pathname.includes('sitemap') ||
        //     pathname.includes('contact') 
        // ){
        //     $('header').addClass('active');
        //     $('header .logo').addClass('active');
        //     return;
        // }
        
        // if(st > winH - 80){
        //     $('header').addClass('active');
        //     $('header .logo').addClass('active');
        // }else{
        //     $('header').removeClass('active');
        //     $('header .logo').removeClass('active');
        // }
    }
    
    function setting(){
        pathname = window.location.pathname;
        var url = window.location.href;
        var urlAry = url.split('?');
        // console.log(pathname.substr(1));

        // $('header nav a').removeClass('active');

        if(urlAry[0].charAt(urlAry[0].length - 1) == '/'){
            $('header .icon-1').addClass('active');
        }else if(pathname.includes('index')){
            $('header .icon-1').addClass('active');
        }else if(pathname.includes('features')){
            $('header .icon-2').addClass('active');
        }else if(pathname.includes('activity')){
            $('header .icon-3').addClass('active');
        }else{
            $('header nav a').removeClass('active');
        }

        // 選單開關
        $(".hamburger").on("click",function(){            
            $('nav').toggleClass('open');
            $('.hamburger').toggleClass('open');
        });

        // back to top
        $('.back-to-top').on('click', function(){
            $body.animate({
                scrollTop: 0
            }, 1000);

            return false;
        });

         // anchor
        $('.anchor').on('click', function(){
            var anchorTop = $('#anchor').offset().top;

            $body.animate({
                scrollTop: anchorTop - 90
            }, 1000);

            return false;
        })
    }

    function onResize(){
        winW = $(window).innerWidth();
        winH = $(window).innerHeight();

        var ctaHeight = $('.cta-container').height();

        $('.cta-container').css('marginTop', -ctaHeight);
        
        if(winW > 992){
            $('nav').removeClass('open');
            $('.hamburger').removeClass('open');
        }

        // page set ratio  
        // var _ratio;

        // if(winW < 768){
        //     _ratio = '100% auto';
        // }else if(winW >= 768 && winW < 1440){
        //     _ratio = (winW / 1440) * 1920 + 'px auto';
        //     console.log(_ratio);
        // }else{
        //     _ratio = '1920px auto'
        // }

        // $('.container > .bg').css('backgroundSize', _ratio);

        // media size
        if(winW < 768){
            if(nowSize == 'xs') return; 
            nowSize = 'xs';
            kvAnimation();
        } else if(winW >= 768 && winW < 992){
            if(nowSize == 'sm') return; 
            nowSize = 'sm';
            kvAnimation();
        }else if(winW >= 992){
            if(nowSize == 'md') return; 
            nowSize = 'md';
            kvAnimation();
        }
        
    }

    function setAnimation(){
        setInterval(ctaAnimation, 100);
    }

    var ctaIconOld = $('.cta-old-member .icon');
    var ctaIconNew = $('.cta-new-member .icon');
    var normalLink = $('.normal-link .lightning');

    function ctaAnimation(){
        var random1X = Math.random()*(10-5)+5;
        var random1Y = Math.random()*(10-3)+3;
        var random2X = Math.random()*(10-5)+5;
        var random2Y = Math.random()*(10-3)+3;
        var random3X = Math.random()*(9-3)+3;
        var random3Y = Math.random()*(2-(-2))+(-2);
       
        TweenMax.set(normalLink, {x: random3X, y:-random3Y});
        TweenMax.set(ctaIconOld, {x: random1X, y:-random1Y});
        TweenMax.set(ctaIconNew, {x: random2X, y:-random2Y});
    }

    var kvTimer;

    function kvAnimation(){
        initKv();
        kvTimer = setInterval(kvLightningAnimation, 100);

        TweenMax.to($('.kv .title'), 0.3, {alpha: 1, scale: 1, delay: 0.5, ease: Back.easeOut});
        TweenMax.to($('.kv .dot'), 0.2, {alpha: 1, scaleY: 1, delay: 0.7, ease: Back.easeOut});
        TweenMax.to($('.kv .sub-title .bg'), 0.4, {alpha: 1, scale: 1, delay: 0.7, ease: Back.easeOut});
        TweenMax.to($('.kv .sub-title .text'), 0.3, {alpha: 1, delay: 1, ease: Back.easeOut});
        if(nowSize == 'xs'){
            TweenMax.to($('.kv .des'), 0.4, {alpha: 1, top: '137%', delay: 1, ease: Back.easeOut});
        }else{
            TweenMax.to($('.kv .des'), 0.4, {alpha: 1, top: '113%', delay: 1, ease: Back.easeOut});
        }

        TweenMax.fromTo($('.kv .richart .hand'), 0.4, {rotation: -20}, {rotation: 15, delay: 1.2, ease: Power3.easeOut});

        if(nowSize == 'xs'){
            TweenMax.to($('.kv .ball'), 0.6, {bezier: {type:"soft", values:[{left:'30%', top:'84%'}, {left:'45%', top:'75%'}, {left:'55%', top:'79%'}], autoRotate:true}, scale: 1, delay: 1, ease: Power3.easeIn});
        }else{
            TweenMax.to($('.kv .ball'), 0.7, {bezier: {type:"soft", values:[{left:'30%', top:'74%'}, {left:'45%', top:'50%'}, {left:'63%', top:'80%'}], autoRotate:true}, scale: 1, delay: 1, ease: Power3.easeIn});
        }

        TweenMax.to($('.kv .ball'), 0.6, {alpha: 0, delay: 1.4, ease: Power3.easeIn});
        TweenMax.to($('.kv .pet-3'), 0.6, {scale: 1, delay: 1.8, ease: Back.easeOut});

        if(nowSize == 'xs'){
            TweenMax.to($('.kv .pet-1'), 0.6, {scale: 1, left: '38%', rotation: 0, delay: 1.8, ease: Back.easeOut});
        }else{
            TweenMax.to($('.kv .pet-1'), 0.6, {scale: 1, left: '53%', rotation: 0, delay: 1.8, ease: Back.easeOut});           
        }
        TweenMax.to($('.kv .pet-2'), 0.6, {scale: 1, left: '74%', rotation: 0, delay: 1.8, ease: Back.easeOut});
        TweenMax.to($('.kv .lightning-1'), 0.2, {alpha: 1, scale: 1, delay: 2.1, ease: Back.easeOut});
        TweenMax.to($('.kv .lightning-2'), 0.2, {alpha: 1, scale: 1, delay: 2.2, ease: Back.easeOut});

        
    }

    function kvLightningAnimation(){
        var random3X = Math.random()*(12-5)+5;
        var random3Y = Math.random()*(12-3)+3;
        var random4X = Math.random()*(12-5)+5;
        var random4Y = Math.random()*(12-3)+3;

        TweenMax.set(lightning1, {x: random3X, y:-random3Y});
        TweenMax.set(lightning2, {x: random4X, y:-random4Y});
    }

    function initKv(){
        clearInterval(kvTimer);

        TweenMax.set($('.kv .title'), {alpha: 0, scale: 0.6});
        TweenMax.set($('.kv .dot'), {alpha: 0, scaleY: 0.2});
        TweenMax.set($('.kv .sub-title .bg'), {alpha: 0, scale: 0});
        TweenMax.set($('.kv .sub-title .text'), {alpha: 0});
        if(nowSize == 'xs'){
            TweenMax.set($('.kv .des'), {alpha: 0, top: '127%'});
        }else{
            TweenMax.set($('.kv .des'), {alpha: 0, top: '103%'});
        }
        if(nowSize == 'xs'){
            TweenMax.set($('.kv .ball'), {alpha: 1, left: '30%', top: '84%', scale: 0.1});
        }else{
            TweenMax.set($('.kv .ball'), {alpha: 1, left: '30%', top: '74%', scale: 0.1});
        }
        TweenMax.set($('.kv .pet-3'), {scale: 0});
        if(nowSize == 'xs'){
            TweenMax.set($('.kv .pet-1'), {scale: 0, left: '48%', rotation: 50});
        }else{
            TweenMax.set($('.kv .pet-1'), {scale: 0, left: '63%', rotation: 50});
        }
        TweenMax.set($('.kv .pet-2'), {scale: 0, left: '63%', rotation: -50});
        TweenMax.set($('.kv .lightning-1'), {alpha: 0, scale: 0.3});
        TweenMax.set($('.kv .lightning-2'), {alpha: 0, scale: 0.3});
    }
});



function goSectionTop(el){
    var spacing = 140;
    var top = $('.' + el).offset().top - spacing;
    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

    $body.animate({
        scrollTop: top
    }, 1000);
}

function goZhTW(){
    var path = location.href;
    var parts = path.split('/');
    var last = parts[parts.length - 1];

    // var reg = new RegExp('web', 'g');
    // var newPath = path.replace(reg, "web/zh-tw");

    location.href = 'zh-tw/' + last;

    console.log(parts);
}
