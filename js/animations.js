// Animations and Interactive Effects for DesignHub Blog

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupScrollAnimations();
    setupHoverEffects();
    setupParallaxEffects();
    setupTypingAnimation();
    setupMorphingShapes();
});

// Initialize all animations
function initializeAnimations() {
    // Add animation classes to elements
    addAnimationClasses();
    
    // Setup intersection observer for scroll animations
    setupIntersectionObserver();
    
    // Initialize particle effects
    initializeParticles();
    
    // Setup floating elements
    setupFloatingElements();
}

// Add animation classes to elements
function addAnimationClasses() {
    // Add scroll animation classes
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('scroll-animate');
    });
    
    // Add stagger animation to grid items
    const grids = document.querySelectorAll('.articles-grid, .categories-grid');
    grids.forEach(grid => {
        grid.classList.add('stagger-children');
    });
    
    // Add hover effects
    const cards = document.querySelectorAll('.article-card, .category-card');
    cards.forEach(card => {
        card.classList.add('hover-lift');
    });
    
    // Add fade-in animations to content
    const contentElements = document.querySelectorAll('.hero-content, .section-header');
    contentElements.forEach(element => {
        element.classList.add('fade-in');
    });
}

// Setup intersection observer for scroll animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add delay for staggered animations
                if (entry.target.classList.contains('stagger-children')) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll('.scroll-animate, .fade-in, .slide-in-left, .slide-in-right');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Setup scroll-triggered animations
function setupScrollAnimations() {
    let ticking = false;
    
    function updateAnimations() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        // Update scroll progress
        const scrollProgress = document.querySelector('.scroll-progress');
        if (scrollProgress) {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrolled / scrollHeight) * 100;
            scrollProgress.style.width = progress + '%';
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Setup hover effects
function setupHoverEffects() {
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('hover-grow');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('hover-grow');
        });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.article-card, .category-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Setup parallax effects
function setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.floating-elements');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Setup typing animation
function setupTypingAnimation() {
    const typingElements = document.querySelectorAll('.typing');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid var(--primary-color)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                element.style.borderRight = 'none';
            }
        };
        
        // Start typing animation when element is visible
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

// Setup morphing shapes
function setupMorphingShapes() {
    const morphingShapes = document.querySelectorAll('.morphing-shape');
    
    morphingShapes.forEach(shape => {
        // Add random animation delay
        shape.style.animationDelay = Math.random() * 4 + 's';
    });
}

// Initialize particle effects
function initializeParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    hero.appendChild(particlesContainer);
    
    // Create particles
    for (let i = 0; i < 15; i++) {
        createParticle(particlesContainer);
    }
}

// Create individual particle
function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random positioning and animation
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    
    container.appendChild(particle);
    
    // Remove and recreate particle when animation ends
    particle.addEventListener('animationend', function() {
        particle.remove();
        setTimeout(() => {
            createParticle(container);
        }, Math.random() * 2000);
    });
}

// Setup floating elements
function setupFloatingElements() {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        // Add random animation delay
        card.style.animationDelay = (index * 2) + 's';
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Smooth scroll to section
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Animate counter
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);

// Performance optimization for animations
function optimizeAnimations() {
    // Use transform and opacity for better performance
    const animatedElements = document.querySelectorAll('.article-card, .category-card');
    
    animatedElements.forEach(element => {
        element.style.willChange = 'transform';
        
        // Reset will-change after animation
        element.addEventListener('transitionend', function() {
            this.style.willChange = 'auto';
        });
    });
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizeAnimations);

// Export animation functions
window.Animations = {
    smoothScrollTo,
    animateCounter,
    animateOnScroll
};

// Add CSS classes for animations
const style = document.createElement('style');
style.textContent = `
    .scroll-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .scroll-animate.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .fade-in {
        opacity: 0;
        transition: opacity 0.6s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
    }
    
    .stagger-children > * {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }
    
    .stagger-children > *.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hover-lift {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .hover-lift:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
    
    .hover-grow {
        transform: scale(1.05);
    }
    
    .particles {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
    }
    
    .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        animation: particleFloat 6s infinite linear;
    }
    
    @keyframes particleFloat {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .floating-card {
        transition: transform 0.3s ease;
    }
    
    .floating-card:hover {
        transform: scale(1.1) rotate(5deg);
    }
    
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
    }
    
    .animate-on-scroll.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(style); 