// About Page JavaScript - Mind-blowing Effects

document.addEventListener('DOMContentLoaded', function() {
    initializeAboutPage();
});

function initializeAboutPage() {
    setupMatrixEffect();
    setupGlitchText();
    setupStatsCounter();
    setupTeamAnimations();
    setupValuesAnimations();
    setupFloatingElements();
    setupShockingEffects();
}

// Matrix Digital Rain Effect
function setupMatrixEffect() {
    const matrixBg = document.querySelector('.matrix-bg');
    if (!matrixBg) return;

    // Create matrix characters
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-rain';
    matrixContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
    `;

    // Create multiple columns of falling characters
    for (let i = 0; i < 50; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.cssText = `
            position: absolute;
            top: -100%;
            left: ${Math.random() * 100}%;
            color: #0f0;
            font-family: 'Courier New', monospace;
            font-size: ${Math.random() * 20 + 10}px;
            animation: matrixFall ${Math.random() * 3 + 2}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
            text-shadow: 0 0 5px #0f0;
        `;

        // Add characters to column
        for (let j = 0; j < 20; j++) {
            const char = document.createElement('div');
            char.textContent = characters[Math.floor(Math.random() * characters.length)];
            char.style.opacity = Math.random();
            column.appendChild(char);
        }

        matrixContainer.appendChild(column);
    }

    matrixBg.appendChild(matrixContainer);

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes matrixFall {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
        }
    `;
    document.head.appendChild(style);
}

// Glitch Text Effect
function setupGlitchText() {
    const glitchTexts = document.querySelectorAll('.glitch-text');
    
    glitchTexts.forEach(text => {
        // Create glitch layers
        const glitchLayer1 = document.createElement('div');
        const glitchLayer2 = document.createElement('div');
        
        glitchLayer1.className = 'glitch-layer-1';
        glitchLayer2.className = 'glitch-layer-2';
        
        glitchLayer1.textContent = text.getAttribute('data-text');
        glitchLayer2.textContent = text.getAttribute('data-text');
        
        glitchLayer1.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: #ff0000;
            z-index: -1;
            animation: glitch1 0.3s infinite;
        `;
        
        glitchLayer2.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            color: #00ffff;
            z-index: -2;
            animation: glitch2 0.3s infinite;
        `;
        
        text.style.position = 'relative';
        text.appendChild(glitchLayer1);
        text.appendChild(glitchLayer2);
        
        // Add glitch animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes glitch1 {
                0%, 100% { transform: translate(0); }
                20% { transform: translate(-2px, 2px); }
                40% { transform: translate(-2px, -2px); }
                60% { transform: translate(2px, 2px); }
                80% { transform: translate(2px, -2px); }
            }
            @keyframes glitch2 {
                0%, 100% { transform: translate(0); }
                20% { transform: translate(2px, -2px); }
                40% { transform: translate(2px, 2px); }
                60% { transform: translate(-2px, -2px); }
                80% { transform: translate(-2px, 2px); }
            }
        `;
        document.head.appendChild(style);
    });
}

// Animated Stats Counter
function setupStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.getAttribute('data-target'));
                animateCounter(target, 0, finalValue, 2000);
                observer.unobserve(target);
            }
        });
    });

    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(start + (end - start) * easeOutQuart);
        
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            // Add final glow effect
            element.style.animation = 'finalGlow 1s ease-out';
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Team Member Animations
function setupTeamAnimations() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach((member, index) => {
        // Add staggered entrance animation
        member.style.animationDelay = `${index * 0.2}s`;
        member.classList.add('animate-fade-in-up');
        
        // Add hover effects
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-20px) scale(1.05) rotateY(5deg)';
            this.style.boxShadow = '0 30px 60px rgba(0, 255, 0, 0.4)';
            
            // Add shock wave effect
            createShockWave(this);
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
            this.style.boxShadow = '0 10px 30px rgba(0, 255, 0, 0.2)';
        });
        
        // Add avatar rotation on hover
        const avatar = member.querySelector('.member-avatar');
        if (avatar) {
            member.addEventListener('mouseenter', () => {
                avatar.style.animation = 'avatarSpin 0.5s ease-out';
            });
            
            member.addEventListener('mouseleave', () => {
                avatar.style.animation = 'avatarRotate 3s linear infinite';
            });
        }
    });
}

// Values Cards Animations
function setupValuesAnimations() {
    const valueCards = document.querySelectorAll('.value-card');
    
    valueCards.forEach((card, index) => {
        // Add entrance animation
        card.style.animationDelay = `${index * 0.3}s`;
        card.classList.add('animate-fade-in-up');
        
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.05) rotateX(10deg)';
            this.style.boxShadow = '0 25px 50px rgba(0, 255, 0, 0.3)';
            
            // Add electric effect
            createElectricEffect(this);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
            this.style.boxShadow = '0 10px 20px rgba(0, 255, 0, 0.1)';
        });
        
        // Add icon animation
        const icon = card.querySelector('.value-icon');
        if (icon) {
            card.addEventListener('mouseenter', () => {
                icon.style.animation = 'iconPulse 0.5s ease-out';
            });
        }
    });
}

// Floating Elements Animation
function setupFloatingElements() {
    const floatingShapes = document.querySelectorAll('.floating-shape');
    
    floatingShapes.forEach((shape, index) => {
        // Add random movement
        setInterval(() => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const rotation = Math.random() * 360;
            
            shape.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        }, 3000 + index * 1000);
        
        // Add glow effect on hover
        shape.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(0, 255, 0, 0.8)';
            this.style.transform += ' scale(1.5)';
        });
        
        shape.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.transform = this.style.transform.replace(' scale(1.5)', '');
        });
    });
}

// Shocking Effects
function setupShockingEffects() {
    // Add random glitch effects to the page
    setInterval(() => {
        if (Math.random() < 0.1) { // 10% chance every 2 seconds
            createPageGlitch();
        }
    }, 2000);
    
    // Add screen shake on certain interactions
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn') || e.target.closest('.btn')) {
            createScreenShake();
        }
    });
}

// Create shock wave effect
function createShockWave(element) {
    const shockWave = document.createElement('div');
    shockWave.className = 'shock-wave';
    shockWave.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border: 2px solid rgba(0, 255, 0, 0.8);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: shockWaveExpand 0.6s ease-out;
        pointer-events: none;
        z-index: 10;
    `;
    
    element.appendChild(shockWave);
    
    setTimeout(() => {
        shockWave.remove();
    }, 600);
}

// Create electric effect
function createElectricEffect(element) {
    const electric = document.createElement('div');
    electric.className = 'electric-effect';
    electric.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, transparent, rgba(0, 255, 0, 0.3), transparent);
        animation: electricFlash 0.3s ease-out;
        pointer-events: none;
        z-index: 5;
    `;
    
    element.appendChild(electric);
    
    setTimeout(() => {
        electric.remove();
    }, 300);
}

// Create page glitch effect
function createPageGlitch() {
    const glitchOverlay = document.createElement('div');
    glitchOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 0, 0, 0.1);
        z-index: 9999;
        pointer-events: none;
        animation: pageGlitch 0.1s ease-out;
    `;
    
    document.body.appendChild(glitchOverlay);
    
    setTimeout(() => {
        glitchOverlay.remove();
    }, 100);
}

