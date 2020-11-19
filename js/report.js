$('.title-list span:first').on('click',function(){
    $('.title-list span:last').removeClass('title-light');
    $('.title-list span:first').addClass('title-light');
    $('.content-left ul:first').removeClass('content-hidden');
    $('.content-left ul:last').addClass('content-hidden');
})
$('.title-list span:last').on('click',function(){
    $('.title-list span:last').addClass('title-light');
    $('.title-list span:first').removeClass('title-light');
    $('.content-left ul:first').addClass('content-hidden');
    $('.content-left ul:last').removeClass('content-hidden');
})
