// Simple Intersection Observer for scroll animations
const animateOnScroll = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars when skills section is in view
                if (entry.target.id === 'skills') {
                    const skillBars = document.querySelectorAll('.skill-level');
                    skillBars.forEach(bar => {
                        const width = bar.getAttribute('data-level');
                        bar.style.width = width;
                    });
                }
            }
        });
    }, { threshold: 0.1 });

    // Observe all sections
    document.querySelectorAll('.resume-section').forEach(section => {
        observer.observe(section);
    });
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.add('hover-scale');
    });
    
    // Initialize scroll animations
    animateOnScroll();
    
    // Add animation to profile image
    const profileImg = document.querySelector('.img-profile');
    if (profileImg) {
        profileImg.style.opacity = '0';
        setTimeout(() => {
            profileImg.style.transition = 'opacity 1s ease-in-out';
            profileImg.style.opacity = '1';
        }, 300);
    }
});

// Simple typing effect for elements with .typing class
const initTypingEffect = () => {
    const typingElements = document.querySelectorAll('.typing');
    if (typingElements.length === 0) return;
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        const speed = 50; // typing speed in milliseconds
        
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        };
        
        // Start typing after a delay
        setTimeout(typeWriter, 1000);
    });
};

// Initialize everything when the page loads
window.addEventListener('load', () => {
    initTypingEffect();
    
    // Add loaded class to body for any fade-in effects
    document.body.classList.add('loaded');
});
