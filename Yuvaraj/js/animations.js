// animations.js
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.animate');

    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
    });

    window.addEventListener('scroll', () => {
        elementsToAnimate.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.classList.add('slide-up');
            }
        });
    });
});

// CSS classes for animations
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        opacity: 0;
        transition: opacity 0.5s ease-in;
    }
    .fade-in.slide-up {
        opacity: 1;
        transform: translateY(0);
    }
    .slide-up {
        transform: translateY(20px);
    }
`;
document.head.appendChild(style);