// Create screen shake effect
function createScreenShake() {
    document.body.style.animation = 'screenShake 0.3s ease-out';
    
    setTimeout(() => {
        document.body.style.animation = '';
    }, 300);
}

// Add CSS animations
const additionalStyles = `
    @keyframes finalGlow {
        0% { text-shadow: 0 0 20px rgba(0, 255, 0, 0.8); }
        50% { text-shadow: 0 0 40px rgba(0, 255, 0, 1), 0 0 60px rgba(0, 255, 0, 0.8); }
        100% { text-shadow: 0 0 20px rgba(0, 255, 0, 0.8); }
    }
    
    @keyframes avatarSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes iconPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.3); }
        100% { transform: scale(1); }
    }
    
    @keyframes shockWaveExpand {
        0% { width: 0; height: 0; opacity: 1; }
        100% { width: 200px; height: 200px; opacity: 0; }
    }
    
    @keyframes electricFlash {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
    
    @keyframes pageGlitch {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
    
    @keyframes screenShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize particle effects
function initializeParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    for (let i = 0; i < 50; i++) {
        createParticle(hero);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(0, 255, 0, ${Math.random() * 0.5 + 0.3});
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: particleFloat ${Math.random() * 10 + 5}s linear infinite;
        pointer-events: none;
    `;

    container.appendChild(particle);

    // Add particle float animation
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes particleFloat {
            0% { transform: translateY(0) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(particleStyle);
}

// Initialize everything when page loads
window.addEventListener('load', function() {
    initializeParticles();
    
    // Add entrance animation to all elements
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('animate-fade-in-up');
    });
}); 