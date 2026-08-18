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
    { id:'water-ripple', name:'Water Ripple', tag:'루프', params:[
        {id:'speed',label:'물결속도',min:0.3,max:8,step:0.1,default:1.5,unit:'s'},
        {id:'heightY',label:'상하진폭',min:1,max:60,step:1,default:6,unit:'px'},
        {id:'heightX',label:'좌우진폭',min:0,max:30,step:0.5,default:2,unit:'px'},
        {id:'skew',label:'왜곡(skew)',min:0,max:30,step:0.5,default:3,unit:'°'},
        {id:'wavelength',label:'파장',min:0.02,max:1,step:0.01,default:0.15,unit:''},
        {id:'intensity',label:'강도변화',min:0,max:5,step:0.1,default:0,unit:'x'},
        {id:'color',label:'텍스트색상',type:'color',default:'#a0ffd0'},
        {id:'iterations',label:'반복',type:'select',options:['infinite','3','5','10'],labels:['무한','3회','5회','10회'],default:'infinite'}
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
    if (!selectedMotion) return;

    const activeTab = document.querySelector('.tab.active').dataset.tab;
    const stage = document.getElementById('previewStage');
    stage.innerHTML = '';
    document.getElementById('replayBtn').style.display = 'inline-block';
    document.getElementById('exportBtn').style.display = 'inline-block';

    if (activeTab === 'image' && uploadedImageSrc) {
        // Image motion mode
        const el = document.createElement('div');
        el.className = 'motion-line';
        el.style.display = 'inline-block';
        const img = document.createElement('img');
        img.src = uploadedImageSrc;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '300px';
        img.style.display = 'block';
        el.appendChild(img);
        applyEffectToElement(el, img, selectedMotion.id, motionParams);
        stage.appendChild(el);
    } else {
        // Text motion mode
        const text = getCurrentText();
        if (!text) return;
        const font = document.getElementById('fontSelect').value;
        const fontSize = document.getElementById('fontSizeRange').value;
        const lines = text.split('\n').filter(l => l.trim());
        lines.forEach((line, idx) => {
            const el = document.createElement('div');
            el.className = `motion-line ${font}`;
            el.style.fontSize = `${fontSize}rem`;
            el.textContent = line;
            applyEffect(el, selectedMotion.id, line, idx, motionParams);
            stage.appendChild(el);
        });
    }
}

// Apply motion to image element
function applyEffectToElement(el, img, motion, p) {
    const delay = 0;
    // Apply animation to the img directly for filter-based effects
    switch(motion) {
        case 'fade-in': el.style.opacity='0'; el.style.animation=`fadeIn ${p.duration||1.2}s ${p.easing||'ease'} ${delay}s forwards`; break;
        case 'fade-in-up': el.style.opacity='0'; el.style.animation=`fadeInUp ${p.duration||1.2}s ${p.easing||'ease'} forwards`; break;
        case 'fade-in-scale': el.style.opacity='0'; el.style.animation=`fadeInScale ${p.duration||1.2}s ${p.easing||'ease'} forwards`; break;
        case 'slide-left': el.style.opacity='0'; el.style.animation=`slideLeft ${p.duration||0.8}s ${p.easing||'ease'} forwards`; break;
        case 'slide-right': el.style.opacity='0'; el.style.animation=`slideRight ${p.duration||0.8}s ${p.easing||'ease'} forwards`; break;
        case 'blur-reveal': el.style.opacity='0'; el.style.animation=`blurReveal ${p.duration||1.5}s ${p.easing||'ease'} forwards`; break;
        case 'drop-in': el.style.opacity='0'; el.style.animation=`dropIn ${p.duration||0.7}s ${p.easing||'ease'} forwards`; break;
        case 'zoom-effect': el.style.opacity='0'; el.style.animation=`zoomIn ${p.duration||0.8}s ${p.easing||'ease'} forwards`; break;
        case 'neon-effect':
            img.style.animation=`neonImgFlicker ${p.speed||2}s ease-in-out ${p.iterations||'infinite'} alternate`;
            img.style.setProperty('--neon-color1', p.color1||'#00d4ff');
            img.style.setProperty('--neon-color2', p.color2||'#00ffaa');
            img.style.setProperty('--neon-glow', `${p.glowSize||42}px`);
            break;
        case 'pulse-effect': el.style.animation=`pulse ${p.speed||1.5}s ease-in-out ${p.iterations||'infinite'}`; break;
        case 'shake-effect': el.style.animation=`shakeIt ${p.duration||0.6}s ease both`; el.style.animationIterationCount=p.iterations||'1'; break;
        case 'shadow-dance':
            img.style.animation=`shadowDanceImg ${p.speed||2}s ease-in-out ${p.iterations||'infinite'}`;
            img.style.setProperty('--sd-color1', p.color1||'#ff006e');
            img.style.setProperty('--sd-color2', p.color2||'#00d4ff');
            img.style.setProperty('--sd-offset', `${p.offset||4}px`);
            break;
        case 'flicker-effect': img.style.animation=`flicker ${p.speed||1.5}s linear ${p.iterations||'infinite'}`; break;
        case 'water-ripple':
            el.style.animation=`waterRippleImg ${p.speed||1.5}s ease-in-out ${p.iterations||'infinite'}`;
            el.style.setProperty('--ripple-y',`${p.heightY||6}px`);
            el.style.setProperty('--ripple-x',`${p.heightX||2}px`);
            el.style.setProperty('--ripple-skew',`${p.skew||3}deg`);
            break;
        case 'gradient-wave':
            el.style.position='relative';
            el.style.overflow='hidden';
            const overlay = document.createElement('div');
            overlay.style.cssText=`position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg,${p.color1||'#00d4ff'}55,${p.color2||'#ff006e'}55,${p.color3||'#667eea'}55,${p.color1||'#00d4ff'}55);background-size:300% 100%;animation:gradientShift ${p.speed||3}s ease ${p.iterations||'infinite'};mix-blend-mode:overlay;pointer-events:none;`;
            el.appendChild(overlay);
            break;
        case 'glitch-effect':
            img.style.animation=`glitchText ${p.speed||2}s ${p.iterations||'infinite'}`;
            break;
        case 'rainbow-effect':
            img.style.animation=`rainbowImg ${p.speed||3}s linear ${p.iterations||'infinite'}`;
            break;
        default:
            el.style.animation=`fadeIn ${p.duration||1.2}s ease forwards`;
            break;
    }
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

uploadArea.addEventListener('click', () => imageInput.click());
uploadArea.addEventListener('dragover', e => { e.preventDefault(); uploadArea.classList.add('dragover'); });
uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
uploadArea.addEventListener('drop', e => { e.preventDefault(); uploadArea.classList.remove('dragover'); const f=e.dataTransfer.files[0]; if(f&&f.type.startsWith('image/')) processImage(f); });
imageInput.addEventListener('change', e => { if(e.target.files[0]) processImage(e.target.files[0]); });
removeImg.addEventListener('click', () => { uploadArea.style.display='block'; imagePreview.style.display='none'; imageInput.value=''; uploadedImageSrc=null; });

let uploadedImageSrc = null;

function processImage(file) {
    const reader = new FileReader();
    reader.onload = e => {
        previewImg.src = e.target.result;
        uploadedImageSrc = e.target.result;
        uploadArea.style.display = 'none';
        imagePreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
}

// === FONT SIZE ===
document.getElementById('fontSizeRange').addEventListener('input', e => { document.getElementById('fontSizeValue').textContent=`${e.target.value}rem`; liveUpdate(); });
document.getElementById('fontSelect').addEventListener('change', () => liveUpdate());

// === APPLY MOTION ===
document.getElementById('applyMotion').addEventListener('click', liveUpdate);
document.getElementById('replayBtn').addEventListener('click', liveUpdate);

function getCurrentText() {
    return document.getElementById('textInput').value.trim();
}

function getCurrentTextRaw() {
    return document.getElementById('textInput').value.trim();
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
        case 'neon-effect':
            el.style.animation = `neonFlicker ${p.speed||2}s ease-in-out ${p.iterations||'infinite'} alternate`;
            el.style.textShadow = `0 0 7px ${p.color1||'#00d4ff'}, 0 0 ${p.glowSize||42}px ${p.color2||'#00ffaa'}`;
            break;
        case 'gradient-wave':
            el.style.background=`linear-gradient(90deg,${p.color1||'#00d4ff'},${p.color2||'#ff006e'},${p.color3||'#667eea'},${p.color1||'#00d4ff'})`;
            el.style.backgroundSize='300% 100%'; el.style.webkitBackgroundClip='text';
            el.style.backgroundClip='text'; el.style.color='transparent';
            el.style.animation=`gradientShift ${p.speed||3}s ease ${p.iterations||'infinite'}`;
            break;
        case 'shadow-dance':
            el.style.animation=`shadowDance ${p.speed||2}s ease-in-out ${p.iterations||'infinite'}`;
            el.style.setProperty('--sd-color1', p.color1||'#ff006e');
            el.style.setProperty('--sd-color2', p.color2||'#00d4ff');
            el.style.textShadow=`${p.offset||4}px ${p.offset||4}px 0 ${p.color1||'#ff006e'}, -${p.offset||4}px -${p.offset||4}px 0 ${p.color2||'#00d4ff'}`;
            break;
        case 'pulse-effect': el.style.animation=`pulse ${p.speed||1.5}s ease-in-out ${p.iterations||'infinite'}`; break;
        case 'flicker-effect': el.style.animation=`flicker ${p.speed||1.5}s linear ${p.iterations||'infinite'}`; break;
        case 'rainbow-effect': el.style.animation=`rainbow ${p.speed||3}s linear ${p.iterations||'infinite'}`; break;
        case 'glitch-effect':
            el.style.position='relative'; el.style.animation=`glitchText ${p.speed||2}s ${p.iterations||'infinite'}`;
            const b=document.createElement('span'); b.textContent=line;
            b.style.cssText=`position:absolute;top:0;left:0;width:100%;color:${p.color1||'#ff006e'};animation:glitchBefore ${p.speed||2}s ${p.iterations||'infinite'};clip-path:inset(0 0 60% 0)`;
            const a=document.createElement('span'); a.textContent=line;
            a.style.cssText=`position:absolute;top:0;left:0;width:100%;color:${p.color2||'#00d4ff'};animation:glitchAfter ${p.speed||2}s ${p.iterations||'infinite'};clip-path:inset(60% 0 0 0)`;
            el.appendChild(b); el.appendChild(a); break;
        case 'shake-effect': el.style.animation=`shakeIt ${p.duration||0.6}s ease both`; el.style.animationIterationCount=p.iterations||'1'; el.style.animationDelay=`${delay}s`; break;
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
        case 'water-ripple':
            el.textContent='';
            el.style.color = p.color || '#a0ffd0';
            line.split('').forEach((c,i)=>{
                const s=document.createElement('span'); s.textContent=c===' '?'\u00A0':c;
                s.className='ripple-char';
                s.style.animationDuration=`${p.speed||1.5}s`;
                s.style.animationDelay=`${i*(p.wavelength||0.15)}s`;
                s.style.setProperty('--ripple-y',`${p.heightY||6}px`);
                s.style.setProperty('--ripple-x',`${p.heightX||2}px`);
                s.style.setProperty('--ripple-skew',`${p.skew||3}deg`);
                s.style.animationIterationCount=p.iterations||'infinite';
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

// === EXPORT AS MP4 (Canvas 직접 렌더링) ===
document.getElementById('exportBtn').addEventListener('click', exportVideo);

async function exportVideo() {
    const stage = document.getElementById('previewStage');
    const btn = document.getElementById('exportBtn');
    if (!stage.querySelector('.motion-line')) return;

    if (typeof VideoEncoder === 'undefined') {
        alert('Chrome 브라우저에서만 MP4 내보내기가 지원됩니다.');
        return;
    }

    btn.textContent = '준비 중...';
    btn.disabled = true;

    const text = getCurrentText();
    if (!text) { btn.textContent = 'MP4 내보내기 (그린스크린)'; btn.disabled = false; return; }

    const lines = text.split('\n').filter(l => l.trim());
    const font = document.getElementById('fontSelect').value;
    const fontSize = parseFloat(document.getElementById('fontSizeRange').value);

    const width = 1280;
    const height = 720;
    const duration = estimateDuration();
    const fps = 30;
    const totalFrames = Math.ceil(duration * fps);

    // Load font into canvas
    await document.fonts.ready;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Font name mapping
    const fontMap = { 'font-work': 'BAEMINWORK' };
    const fontName = fontMap[font] || 'BAEMINWORK';
    const pxSize = fontSize * 32; // rem to px approximation

    // Setup mp4-muxer
    const muxer = new Mp4Muxer.Muxer({
        target: new Mp4Muxer.ArrayBufferTarget(),
        video: { codec: 'avc', width, height },
        fastStart: 'in-memory'
    });

    const encoder = new VideoEncoder({
        output: (chunk, meta) => muxer.addVideoChunk(chunk, meta),
        error: e => console.error('Encoder error:', e)
    });

    encoder.configure({
        codec: 'avc1.640028',
        width, height,
        bitrate: 6_000_000,
        framerate: fps
    });

    btn.textContent = '렌더링 중... 0%';

    for (let i = 0; i < totalFrames; i++) {
        const t = i / fps; // current time in seconds

        // Green screen background
        ctx.fillStyle = '#00ff00';
        ctx.fillRect(0, 0, width, height);

        // Draw text with animation state
        ctx.font = `${pxSize}px ${fontName}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const lineHeight = pxSize * 1.4;
        const totalHeight = lines.length * lineHeight;
        const startY = (height - totalHeight) / 2 + lineHeight / 2;

        lines.forEach((line, idx) => {
            const lineDelay = idx * (motionParams.lineDelay || 0.2);
            const lt = t - lineDelay; // local time for this line
            const x = width / 2;
            const y = startY + idx * lineHeight;

            ctx.save();
            renderAnimatedText(ctx, line, x, y, lt, pxSize, fontName);
            ctx.restore();
        });

        const frame = new VideoFrame(canvas, {
            timestamp: i * (1_000_000 / fps),
            duration: 1_000_000 / fps
        });
        encoder.encode(frame, { keyFrame: i % (fps * 2) === 0 });
        frame.close();

        if (i % 5 === 0) {
            const progress = Math.round(((i + 1) / totalFrames) * 100);
            btn.textContent = `렌더링 중... ${progress}%`;
            await new Promise(r => setTimeout(r, 0)); // yield
        }
    }

    await encoder.flush();
    muxer.finalize();

    const buffer = muxer.target.buffer;
    const blob = new Blob([buffer], { type: 'video/mp4' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'text-motion.mp4';
    a.click();
    URL.revokeObjectURL(url);

    btn.textContent = 'MP4 내보내기 (그린스크린)';
    btn.disabled = false;
}

function renderAnimatedText(ctx, line, x, y, t, pxSize, fontName) {
    if (!selectedMotion) { ctx.fillStyle = '#fff'; ctx.fillText(line, x, y); return; }
    const motion = selectedMotion.id;
    const p = motionParams;
    const dur = p.duration || p.speed || 1.2;

    // If time is negative, text hasn't started yet - don't draw
    if (t < 0) { ctx.globalAlpha = 0; return; }

    // Easing functions
    function easeOut(v) { return 1 - Math.pow(1 - v, 3); }
    function clamp01(v) { return Math.max(0, Math.min(1, v)); }

    ctx.fillStyle = '#ffffff';
    ctx.font = `${pxSize}px ${fontName}`;

    switch(motion) {
        case 'fade-in':
        case 'fade-in-up':
        case 'fade-in-scale':
        case 'blur-reveal':
        case 'drop-in':
        case 'zoom-effect':
        case 'slide-left':
        case 'slide-right': {
            const progress = clamp01(t / dur);
            const ep = easeOut(progress);
            const alpha = ep;
            ctx.globalAlpha = alpha;

            let offsetX = 0, offsetY = 0, scale = 1;
            if (motion === 'fade-in-up') offsetY = (1 - ep) * (p.distance || 30);
            if (motion === 'fade-in-scale') scale = (p.startScale || 0.7) + ep * (1 - (p.startScale || 0.7));
            if (motion === 'drop-in') offsetY = -(1 - ep) * (p.height || 60);
            if (motion === 'zoom-effect') scale = (p.startScale || 3) - ep * ((p.startScale || 3) - 1);
            if (motion === 'slide-left') offsetX = -(1 - ep) * (p.distance || 80);
            if (motion === 'slide-right') offsetX = (1 - ep) * (p.distance || 80);

            ctx.translate(x + offsetX, y + offsetY);
            ctx.scale(scale, scale);
            ctx.fillText(line, 0, 0);
            break;
        }
        case 'typing-effect': {
            const speed = p.speed || 2.5;
            const charsToShow = Math.floor(clamp01(t / speed) * line.length);
            const visibleText = line.substring(0, charsToShow);
            ctx.fillText(visibleText, x, y);
            // Cursor
            if (t < speed + 1) {
                const cursorOn = Math.floor(t / 0.5) % 2 === 0;
                if (cursorOn) {
                    const tw = ctx.measureText(visibleText).width;
                    ctx.fillStyle = '#00d4ff';
                    ctx.fillRect(x + tw / 2 + 2, y - pxSize * 0.4, 3, pxSize * 0.8);
                }
            }
            break;
        }
        case 'bounce-effect':
        case 'wave-effect':
        case 'rubber-band':
        case 'jelly-effect':
        case 'pop-effect':
        case 'spin-effect':
        case 'swing-effect':
        case 'float-up':
        case 'domino-effect':
        case 'flip-effect':
        case 'scatter-effect': {
            // Per-character animation
            const stagger = p.stagger || 0.06;
            const chars = line.split('');
            const totalWidth = ctx.measureText(line).width;
            let cx = x - totalWidth / 2;

            chars.forEach((char, ci) => {
                const charW = ctx.measureText(char).width;
                const charT = t - ci * stagger;
                if (charT < 0 && motion !== 'wave-effect') { cx += charW; return; } // not started yet
                const charProgress = clamp01(charT / (p.duration || 0.8));
                const ep = easeOut(charProgress);

                ctx.save();
                ctx.globalAlpha = motion === 'wave-effect' ? 1 : ep;

                let dx = cx + charW / 2;
                let dy = y;

                if (motion === 'bounce-effect') {
                    dy = y - (1 - ep) * (p.height || 50);
                }
                if (motion === 'wave-effect') {
                    dy = y + Math.sin((t - ci * stagger) * Math.PI * 2 / (p.speed || 1.5)) * (p.height || 12);
                }
                if (motion === 'float-up') {
                    dy = y + (1 - ep) * (p.distance || 50);
                }
                if (motion === 'rubber-band') {
                    const intensity = p.intensity || 0.4;
                    const phase = charProgress * Math.PI * 4;
                    const scaleX = 1 + Math.sin(phase) * intensity * (1 - charProgress);
                    const scaleY = 1 - Math.sin(phase) * intensity * (1 - charProgress);
                    ctx.translate(dx, dy);
                    ctx.scale(scaleX, scaleY);
                    ctx.fillText(char, 0, 0);
                    ctx.restore(); cx += charW; return;
                }
                if (motion === 'jelly-effect') {
                    const dropH = p.dropHeight || 40;
                    const squash = p.squash || 1.3;
                    const fallProgress = clamp01(charT / ((p.duration || 0.8) * 0.4));
                    const bounceProgress = clamp01((charT - (p.duration || 0.8) * 0.4) / ((p.duration || 0.8) * 0.6));
                    const yOff = fallProgress < 1 ? -dropH * (1 - fallProgress) : Math.sin(bounceProgress * Math.PI * 2) * 5 * (1 - bounceProgress);
                    const sx = fallProgress < 1 ? 1 : 1 + (squash - 1) * Math.sin(bounceProgress * Math.PI) * (1 - bounceProgress);
                    const sy = fallProgress < 1 ? 1 : 1 - (squash - 1) * 0.5 * Math.sin(bounceProgress * Math.PI) * (1 - bounceProgress);
                    ctx.translate(dx, dy + yOff);
                    ctx.scale(sx, sy);
                    ctx.fillText(char, 0, 0);
                    ctx.restore(); cx += charW; return;
                }
                if (motion === 'swing-effect') {
                    const maxAngle = (p.angle || 40) * Math.PI / 180;
                    const swingDecay = Math.exp(-charProgress * 4);
                    const angle = Math.sin(charProgress * Math.PI * 6) * maxAngle * swingDecay;
                    ctx.translate(dx, dy - pxSize * 0.5);
                    ctx.rotate(angle);
                    ctx.translate(0, pxSize * 0.5);
                    ctx.fillText(char, 0, 0);
                    ctx.restore(); cx += charW; return;
                }
                if (motion === 'domino-effect') {
                    const maxAngle = (p.angle || 80) * Math.PI / 180;
                    const angle = -(1 - ep) * maxAngle;
                    ctx.translate(dx - charW * 0.4, dy + pxSize * 0.3);
                    ctx.rotate(angle);
                    ctx.fillText(char, 0, 0);
                    ctx.restore(); cx += charW; return;
                }
                if (motion === 'flip-effect') {
                    const angle = (1 - ep) * ((p.angle || 90) * Math.PI / 180);
                    const dir = p.direction || 'X';
                    const scaleVal = Math.cos(angle);
                    ctx.translate(dx, dy);
                    if (dir === 'X') ctx.scale(1, Math.abs(scaleVal));
                    else ctx.scale(Math.abs(scaleVal), 1);
                    ctx.fillText(char, 0, 0);
                    ctx.restore(); cx += charW; return;
                }
                if (motion === 'scatter-effect') {
                    const range = p.range || 200;
                    const rot = (p.rotation || 720) * Math.PI / 180;
                    // Use deterministic random per char
                    const seed = ci * 137.5;
                    const rx = Math.sin(seed) * range;
                    const ry = Math.cos(seed * 2.3) * range;
                    const rr = Math.sin(seed * 3.7) * rot;
                    const invP = 1 - ep;
                    ctx.translate(dx + rx * invP, dy + ry * invP);
                    ctx.rotate(rr * invP);
                    ctx.scale(ep, ep);
                    ctx.fillText(char, 0, 0);
                    ctx.restore(); cx += charW; return;
                }
                if (motion === 'pop-effect') {
                    const overshoot = p.overshoot || 1.3;
                    let s;
                    if (charProgress < 0.7) s = (charProgress / 0.7) * overshoot;
                    else s = overshoot - (charProgress - 0.7) / 0.3 * (overshoot - 1);
                    ctx.translate(dx, dy);
                    ctx.scale(s, s);
                    ctx.fillText(char, 0, 0);
                    ctx.restore(); cx += charW; return;
                }
                if (motion === 'spin-effect') {
                    const turns = p.turns || 1;
                    const angle = (1 - ep) * Math.PI * 2 * turns;
                    ctx.translate(dx, dy);
                    ctx.rotate(angle);
                    ctx.scale(ep, ep);
                    ctx.fillText(char, 0, 0);
                    ctx.restore(); cx += charW; return;
                }

                ctx.translate(dx, dy);
                ctx.fillText(char, 0, 0);
                ctx.restore();
                cx += charW;
            });
            break;
        }
        case 'neon-effect': {
            const flicker = Math.sin(t * 8) > 0.3 ? 1 : 0.2;
            ctx.globalAlpha = flicker;
            ctx.shadowColor = p.color1 || '#00d4ff';
            ctx.shadowBlur = p.glowSize || 42;
            ctx.fillText(line, x, y);
            ctx.shadowBlur = 0;
            break;
        }
        case 'gradient-wave':
        case 'rainbow-effect': {
            const hueShift = (t / (p.speed || 3)) * 360;
            ctx.fillStyle = `hsl(${hueShift % 360}, 100%, 60%)`;
            ctx.fillText(line, x, y);
            break;
        }
        case 'shadow-dance': {
            const offset = p.offset || 4;
            const angle = t * Math.PI;
            ctx.shadowColor = p.color1 || '#ff006e';
            ctx.shadowOffsetX = Math.cos(angle) * offset;
            ctx.shadowOffsetY = Math.sin(angle) * offset;
            ctx.shadowBlur = 0;
            ctx.fillText(line, x, y);
            ctx.shadowColor = p.color2 || '#00d4ff';
            ctx.shadowOffsetX = -Math.cos(angle) * offset;
            ctx.shadowOffsetY = -Math.sin(angle) * offset;
            ctx.fillText(line, x, y);
            break;
        }
        case 'glitch-effect': {
            const intensity = p.intensity || 3;
            const glitchX = (Math.random() - 0.5) * intensity * 2;
            ctx.fillText(line, x + glitchX, y);
            ctx.fillStyle = p.color1 || '#ff006e';
            ctx.globalAlpha = 0.5;
            ctx.fillText(line, x + intensity, y);
            ctx.fillStyle = p.color2 || '#00d4ff';
            ctx.fillText(line, x - intensity, y);
            break;
        }
        case 'shake-effect': {
            const intensity = p.intensity || 10;
            const shakeT = clamp01(t / (p.duration || 0.6));
            const decay = 1 - shakeT;
            const sx = (Math.random() - 0.5) * intensity * decay * 2;
            const sy = (Math.random() - 0.5) * intensity * decay * 0.5;
            ctx.fillText(line, x + sx, y + sy);
            break;
        }
        case 'pulse-effect': {
            const scale = 1 + Math.sin(t * Math.PI * 2 / (p.speed || 1.5)) * ((p.scale || 1.05) - 1);
            ctx.translate(x, y);
            ctx.scale(scale, scale);
            ctx.fillText(line, 0, 0);
            break;
        }
        case 'flicker-effect': {
            const flick = Math.random() > 0.3 ? 1 : (p.minOpacity || 0.2);
            ctx.globalAlpha = flick;
            ctx.fillText(line, x, y);
            break;
        }
        case 'explode-effect': {
            const stagger = p.stagger || 0.03;
            const chars = line.split('');
            const totalWidth = ctx.measureText(line).width;
            let cx = x - totalWidth / 2;
            chars.forEach((char, ci) => {
                const charW = ctx.measureText(char).width;
                const charT = t - ci * stagger;
                const progress = clamp01(charT / (p.duration || 1.2));
                ctx.save();
                ctx.globalAlpha = 1 - progress;
                const range = p.range || 200;
                const angle = (ci / chars.length) * Math.PI * 2;
                const dx = cx + charW / 2 + Math.cos(angle) * range * progress;
                const dy = y + Math.sin(angle) * range * progress;
                ctx.translate(dx, dy);
                ctx.rotate(progress * Math.PI * 2);
                ctx.scale(1 - progress * 0.8, 1 - progress * 0.8);
                ctx.fillText(char, 0, 0);
                ctx.restore();
                cx += charW;
            });
            break;
        }
        case 'water-ripple': {
            const speed = p.speed || 1.5;
            const heightY = p.heightY || 6;
            const heightX = p.heightX || 2;
            const skewAmt = (p.skew || 3) * Math.PI / 180;
            const wavelength = p.wavelength || 0.15;
            const intensityMul = 1 + (p.intensity || 0) * Math.sin(t * 0.5);
            ctx.fillStyle = p.color || '#a0ffd0';

            const chars = line.split('');
            const totalWidth = ctx.measureText(line).width;
            let cx = x - totalWidth / 2;

            chars.forEach((char, ci) => {
                const charW = ctx.measureText(char).width;
                const phase = t / speed * Math.PI * 2 - ci * wavelength * Math.PI * 2;
                const sinVal = Math.sin(phase);
                const cosVal = Math.cos(phase * 0.7);

                const dy = sinVal * heightY * intensityMul;
                const dx = cosVal * heightX * intensityMul;
                const skew = sinVal * skewAmt * intensityMul;

                ctx.save();
                ctx.translate(cx + charW / 2 + dx, y + dy);
                ctx.transform(1, 0, Math.tan(skew), 1, 0, 0); // skewX
                ctx.fillText(char, 0, 0);
                ctx.restore();
                cx += charW;
            });
            break;
        }
        default:
            ctx.fillText(line, x, y);
    }
}

function estimateDuration() {
    if (!selectedMotion) return 3;
    const p = motionParams;
    const text = getCurrentText();
    const lines = text ? text.split('\n').filter(l=>l.trim()) : ['test'];
    const lineCount = lines.length;
    const maxLen = Math.max(...lines.map(l=>l.length));

    let dur = 0;
    const baseDur = p.duration || p.speed || 1.2;
    const stagger = p.stagger || 0;
    const lineDelay = p.lineDelay || 0.2;

    // Total time = last line's delay + base duration + char stagger
    dur = (lineCount - 1) * lineDelay + baseDur + stagger * maxLen;

    // Add extra buffer for looping effects
    const loopMotions = ['neon-effect','gradient-wave','shadow-dance','pulse-effect','flicker-effect','rainbow-effect','wave-effect'];
    if (loopMotions.includes(selectedMotion.id)) {
        dur = Math.max(dur, (p.speed || 3) * 2); // at least 2 full cycles
    }

    return Math.min(Math.max(dur + 0.5, 2), 12);
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
