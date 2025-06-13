document.addEventListener("DOMContentLoaded", function() {
    // Fade in effect for the main content
    const mainContent = document.querySelector('.main-content');
    mainContent.style.opacity = 0;
    mainContent.style.transition = 'opacity 1s';
    mainContent.style.opacity = 1;

    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const handleScroll = () => {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (elementPosition < viewportHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check for elements in view
});