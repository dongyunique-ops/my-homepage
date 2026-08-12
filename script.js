// Split text into individual characters for per-char animations
function splitTextToChars(element, className) {
    const text = element.textContent;
    element.textContent = '';
    text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.className = className;
        span.style.animationDelay = `${i * 0.08}s`;
        element.appendChild(span);
    });
}

// Initialize character-split animations
function initSplitAnimations() {
    document.querySelectorAll('.bounce-text[data-split]').forEach(el => {
        if (!el.querySelector('.bounce-char')) {
            splitTextToChars(el, 'bounce-char');
        }
    });

    document.querySelectorAll('.wave-text[data-split]').forEach(el => {
        if (!el.querySelector('.wave-char')) {
            splitTextToChars(el, 'wave-char');
        }
    });
}

// Replay animation for a section
function replayAnimation(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const demoArea = section.querySelector('.demo-area');
    if (!demoArea) return;

    // Clone and replace to restart animations
    const elements = demoArea.querySelectorAll('.motion-text');
    elements.forEach(el => {
        // For split-text animations, rebuild chars
        if (el.hasAttribute('data-split')) {
            const originalText = el.getAttribute('data-original') || el.textContent;
            el.setAttribute('data-original', originalText);
            el.textContent = originalText;

            if (el.classList.contains('bounce-text')) {
                splitTextToChars(el, 'bounce-char');
            } else if (el.classList.contains('wave-text')) {
                splitTextToChars(el, 'wave-char');
            }
        } else {
            // Restart CSS animation by cloning
            const clone = el.cloneNode(true);
            el.parentNode.replaceChild(clone, el);
        }
    });
}

// Smooth scrolling for navigation links
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

// Replay buttons
document.querySelectorAll('.replay-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        replayAnimation(target);
    });
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Store original text for split elements
    document.querySelectorAll('[data-split]').forEach(el => {
        el.setAttribute('data-original', el.textContent);
    });

    initSplitAnimations();
});

// Intersection Observer for scroll-triggered animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.motion-section').forEach(section => {
    sectionObserver.observe(section);
});
