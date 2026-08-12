// === MOTION DATA ===
const MOTIONS = [
    { id:'fade-in', name:'Fade In', tag:'등장', params:[{id:'duration',label:'지속시간',min:0.3,max:3,step:0.1,default:1.2,unit:'s'},{id:'delay',label:'딜레이',min:0,max:2,step:0.1,default:0,unit:'s'}] },
    { id:'fade-in-up', name:'Fade Up', tag:'등장', params:[{id:'duration',label:'지속시간',min:0.3,max:3,step:0.1,default:1.2,unit:'s'},{id:'distance',label:'이동거리',min:10,max:80,step:5,default:30,unit:'px'}] },
    { id:'fade-in-scale', name:'Fade Scale', tag:'등장', params:[{id:'duration',label:'지속시간',min:0.3,max:3,step:0.1,default:1.2,unit:'s'},{id:'startScale',label:'시작크기',min:0.1,max:0.9,step:0.1,default:0.7,unit:'x'}] },
    { id:'slide-left', name:'Slide Left', tag:'등장', params:[{id:'duration',label:'지속시간',min:0.3,max:2,step:0.1,default:0.8,unit:'s'},{id:'distance',label:'이동거리',min:30,max:200,step:10,default:80,unit:'px'}] },
    { id:'slide-right', name:'Slide Right', tag:'등장', params:[{id:'duration',label:'지속시간',min:0.3,max:2,step:0.1,default:0.8,unit:'s'},{id:'distance',label:'이동거리',min:30,max:200,step:10,default:80,unit:'px'}] },
    { id:'blur-reveal', name:'Blur Reveal', tag:'등장', params:[{id:'duration',label:'지속시간',min:0.5,max:3,step:0.1,default:1.5,unit:'s'},{id:'blur',label:'블러량',min:5,max:40,step:5,default:20,unit:'px'}] },
    { id:'drop-in', name:'Drop In', tag:'등장', params:[{id:'duration',label:'지속시간',min:0.3,max:2,step:0.1,default:0.7,unit:'s'},{id:'height',label:'낙하높이',min:20,max:120,step:10,default:60,unit:'px'}] },
    { id:'zoom-effect', name:'Zoom', tag:'등장', params:[{id:'duration',label:'지속시간',min:0.3,max:2,step:0.1,default:0.8,unit:'s'},{id:'startScale',label:'시작크기',min:1.5,max:5,step:0.5,default:3,unit:'x'}] },
    { id:'typing-effect', name:'Typing', tag:'타이핑', params:[{id:'speed',label:'속도',min:1,max:6,step:0.5,default:2.5,unit:'s'}] },
    { id:'bounce-effect', name:'Bounce', tag:'글자별', params:[{id:'stagger',label:'글자간격',min:0.02,max:0.15,step:0.01,default:0.05,unit:'s'},{id:'height',label:'높이',min:20,max:80,step:5,default:50,unit:'px'}] },
    { id:'wave-effect', name:'Wave', tag:'글자별', params:[{id:'speed',label:'속도',min:0.8,max:3,step:0.1,default:1.5,unit:'s'},{id:'height',label:'높이',min:5,max:25,step:1,default:12,unit:'px'}] },
    { id:'rubber-band', name:'Rubber Band', tag:'글자별', params:[{id:'stagger',label:'글자간격',min:0.02,max:0.15,step:0.01,default:0.06,unit:'s'}] },
    { id:'flip-effect', name:'3D Flip', tag:'글자별', params:[{id:'stagger',label:'글자간격',min:0.02,max:0.15,step:0.01,default:0.06,unit:'s'},{id:'duration',label:'지속시간',min:0.3,max:1.5,step:0.1,default:0.8,unit:'s'}] },
    { id:'jelly-effect', name:'Jelly', tag:'글자별', params:[{id:'stagger',label:'글자간격',min:0.02,max:0.12,step:0.01,default:0.05,unit:'s'}] },
    { id:'scatter-effect', name:'Scatter', tag:'글자별', params:[{id:'range',label:'흩어짐',min:50,max:300,step:25,default:200,unit:'px'},{id:'stagger',label:'글자간격',min:0.02,max:0.1,step:0.01,default:0.04,unit:'s'}] },
    { id:'spin-effect', name:'Spin', tag:'글자별', params:[{id:'stagger',label:'글자간격',min:0.03,max:0.15,step:0.01,default:0.07,unit:'s'}] },
    { id:'pop-effect', name:'Pop', tag:'글자별', params:[{id:'stagger',label:'글자간격',min:0.02,max:0.12,step:0.01,default:0.05,unit:'s'}] },
    { id:'swing-effect', name:'Swing', tag:'글자별', params:[{id:'stagger',label:'글자간격',min:0.03,max:0.15,step:0.01,default:0.07,unit:'s'}] },
    { id:'float-up', name:'Float Up', tag:'글자별', params:[{id:'stagger',label:'글자간격',min:0.03,max:0.12,step:0.01,default:0.06,unit:'s'},{id:'distance',label:'거리',min:20,max:80,step:5,default:50,unit:'px'}] },
    { id:'domino-effect', name:'Domino', tag:'글자별', params:[{id:'stagger',label:'글자간격',min:0.03,max:0.12,step:0.01,default:0.06,unit:'s'}] },
    { id:'neon-effect', name:'Neon', tag:'루프', params:[{id:'speed',label:'속도',min:1,max:4,step:0.5,default:2,unit:'s'}] },
    { id:'gradient-wave', name:'Gradient', tag:'루프', params:[{id:'speed',label:'속도',min:1,max:6,step:0.5,default:3,unit:'s'}] },
    { id:'shadow-dance', name:'Shadow', tag:'루프', params:[{id:'speed',label:'속도',min:1,max:4,step:0.5,default:2,unit:'s'}] },
    { id:'pulse-effect', name:'Pulse', tag:'루프', params:[{id:'speed',label:'속도',min:0.5,max:3,step:0.25,default:1.5,unit:'s'},{id:'scale',label:'크기',min:1.02,max:1.2,step:0.02,default:1.05,unit:'x'}] },
    { id:'flicker-effect', name:'Flicker', tag:'루프', params:[{id:'speed',label:'속도',min:0.5,max:3,step:0.25,default:1.5,unit:'s'}] },
    { id:'rainbow-effect', name:'Rainbow', tag:'루프', params:[{id:'speed',label:'속도',min:1,max:6,step:0.5,default:3,unit:'s'}] },
    { id:'glitch-effect', name:'Glitch', tag:'액션', params:[{id:'speed',label:'속도',min:0.5,max:4,step:0.5,default:2,unit:'s'},{id:'intensity',label:'강도',min:1,max:8,step:1,default:3,unit:'px'}] },
    { id:'shake-effect', name:'Shake', tag:'액션', params:[{id:'intensity',label:'강도',min:3,max:15,step:1,default:10,unit:'px'}] },
    { id:'explode-effect', name:'Explode', tag:'액션', params:[{id:'range',label:'폭발범위',min:50,max:400,step:25,default:200,unit:'px'},{id:'stagger',label:'글자간격',min:0.01,max:0.08,step:0.01,default:0.03,unit:'s'}] },
];

