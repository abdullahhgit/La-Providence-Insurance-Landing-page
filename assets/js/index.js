$('.second-dropdown').hover(function () {
    $(this).find('.dropdown-container').slideDown(400);
    $(this).addClass("opened");
}, function () {
    $(this).find('.dropdown-container').slideUp(400);
    $(this).removeClass("opened");
});

$('.secondary-dropdown').hover(function () {
    $('.nav-secondary').find('.sub-dropdown').slideDown(400);
    $(this).addClass("opened");
}, function () {
    $('.nav-secondary').find('.sub-dropdown').slideUp(400);
    $(this).removeClass("opened");
});

$(".search-submit").click(function () {
    $(this).toggleClass("opened");
    $(".search-placeholder").toggleClass("opened");
});

$(document).ready(function () {
    $('.cart-slider').slick({
        slidesToShow: 3,
        autoplay: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 3,
                    infinite: false,
                    autoplay: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: false,
                }
            },
        ]
    });
});

$(document).ready(function () {
    $('.slider-holder').slick({
        slidesToShow: 3.5,
        autoplay: false,
        arrows: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 3.5,
                    infinite: false,
                    autoplay: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: false,
                    arrows: false,
                }
            },
        ]
    });
});