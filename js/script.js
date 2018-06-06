$(function()
{
    
    "use strict"
    
    var $window = $(window);
    
    $window.on('load', function()
    {
        //Initialisation of the height of the Circle in About Section
        var aboutMiddleWidth =  $('.about_main_middle_outer').width();
        $('.about_main_middle_outer').height(aboutMiddleWidth);
    });
    
    $window.on('resize', function()
    {
        //Setting height of the Cirle in About Section Automatically
        var aboutMiddleWidth =  $('.about_main_middle_outer').width();
        $('.about_main_middle_outer').height(aboutMiddleWidth);
    });
    
    //Smooth Scroll
    
    var scroll = new SmoothScroll('a[href*="#"]',
    {
        speed: 500,
        offset: 77,
        easing: 'easeInCubic',
        ignore: '[data-fancybox]'
    });
    
    //Hover Fixes of About Section
    
    $('.about_main_top .about_headings').hover(function()
    {
        $('.about_main_dot_top').css({'background': '#fec600'});
    },function()
    {
        $('.about_main_dot_top').css({'background': '#353535'});
    });
    
    $('.about_main_bottom .about_headings').hover(function()
    {
        $('.about_main_dot_bottom').css({'background': '#fec600'});
    },function()
    {
        $('.about_main_dot_bottom').css({'background': '#353535'});
    });
    
    $('.about_main_left .about_headings').hover(function()
    {
        $('.about_main_dot_left').css({'background': '#fec600'});
    },function()
    {
        $('.about_main_dot_left').css({'background': '#353535'});
    });
    
    $('.about_main_right .about_headings').hover(function()
    {
        $('.about_main_dot_right').css({'background': '#fec600'});
    },function()
    {
        $('.about_main_dot_right').css({'background': '#353535'});
    });
    
    //Hover Fixes of Services Section
    
    $('.services_slide').find('.services_slide_captions').hover(function()
    {
        $(this).closest('.row').find('.services_slide_icon').css({'background': '#fec600', 'height': '100px', 'width': '100px'});
        $(this).closest('.row').find('.services_slide_icon i').css({'font-size': '30px'});
    },function()
    {
        $(this).closest('.row').find('.services_slide_icon').css({'background': '#eee', 'height': '70px', 'width': '70px'});
        $(this).closest('.row').find('.services_slide_icon i').css({'font-size': '22px'});
    });
    
    //Slick Slider
    
    //Banner Slider
    $('.banner_slides_parent').slick(
    {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: '.banner_prev_arrow',
        nextArrow: '.banner_next_arrow',
        responsive:
        [
            {
                breakpoint: 768,
                settings:
                {
                    arrows: false
                }
            }
        ]
    });
    
    //Services Slider
    $('.services_slide_parent').slick(
    {
        vertical: true,
        slidesToShow: 3,
        infinite: true,
        arrows: true,
        prevArrow: '.services_prev_button',
        nextArrow: '.services_next_button',
        autoplay: true,
        autoplaySpeed: 2500,
        responsive:
        [
            {
                breakpoint: 576,
                settings:
                {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    //Team Slider
    $('.team_left_slide_parent').slick(
    {
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        asNavFor: '.team_right_slide_parent',
        prevArrow: '.team_prev_button',
        nextArrow: '.team_next_button',
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        autoplaySpeed: 2500,
    });
    
    $('.team_right_slide_parent').slick(
    {
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        asNavFor: '.team_left_slide_parent',
        autoplay: true,
        autoplaySpeed: 2500,
        responsive:
        [
            {
                breakpoint: 768,
                settings:
                {
                    vertical: false
                }
            }
        ]
    });
    
    //Fancybox
    
    $('[data-fancybox="gallery"]').fancybox(
    {
        loop: true,
        buttons:
        [
            'close'
        ]
    });
    
    //Masonry
    
    $('.portfolio_images_parent').masonry(
    {
        itemSelector: '.portfolio_images_main',
        horizontalOrder: true
    });
});