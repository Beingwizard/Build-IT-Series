// 8-Bit Portfolio Interactivity

// Sound effects for button presses - retro beep sound
const playButtonSound = () => {
    const audio = new Audio();
    audio.volume = 0.2;
    audio.src = 'data:audio/wav;base64,UklGRiQEAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAEAAD+/wQA8/8YAP3/9v/+/+3/9P8RAOD/9P8fAP//7v/N/yAA2f8HADUAAQD5//j/KwD3/zkAwf8qAOX/4//6/wMA+f8UAOL/FQADACAAHwD//xcACgAjAP//AQDr/xQA7v8CAOD/AAD//xcA4/8GAPT/8/8JAPT/+v/8/9r/BQD//wEABgD7/+7/9//1//T/AgDc/wAA8P8GAAEA/P8GAAUA9//7/wMA/f8EAO//BQAAAPP/BAD//wQA+//3/wMA+P8CAOf/+v8DAPX/+v/0//D/+//3//j/9f/7//j//v8BAPD/+v/1//z/+f/8//n/9//2//X/+//5//f//P/4//r/+//3//r/+f/7//r/+v/6//v/+f/8//n/+//7//v/+//8//v//P/8//3//v/+////AAAAAP//AAD///7///8AAP7///8AAP7///8BAP7/AAAAAP7///8AAP////8AAP////8AAP//AAD//wAA//8AAP//AAAAAAAAAAD//wAA//8AAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
    audio.play();
};

// Add play jump sound effect
const playJumpSound = () => {
    const audio = new Audio();
    audio.volume = 0.2;
    audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAACABAAZGF0YVYGAACBhYqFbF1fdJmru6eIh4ukub6rhGBhdJ+xvLKkkJCjt7+2mHdyeZOirrOxqqGlsru8rImEkZ+vtLu7r6Ccpa+zrpGEkJyorrq9r5aQnrK9uqF8eIufu7+zmIWHm7C+u6iVkIuNlrfFvJyamKe1xbujiYOKpLrEtpuRkJunrsK9p4aDiZemuL+1nJOVm6GxvbKejYyTl6a7xbeplpWepLnJuqOQiIiSprfEuaaYlZqdpsHEto+Fio+ZqL7ItJ6Wl5yjtMC2nY2JjJeqvciyoJiYm6Cyw7qhkISHjJevwMuxopmbnKGvwr2mkoCEjJ6xwsapjoyQn7bLwKaLfoOWrcDHtJmRkZqru8e6pI2DiJOktMOzop2aoaatu72vjoGCjJqqvc6tk4eNnrPIxK2QgYOVprbAs5+Zmp+ntcS+qIt9hpipv8qxlYuOna/Fx6+RgYSWp7jDtaCZm6CotcS9p4t9hpmrwMqxlYuOna/Fx6+RgYSWp7jDtaCZm6CotcS9p4t9hpmrwMqxlIqOnbDGx66Pf4OWqrrEtJ6XmqCpuMS7pIh7hZyuw8mujYaLnbHGyqyNfoGUpbfCtJ6Wm6OsucS6o4Z4g5yuxsmujYaLnbHGyqyNfoGUpbfCtJ6Wm6OsucS6o4Z4g5yuxsmujYWLnrPHyaqKe4CUpbjDs5yUmqOsu8W4oIV3hJ6xx8qri4OJnLLIy6mJeX+Tpbe/sZqSmqStvMa3n4R2g56yyMuriYGHm7PHy6mIeH2RpLa/sZqSmqStvMa3n4R2g56yyMuriYGHm7PHy6mIeH2RpLa/sZqSm6WvvcezmoFzhJ+1zM6ogoCImrTKzaeEcnqQpLnFtZiQmKWwwsq2moJzhaCzx8amhH+Fm7TJyaWCcXiOpLnEtJePl6SwwMi2moNzhaCzx8amhH+Fm7TJyaWCcXiOpLnEtJePl6SwwMi2moNzhaCzx8amhH+EnLXKyKOAcHaOpbvFs5WNlaSvwcm2mYJyhJ+yx8WlgX2Em7TJyaWCcXiOpLnEtJePl6SwwMi2moNzhaCzx8amhH+Fm7TJyaWCcXiOpLnEtJePl6SwwMi2moNzhaCzx8amhH+EnLXKyKOAcHaOpbvFs5WNlaSvwcm2mYJyhJ+yx8WlgX2EnLXKyKOAcHaOpbvFs5WNlaSvwcm2mYJyhJ+yx8WlgX2EnLXKyKOAcHaOpbvFs5WNlaSvwcm2mYJyhJ+yx8WlgX2EnLXKyKOAcHaOpbvFs5WNlaSvwcm2mYJyhJ+yx8WlgX2Em7TJyaWCcXiOpLnEtJePl6SwwMi2moNzhaCzx8amhH+Fm7TJyaWCcXiOpLnEtJePl6SwwMi2moNzhaCzx8amhH+Fm7TJyaWCcXiOpLnEtJePl6SwwMi2moNzhaCzx8amhH+EnLXKyKOAcHaOpbvFs5WNlaSvwcm2mYJyhJ+yx8WlgX2Em7TJyaWCcXiOpLnEtJePl6SwwMi2moNzhaCzx8amhH+Fm7TJyaWCcXiOpLnEtJePl6SwwMi2moNzhaCzx8alg36Fm7TIyKSBcHaOpLrEs5WOlaSwwcm1mIFwhJ+0yMalg36Fm7TIyKSBcHaOpLrEs5WOlaSvwcm1mIFwhJ+0yMalg36Fm7TIyKSBcHaOpLrEs5WOlaSvwcm1mIFwg56yx8Wkg36EnLPHx6N/b3WNorrEs5WOlqWvwci0l4BvhJ+0yMalg36EnLPHx6N/b3WNorrEs5WOlqWvwci0l4BvhJ+0yMalg36EnLPHx6N/b3WNorrEs5WO';
    audio.play();
};

