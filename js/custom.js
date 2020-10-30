// jQuery(function ($) {
//     $(document).ready(function () {
//         $(".bxslider").bxSlider({
//             // slideWidth: "400",
//             // slideMargin: "200",
//         });
//     });
// });

$(document).ready(function () {
    $(".slider").slick({
        dots: true,
        adaptiveHeight: true,
        // ебучая хуета, из-за которой все пошло по пизде, если true у цикла
        infinite: false,
    });
});

$(document).ready(function () {
    $(".buyers__content").slick({
        dots: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
        ],
    });
});
