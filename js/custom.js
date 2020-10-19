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
    });
});

$(document).ready(function () {
    $(".buyers__content").slick({
        dots: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
