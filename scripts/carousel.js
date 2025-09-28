document.addEventListener('DOMContentLoaded', function () {
    const swiperLeft = document.getElementById('swiper_l');
    const swiperRight = document.getElementById('swiper_r');
    const projects = document.querySelectorAll('.project');
    const projectTitle = document.querySelector('.project-title');
    let currentIndex = 0;
    const titles = [
        "Espace-Collaborateur ECS",
        "Weather App",
        "Titre du Projet 3"
    ];

    function updateCarousel() {
        projects.forEach((project, index) => {
            if (index === currentIndex) {
                project.classList.add('active');
            } else {
                project.classList.remove('active');
            }
        });
        projectTitle.textContent = titles[currentIndex];
    }

    swiperLeft.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    swiperRight.addEventListener('click', function () {
        if (currentIndex < projects.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    updateCarousel();
});