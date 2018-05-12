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
        easing: 'easeInCubic'
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
});