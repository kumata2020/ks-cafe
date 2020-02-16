// slick
$(document).ready(function () {
    $('.keyvisual-slider').slick({
      autoplay: true, //自動再生
      dots: false, //ドットのナビゲーションを表示
      infinite: true, //スライドのループ有効化
      speed: 1000, //切り替えのスピード（小さくすると速くなる）
      fade: true, //フェードの有効化
    });
});

// ham
$('.ham, .close').on('click', function(){
    $('header, .first-v__wrap, .ham-menu, .catch, .bar1, .bar2, .bar3').toggleClass('active')
})

// scroll
$('.to-concept').click(function () {
    $('body,html').animate({
        scrollTop: $('#concept').offset().top
    }, 1000);
    return false;
});
$('.to-feature').click(function () {
    $('body,html').animate({
        scrollTop: $('#feature').offset().top
    }, 1000);
    return false;
});
$('.to-menu').click(function () {
    $('body,html').animate({
        scrollTop: $('#menu').offset().top
    }, 1000);
    return false;
});
$('.to-coffee').click(function () {
    $('body,html').animate({
        scrollTop: $('#coffee').offset().top
    }, 1000);
    return false;
});
$('.to-access').click(function () {
    $('body,html').animate({
        scrollTop: $('#access').offset().top
    }, 1000);
    return false;
});
