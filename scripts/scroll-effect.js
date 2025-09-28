let hasScrolled = false;

window.addEventListener('scroll', function () {
    var intro = document.querySelector('.intro');
    var content = document.querySelector('.content');
    var overlay = document.querySelector('.overlay');
    if (window.scrollY > 0 && !hasScrolled) {
        intro.classList.add('hide');
        content.classList.add('show');
        hasScrolled = true;
        overlay.style.display = 'block';
        setTimeout(function () {
            intro.style.display = 'none';
            overlay.style.display = 'none';
        }, 1000);
    }
});