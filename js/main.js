$(document).ready(function() {


        /* Back top */
        var scroll = function() {
            if ($(this).scrollTop() > 200) {
                $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
            }

            var about = $('#about'),
                controls = $('#controls'),
                screenshots = $('#screenshots'),
                demo = $('#demo'),
                mouse = $('#about');

            if (about.length !== 0 && 
                controls.length !== 0 &&
                screenshots.length !== 0 &&
                demo.length !== 0 &&
                mouse.length !== 0) {

                // nav-header elem active class change

                var aboutTop = about.offset().top,
                    controlsTop = controls.offset().top,
                    screenshotsTop = screenshots.offset().top,
                    demoTop = demo.offset().top;

                if ($(this).scrollTop() +110 >= demoTop) {
                    $('.active').removeClass('active');
                    $('.smoothScroll-demo').addClass('active');
                } else if ($(this).scrollTop() + 110 >= screenshotsTop){
                    $('.active').removeClass('active');
                    $('.smoothScroll-screenshots').addClass('active');
                } else if($(this).scrollTop() + 110 >= controlsTop) {
                    $('.active').removeClass('active');
                    $('.smoothScroll-controls').addClass('active');
                } else if ($(this).scrollTop() + 110 >= aboutTop || $(this).scrollTop() + 110 >= mouse) {
                    $('.active').removeClass('active');
                    $('.smoothScroll-about').addClass('active');
                    $('.mouse').addClass('active');
                }         
            }
        };

        /* Animate the scroll to top */
        $('.go-top').click(function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 300);
        });

        /* Animate the scroll menu-link tosection */
        $(".header-navigation-link").click(function(e) {
            e.preventDefault();
            closeMenu();
            var pos = $($(this).attr("href")).offset().top - 54;
            $("html, body").animate({
                scrollTop: pos + "px"
            });
            
            return false;
        });

        $(".mouse").click(function(e) {
            e.preventDefault();
            var pos = $($(this).attr("href")).offset().top - 54;
            $("html, body").animate({
                scrollTop: pos + "px"
            }, {
                duration: 500
            });
            return false;
        });

        /* close popup */   
        function closePopup() {
            $('html').removeClass('popup-opened');
            $('.popup-wrapper').fadeOut();
            $('.img-popup').each(function(index, item) {
                $(item).fadeOut();
            });
        };

        $('.popup-close').click(function(){
            closePopup();
        });

        $('.popup-wrapper').click(function(e){
            closePopup();
        });

        $('.popup-container').click(function(e) {
            e.stopPropagation();
        });

        $('.img-small').click(function(e){
            e.preventDefault();
            $('html').addClass('popup-opened');
            $('.popup-wrapper').fadeIn();
            var target = $(this);
            if (target.hasClass('img1')) {
                $('.img-popup.img1').fadeIn();
            } else if (target.hasClass('img2')) {
                $('.img-popup.img2').fadeIn();
            }else if (target.hasClass('img3')) {
                $('.img-popup.img3').fadeIn();
            } else if (target.hasClass('img4')) {
                $('.img-popup.img4').fadeIn();
            } else if (target.hasClass('img5')) {
                $('.img-popup.img5').fadeIn();
            } else if (target.hasClass('img6')) {
                $('.img-popup.img6').fadeIn();
            }
        });

    /* hamburger */
        $('div.hamburger').click(function(){
            if( !$(this).hasClass('open') ){openMenu(); } 
            else { closeMenu(); }
        });
    
        function openMenu(){
            $('div.circle').addClass('expand');
            $('div.hamburger').addClass('open');    
            $('span.x, span.y, span.z').addClass('collapse');
            $('.header-navigation li').addClass('animate');
            $('.order-link-container').addClass('animate');
            $('.header-phone').addClass('animate');
        
            setTimeout(function(){ 
                $('span.y').hide(); 
                $('span.x').addClass('rotate30'); 
                $('span.z').addClass('rotate150'); 
            }, 70);

            setTimeout(function(){
                $('span.x').addClass('rotate45'); 
                $('span.z').addClass('rotate135');  
            }, 120);
        };
    
        function closeMenu(){

            $('div.hamburger').removeClass('open'); 
            $('span.x').removeClass('rotate45').addClass('rotate30'); 
            $('span.z').removeClass('rotate135').addClass('rotate150');             
            $('div.circle').removeClass('expand');
            $('.header-navigation li').removeClass('animate');
            $('.order-link-container').removeClass('animate');
            $('.header-phone').removeClass('animate');
        
            setTimeout(function(){          
                $('span.x').removeClass('rotate30'); 
                $('span.z').removeClass('rotate150');           
            }, 50);
            setTimeout(function(){
                $('span.y').show(); 
                $('span.x, span.y, span.z').removeClass('collapse');
            }, 70);                                                 
        };

        $.extend({
            throttle : function(fn, timeout, ctx) {
                var timer, args, needInvoke;
                return function() {
                    args = arguments;
                    needInvoke = true;
                    ctx = ctx || this;
                    if(!timer) {
                        (function() {
                            if(needInvoke) {
                                fn.apply(ctx, args);
                                needInvoke = false;
                                timer = setTimeout(arguments.callee, timeout);
                            }
                            else {
                                timer = null;
                            }
                        })();
                    }
                };
            }
        });
    
        $(window).scroll($.throttle(scroll, 500));
//answer***********************
});