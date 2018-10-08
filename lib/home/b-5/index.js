$(function() {
    if ($('.canhcam-carousel-3 .owl-carousel').length) {
        $('.canhcam-carousel-3 .owl-carousel').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            items: 2,
            false: true,
            loop: false,
            center: false,
            padding: 10,
            margin: 10,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            nav: true,
            dots: false,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            callbacks: true,
            responsive: {
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 4
                },
                1140: {
                    items: 5
                }
            }
        });
    }

});