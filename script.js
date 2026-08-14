// === MOTION DATA ===
const MOTIONS = [
    { id:'fade-in', name:'Fade In', tag:'등장', params:[
        {id:'duration',label:'지속시간',min:0.1,max:5,step:0.1,default:1.2,unit:'s'},
        {id:'delay',label:'딜레이',min:0,max:3,step:0.05,default:0,unit:'s'},
        {id:'easing',label:'이징',type:'select',options:['ease','ease-in','ease-out','ease-in-out','linear','cubic-bezier(0.68,-0.55,0.27,1.55)'],labels:['Ease','Ease In','Ease Out','Ease In-Out','Linear','Bounce Back'],default:'ease'},
        {id:'lineDelay',label:'줄 간격',min:0,max:1,step:0.05,default:0.2,unit:'s'}
    ]},
    { id:'fade-in-up', name:'Fade Up', tag:'등장', params:[
        {id:'duration',label:'지속시간',min:0.1,max:5,step:0.1,default:1.2,unit:'s'},
        {id:'distance',label:'이동거리',min:5,max:120,step:1,default:30,unit:'px'},
        {id:'easing',label:'이징',type:'select',options:['ease','ease-out','cubic-bezier(0.16,1,0.3,1)','cubic-bezier(0.34,1.56,0.64,1)'],labels:['Ease','Ease Out','Expo Out','Back Out'],default:'ease'},
        {id:'lineDelay',label:'줄 간격',min:0,max:1,step:0.05,default:0.2,unit:'s'}
    ]},
    { id:'fade-in-scale', name:'Fade Scale', tag:'등장', params:[
        {id:'duration',label:'지속시간',min:0.1,max:5,step:0.1,default:1.2,unit:'s'},
        {id:'startScale',label:'시작크기',min:0.01,max:2,step:0.05,default:0.7,unit:'x'},
        {id:'easing',label:'이징',type:'select',options:['ease','ease-out','cubic-bezier(0.34,1.56,0.64,1)'],labels:['Ease','Ease Out','Overshoot'],default:'ease'},
        {id:'lineDelay',label:'줄 간격',min:0,max:1,step:0.05,default:0.2,unit:'s'}
    ]},
    { id:'slide-left', name:'Slide Left', tag:'등장', params:[
        {id:'duration',label:'지속시간',min:0.1,max:3,step:0.1,default:0.8,unit:'s'},
        {id:'distance',label:'이동거리',min:10,max:300,step:5,default:80,unit:'px'},
        {id:'easing',label:'이징',type:'select',options:['ease','ease-out','cubic-bezier(0.16,1,0.3,1)','cubic-bezier(0.68,-0.55,0.27,1.55)'],labels:['Ease','Ease Out','Expo Out','Elastic'],default:'ease'},
        {id:'lineDelay',label:'줄 간격',min:0,max:1,step:0.05,default:0.2,unit:'s'}
    ]},
    { id:'slide-right', name:'Slide Right', tag:'등장', params:[
        {id:'duration',label:'지속시간',min:0.1,max:3,step:0.1,default:0.8,unit:'s'},
        {id:'distance',label:'이동거리',min:10,max:300,step:5,default:80,unit:'px'},
        {id:'easing',label:'이징',type:'select',options:['ease','ease-out','cubic-bezier(0.16,1,0.3,1)','cubic-bezier(0.68,-0.55,0.27,1.55)'],labels:['Ease','Ease Out','Expo Out','Elastic'],default:'ease'},
        {id:'lineDelay',label:'줄 간격',min:0,max:1,step:0.05,default:0.2,unit:'s'}
    ]},
    { id:'blur-reveal', name:'Blur Reveal', tag:'등장', params:[
        {id:'duration',label:'지속시간',min:0.3,max:5,step:0.1,default:1.5,unit:'s'},
        {id:'blur',label:'블러량',min:2,max:50,step:1,default:20,unit:'px'},
        {id:'spacing',label:'자간확대',min:0,max:20,step:1,default:8,unit:'px'},
        {id:'easing',label:'이징',type:'select',options:['ease','ease-out','cubic-bezier(0.16,1,0.3,1)'],labels:['Ease','Ease Out','Expo Out'],default:'ease'},
        {id:'lineDelay',label:'줄 간격',min:0,max:1,step:0.05,default:0.3,unit:'s'}
    ]},
    { id:'drop-in', name:'Drop In', tag:'등장', params:[
        {id:'duration',label:'지속시간',min:0.2,max:3,step:0.1,default:0.7,unit:'s'},
        {id:'height',label:'낙하높이',min:10,max:200,step:5,default:60,unit:'px'},
        {id:'bounce',label:'바운스',min:0,max:20,step:1,default:8,unit:'px'},
        {id:'easing',label:'이징',type:'select',options:['ease','cubic-bezier(0.34,1.56,0.64,1)','cubic-bezier(0.68,-0.55,0.27,1.55)'],labels:['Ease','Overshoot','Elastic'],default:'ease'},
        {id:'lineDelay',label:'줄 간격',min:0,max:1,step:0.05,default:0.15,unit:'s'}
    ]},
    { id:'zoom-effect', name:'Zoom', tag:'등장', params:[
        {id:'duration',label:'지속시간',min:0.2,max:3,step:0.1,default:0.8,unit:'s'},
        {id:'startScale',label:'시작크기',min:1.5,max:8,step:0.5,default:3,unit:'x'},
        {id:'blur',label:'블러',min:0,max:20,step:1,default:10,unit:'px'},
        {id:'easing',label:'이징',type:'select',options:['ease','ease-out','cubic-bezier(0.16,1,0.3,1)'],labels:['Ease','Ease Out','Expo Out'],default:'ease'},
        {id:'lineDelay',label:'줄 간격',min:0,max:1,step:0.05,default:0.2,unit:'s'}
    ]},
    { id:'typing-effect', name:'Typing', tag:'타이핑', params:[
        {id:'speed',label:'전체속도',min:0.5,max:8,step:0.25,default:2.5,unit:'s'},
        {id:'cursorWidth',label:'커서 두께',min:1,max:5,step:1,default:2,unit:'px'},
        {id:'cursorSpeed',label:'커서깜빡',min:0.3,max:1.5,step:0.1,default:0.7,unit:'s'},
        {id:'lineDelay',label:'줄 간격',min:0,max:3,step:0.25,default:0,unit:'s'}
    ]},
    { id:'bounce-effect', name:'Bounce', tag:'글자별', params:[
        {id:'stagger',label:'글자간격',min:0.01,max:0.2,step:0.005,default:0.05,unit:'s'},
        {id:'duration',label:'지속시간',min:0.2,max:2,step:0.1,default:0.6,unit:'s'},
        {id:'height',label:'낙하높이',min:10,max:120,step:5,default:50,unit:'px'},
        {id:'overshoot',label:'오버슈트',min:1,max:1.4,step:0.05,default:1.1,unit:'x'},
        {id:'easing',label:'이징',type:'select',options:['ease','cubic-bezier(0.34,1.56,0.64,1)','cubic-bezier(0.68,-0.55,0.27,1.55)'],labels:['Ease','Overshoot','Elastic'],default:'ease'}
    ]},
    { id:'wave-effect', name:'Wave', tag:'글자별', params:[
        {id:'speed',label:'속도',min:0.5,max:5,step:0.1,default:1.5,unit:'s'},
        {id:'height',label:'높이',min:3,max:40,step:1,default:12,unit:'px'},
        {id:'stagger',label:'글자위상',min:0.03,max:0.2,step:0.01,default:0.08,unit:'s'}
    ]},
    { id:'rubber-band', name:'Rubber Band', tag:'글자별', params:[
        {id:'stagger',label:'글자간격',min:0.01,max:0.2,step:0.005,default:0.06,unit:'s'},
        {id:'duration',label:'지속시간',min:0.4,max:2,step:0.1,default:1,unit:'s'},
        {id:'intensity',label:'탄성강도',min:0.1,max:0.6,step:0.05,default:0.4,unit:'x'}
    ]},
    { id:'flip-effect', name:'3D Flip', tag:'글자별', params:[
        {id:'stagger',label:'글자간격',min:0.01,max:0.2,step:0.005,default:0.06,unit:'s'},
        {id:'duration',label:'지속시간',min:0.3,max:2,step:0.1,default:0.8,unit:'s'},
        {id:'angle',label:'회전각도',min:45,max:180,step:15,default:90,unit:'°'},
        {id:'direction',label:'방향',type:'select',options:['X','Y'],labels:['위아래','좌우'],default:'X'}
    ]},
    { id:'jelly-effect', name:'Jelly', tag:'글자별', params:[
        {id:'stagger',label:'글자간격',min:0.01,max:0.15,step:0.005,default:0.05,unit:'s'},
        {id:'duration',label:'지속시간',min:0.3,max:2,step:0.1,default:0.8,unit:'s'},
        {id:'squash',label:'찌그러짐',min:0.5,max:1.5,step:0.1,default:1.3,unit:'x'},
        {id:'dropHeight',label:'낙하높이',min:15,max:80,step:5,default:40,unit:'px'}
    ]},
    { id:'scatter-effect', name:'Scatter', tag:'글자별', params:[
        {id:'range',label:'흩어짐거리',min:30,max:500,step:10,default:200,unit:'px'},
        {id:'rotation',label:'회전범위',min:90,max:1080,step:90,default:720,unit:'°'},
        {id:'stagger',label:'글자간격',min:0.01,max:0.12,step:0.005,default:0.04,unit:'s'},
        {id:'duration',label:'지속시간',min:0.5,max:2.5,step:0.1,default:1,unit:'s'},
        {id:'easing',label:'이징',type:'select',options:['cubic-bezier(0.175,0.885,0.32,1.275)','ease','cubic-bezier(0.68,-0.55,0.27,1.55)'],labels:['Back Out','Ease','Elastic'],default:'cubic-bezier(0.175,0.885,0.32,1.275)'}
    ]},
    { id:'spin-effect', name:'Spin', tag:'글자별', params:[
        {id:'stagger',label:'글자간격',min:0.02,max:0.2,step:0.01,default:0.07,unit:'s'},
        {id:'duration',label:'지속시간',min:0.3,max:2,step:0.1,default:0.8,unit:'s'},
        {id:'turns',label:'회전수',min:0.5,max:3,step:0.5,default:1,unit:'회'}
    ]},
    { id:'pop-effect', name:'Pop', tag:'글자별', params:[
        {id:'stagger',label:'글자간격',min:0.01,max:0.15,step:0.005,default:0.05,unit:'s'},
        {id:'duration',label:'지속시간',min:0.2,max:1.5,step:0.1,default:0.5,unit:'s'},
        {id:'overshoot',label:'오버슈트',min:1,max:1.8,step:0.1,default:1.3,unit:'x'}
    ]},
    { id:'swing-effect', name:'Swing', tag:'글자별', params:[
        {id:'stagger',label:'글자간격',min:0.02,max:0.2,step:0.01,default:0.07,unit:'s'},
        {id:'duration',label:'지속시간',min:0.5,max:2.5,step:0.1,default:1,unit:'s'},
        {id:'angle',label:'최대각도',min:10,max:60,step:5,default:40,unit:'°'}
    ]},
    { id:'float-up', name:'Float Up', tag:'글자별', params:[
        {id:'stagger',label:'글자간격',min:0.02,max:0.15,step:0.01,default:0.06,unit:'s'},
        {id:'duration',label:'지속시간',min:0.5,max:3,step:0.1,default:1.2,unit:'s'},
        {id:'distance',label:'떠오름거리',min:10,max:120,step:5,default:50,unit:'px'},
        {id:'rotate',label:'기울기',min:0,max:15,step:1,default:5,unit:'°'}
    ]},
    { id:'domino-effect', name:'Domino', tag:'글자별', params:[
        {id:'stagger',label:'글자간격',min:0.02,max:0.15,step:0.005,default:0.06,unit:'s'},
        {id:'duration',label:'지속시간',min:0.3,max:1.5,step:0.1,default:0.6,unit:'s'},
        {id:'angle',label:'쓰러짐각',min:30,max:120,step:10,default:80,unit:'°'}
    ]},
    { id:'neon-effect', name:'Neon', tag:'루프', params:[
        {id:'speed',label:'속도',min:0.5,max:6,step:0.25,default:2,unit:'s'},
        {id:'glowSize',label:'글로우크기',min:3,max:100,step:1,default:42,unit:'px'},
        {id:'color1',label:'주 색상',type:'color',default:'#00d4ff'},
        {id:'color2',label:'보조 색상',type:'color',default:'#00ffaa'},
        {id:'iterations',label:'반복',type:'select',options:['infinite','1','2','3','5'],labels:['무한','1회','2회','3회','5회'],default:'infinite'}
    ]},
    { id:'gradient-wave', name:'Gradient', tag:'루프', params:[
        {id:'speed',label:'속도',min:0.5,max:10,step:0.5,default:3,unit:'s'},
        {id:'color1',label:'색상1',type:'color',default:'#00d4ff'},
        {id:'color2',label:'색상2',type:'color',default:'#ff006e'},
        {id:'color3',label:'색상3',type:'color',default:'#667eea'},
        {id:'iterations',label:'반복',type:'select',options:['infinite','1','2','3'],labels:['무한','1회','2회','3회'],default:'infinite'}
    ]},
    { id:'shadow-dance', name:'Shadow', tag:'루프', params:[
        {id:'speed',label:'속도',min:0.5,max:6,step:0.25,default:2,unit:'s'},
        {id:'offset',label:'그림자거리',min:1,max:12,step:1,default:4,unit:'px'},
        {id:'color1',label:'색상1',type:'color',default:'#ff006e'},
        {id:'color2',label:'색상2',type:'color',default:'#00d4ff'},
        {id:'iterations',label:'반복',type:'select',options:['infinite','1','2','3','5'],labels:['무한','1회','2회','3회','5회'],default:'infinite'}
    ]},
    { id:'pulse-effect', name:'Pulse', tag:'루프', params:[
        {id:'speed',label:'속도',min:0.3,max:5,step:0.1,default:1.5,unit:'s'},
        {id:'scale',label:'확대비율',min:1.01,max:1.4,step:0.01,default:1.05,unit:'x'},
        {id:'opacity',label:'투명도변화',min:0.3,max:1,step:0.05,default:0.8,unit:''},
        {id:'iterations',label:'반복',type:'select',options:['infinite','1','2','3','5'],labels:['무한','1회','2회','3회','5회'],default:'infinite'}
    ]},
    { id:'flicker-effect', name:'Flicker', tag:'루프', params:[
        {id:'speed',label:'속도',min:0.3,max:4,step:0.1,default:1.5,unit:'s'},
        {id:'minOpacity',label:'최소투명도',min:0,max:0.7,step:0.05,default:0.2,unit:''},
        {id:'iterations',label:'반복',type:'select',options:['infinite','2','3','5','10'],labels:['무한','2회','3회','5회','10회'],default:'infinite'}
    ]},
    { id:'rainbow-effect', name:'Rainbow', tag:'루프', params:[
        {id:'speed',label:'속도',min:0.5,max:10,step:0.5,default:3,unit:'s'},
        {id:'iterations',label:'반복',type:'select',options:['infinite','1','2','3'],labels:['무한','1회','2회','3회'],default:'infinite'}
    ]},
    { id:'glitch-effect', name:'Glitch', tag:'액션', params:[
        {id:'speed',label:'속도',min:0.3,max:6,step:0.1,default:2,unit:'s'},
        {id:'intensity',label:'강도',min:1,max:12,step:0.5,default:3,unit:'px'},
        {id:'color1',label:'채널1색상',type:'color',default:'#ff006e'},
        {id:'color2',label:'채널2색상',type:'color',default:'#00d4ff'},
        {id:'iterations',label:'반복',type:'select',options:['infinite','1','2','3','5'],labels:['무한','1회','2회','3회','5회'],default:'infinite'}
    ]},
    { id:'shake-effect', name:'Shake', tag:'액션', params:[
        {id:'intensity',label:'강도',min:1,max:25,step:1,default:10,unit:'px'},
        {id:'duration',label:'지속시간',min:0.2,max:2,step:0.1,default:0.6,unit:'s'},
        {id:'rotation',label:'회전',min:0,max:5,step:0.5,default:2,unit:'°'},
        {id:'iterations',label:'반복',type:'select',options:['1','2','3','infinite'],labels:['1회','2회','3회','무한'],default:'1'}
    ]},
    { id:'explode-effect', name:'Explode', tag:'액션', params:[
        {id:'range',label:'폭발범위',min:30,max:600,step:10,default:200,unit:'px'},
        {id:'rotation',label:'회전범위',min:90,max:1080,step:90,default:720,unit:'°'},
        {id:'stagger',label:'글자간격',min:0.005,max:0.1,step:0.005,default:0.03,unit:'s'},
        {id:'duration',label:'지속시간',min:0.5,max:3,step:0.1,default:1.2,unit:'s'}
    ]},
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
        const panelId = `panel-${tab.dataset.tab}`;
        const panel = document.getElementById(panelId);
        if (panel) panel.classList.add('active');
        // Show/hide masking section
        document.getElementById('maskingSection').style.display = tab.dataset.tab === 'masking' ? 'block' : 'none';
        if (tab.dataset.tab === 'masking') {
            const text = getCurrentTextRaw() || '배달의민족 텍스트 모션';
            const maskText = document.getElementById('maskingText');
            maskText.textContent = text;
            enableMaskSelection(maskText);
        }
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
            renderMiniPreview(previewEl, mid);
        });
        card.addEventListener('mouseleave', () => {
            const previewEl = card.querySelector('.preview-text');
            if (previewEl) {
                previewEl.innerHTML = '';
                previewEl.style.cssText = '';
                previewEl.className = 'preview-text';
                previewEl.setAttribute('data-motion', previewEl.dataset.motion);
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

        if (p.type === 'select') {
            ctrl.innerHTML = `<label>${p.label}</label><select data-param="${p.id}">${p.options.map((o,i) => `<option value="${o}" ${o===p.default?'selected':''}>${p.labels[i]}</option>`).join('')}</select>`;
            const sel = ctrl.querySelector('select');
            sel.addEventListener('change', e => { motionParams[p.id] = e.target.value; liveUpdate(); });
        } else if (p.type === 'color') {
            ctrl.innerHTML = `<label>${p.label}</label><input type="color" value="${p.default}" data-param="${p.id}">`;
            const inp = ctrl.querySelector('input');
            inp.addEventListener('input', e => { motionParams[p.id] = e.target.value; liveUpdate(); });
        } else {
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
                liveUpdate();
            });
        }
        detailControls.appendChild(ctrl);
    });

    detailPanel.style.display = 'block';

    // Auto-apply on first select
    liveUpdate();
}