// Add power-up sound effect
const playPowerUpSound = () => {
    const audio = new Audio();
    audio.volume = 0.3;
    audio.src = 'data:audio/wav;base64,UklGRngGAABXQVZFZm10IBAAAAABAAEARKwAAESsAAACABAAZGF0YVQGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEAAAAAAAAFCw8NDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAQAAAAAAAAACAQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/PEVefp2WY////7BIQgNMZ3J8jqXBv8XGwa2VcUgxAAAAECZJb4eZpLezr5aDWDQdCw0YL0Zba3yKlZ6gmo+CdGNRPSwZAAAAAAAAAAAAAAAAAAAAAAAAGjVTdJa33e304sCYdlAwHw4QIkJkiq7Z9vbSmnxQJwAAAAAAAAAAAAAAAAAAAAAAAAAAACdKY32fxer7/+e1fUcdAAAAMVuKqM70///PjVspAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYqVn2k2v7/2IdNIAAAAAAlVIuq3fn/sFlCEwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABtBfa7g8suJTyYAAAAAAAA0Y47A+tmFQBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCZq1P//o0sZAgAAAAAAAC9uy/LIdzsQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK57y45lJHgAAAAAAAAAzcs30p0IUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI0P//YCgCAAAAAAAAADSY//9fIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABo//9MFQAAAAAAAAAAnP//TRMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATv//SQIAAAAAAAAA0P//LQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==';
    audio.play();
};

// Add game over sound effect
const playGameOverSound = () => {
    const audio = new Audio();
    audio.volume = 0.3;
    audio.src = 'data:audio/wav;base64,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';
    audio.play();
};

