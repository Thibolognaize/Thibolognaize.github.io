// Vérification du support des scroll-driven animations
if (!CSS.supports("animation-timeline: scroll()")) {
    // Calcul de la progression du scroll
    function updateProgressBar() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(window.scrollY / windowHeight, 1);
        progressBar.style.transform = `scaleX(${progress})`;
    }

    // Sélection de la barre de progression
    const progressBar = document.querySelector(".progress-bar");

    // Ajout des event listeners
    window.addEventListener("scroll", updateProgressBar, { passive: true });
    window.addEventListener("resize", updateProgressBar, { passive: true });

    // Initialisation
    updateProgressBar();
}