// Live update preview when params change
function liveUpdate() {
    const text = getCurrentText();
    if (!text || !selectedMotion) return;
    const font = document.getElementById('fontSelect').value;
    const fontSize = document.getElementById('fontSizeRange').value;
    const lines = text.split('\n').filter(l => l.trim());
    const stage = document.getElementById('previewStage');
    stage.innerHTML = '';
    document.getElementById('replayBtn').style.display = 'inline-block';
    document.getElementById('exportBtn').style.display = 'inline-block';
    lines.forEach((line, idx) => {
        const el = document.createElement('div');
        el.className = `motion-line ${font}`;
        el.style.fontSize = `${fontSize}rem`;
        el.textContent = line;
        applyEffect(el, selectedMotion.id, line, idx, motionParams);
        stage.appendChild(el);
    });
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
document.getElementById('fontSizeRange').addEventListener('input', e => { document.getElementById('fontSizeValue').textContent=`${e.target.value}rem`; liveUpdate(); });
document.getElementById('fontSelect').addEventListener('change', () => liveUpdate());

// === APPLY MOTION ===
document.getElementById('applyMotion').addEventListener('click', liveUpdate);
document.getElementById('replayBtn').addEventListener('click', liveUpdate);

function getCurrentText() {
    const tab = document.querySelector('.tab.active').dataset.tab;
    if (tab === 'image') return document.getElementById('ocrText').value.trim();
    return document.getElementById('textInput').value.trim();
}

function getCurrentTextRaw() {
    return document.getElementById('textInput').value.trim() || document.getElementById('ocrText').value.trim();
}

function applyMotionToText() {
    liveUpdate();
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

// === EXPORT AS MP4 (GREEN SCREEN) ===
document.getElementById('exportBtn').addEventListener('click', exportVideo);

async function exportVideo() {
    const stage = document.getElementById('previewStage');
    const btn = document.getElementById('exportBtn');
    if (!stage.querySelector('.motion-line')) return;

    btn.textContent = '녹화 준비 중...';
    btn.disabled = true;

    // Set green screen background on stage
    const originalBg = stage.style.background;
    const originalBorder = stage.style.border;
    stage.style.background = '#00ff00';
    stage.style.border = 'none';

    // Re-trigger animation
    liveUpdate();
    stage.style.background = '#00ff00';
    stage.style.border = 'none';

    const duration = estimateDuration();
    const fps = 30;
    const totalFrames = Math.ceil(duration * fps);
    const frameInterval = 1000 / fps;

    // Setup canvas for recording
    const rect = stage.getBoundingClientRect();
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(rect.width * 2);
    canvas.height = Math.round(rect.height * 2);
    const ctx = canvas.getContext('2d');

    const stream = canvas.captureStream(fps);
    const chunks = [];

    let mimeType = 'video/webm;codecs=vp9';
    if (MediaRecorder.isTypeSupported('video/mp4;codecs=avc1')) {
        mimeType = 'video/mp4;codecs=avc1';
    }
    const ext = mimeType.includes('mp4') ? 'mp4' : 'webm';

    const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 8000000 });
    recorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };
    recorder.onstop = () => {
        // Restore stage
        stage.style.background = originalBg;
        stage.style.border = originalBorder;

        const blob = new Blob(chunks, { type: mimeType.split(';')[0] });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `text-motion.${ext}`;
        a.click();
        URL.revokeObjectURL(url);
        btn.textContent = 'MP4 내보내기 (그린스크린)';
        btn.disabled = false;
    };

    btn.textContent = '녹화 중...';
    recorder.start();

    let frame = 0;
    async function captureFrame() {
        if (frame >= totalFrames) {
            recorder.stop();
            return;
        }

        try {
            const capturedCanvas = await html2canvas(stage, {
                backgroundColor: '#00ff00',
                scale: 2,
                useCORS: true,
                logging: false
            });
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(capturedCanvas, 0, 0, canvas.width, canvas.height);
        } catch(e) {
            ctx.fillStyle = '#00ff00';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        frame++;
        const progress = Math.round((frame / totalFrames) * 100);
        btn.textContent = `녹화 중... ${progress}%`;

        setTimeout(captureFrame, frameInterval);
    }

    // Small delay to let animation start
    setTimeout(captureFrame, 100);
}

