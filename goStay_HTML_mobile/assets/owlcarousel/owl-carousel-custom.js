$('#main-carousel-topIndex').owlCarousel({
    loop:true,
    dots:true,
    margin:30,
    nav:true,
    onChanged: callback,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        800:{
            items:3
        },
        1000:{
            items:4
        },
        1200:{
            items:5
        }
    }
});

$('#main-carousel-centerIndex').owlCarousel({
    loop:true,
    navClass: [
        'hide',
        'hide'
    ],
    dots:true,
    margin:30,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
});

$('#main-carousel-promotionIndex').owlCarousel({
    loop:true,
    navClass: [
        'hide',
        'hide'
    ],
    dots:true,
    margin:30,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        },
        1200:{
            items:3
        }
    }
});

$('#main-carousel-locationIndex').owlCarousel({
    loop:true,
    navClass: [
        'hide',
        'hide'
    ],
    dots:true,
    margin:30,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },
        1200:{
            items:6
        }
    }
});


function callback(event) {
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
    });

};