document.addEventListener('DOMContentLoaded', function() {
    // Game link hover effects
    const gameLinks = document.querySelectorAll('.game-link');
    gameLinks.forEach((link, index) => {
        // Add sound on hover
        link.addEventListener('mouseenter', function() {
            playButtonSound();
            this.classList.add('power-up');
            setTimeout(() => {
                this.classList.remove('power-up');
            }, 300);
        });
        
        // Make links navigable with keyboard
        link.setAttribute('tabindex', '0');
        
        // Arrow key navigation within game links
        link.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const nextLink = gameLinks[index + 1] || gameLinks[0];
                nextLink.focus();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prevLink = gameLinks[index - 1] || gameLinks[gameLinks.length - 1];
                prevLink.focus();
            } else if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Project button interactions
    const projectButtons = document.querySelectorAll('.project-button');
    projectButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            playButtonSound();
            this.classList.add('power-up');
            setTimeout(() => {
                this.classList.remove('power-up');
            }, 300);
        });
    });

    // Navigation button interactions
    const navLinks = document.querySelectorAll('.project-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            playButtonSound();
        });
    });

    // Enhanced contact link handling
    const contactLinks = document.querySelectorAll('a[href*="#contact"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // If it's an internal page link
            if (link.getAttribute('href').startsWith('#')) {
                // Let default behavior handle it
                return;
            }
            
            e.preventDefault();
            const href = link.getAttribute('href');
            
            // If we're already on the index page
            if (window.location.pathname.endsWith('index.html') || 
                window.location.pathname.endsWith('/') ||
                window.location.pathname.endsWith('/portfolio1/')) {
                // Scroll to contact section
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                    playButtonSound();
                }
            } else {
                // Navigate to index.html#contact
                playButtonSound();
                document.body.style.opacity = '0';
                
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });

    // Add section hover animations
    document.querySelectorAll('section').forEach(section => {
        section.addEventListener('mouseenter', function() {
            // Add subtle pulse animation
            this.style.transition = 'transform 0.3s ease-in-out';
            this.style.transform = 'scale(1.01)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add floating coin animation for section headers
    document.querySelectorAll('section h2').forEach(header => {
        // Create coin element
        const coin = document.createElement('span');
        coin.classList.add('pixel-coin');
        coin.innerHTML = '⭐';
        coin.style.position = 'absolute';
        coin.style.fontSize = '12px';
        coin.style.left = '-15px';
        coin.style.display = 'none';
        
        // Set up animation styles
        document.head.insertAdjacentHTML('beforeend', `
            <style>
                @keyframes floating-coin {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(-30px) rotate(360deg); opacity: 0; }
                }
                
                @keyframes section-glow {
                    0% { box-shadow: 0 0 5px var(--light); }
                    50% { box-shadow: 0 0 15px var(--light); }
                    100% { box-shadow: 0 0 5px var(--light); }
                }
                
                @keyframes pixel-jump {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0); }
                }
                
                @keyframes spinning-block {
                    0% { transform: rotateY(0deg); }
                    100% { transform: rotateY(360deg); }
                }
                
                .pixel-coin {
                    color: var(--light);
                    animation: floating-coin 1s ease-out forwards;
                }
                
                .jump-animation {
                    animation: pixel-jump 0.5s ease-in-out;
                }
                
                .spinning-block {
                    animation: spinning-block 1s linear;
                    perspective: 800px;
                }
                
                .rainbow-text {
                    animation: rainbow 2s linear infinite;
                }
                
                @keyframes rainbow {
                    0% { color: #ff0000; }
                    16% { color: #ff8000; }
                    32% { color: #ffff00; }
                    48% { color: #00ff00; }
                    64% { color: #00ffff; }
                    80% { color: #0000ff; }
                    100% { color: #ff00ff; }
                }
            </style>
        `);
        
        header.style.position = 'relative';
        header.appendChild(coin);
        
        // Trigger coin animation on hover
        header.addEventListener('mouseenter', function() {
            // Reset and show coin
            coin.style.display = 'inline-block';
            coin.style.animation = 'none';
            void coin.offsetWidth; // Trigger reflow
            coin.style.animation = 'floating-coin 1s ease-out forwards';
            
            // Play coin sound
            playPowerUpSound();
        });
    });

    // Add jump animation to game links on click
    gameLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't interfere with the existing click handler
            if (e.ctrlKey || e.metaKey) return;
            
            // Add jump animation
            this.classList.add('jump-animation');
            playJumpSound();
            
            // Remove animation class after it completes
            setTimeout(() => {
                this.classList.remove('jump-animation');
            }, 500);
        });
    });

    // Easter egg: Space key for star power
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space' && e.target === document.body) {
            e.preventDefault(); // Prevent scrolling
            const gameLinks = document.querySelectorAll('.game-link');
            const randomLink = gameLinks[Math.floor(Math.random() * gameLinks.length)];
            
            if (randomLink) {
                randomLink.classList.add('spinning-block');
                setTimeout(() => {
                    randomLink.classList.remove('spinning-block');
                }, 1000);
                
                playPowerUpSound();
            }
        }
    });

    // Add rainbow text effect (another easter egg)
    let secretCode = '';
    const rainbowCode = 'rainbow';
    document.addEventListener('keydown', function(e) {
        secretCode += e.key.toLowerCase();
        secretCode = secretCode.slice(-rainbowCode.length);
        
        if (secretCode === rainbowCode) {
            document.querySelectorAll('h1').forEach(h1 => {
                h1.classList.add('rainbow-text');
                setTimeout(() => {
                    h1.classList.remove('rainbow-text');
                }, 5000);
            });
            
            playPowerUpSound();
        }
    });

    // Add animated background particles
    const container = document.querySelector('.container');
    if (container) {
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.classList.add('pixel-particle');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.backgroundColor = 'var(--light)';
            particle.style.opacity = '0.3';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float ${3 + Math.random() * 7}s linear infinite`;
            
            // Add the animation style if it doesn't exist
            if (!document.querySelector('#particle-style')) {
                const style = document.createElement('style');
                style.id = 'particle-style';
                style.textContent = `
                    @keyframes float {
                        0% { transform: translate(0, 0); }
                        50% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); }
                        100% { transform: translate(0, 0); }
                    }
                `;
                document.head.appendChild(style);
            }
            
            container.appendChild(particle);
        }
    }

    // Pixel cursor animations for typing effect
    const subtitles = document.querySelectorAll('.subtitle');
    subtitles.forEach(subtitle => {
        const text = subtitle.textContent;
        const cursor = document.createElement('span');
        cursor.classList.add('pixel-cursor');
        
        // Type and backspace effect
        const typeText = () => {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i <= text.length) {
                    subtitle.textContent = text.substring(0, i);
                    subtitle.appendChild(cursor);
                    i++;
                } else {
                    clearInterval(typingInterval);
                    setTimeout(backspaceText, 5000); // Wait 5 seconds before backspacing
                }
            }, 150); // Typing speed
        };
        
        const backspaceText = () => {
            let i = text.length;
            const backspaceInterval = setInterval(() => {
                if (i >= 0) {
                    subtitle.textContent = text.substring(0, i);
                    subtitle.appendChild(cursor);
                    i--;
                } else {
                    clearInterval(backspaceInterval);
                    setTimeout(typeText, 1000); // Wait 1 second before typing again
                }
            }, 100); // Backspacing speed
        };
        
        // Start the effect
        setTimeout(typeText, 2000); // Wait 2 seconds initially
    });

    // Easter egg: Konami code - gives star power animation
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateStarPower();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateStarPower() {
        const gameLinks = document.querySelectorAll('.game-link');
        gameLinks.forEach(link => {
            link.classList.add('star-power');
            setTimeout(() => {
                link.classList.remove('star-power');
            }, 10000); // Star power lasts for 10 seconds
        });
        
        const audio = new Audio();
        audio.volume = 0.3;
        audio.src = 'data:audio/wav;base64,UklGRiQEAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAEAAD+/wQA8/8YAP3/9v/+/+3/9P8RAOD/9P8fAP//7v/N/yAA2f8HADUAAQD5//j/KwD3/zkAwf8qAOX/4//6/wMA+f8UAOL/FQADACAAHwD//xcACgAjAP//AQDr/xQA7v8CAOD/AAD//xcA4/8GAPT/8/8JAPT/+v/8/9r/BQD//wEABgD7/+7/9//1//T/AgDc/wAA8P8GAAEA/P8GAAUA9//7/wMA/f8EAO//BQAAAPP/BAD//wQA+//3/wMA+P8CAOf/+v8DAPX/+v/0//D/+//3//j/9f/7//j//v8BAPD/+v/1//z/+f/8//n/9//2//X/+//5//f//P/4//r/+//3//r/+f/7//r/+v/6//v/+f/8//n/+//7//v/+//8//v//P/8//3//v/+////AAAAAP//AAD///7///8AAP7///8AAP7///8BAP7/AAAAAP7///8AAP////8AAP////8AAP//AAD//wAA//8AAP//AAAAAAAAAAD//wAA//8AAP//AAAAAAAAAAAAAAAAAAAAAAA=';
        audio.play();
        
        alert('Extra Life! Star power activated! You found the Konami code!');
    }
    
    // Add retro page load animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
            playButtonSound();
            
            // If URL has #contact, scroll to contact section
            if (window.location.hash === '#contact') {
                setTimeout(() => {
                    const contactSection = document.querySelector('#contact');
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 300);
            }
        }, 300);
    });
    
    // Add retro animation for page transitions
    document.querySelectorAll('a').forEach(link => {
        // Skip links that already have specialized handlers
        if (link.getAttribute('href') && link.getAttribute('href').includes('#contact')) {
            return;
        }
        
        // Only apply to internal links
        if (link.hostname === window.location.hostname || !link.hostname) {
            link.addEventListener('click', function(e) {
                if (!e.ctrlKey && !e.metaKey) { // Don't intercept new tab requests
                    e.preventDefault();
                    playButtonSound();
                    
                    const href = this.getAttribute('href');
                    document.body.style.opacity = '0';
                    
                    setTimeout(() => {
                        window.location.href = href;
                    }, 500);
                }
            });
        }
    });

    // Add contact form submission handling with 8-bit style feedback
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            playButtonSound();
            
            // Create 8-bit style success message
            const successMsg = document.createElement('div');
            successMsg.className = 'success-msg';
            successMsg.style.padding = '15px';
            successMsg.style.backgroundColor = 'var(--dark)';
            successMsg.style.border = '4px solid var(--light)';
            successMsg.style.marginTop = '20px';
            successMsg.style.textAlign = 'center';
            successMsg.style.animation = 'power-up 0.5s ease-in-out';
            
            successMsg.innerHTML = `
                <p>MESSAGE SENT!</p>
                <p>THANK YOU FOR CONTACTING!</p>
                <p class="pixel-cursor"></p>
            `;
            
            // Replace form with success message
            contactForm.innerHTML = '';
            contactForm.appendChild(successMsg);
            
            // Play success sound
            const successSound = new Audio();
            successSound.volume = 0.3;
            successSound.src = 'data:audio/wav;base64,UklGRiQEAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAEAAD+/wQA8/8YAP3/9v/+/+3/9P8RAOD/9P8fAP//7v/N/yAA2f8HADUAAQD5//j/KwD3/zkAwf8qAOX/4//6/wMA+f8UAOL/FQADACAAHwD//xcACgAjAP//AQDr/xQA7v8CAOD/AAD//xcA4/8GAPT/8/8JAPT/+v/8/9r/BQD//wEABgD7/+7/9//1//T/AgDc/wAA8P8GAAEA/P8GAAUA9//7/wMA/f8EAO//BQAAAPP/BAD//wQA+//3/wMA+P8CAOf/+v8DAPX/+v/0//D/+//3//j/9f/7//j//v8BAPD/+v/1//z/+f/8//n/9//2//X/+//5//f//P/4//r/+//3//r/+f/7//r/+v/6//v/+f/8//n/+//7//v/+//8//v//P/8//3//v/+////AAAAAP//AAD///7///8AAP7///8AAP7///8BAP7/AAAAAP7///8AAP////8AAP////8AAP//AAD//wAA//8AAP//AAAAAAAAAAD//wAA//8AAP//AAAAAAAAAAAAAAAAAAAAAAA=';
            successSound.play();
        });
    }
});