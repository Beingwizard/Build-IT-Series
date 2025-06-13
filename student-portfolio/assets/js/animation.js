document.addEventListener('DOMContentLoaded', function() {
    // Fade in effect for the main content
    const mainContent = document.querySelector('.main-content');
    mainContent.style.opacity = 0;
    mainContent.style.transition = 'opacity 1s ease-in-out';
    mainContent.style.opacity = 1;

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-bar');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateSkillBars = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const skillLevel = skillBar.dataset.level;
                skillBar.style.width = skillLevel;
                skillBar.style.transition = 'width 1s ease-in-out';
                observer.unobserve(skillBar);
            }
        });
    };

    const observer = new IntersectionObserver(animateSkillBars, options);
    skillBars.forEach(skillBar => {
        observer.observe(skillBar);
    });

    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});