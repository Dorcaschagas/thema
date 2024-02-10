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

var larguraDiv = $(".terceira").width();
$(window).resize(function () {
    larguraDiv = $(".terceira").width();
    if (larguraDiv <= 600) {
        $(".terceira").addClass("text-center");
        $(".lista").addClass("justify-content-center");
    } else {
        $(".terceira").removeClass("text-center");
        $(".lista").removeClass("justify-content-center");
    }
});

$('.divImg').hover(function () {
    $('.seta').toggleClass('d-none')
})

$('.divImgLeft').hover(function () {
    $('.setaLeft').toggleClass('d-none')
})

$('#exterior').removeClass('d-none')

$('.lista li').each(function () {
    var list = ["exterior", "interior", "edition"]
    $(this).click(function () {
        $('.lista li').removeClass('linhaClicada')
        $(this).toggleClass('linhaClicada')
        var nome = $(this).text()

        for (let i = 0; i < list.length; i++) {
            if (nome.toLowerCase() === list[i]) {
                $(`#${list[i]}`).removeClass('d-none')
            } else {
                $(`#${list[i]}`).addClass('d-none'); // Esconder elementos não selecionados
            }
        }
    })
})
