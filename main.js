'use strict';

$(function(){
    $('.contact-icon').hover(function(){
        $(this).animate({
            'font-size' : '20px'
        }, 300);
    },
    function(){
        $(this).animate({
            'font-size' : '17px'
        }, 300);
    }
    );

    $('header a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
            'scrollTop' : position
        }, 500);
    });
});
