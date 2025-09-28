document.addEventListener('DOMContentLoaded', function () {
    const swiperLeft = document.getElementById('swiper_l');
    const swiperRight = document.getElementById('swiper_r');
    const carousselContainer = document.querySelector('.caroussel-container');
    const projects = document.querySelectorAll('.project');
    let currentIndex = 0;

    function updateCarousel() {
        projects.forEach((project, index) => {
            if (index === currentIndex) {
                project.classList.add('active');
            } else {
                project.classList.remove('active');
            }
        });
    }

    swiperLeft.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : projects.length - 1;
        updateCarousel();
    });

    swiperRight.addEventListener('click', function () {
        currentIndex = (currentIndex < projects.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    const hammer = new Hammer(carousselContainer);
    hammer.on('swipeleft', function () {
        currentIndex = (currentIndex < projects.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    hammer.on('swiperight', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : projects.length - 1;
        updateCarousel();
    });

    updateCarousel();
});