function estimateDuration() {
    if (!selectedMotion) return 3;
    const p = motionParams;
    const text = getCurrentText();
    const lines = text ? text.split('\n').filter(l=>l.trim()) : ['test'];
    const lineCount = lines.length;
    const maxLen = Math.max(...lines.map(l=>l.length));
    let dur = 3;
    if (p.duration) dur = p.duration + lineCount * (p.lineDelay || 0.2);
    if (p.speed) dur = p.speed * lineCount;
    if (p.stagger) dur = p.stagger * maxLen * lineCount + 1;
    return Math.min(Math.max(dur + 0.5, 2), 10);
}

// === MASKING FEATURE ===
const maskingSection = document.getElementById('maskingSection');
let maskSelection = { start: 0, end: 0 };

document.getElementById('maskingClose').addEventListener('click', () => {
    maskingSection.style.display = 'none';
});

function enableMaskSelection(el) {
    el.addEventListener('mouseup', () => {
        const sel = window.getSelection();
        if (sel.rangeCount > 0 && sel.toString().length > 0) {
            const range = sel.getRangeAt(0);
            // Highlight selection
            const text = el.textContent;
            const selText = sel.toString();
            const startIdx = text.indexOf(selText);
            if (startIdx >= 0) {
                maskSelection = { start: startIdx, end: startIdx + selText.length };
                el.innerHTML = text.substring(0, startIdx) +
                    `<span class="masked">${selText}</span>` +
                    text.substring(startIdx + selText.length);
            }
        }
    });
}

