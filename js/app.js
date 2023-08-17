$(document).ready(function () {
    // HeroSlider

    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        dots: false,
        navText: ['PREV', 'NEXT'],
        responsive:{
            0:{
                nav: false,
            },
            768:{
                nav: true,
            }
            
        }
    })


});

