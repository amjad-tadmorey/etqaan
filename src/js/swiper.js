// Define a function to determine the screen size
let slideEffect;

function getScreenSize() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        slideEffect = "slide";
    } else if (window.matchMedia("(min-width: 601px)").matches) {
        slideEffect = "coverflow";
    }
}
getScreenSize()

const swiper = new Swiper('.swiper-container', {
    effect: slideEffect,
    centeredSlides: true,
    slidesPerView: 'auto', // Always show 3 slides
    loop: true, // Enables infinite looping
    spaceBetween: 50, // Space between slides
    coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 1000,
});
const swiper2 = new Swiper('.swiper-container-2', {
    centeredSlides: true,
    slidesPerView: 'auto', // Always show 3 slides
    loop: true, // Enables infinite looping
    spaceBetween: 30, // Space between slides

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 0,           // No delay, starts immediately
        disableOnInteraction: false, // Keep autoplay running even on interaction
    },
    speed: 8000,
});
