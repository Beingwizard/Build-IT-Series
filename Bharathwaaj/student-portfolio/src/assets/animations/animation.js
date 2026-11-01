// This file contains JavaScript code specifically for handling animations on the website.

document.addEventListener('DOMContentLoaded', function() {
    // Enhanced fade-in animation for elements with the class 'fade-in'
    const fadeInElements = document.querySelectorAll('.fade-in');

    const revealOnScroll = () => {
        fadeInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (
                rect.top < window.innerHeight - 60 &&
                rect.bottom > 60
            ) {
                element.classList.add('visible');
            }
        });
    };

    // Initial check
    revealOnScroll();
    // Listen for scroll events
    window.addEventListener('scroll', revealOnScroll);
});