// === TAB SWITCHING ===
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(`panel-${tab.dataset.tab}`).classList.add('active');
    });
});

// === ELEMENTS ===
const uploadArea = document.getElementById('uploadArea');
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');
const removeImg = document.getElementById('removeImg');
const ocrProgress = document.getElementById('ocrProgress');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const ocrResult = document.getElementById('ocrResult');
const ocrText = document.getElementById('ocrText');
const textInput = document.getElementById('textInput');
const fontSelect = document.getElementById('fontSelect');
const motionSelect = document.getElementById('motionSelect');
const fontSizeRange = document.getElementById('fontSizeRange');
const fontSizeValue = document.getElementById('fontSizeValue');
const applyMotion = document.getElementById('applyMotion');
const previewStage = document.getElementById('previewStage');
const replayBtn = document.getElementById('replayBtn');

// === IMAGE UPLOAD ===
uploadArea.addEventListener('click', () => imageInput.click());
uploadArea.addEventListener('dragover', e => { e.preventDefault(); uploadArea.classList.add('dragover'); });
uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
uploadArea.addEventListener('drop', e => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) processImage(file);
});
imageInput.addEventListener('change', e => { if (e.target.files[0]) processImage(e.target.files[0]); });
removeImg.addEventListener('click', resetOCR);

function resetOCR() {
    uploadArea.style.display = 'block';
    imagePreview.style.display = 'none';
    ocrProgress.style.display = 'none';
    ocrResult.style.display = 'none';
    imageInput.value = '';
}

function processImage(file) {
    const reader = new FileReader();
    reader.onload = e => {
        previewImg.src = e.target.result;
        uploadArea.style.display = 'none';
        imagePreview.style.display = 'block';
        performOCR(e.target.result);
    };
    reader.readAsDataURL(file);
}

async function performOCR(imageData) {
    ocrProgress.style.display = 'block';
    ocrResult.style.display = 'none';
    progressFill.style.width = '0%';
    progressFill.style.background = 'linear-gradient(90deg, #00d4ff, #667eea)';
    progressText.textContent = '준비 중...';

    try {
        const result = await Tesseract.recognize(imageData, 'kor+eng', {
            logger: m => {
                if (m.status === 'recognizing text') {
                    const pct = Math.round(m.progress * 100);
                    progressFill.style.width = `${pct}%`;
                    progressText.textContent = `텍스트 인식 중... ${pct}%`;
                } else if (m.status === 'loading language traineddata') {
                    progressText.textContent = '한국어 데이터 로딩 중...';
                    progressFill.style.width = '20%';
                }
            }
        });
        const text = result.data.text.trim();
        if (text) {
            ocrText.value = text;
            ocrProgress.style.display = 'none';
            ocrResult.style.display = 'block';
        } else {
            progressText.textContent = '텍스트를 인식할 수 없습니다. 다른 이미지를 시도해주세요.';
            progressFill.style.width = '100%';
            progressFill.style.background = '#ff006e';
        }
    } catch (err) {
        progressText.textContent = '오류 발생. 다시 시도해주세요.';
        progressFill.style.background = '#ff006e';
    }
}

// === FONT SIZE ===
fontSizeRange.addEventListener('input', e => { fontSizeValue.textContent = `${e.target.value}rem`; });

// === APPLY MOTION ===
applyMotion.addEventListener('click', applyMotionToText);
replayBtn.addEventListener('click', applyMotionToText);

function getCurrentText() {
    const activeTab = document.querySelector('.tab.active').dataset.tab;
    if (activeTab === 'image') {
        return ocrText.value.trim();
    }
    return textInput.value.trim();
}