// === STATE ===
let selectedMotion = null;
let motionParams = {};

// === TAB SWITCHING ===
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(`panel-${tab.dataset.tab}`).classList.add('active');
    });
});

// === BUILD MOTION GRID ===
const motionGrid = document.getElementById('motionGrid');
MOTIONS.forEach(m => {
    const card = document.createElement('div');
    card.className = 'motion-card';
    card.dataset.motion = m.id;
    card.innerHTML = `
        <div class="card-name">${m.name}</div>
        <div class="card-tag">${m.tag}</div>
        <div class="hover-preview"><span class="preview-text" data-motion="${m.id}">가나다</span></div>
    `;
    card.addEventListener('click', () => selectMotion(m));
    motionGrid.appendChild(card);
});

// Animate hover previews
function animateHoverPreviews() {
    document.querySelectorAll('.motion-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const previewEl = card.querySelector('.preview-text');
            if (!previewEl) return;
            const mid = previewEl.dataset.motion;
            previewEl.parentElement.style.display = 'flex';
            renderMiniPreview(previewEl, mid);
        });
        card.addEventListener('mouseleave', () => {
            const previewEl = card.querySelector('.preview-text');
            if (previewEl) {
                previewEl.innerHTML = '가나다';
                previewEl.style = '';
                previewEl.className = 'preview-text';
            }
        });
    });
}
animateHoverPreviews();

