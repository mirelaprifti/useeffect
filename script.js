// Copy command to clipboard
function copyCommand() {
    const command = 'npm install effect';
    navigator.clipboard.writeText(command).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#22c55e';
        btn.style.color = 'white';
        btn.style.borderColor = '#22c55e';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.color = '';
            btn.style.borderColor = '';
        }, 2000);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// Parallax effect on gradient
document.addEventListener('mousemove', (e) => {
    const gradientBg = document.querySelector('.gradient-bg');
    if (gradientBg) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        gradientBg.style.background = `
            radial-gradient(ellipse 80% 50% at ${50 + x * 10}% ${-20 + y * 10}%, rgba(168, 85, 247, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at ${100 - x * 10}% ${y * 20}%, rgba(236, 72, 153, 0.1), transparent),
            radial-gradient(ellipse 60% 40% at ${x * 20}% ${100 - y * 10}%, rgba(6, 182, 212, 0.08), transparent)
        `;
    }
});

// Easter egg - Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s linear infinite';

    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    const message = document.createElement('div');
    message.innerHTML = '🎉 You found the easter egg! Now go use Effect! 🎉';
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #a855f7, #ec4899);
        padding: 2rem 3rem;
        border-radius: 12px;
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        z-index: 9999;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    `;
    document.body.appendChild(message);

    setTimeout(() => {
        document.body.style.animation = '';
        message.remove();
        style.remove();
    }, 5000);
}

// Typing effect for terminal (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Header background on scroll
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.background = 'rgba(10, 10, 11, 0.95)';
    } else {
        header.style.background = 'rgba(10, 10, 11, 0.8)';
    }

    lastScroll = currentScroll;
});

// Add some randomized hover effects to reason cards
document.querySelectorAll('.reason-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.reason-icon');
        if (icon) {
            icon.style.transform = 'scale(1.2) rotate(' + (Math.random() * 20 - 10) + 'deg)';
        }
    });

    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.reason-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// Add transition to icons
document.querySelectorAll('.reason-icon').forEach(icon => {
    icon.style.transition = 'transform 0.3s ease';
});

// Console easter egg
console.log(`
%c╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   ⚡ JUST FUCKING USE EFFECT ⚡                                ║
║                                                               ║
║   You opened DevTools? Good.                                  ║
║   That's the kind of curiosity Effect rewards.                ║
║                                                               ║
║   npm install effect                                          ║
║   https://effect.website                                      ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
`, 'color: #a855f7; font-family: monospace; font-size: 12px;');

console.log('%cNow stop looking at the console and go build something cool.', 'color: #a1a1aa; font-style: italic;');
