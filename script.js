// Initialize WOW.js for animations
new WOW().init();

// Initialize Stellar.js for parallax
$(window).stellar();

// Initialize Swiper (if used)
var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});

// Initialize Magnific Popup (if used)
$('.popup-link').magnificPopup({
    type: 'image'
});