function renderMiniPreview(el, motionId) {
    const text = '가나다';
    el.innerHTML = text;
    el.style = '';
    el.className = 'preview-text';

    switch(motionId) {
        case 'fade-in': el.style.animation='fadeIn 1s ease forwards'; break;
        case 'fade-in-up': el.style.animation='fadeInUp 1s ease forwards'; break;
        case 'fade-in-scale': el.style.animation='fadeInScale 1s ease forwards'; break;
        case 'slide-left': el.style.animation='slideLeft 0.7s ease forwards'; break;
        case 'slide-right': el.style.animation='slideRight 0.7s ease forwards'; break;
        case 'blur-reveal': el.style.animation='blurReveal 1.2s ease forwards'; break;
        case 'drop-in': el.style.animation='dropIn 0.6s ease forwards'; break;
        case 'zoom-effect': el.style.animation='zoomIn 0.7s ease forwards'; break;
        case 'typing-effect':
            el.style.overflow='hidden'; el.style.whiteSpace='nowrap';
            el.style.borderRight='2px solid #00d4ff'; el.style.width='0';
            el.style.animation='typing 1.5s steps(3) forwards, blink 0.7s step-end infinite';
            break;
        case 'neon-effect': el.style.animation='neonFlicker 2s ease-in-out infinite alternate'; break;
        case 'gradient-wave':
            el.style.background='linear-gradient(90deg,#00d4ff,#ff006e,#667eea,#00d4ff)';
            el.style.backgroundSize='300% 100%'; el.style.webkitBackgroundClip='text';
            el.style.backgroundClip='text'; el.style.color='transparent';
            el.style.animation='gradientShift 2s ease infinite'; break;
        case 'shadow-dance': el.style.animation='shadowDance 1.5s ease-in-out infinite'; break;
        case 'pulse-effect': el.style.animation='pulse 1s ease-in-out infinite'; break;
        case 'flicker-effect': el.style.animation='flicker 1s linear infinite'; break;
        case 'rainbow-effect': el.style.animation='rainbow 2s linear infinite'; break;
        case 'glitch-effect': el.style.animation='glitchText 1.5s infinite'; break;
        case 'shake-effect': el.style.animation='shakeIt 0.5s ease both'; break;
        default:
            // char-based
            el.innerHTML = '';
            const cls = {
                'bounce-effect':'bounce-char','wave-effect':'wave-char','rubber-band':'rubber-char',
                'flip-effect':'flip-char','jelly-effect':'jelly-char','scatter-effect':'scatter-char',
                'spin-effect':'spin-char','pop-effect':'pop-char','swing-effect':'swing-char',
                'float-up':'float-char','domino-effect':'domino-char','explode-effect':'explode-char'
            }[motionId];
            if(cls) {
                text.split('').forEach((c,i) => {
                    const s = document.createElement('span');
                    s.textContent = c;
                    s.className = cls;
                    s.style.animationDelay = `${i*0.08}s`;
                    if(cls==='scatter-char'){
                        s.style.setProperty('--sx',`${(Math.random()-0.5)*100}px`);
                        s.style.setProperty('--sy',`${(Math.random()-0.5)*100}px`);
                        s.style.setProperty('--sr',`${(Math.random()-0.5)*360}deg`);
                    }
                    if(cls==='explode-char'){
                        s.style.setProperty('--ex',`${(Math.random()-0.5)*150}px`);
                        s.style.setProperty('--ey',`${(Math.random()-0.5)*150}px`);
                        s.style.setProperty('--er',`${(Math.random()-0.5)*360}deg`);
                    }
                    el.appendChild(s);
                });
            }
            break;
    }
}

