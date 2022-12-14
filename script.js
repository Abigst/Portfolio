var swiper = new Swiper(".slide-content", {
    slidePerView: 4,
    spaceBetween: 25,
    loop:true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        },
        1600: {
            slidesPerView: 5,
        },
    },
});

