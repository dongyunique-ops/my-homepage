// ========== OCR FUNCTIONALITY ==========

// DOM Elements
const uploadArea = document.getElementById('uploadArea');
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');
const removeImg = document.getElementById('removeImg');
const ocrProgress = document.getElementById('ocrProgress');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const ocrResult = document.getElementById('ocrResult');
const extractedText = document.getElementById('extractedText');
const fontSelect = document.getElementById('fontSelect');
const motionSelect = document.getElementById('motionSelect');
const fontSizeRange = document.getElementById('fontSizeRange');
const fontSizeValue = document.getElementById('fontSizeValue');
const applyMotion = document.getElementById('applyMotion');
const motionPreview = document.getElementById('motionPreview');
const previewStage = document.getElementById('previewStage');
const replayOcr = document.getElementById('replayOcr');

let currentExtractedText = '';

// Upload area click
uploadArea.addEventListener('click', () => imageInput.click());

// Drag & Drop
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        processImage(file);
    }
});

// File input change
imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        processImage(file);
    }
});

// Remove image
removeImg.addEventListener('click', () => {
    resetOCR();
});

// Font size range
fontSizeRange.addEventListener('input', (e) => {
    fontSizeValue.textContent = `${e.target.value}rem`;
});

// Apply motion button
applyMotion.addEventListener('click', () => {
    applyMotionToText();
});

// Replay OCR motion
replayOcr.addEventListener('click', () => {
    applyMotionToText();
});

function resetOCR() {
    uploadArea.style.display = 'block';
    imagePreview.style.display = 'none';
    ocrProgress.style.display = 'none';
    ocrResult.style.display = 'none';
    motionPreview.style.display = 'none';
    previewImg.src = '';
    imageInput.value = '';
    currentExtractedText = '';
}

function processImage(file) {
    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => {
        previewImg.src = e.target.result;
        uploadArea.style.display = 'none';
        imagePreview.style.display = 'block';

        // Start OCR
        performOCR(e.target.result);
    };
    reader.readAsDataURL(file);
}

async function performOCR(imageData) {
    ocrProgress.style.display = 'block';
    ocrResult.style.display = 'none';
    motionPreview.style.display = 'none';
    progressFill.style.width = '0%';
    progressText.textContent = '텍스트 인식 준비 중...';

    try {
        const result = await Tesseract.recognize(imageData, 'kor+eng', {
            logger: (m) => {
                if (m.status === 'recognizing text') {
                    const percent = Math.round(m.progress * 100);
                    progressFill.style.width = `${percent}%`;
                    progressText.textContent = `텍스트 인식 중... ${percent}%`;
                } else if (m.status === 'loading language traineddata') {
                    progressText.textContent = '한국어 데이터 로딩 중...';
                    progressFill.style.width = '20%';
                }
            }
        });

        const text = result.data.text.trim();
        if (text) {
            currentExtractedText = text;
            extractedText.textContent = text;
            ocrProgress.style.display = 'none';
            ocrResult.style.display = 'block';
        } else {
            progressText.textContent = '텍스트를 찾을 수 없습니다. 다른 이미지를 시도해주세요.';
            progressFill.style.width = '100%';
            progressFill.style.background = '#ff006e';
        }
    } catch (error) {
        progressText.textContent = '오류가 발생했습니다. 다시 시도해주세요.';
        progressFill.style.background = '#ff006e';
        console.error('OCR Error:', error);
    }
}

function applyMotionToText() {
    if (!currentExtractedText) return;

    const font = fontSelect.value;
    const motion = motionSelect.value;
    const fontSize = fontSizeRange.value;
    const lines = currentExtractedText.split('\n').filter(l => l.trim());

    // Clear stage
    previewStage.innerHTML = '';
    motionPreview.style.display = 'block';

    // Create motion elements for each line
    lines.forEach((line, index) => {
        const el = document.createElement('div');
        el.className = `motion-line ${font}`;
        el.style.fontSize = `${fontSize}rem`;
        el.textContent = line;

        // Apply motion based on selection
        switch (motion) {
            case 'fade-in':
                el.style.opacity = '0';
                el.style.animation = `fadeIn 1.5s ease ${index * 0.2}s forwards`;
                break;
            case 'fade-in-up':
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.animation = `fadeInUp 1.5s ease ${index * 0.2}s forwards`;
                break;
            case 'fade-in-scale':
                el.style.opacity = '0';
                el.style.animation = `fadeInScale 1.5s ease ${index * 0.2}s forwards`;
                break;
            case 'slide-left':
                el.style.opacity = '0';
                el.style.animation = `slideLeft 1s ease ${index * 0.2}s forwards`;
                break;
            case 'slide-right':
                el.style.opacity = '0';
                el.style.animation = `slideRight 1s ease ${index * 0.2}s forwards`;
                break;
            case 'typing-effect':
                el.style.overflow = 'hidden';
                el.style.whiteSpace = 'nowrap';
                el.style.borderRight = '3px solid #00d4ff';
                el.style.width = '0';
                el.style.animation = `typing 3s steps(${line.length}) ${index * 3}s forwards, blink 0.7s step-end infinite`;
                break;
            case 'bounce-effect':
                el.textContent = '';
                line.split('').forEach((char, i) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.className = 'bounce-char';
                    span.style.animationDelay = `${(index * line.length + i) * 0.05}s`;
                    el.appendChild(span);
                });
                break;
            case 'wave-effect':
                el.textContent = '';
                line.split('').forEach((char, i) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    span.className = 'wave-char';
                    span.style.animationDelay = `${i * 0.08}s`;
                    el.appendChild(span);
                });
                break;
            case 'glitch-effect':
                el.className += ' glitch';
                el.setAttribute('data-text', line);
                break;
        }

        previewStage.appendChild(el);
    });

    // Scroll to preview
    motionPreview.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ========== EXISTING FUNCTIONALITY ==========

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