// === SELECT MOTION & SHOW DETAIL ===
function selectMotion(motion) {
    selectedMotion = motion;
    motionParams = {};
    motion.params.forEach(p => { motionParams[p.id] = p.default; });

    document.querySelectorAll('.motion-card').forEach(c => c.classList.remove('selected'));
    document.querySelector(`[data-motion="${motion.id}"]`).classList.add('selected');

    // Build detail panel
    const detailPanel = document.getElementById('detailPanel');
    const detailTitle = document.getElementById('detailTitle');
    const detailControls = document.getElementById('detailControls');

    detailTitle.textContent = `${motion.name} 설정`;
    detailControls.innerHTML = '';

    motion.params.forEach(p => {
        const ctrl = document.createElement('div');
        ctrl.className = 'ctrl';
        ctrl.innerHTML = `
            <label>${p.label}</label>
            <input type="range" min="${p.min}" max="${p.max}" step="${p.step}" value="${p.default}" data-param="${p.id}">
            <div class="val">${p.default}${p.unit}</div>
        `;
        const input = ctrl.querySelector('input');
        const val = ctrl.querySelector('.val');
        input.addEventListener('input', e => {
            motionParams[p.id] = parseFloat(e.target.value);
            val.textContent = `${e.target.value}${p.unit}`;
        });
        detailControls.appendChild(ctrl);
    });

    detailPanel.style.display = 'block';
}

document.getElementById('detailClose').addEventListener('click', () => {
    document.getElementById('detailPanel').style.display = 'none';
    selectedMotion = null;
    document.querySelectorAll('.motion-card').forEach(c => c.classList.remove('selected'));
});

// === IMAGE UPLOAD / OCR ===
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

uploadArea.addEventListener('click', () => imageInput.click());
uploadArea.addEventListener('dragover', e => { e.preventDefault(); uploadArea.classList.add('dragover'); });
uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
uploadArea.addEventListener('drop', e => { e.preventDefault(); uploadArea.classList.remove('dragover'); const f=e.dataTransfer.files[0]; if(f&&f.type.startsWith('image/')) processImage(f); });
imageInput.addEventListener('change', e => { if(e.target.files[0]) processImage(e.target.files[0]); });
removeImg.addEventListener('click', () => { uploadArea.style.display='block'; imagePreview.style.display='none'; ocrProgress.style.display='none'; ocrResult.style.display='none'; imageInput.value=''; });

function processImage(file) {
    const reader = new FileReader();
    reader.onload = e => { previewImg.src=e.target.result; uploadArea.style.display='none'; imagePreview.style.display='block'; performOCR(e.target.result); };
    reader.readAsDataURL(file);
}
async function performOCR(img) {
    ocrProgress.style.display='block'; ocrResult.style.display='none';
    progressFill.style.width='0%'; progressFill.style.background='linear-gradient(90deg,#00d4ff,#667eea)';
    progressText.textContent='준비 중...';
    try {
        const r = await Tesseract.recognize(img,'kor+eng',{logger:m=>{
            if(m.status==='recognizing text'){const p=Math.round(m.progress*100);progressFill.style.width=`${p}%`;progressText.textContent=`인식 중... ${p}%`;}
            else if(m.status==='loading language traineddata'){progressText.textContent='한국어 데이터 로딩...';progressFill.style.width='20%';}
        }});
        const t=r.data.text.trim();
        if(t){ocrText.value=t;ocrProgress.style.display='none';ocrResult.style.display='block';}
        else{progressText.textContent='텍스트를 찾을 수 없습니다.';progressFill.style.width='100%';progressFill.style.background='#ff006e';}
    }catch(e){progressText.textContent='오류 발생';progressFill.style.background='#ff006e';}
}