function applyMotionToText() {
    const text = getCurrentText();
    if (!text) return;

    const font = fontSelect.value;
    const motion = motionSelect.value;
    const fontSize = fontSizeRange.value;
    const lines = text.split('\n').filter(l => l.trim());

    previewStage.innerHTML = '';
    replayBtn.style.display = 'inline-block';

    lines.forEach((line, idx) => {
        const el = document.createElement('div');
        el.className = `motion-line ${font}`;
        el.style.fontSize = `${fontSize}rem`;
        el.textContent = line;

        applyEffect(el, motion, line, idx);
        previewStage.appendChild(el);
    });

    previewStage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function applyEffect(el, motion, line, idx) {
    const delay = idx * 0.2;

    switch (motion) {
        case 'fade-in':
            el.style.opacity = '0';
            el.style.animation = `fadeIn 1.2s ease ${delay}s forwards`;
            break;
        case 'fade-in-up':
            el.style.opacity = '0';
            el.style.animation = `fadeInUp 1.2s ease ${delay}s forwards`;
            break;
        case 'fade-in-scale':
            el.style.opacity = '0';
            el.style.animation = `fadeInScale 1.2s ease ${delay}s forwards`;
            break;
        case 'slide-left':
            el.style.opacity = '0';
            el.style.animation = `slideLeft 0.8s ease ${delay}s forwards`;
            break;
        case 'slide-right':
            el.style.opacity = '0';
            el.style.animation = `slideRight 0.8s ease ${delay}s forwards`;
            break;
        case 'blur-reveal':
            el.style.opacity = '0';
            el.style.animation = `blurReveal 1.5s ease ${delay}s forwards`;
            break;
        case 'drop-in':
            el.style.opacity = '0';
            el.style.animation = `dropIn 0.7s ease ${delay}s forwards`;
            break;
        case 'typing-effect':
            el.style.overflow = 'hidden';
            el.style.whiteSpace = 'nowrap';
            el.style.borderRight = '2px solid #00d4ff';
            el.style.width = '0';
            el.style.animation = `typing 2.5s steps(${line.length}) ${idx * 2.5}s forwards, blink 0.7s step-end infinite`;
            el.style.animationName = 'typing, blink';
            break;
        case 'bounce-effect':
            splitChars(el, line, 'bounce-char', idx, 0.05);
            break;
        case 'wave-effect':
            splitChars(el, line, 'wave-char', 0, 0.08);
            break;
        case 'rubber-band':
            splitChars(el, line, 'rubber-char', idx, 0.06);
            break;
        case 'flip-effect':
            el.style.perspective = '800px';
            splitChars(el, line, 'flip-char', idx, 0.06);
            break;
        case 'jelly-effect':
            splitChars(el, line, 'jelly-char', idx, 0.05);
            break;
        case 'scatter-effect':
            el.textContent = '';
            line.split('').forEach((char, i) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.className = 'scatter-char';
                span.style.setProperty('--sx', `${(Math.random()-0.5)*200}px`);
                span.style.setProperty('--sy', `${(Math.random()-0.5)*200}px`);
                span.style.setProperty('--sr', `${(Math.random()-0.5)*720}deg`);
                span.style.animationDelay = `${(idx * line.length + i) * 0.04}s`;
                el.appendChild(span);
            });
            break;
        case 'spin-effect':
            splitChars(el, line, 'spin-char', idx, 0.07);
            break;
        case 'pop-effect':
            splitChars(el, line, 'pop-char', idx, 0.05);
            break;
        case 'swing-effect':
            splitChars(el, line, 'swing-char', idx, 0.07);
            break;
        case 'float-up':
            splitChars(el, line, 'float-char', idx, 0.06);
            break;
        case 'domino-effect':
            splitChars(el, line, 'domino-char', idx, 0.06);
            break;
        case 'neon-effect':
            el.style.animation = `neonFlicker 2s ease-in-out infinite alternate`;
            el.style.animationDelay = `${delay}s`;
            break;
        case 'gradient-wave':
            el.style.background = 'linear-gradient(90deg, #00d4ff, #ff006e, #667eea, #00d4ff)';
            el.style.backgroundSize = '300% 100%';
            el.style.webkitBackgroundClip = 'text';
            el.style.backgroundClip = 'text';
            el.style.color = 'transparent';
            el.style.animation = `gradientShift 3s ease infinite`;
            break;
        case 'shadow-dance':
            el.style.animation = `shadowDance 2s ease-in-out infinite`;
            el.style.animationDelay = `${delay}s`;
            break;
        case 'pulse-effect':
            el.style.animation = `pulse 1.5s ease-in-out infinite`;
            el.style.animationDelay = `${delay}s`;
            break;
        case 'flicker-effect':
            el.style.animation = `flicker 1.5s linear infinite`;
            el.style.animationDelay = `${delay}s`;
            break;
        case 'rainbow-effect':
            el.style.animation = `rainbow 3s linear infinite`;
            el.style.animationDelay = `${delay}s`;
            break;
        case 'glitch-effect':
            el.style.position = 'relative';
            el.style.animation = `glitchText 2s infinite`;
            el.setAttribute('data-text', line);
            const before = document.createElement('span');
            before.textContent = line;
            before.style.cssText = `position:absolute;top:0;left:0;width:100%;height:100%;color:#ff006e;animation:glitchBefore 2s infinite;clip-path:inset(0 0 60% 0);`;
            const after = document.createElement('span');
            after.textContent = line;
            after.style.cssText = `position:absolute;top:0;left:0;width:100%;height:100%;color:#00d4ff;animation:glitchAfter 2s infinite;clip-path:inset(60% 0 0 0);`;
            el.appendChild(before);
            el.appendChild(after);
            break;
        case 'shake-effect':
            el.style.animation = `shakeIt 0.6s ease both`;
            el.style.animationDelay = `${delay}s`;
            break;
        case 'explode-effect':
            el.textContent = '';
            line.split('').forEach((char, i) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.className = 'explode-char';
                span.style.setProperty('--ex', `${(Math.random()-0.5)*300}px`);
                span.style.setProperty('--ey', `${(Math.random()-0.5)*300}px`);
                span.style.setProperty('--er', `${(Math.random()-0.5)*720}deg`);
                span.style.animationDelay = `${(idx * line.length + i) * 0.03}s`;
                el.appendChild(span);
            });
            break;
        case 'zoom-effect':
            el.style.opacity = '0';
            el.style.animation = `zoomIn 0.8s ease ${delay}s forwards`;
            break;
    }
}

function splitChars(el, line, className, lineIdx, stagger) {
    el.textContent = '';
    line.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.className = className;
        span.style.animationDelay = `${(lineIdx * line.length + i) * stagger}s`;
        el.appendChild(span);
    });
}

// === TYPING KEYFRAMES (dynamic width) ===
const style = document.createElement('style');
style.textContent = `@keyframes typing { from { width: 0; } to { width: 100%; } }`;
document.head.appendChild(style);
