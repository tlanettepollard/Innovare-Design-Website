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

// Projects Slider
$('#projects-slider').owlCarousel({
    loop: true,
    nav: false,
    items: 2,
    dots: true,
    smartSpeed: 600,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2,
            margin: 8,
        }
    }
})

//Reviews Slider 