// === FONT SIZE ===
document.getElementById('fontSizeRange').addEventListener('input', e => { document.getElementById('fontSizeValue').textContent=`${e.target.value}rem`; });

// === APPLY MOTION ===
document.getElementById('applyMotion').addEventListener('click', applyMotionToText);
document.getElementById('replayBtn').addEventListener('click', applyMotionToText);

function getCurrentText() {
    const tab = document.querySelector('.tab.active').dataset.tab;
    return tab==='image' ? ocrText.value.trim() : document.getElementById('textInput').value.trim();
}

function applyMotionToText() {
    const text = getCurrentText();
    if(!text || !selectedMotion) return;

    const font = document.getElementById('fontSelect').value;
    const fontSize = document.getElementById('fontSizeRange').value;
    const lines = text.split('\n').filter(l=>l.trim());
    const stage = document.getElementById('previewStage');

    stage.innerHTML = '';
    document.getElementById('replayBtn').style.display = 'inline-block';

    lines.forEach((line, idx) => {
        const el = document.createElement('div');
        el.className = `motion-line ${font}`;
        el.style.fontSize = `${fontSize}rem`;
        el.textContent = line;
        applyEffect(el, selectedMotion.id, line, idx, motionParams);
        stage.appendChild(el);
    });

    stage.scrollIntoView({behavior:'smooth',block:'center'});
}

