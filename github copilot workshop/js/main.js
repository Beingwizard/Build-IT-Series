document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current nav item
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage.split('/').pop()) {
            link.style.color = getComputedStyle(document.documentElement)
                .getPropertyValue('--secondary-color');
        }
    });
});
