setTimeout(function () {
    AOS.init({
        mirror: true,
        duration: 800,
        delay: 200,
        easing: 'ease-in-out',
    });
}, 100);

$(document).ready(function () {
    $(".slider").slick();
});

$(document).ready(function () {
    $('.imgInicial').load('html/slide.html');
    $('.letrasSlides').load('html/letrasSlides.html');
    $('.segundaSection').load('html/segundaSection.html');
    $('.terceiraSection').load('html/terceiraSection.html');
    $('.terceiraSection').load('html/letrasSlides.html');
});

$(window).scroll(function () {
    var positionScroll = $(window).scrollTop()
    if (positionScroll > 0) {
        $('.navbar').css("background", "#171717");
        $('.nav-link, .navbar-brand').css("color", "white")
    } else {
        $('.navbar').css("background", "");
        $('.nav-link, .navbar-brand').css("color", "")
    }
})