function applyEffect(el, motion, line, idx, p) {
    const delay = idx * 0.2;
    switch(motion) {
        case 'fade-in': el.style.opacity='0'; el.style.animation=`fadeIn ${p.duration||1.2}s ease ${delay+(p.delay||0)}s forwards`; break;
        case 'fade-in-up': el.style.opacity='0'; el.style.animation=`fadeInUp ${p.duration||1.2}s ease ${delay}s forwards`; break;
        case 'fade-in-scale': el.style.opacity='0'; el.style.animation=`fadeInScale ${p.duration||1.2}s ease ${delay}s forwards`; break;
        case 'slide-left': el.style.opacity='0'; el.style.animation=`slideLeft ${p.duration||0.8}s ease ${delay}s forwards`; break;
        case 'slide-right': el.style.opacity='0'; el.style.animation=`slideRight ${p.duration||0.8}s ease ${delay}s forwards`; break;
        case 'blur-reveal': el.style.opacity='0'; el.style.animation=`blurReveal ${p.duration||1.5}s ease ${delay}s forwards`; break;
        case 'drop-in': el.style.opacity='0'; el.style.animation=`dropIn ${p.duration||0.7}s ease ${delay}s forwards`; break;
        case 'zoom-effect': el.style.opacity='0'; el.style.animation=`zoomIn ${p.duration||0.8}s ease ${delay}s forwards`; break;
        case 'typing-effect':
            el.style.overflow='hidden'; el.style.whiteSpace='nowrap';
            el.style.borderRight='2px solid #00d4ff'; el.style.width='0';
            el.style.animation=`typing ${p.speed||2.5}s steps(${line.length}) ${idx*(p.speed||2.5)}s forwards, blink 0.7s step-end infinite`;
            break;
        case 'bounce-effect': splitChars(el,line,'bounce-char',idx,p.stagger||0.05); break;
        case 'wave-effect': splitChars(el,line,'wave-char',0,p.stagger||0.08); break;
        case 'rubber-band': splitChars(el,line,'rubber-char',idx,p.stagger||0.06); break;
        case 'flip-effect': el.style.perspective='800px'; splitChars(el,line,'flip-char',idx,p.stagger||0.06); break;
        case 'jelly-effect': splitChars(el,line,'jelly-char',idx,p.stagger||0.05); break;
        case 'scatter-effect':
            el.textContent='';
            const range=p.range||200;
            line.split('').forEach((c,i)=>{
                const s=document.createElement('span'); s.textContent=c===' '?'\u00A0':c;
                s.className='scatter-char';
                s.style.setProperty('--sx',`${(Math.random()-0.5)*range}px`);
                s.style.setProperty('--sy',`${(Math.random()-0.5)*range}px`);
                s.style.setProperty('--sr',`${(Math.random()-0.5)*720}deg`);
                s.style.animationDelay=`${(idx*line.length+i)*(p.stagger||0.04)}s`;
                el.appendChild(s);
            });
            break;
        case 'spin-effect': splitChars(el,line,'spin-char',idx,p.stagger||0.07); break;
        case 'pop-effect': splitChars(el,line,'pop-char',idx,p.stagger||0.05); break;
        case 'swing-effect': splitChars(el,line,'swing-char',idx,p.stagger||0.07); break;
        case 'float-up': splitChars(el,line,'float-char',idx,p.stagger||0.06); break;
        case 'domino-effect': splitChars(el,line,'domino-char',idx,p.stagger||0.06); break;
        case 'neon-effect': el.style.animation=`neonFlicker ${p.speed||2}s ease-in-out infinite alternate`; break;
        case 'gradient-wave':
            el.style.background='linear-gradient(90deg,#00d4ff,#ff006e,#667eea,#00d4ff)';
            el.style.backgroundSize='300% 100%'; el.style.webkitBackgroundClip='text';
            el.style.backgroundClip='text'; el.style.color='transparent';
            el.style.animation=`gradientShift ${p.speed||3}s ease infinite`; break;
        case 'shadow-dance': el.style.animation=`shadowDance ${p.speed||2}s ease-in-out infinite`; break;
        case 'pulse-effect': el.style.animation=`pulse ${p.speed||1.5}s ease-in-out infinite`; break;
        case 'flicker-effect': el.style.animation=`flicker ${p.speed||1.5}s linear infinite`; break;
        case 'rainbow-effect': el.style.animation=`rainbow ${p.speed||3}s linear infinite`; break;
        case 'glitch-effect':
            el.style.position='relative'; el.style.animation=`glitchText ${p.speed||2}s infinite`;
            const b=document.createElement('span'); b.textContent=line;
            b.style.cssText=`position:absolute;top:0;left:0;width:100%;color:#ff006e;animation:glitchBefore ${p.speed||2}s infinite;clip-path:inset(0 0 60% 0)`;
            const a=document.createElement('span'); a.textContent=line;
            a.style.cssText=`position:absolute;top:0;left:0;width:100%;color:#00d4ff;animation:glitchAfter ${p.speed||2}s infinite;clip-path:inset(60% 0 0 0)`;
            el.appendChild(b); el.appendChild(a); break;
        case 'shake-effect': el.style.animation=`shakeIt 0.6s ease both`; el.style.animationDelay=`${delay}s`; break;
        case 'explode-effect':
            el.textContent='';
            const er=p.range||200;
            line.split('').forEach((c,i)=>{
                const s=document.createElement('span'); s.textContent=c===' '?'\u00A0':c;
                s.className='explode-char';
                s.style.setProperty('--ex',`${(Math.random()-0.5)*er}px`);
                s.style.setProperty('--ey',`${(Math.random()-0.5)*er}px`);
                s.style.setProperty('--er',`${(Math.random()-0.5)*720}deg`);
                s.style.animationDelay=`${(idx*line.length+i)*(p.stagger||0.03)}s`;
                el.appendChild(s);
            });
            break;
    }
}

function splitChars(el, line, className, lineIdx, stagger) {
    el.textContent='';
    line.split('').forEach((c,i)=>{
        const s=document.createElement('span');
        s.textContent=c===' '?'\u00A0':c;
        s.className=className;
        s.style.animationDelay=`${(lineIdx*line.length+i)*stagger}s`;
        el.appendChild(s);
    });
}

// Typing keyframe
const sty=document.createElement('style');
sty.textContent=`@keyframes typing{from{width:0}to{width:100%}}`;
document.head.appendChild(sty);
