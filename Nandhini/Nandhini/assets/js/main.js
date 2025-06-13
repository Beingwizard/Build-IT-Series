// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Dynamic content loading for sections
    const loadSection = (section) => {
        fetch(`sections/${section}.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => console.error('Error loading section:', error));
    };

    // Event listeners for navigation
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const section = this.getAttribute('href').substring(1);
            loadSection(section);
        });
    });

    // Initial load of the home section
    loadSection('about');
});