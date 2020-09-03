'use strict';

$(function(){
    $('header a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
            'scrollTop' : position
        }, 500);
    });

    $('.index-btn').click(function() {
        $('.active').removeClass('active');
        var clickedIndex = $('.index-btn').index($(this));
        $('.song').eq(clickedIndex).addClass('active');
      });    

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

});