// Masking param controls
['maskStart','maskHideDur','maskHold','maskShowDur'].forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener('input', () => {
        document.getElementById(id+'Val').textContent = el.value + 's';
    });
});

document.getElementById('applyMasking').addEventListener('click', () => {
    const text = document.getElementById('maskingText').textContent;
    if (!text || maskSelection.start === maskSelection.end) return;

    const preview = document.getElementById('maskingPreview');
    const font = document.getElementById('fontSelect').value;
    const maskStart = parseFloat(document.getElementById('maskStart').value);
    const hideDur = parseFloat(document.getElementById('maskHideDur').value);
    const hold = parseFloat(document.getElementById('maskHold').value);
    const showDur = parseFloat(document.getElementById('maskShowDur').value);
    const style = document.getElementById('maskStyle').value;
    const easing = document.getElementById('maskEasing').value;

    const before = text.substring(0, maskSelection.start);
    const masked = text.substring(maskSelection.start, maskSelection.end);
    const after = text.substring(maskSelection.end);

    const totalDur = maskStart + hideDur + hold + showDur;

    // Build CSS animation
    const hideEnd = ((maskStart + hideDur) / totalDur * 100).toFixed(1);
    const holdEnd = ((maskStart + hideDur + hold) / totalDur * 100).toFixed(1);
    const showEnd = 100;
    const startPct = ((maskStart) / totalDur * 100).toFixed(1);

    let hideStyle = '', showStyle = '', hiddenStyle = '';
    switch(style) {
        case 'opacity': hideStyle='opacity:0'; showStyle='opacity:1'; hiddenStyle='opacity:0'; break;
        case 'blur': hideStyle='opacity:0;filter:blur(10px)'; showStyle='opacity:1;filter:blur(0)'; hiddenStyle='opacity:0;filter:blur(10px)'; break;
        case 'scale': hideStyle='transform:scale(0);opacity:0'; showStyle='transform:scale(1);opacity:1'; hiddenStyle='transform:scale(0);opacity:0'; break;
        case 'slide-up': hideStyle='transform:translateY(-20px);opacity:0'; showStyle='transform:translateY(0);opacity:1'; hiddenStyle='transform:translateY(-20px);opacity:0'; break;
        case 'clip': hideStyle='clip-path:inset(0 100% 0 0)'; showStyle='clip-path:inset(0 0 0 0)'; hiddenStyle='clip-path:inset(0 100% 0 0)'; break;
        case 'glitch': hideStyle='opacity:0;transform:translateX(5px)'; showStyle='opacity:1;transform:translateX(0)'; hiddenStyle='opacity:0;transform:translateX(-5px)'; break;
    }

    const animName = 'maskAnim' + Date.now();
    const keyframes = `@keyframes ${animName} {
        0%, ${startPct}% { ${showStyle} }
        ${hideEnd}% { ${hiddenStyle} }
        ${holdEnd}% { ${hiddenStyle} }
        ${showEnd}% { ${showStyle} }
    }`;

    // Inject keyframes
    const styleEl = document.createElement('style');
    styleEl.textContent = keyframes;
    document.head.appendChild(styleEl);

    preview.innerHTML = `<span class="${font}">${before}<span style="display:inline-block;animation:${animName} ${totalDur}s ${easing} infinite">${masked}</span>${after}</span>`;
});
