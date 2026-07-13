// ===== بيانات المهارات والدروس =====
const skillsData = [
  { id:'leadership', title:'القيادة', icon:'crown', color:'#3B82F6', colorEnd:'#1D4ED8', glow:'rgba(59,130,246,0.2)', lessons:[
    {title:'تحفيز للبدايه', url:'https://youtu.be/7dNYIMRGly4?si=x_ve5p4xO8psTiGl'},
    {title:'كيف تبني الشخصية القيادية', url:'https://youtu.be/8eEX2mVSYoY?si=TNQeRQXhdCWiLRvo'},
    {title:'كيف تكون أنت القائد', url:'https://youtu.be/k1K5OAmZnag?si=kgyzl6Eyj392T-Vw'},
    {title:'سمات القائد الناجح', url:'https://youtu.be/bcaYsuJLqo0?si=JPldsjDqRtMbnFks'},
    {title:'قواعد لإدارة فريق العمل', url:'https://youtu.be/g_KrZqRJqqQ?si=-cC5PzJm59LczIWF'},
    {title:'الفرق بين القائد والمدير', url:'https://youtu.be/I_Upwc3UAT0?si=6Z67wFnuIvMuRlJc'},
    {title:'أخطاء القيادة', url:'https://youtu.be/w-wKjuIXDx8?si=5UViFEidousaLftz'},
    {title:'مهارة القيادة كاملة مراجعة', url:'https://youtu.be/UhW17ZOGLcI?si=6DQILk_V0pfSq0hY'}
  ]},
  { id:'time', title:'إدارة الوقت', icon:'clock', color:'#F43F5E', colorEnd:'#E11D48', glow:'rgba(244,63,94,0.2)', lessons:[
    {title:'تحفيز للبدايه', url:'https://youtu.be/RAVpbKWgr9w?list=PLSg9xfQit_JCaBoh0R990Lkfl-Z2qUUg5'},
    {title:'مقدمة عن مهارة إدارة الوقت', url:'https://youtu.be/BsoReMV8Imw?si=GS4lrAczjLOasZ6v'},
    {title:'كيف تبدع في إدارة الوقت', url:'https://youtu.be/VpQn48MV1Js?si=Qylf4oVz0vbLyCOq'},
    {title:'أفضل نظام في إدارة الوقت', url:'https://youtu.be/nncVRXEQxE8?si=B7lze8oowusUJClW'}
  ]},
  { id:'priorities', title:'ترتيب الأولويات', icon:'list-ordered', color:'#F59E0B', colorEnd:'#D97706', glow:'rgba(245,158,11,0.2)', lessons:[
    {title:'تحفيز للبدايه', url:'https://youtu.be/qf_wWdMTI48?si=X4SKdEcue6Xn_PrQ'},
    {title:'مقدمة عن إدارة الأولويات', url:'https://youtu.be/UjnQ4lLr_5U?si=myzOHFJfxCRMS2jN'},
    {title:'مربع الأولويات', url:'https://youtu.be/2WbLI987mnE?si=5gmD-q3Mofpg6q9L'},
    {title:'إدارة الأولويات', url:'https://youtu.be/BI-Z-XwFrTw?si=4GbFgOHkEPIvXKut'}
  ]},
  { id:'balance', title:'تحقيق الاتزان في حياتك', icon:'scale', color:'#10B981', colorEnd:'#059669', glow:'rgba(16,185,129,0.2)', lessons:[
    {title:'تحفيز للبدايه', url:'https://youtu.be/cJAxNOBpwQ4?si=vT_UT_bQQboCPCpu'},
    {title:'لماذا تفقد الاتزان', url:'https://youtu.be/XO5sFQ4qR7U?si=p5tD8NODGxmQz-uf'},
    {title:'كيف تحقق الاتزان', url:'https://youtu.be/feNVtQWQWgc?si=U3KdnPus1hmoHrXm'},
    {title:'كيف تكون صلباً ذهنياً للحفاظ على اتزانك', url:'https://youtu.be/RCIkBt0ym6I?si=62mY_fbXdiy4Su52'}
  ]},
  { id:'decisions', title:'اتخاذ القرارات', icon:'git-branch', color:'#8B5CF6', colorEnd:'#6D28D9', glow:'rgba(139,92,246,0.2)', lessons:[
    {title:'تحفيز للبدايه', url:'https://youtu.be/b6-2Up-HiW0?si=vRjvn21TGsH5nllN'},
    {title:'فن اتخاذ القرارات 1', url:'https://youtu.be/JSBmUBSqeFo?si=BSiHdDZF5KbxDgUR'},
    {title:'فن اتخاذ القرارات 2', url:'https://youtu.be/e_gOImyH5rA?si=Wn9cKP25TYMqmA5O'},
    {title:'كيف تتخذ القرارات الصعبة', url:'https://youtu.be/H8JHxNvLmNo?si=VVe890_Ku9ouqkL-'},
    {title:'كيف تتخذ قرارات لا تندم عليها', url:'https://youtu.be/H7s-WOxJSJY?si=xFqWd8DFYn82ApcX'},
    {title:'كيف تتخذ القرارات الصحيحة', url:'https://youtu.be/R9O15l93UFM?si=SbDodXm-indtw-qC'}
  ]},
  { id:'relationships', title:'العلاقات', icon:'users', color:'#EC4899', colorEnd:'#DB2777', glow:'rgba(236,72,153,0.2)', lessons:[
    {title:'تحفيز للبدايه', url:'https://youtu.be/XvIHu9R6Z6s?si=srbsWwFrCBmYa_36'},
    {title:'كيف تكون علاقات', url:'https://youtu.be/nkF65qohlmM?si=XdxoRuwHWHxTUBnq'},
    {title:'سبب دمار العلاقات', url:'https://youtu.be/LKHMbh_Nfqs?si=2tK7Tuo4sV7JfsUB'},
    {title:'مهارات التواصل', url:'https://youtu.be/a7EI2yXop3Y?si=P4WK6K-pKMDgpka3'},
    {title:'فن التواصل', url:'https://youtu.be/JSe_gC_0Rfo?si=6EyN2IxTkOgx4Orn'},
    {title:'كيف تطور علاقاتك', url:'https://youtu.be/lB2mmk-kirc?si=p2GHFawaVvIxPvld'}
  ]},
  { id:'speaking', title:'التحدث أمام الجماهير', icon:'mic', color:'#7C3AED', colorEnd:'#6D28D9', glow:'rgba(124,58,237,0.2)', lessons:[
    {title:'تحفيز للبدايه', url:'https://youtu.be/8EP42TEQlOA?si=x5hL7R-h7byUbZji'},
    {title:'كيف تتحدث أمام الجماهير', url:'https://youtu.be/iLeZ3V8-Lb0?si=TJ7BbXTAmGSV54Fm'},
    {title:'كيف تتحدث بطلاقة', url:'https://youtu.be/LFlcnSoB-KU?si=xNc6QLIDDaIqFNQN'},
    {title:'فن الإلقاء', url:'https://youtu.be/7owerCohlGs?si=GXSEvs0UtgiqXLWX'},
    {title:'قواعد للتغلب على الخوف والتوتر', url:'https://youtu.be/FqO5Bm-Ngfw?si=5zHGXTxUcshHLxkW'},
    {title:'كيف تجعل جمهورك ينصت لك', url:'https://youtu.be/BKvBT9V5gBM?si=iHqaojEa2mgmKPxI'}
  ]},
  { id:'procrastination', title:'التغلب على التسويف', icon:'timer', color:'#06B6D4', colorEnd:'#0891B2', glow:'rgba(6,182,212,0.2)', lessons:[
    {title:'تحفيز للبدايه', url:'https://youtu.be/3ntWveSt7iE?list=PLSg9xfQit_JCaBoh0R990Lkfl-Z2qUUg5&t=142'},
    {title:'أسباب التسويف', url:'https://youtu.be/GZpk7Vqv3jQ?si=GaRfZModcJlfNtR_'},
    {title:'حل مشكلة التسويف من الجذر', url:'https://youtu.be/SXUlCyO4KHo?si=hPCURbb-biBqgH8H'}
  ]},
  { id:'persuasion', title:'الإقناع', icon:'message-square', color:'#0EA5E9', colorEnd:'#0284C7', glow:'rgba(14,165,233,0.2)', lessons:[
    {title:'تحفيز للبدايه', url:'https://youtu.be/GEgyF_WElBg?list=PLSg9xfQit_JCaBoh0R990Lkfl-Z2qUUg5'},
    {title:'فن الإقناع', url:'https://youtu.be/HgiKr0LmoS0?si=PEOu8E_nv2BD2AWD'},
    {title:'قواعد الإقناع', url:'https://youtu.be/qG1CN_Agw7U?si=CneSlD_DVB3aP6aO'},
    {title:'مراجعة شاملة ومعلومات إضافية عن الإقناع', url:'https://youtu.be/6tpAVAAn8Lg?si=yNr7HT6FzwefhiZu'}
  ]},
  { id:'negotiation', title:'التفاوض', icon:'handshake', color:'#D946EF', colorEnd:'#C026D3', glow:'rgba(217,70,239,0.2)', lessons:[
    {title:'تحفيز للبدايه', url:'https://youtu.be/N9blPM36kyo?list=PLSg9xfQit_JCaBoh0R990Lkfl-Z2qUUg5'},
    {title:'اطلب', url:'https://youtu.be/Qp_gAB_8BFg?si=ygZ_Q7wJvz6Lg87v'},
    {title:'حدد هدفك', url:'https://youtu.be/QZBqKglzTjk?si=ooTdEYUhzZLn9vgj'},
    {title:'بادر', url:'https://youtu.be/rAFAgbaTJBE?si=TnwadRbO4S-kM2TH'},
    {title:'منظومة التفاوض', url:'https://youtu.be/_OE44L0yeKI?si=kIjeEbVxhmCaTfM3'},
    {title:'الأذواق والأخلاق أثناء التفاوض', url:'https://youtu.be/qtE2tV-lJJw?si=XKlREenSAO9EVpXM'},
    {title:'أنماط الشخصيات عند التفاوض', url:'https://youtu.be/E_gBc9aUH8g?si=zc9T1Flcqmvv6MzF'},
    {title:'المفاوض المثالي', url:'https://youtu.be/ehcxtR5u_R4?si=DDkgvHaEQWAeeeUp'},
    {title:'الذكاء الاجتماعي', url:'https://youtu.be/eQFPLKTfOAo?si=5YdlWn14yloMMppQ'}
  ]},
  { id:'risk', title:'إدارة المخاطر', icon:'shield-alert', color:'#F97316', colorEnd:'#EA580C', glow:'rgba(249,115,22,0.2)', lessons:[
    {title:'تحفيز للبدايه', url:'https://youtu.be/mnO2ORe2sRc'},
    {title:'إدارة المخاطر بشكل عام', url:'https://youtu.be/JWcomL_Hlk4?si=gq5cl6V2PnSG_NIg'},
    {title:'ملخص إدارة المخاطر', url:'https://youtu.be/TPXtnQJrgYw?si=9IZj8Dw5S0Yiu7Os'}
  ]},
  { id:'pressure', title:'العمل تحت الضغوطات', icon:'zap', color:'#EF4444', colorEnd:'#DC2626', glow:'rgba(239,68,68,0.2)', lessons:[
    {title:'تحفيز للبدايه', url:'https://youtu.be/IcBQyhxPWC8'},
    {title:'إدارة الضغوط بشكل عام', url:'https://youtu.be/M6BJI3Z28Yk?si=xI4cgR9y7HfUMXXB'},
    {title:'مواجهة ضغوط العمل', url:'https://youtu.be/bonmHK9rfRU?si=wPnu85nQt1JqXpjO'}
  ]},
  { id:'projects', title:'إدارة المشاريع', icon:'folder-kanban', color:'#6366F1', colorEnd:'#4F46E5', glow:'rgba(99,102,241,0.2)', lessons:[
    {title:'تحفيز للبدايه', url:'https://youtu.be/Xo_LQqJoBpo'},
    {title:'ما هو الفرق بين المشروع وإدارة المشروع', url:'https://youtu.be/UeJBdq-cNQI?si=DxpGIeJuRLz2ZZeC'},
    {title:'ما هي قيمة إدارة المشاريع', url:'https://youtu.be/FCqwg38AKAA?si=3KWUw_LJD80FuGc4'},
    {title:'سبعة عناصر لإدارة المشروع', url:'https://youtu.be/XHQ2S38s6bY?si=WVYfGecGqbKTLAEs'},
    {title:'كيف تخطط لمشروعك', url:'https://youtu.be/0AXwb2qES8U?si=Qbyxg7Gh-jHNU0W9'},
    {title:'إعداد هيكل تقسيم العمل', url:'https://youtu.be/5WiBtcdDvbY?si=jOm42xLiTrX7l86_'},
    {title:'خمس نقاط لإعداد الهيكل', url:'https://youtu.be/ZdAYOzeMpIg?si=bQ2jvcS--vJcpYzF'},
    {title:'نتائج المشروع المستهدفة', url:'https://youtu.be/nSpQbcdEKlo?si=_5J6-5JCJm2_sBPO'},
    {title:'آخر حلقة', url:'https://youtu.be/WGWnyNTNh38?si=PhrAhNilqczGPkat'}
  ]},
  { id:'finance', title:'الإدارة المالية', icon:'wallet', color:'#14B8A6', colorEnd:'#0D9488', glow:'rgba(20,184,166,0.2)', lessons:[
    {title:'تحفيز للبدايه', url:'https://youtu.be/nnHzE7s0sSY'},
    {title:'الإدارة المالية للمشاريع', url:'https://youtu.be/X5Xmb4rQCOg?si=74k-Cam-VBZ_bHCR'},
    {title:'أسباب فشل الإدارة المالية للمشاريع', url:'https://youtu.be/dcxRNK4eLfs?si=7jCN2Jz10trCsWw2'}
  ]},
  { id:'problems', title:'حل المشاكل', icon:'puzzle', color:'#84CC16', colorEnd:'#65A30D', glow:'rgba(132,204,22,0.2)', lessons:[
    {title:'تحفيز للبدايه', url:'https://youtu.be/FX_Hl8V4YFg'},
    {title:'الدرس 1', url:'https://youtu.be/kDgWi44YP7Y?si=2ZTt4nbsY8oTXHhl'},
    {title:'الدرس 2', url:'https://youtu.be/YmfFgEh_73g?si=oO87rT13RwfZ9CKx'},
    {title:'الدرس 3', url:'https://youtu.be/pmYz5y0Ejso?si=5JYduF7V1UzZlYDX'},
    {title:'الدرس 4', url:'https://youtu.be/488k5L7TW88?si=aT3x3DW4RsCbvpfL'},
    {title:'الدرس 5', url:'https://youtu.be/Vo0XlbI1aHQ?si=k3L6OVlX4xtf0IVS'},
    {title:'الدرس 6', url:'https://youtu.be/WtxvfGYddh8?si=diFzI7GHqoezXMaf'},
    {title:'الدرس 7', url:'https://youtu.be/9P5FrwPEwPs?si=-eXCkpC7dYzIOuAb'},
    {title:'الدرس 8', url:'https://youtu.be/mjBT5SS0IWI?si=yQFt6owXRCWZ-CpN'},
    {title:'الدرس 9', url:'https://youtu.be/JFRGM0k8txQ?si=4_IvCNs5Nt3_l3qo'},
    {title:'الدرس 10', url:'https://youtu.be/LkWR_KfW8kg?si=gtifsjlSpO8ENsjo'},
    {title:'الدرس 11', url:'https://youtu.be/X6fwSWxG1CQ?si=Rdmb5_H3R8Gb-NEe'},
    {title:'الدرس 12', url:'https://youtu.be/VHaZEUxIWeQ?si=Dq_W3nMXeYBOi9jv'},
    {title:'الدرس 13', url:'https://youtu.be/XisBWo4-1FU?si=-cUzN0fzmxNMJtB5'},
    {title:'الدرس 14', url:'https://youtu.be/OcXaf65op1U?si=d4RGf8RT6S8yBIuw'},
    {title:'الدرس 15', url:'https://youtu.be/7NWEvmvVuZI?si=9_HmROorI17FE2Bm'},
    {title:'الدرس 16', url:'https://youtu.be/uMdgStSn_io?si=aHW6s_5dVulmtZPA'},
    {title:'الدرس 17', url:'https://youtu.be/uBg_HUDOkos?si=0PsuCOSvPQWhtKY7'},
    {title:'الدرس 18', url:'https://youtu.be/ptcy1ufeLFE?si=H9IFrF0t45XBmnDT'},
    {title:'الدرس 19', url:'https://youtu.be/ijQqj13a21A?si=spnRRO_RiB0f8TM3'},
    {title:'الدرس 20', url:'https://youtu.be/2giArHrHDJI?si=BqLjqSj9JzvEklBP'},
    {title:'الدرس 21', url:'https://youtu.be/PACOvmsQqDc?si=eMDTsfW8kMUCNIRA'},
    {title:'الدرس 22', url:'https://youtu.be/XWUfqF7QL3Y?si=4pOaGLsJvDmpFVVd'},
    {title:'الدرس 23', url:'https://youtu.be/0WRqxKgO_ps?si=k7x8AsKgOaTzNyW5'},
  ]}
];

// ===== إدارة التخزين المحلي =====
function getStorage() { try { return JSON.parse(localStorage.getItem('skillDev2')) || {}; } catch { return {}; } }
function setStorage(data) { localStorage.setItem('skillDev2', JSON.stringify(data)); }
function getCompleted(skillId) { return getStorage()[skillId]?.completed || []; }
function setCompletedArr(skillId, arr) { const s = getStorage(); if (!s[skillId]) s[skillId] = { completed: [] }; s[skillId].completed = arr; setStorage(s); }
function getSkillProgress(skillId) { const c = getCompleted(skillId); const skill = skillsData.find(s => s.id === skillId); return skill ? Math.round((c.length / skill.lessons.length) * 100) : 0; }
function getGlobalProgress() { let total = 0, done = 0; skillsData.forEach(s => { total += s.lessons.length; done += getCompleted(s.id).length; }); return total ? Math.round((done / total) * 100) : 0; }
function getTotalCompleted() { let c = 0; skillsData.forEach(s => { c += getCompleted(s.id).length; }); return c; }

// ===== التحقق من القفل =====
function isLocked(skillId, idx) {
  if (idx === 0) return false;
  return !getCompleted(skillId).includes(idx - 1);
}

// ===== عرض البطاقات =====
function renderCards() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = '';
  skillsData.forEach(skill => {
    const pct = getSkillProgress(skill.id);
    const count = skill.lessons.length;
    const wrapper = document.createElement('div');
    wrapper.className = 'card-wrapper';
    wrapper.style.setProperty('--card-accent', skill.color);
    wrapper.dataset.skill = skill.title.toLowerCase();
    wrapper.innerHTML = `
      <div class="card" style="--card-color:${skill.color};--card-glow:${skill.glow}" data-skill-id="${skill.id}">
        <div class="card-icon"><i data-lucide="${skill.icon}"></i></div>
        <div class="card-title">${skill.title}</div>
        <div class="card-lessons-count">${count} دروس</div>
        <div class="card-progress-wrap">
          <div class="card-progress-info">
            <span class="card-progress-label">التقدم</span>
            <span class="card-progress-pct">${pct}%</span>
          </div>
          <div class="card-progress-bar"><div class="card-progress-fill" style="width:${pct}%"></div></div>
        </div>
      </div>`;
    grid.appendChild(wrapper);
  });
  lucide.createIcons();
  init3DCards();
}

function updateGlobalUI() {
  const pct = getGlobalProgress();
  document.getElementById('globalProgress').style.width = pct + '%';
  document.getElementById('globalProgressText').textContent = pct + '%';
  document.getElementById('completedStat').textContent = getTotalCompleted();
}

function updateCardProgress(skillId) {
  const pct = getSkillProgress(skillId);
  const card = document.querySelector(`[data-skill-id="${skillId}"]`);
  if (!card) return;
  card.querySelector('.card-progress-pct').textContent = pct + '%';
  card.querySelector('.card-progress-fill').style.width = pct + '%';
}

// ===== تأثير 3D =====
function init3DCards() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const rx = ((y - r.height/2) / (r.height/2)) * -6;
      const ry = ((x - r.width/2) / (r.width/2)) * 6;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1) translateY(0)';
    });
  });
}

// ===== لوحة الدروس =====
let currentSkill = null;

function openPanel(skillId) {
  const skill = skillsData.find(s => s.id === skillId);
  if (!skill) return;
  currentSkill = skill;

  document.getElementById('panelTitle').textContent = skill.title;
  const iconEl = document.getElementById('panelIcon');
  iconEl.style.setProperty('--panel-color', skill.color);
  iconEl.innerHTML = `<i data-lucide="${skill.icon}"></i>`;

  const panel = document.getElementById('panel');
  panel.style.setProperty('--panel-color', skill.color);
  panel.style.setProperty('--panel-color-end', skill.colorEnd);

  renderLessons(skill);

  document.getElementById('panel-overlay').classList.add('active');
  panel.classList.add('active');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

function renderLessons(skill) {
  const completed = getCompleted(skill.id);
  const pct = Math.round((completed.length / skill.lessons.length) * 100);
  document.getElementById('panelProgressFill').style.width = pct + '%';
  document.getElementById('panelProgressText').textContent = pct + '% مكتمل';
  document.getElementById('panelLessonsCount').textContent = `${completed.length}/${skill.lessons.length} دروس`;

  const body = document.getElementById('panelBody');
  body.innerHTML = '';

  skill.lessons.forEach((lesson, i) => {
    const locked = isLocked(skill.id, i);
    const isComp = completed.includes(i);

    const row = document.createElement('div');
    row.className = 'lesson-row' + (locked ? ' locked' : '') + (isComp ? ' completed' : '');
    row.dataset.index = i;

    // رقم الدرس
    let numHTML;
    if (locked) {
      numHTML = `<div class="lesson-num"><i data-lucide="lock"></i></div>`;
    } else if (isComp) {
      numHTML = `<div class="lesson-num"><i data-lucide="check"></i></div>`;
    } else {
      numHTML = `<div class="lesson-num">${i + 1}</div>`;
    }

    // زر المشاهدة
    let watchHTML;
    if (locked) {
      watchHTML = `<div class="lesson-lock-btn"><i data-lucide="lock"></i> مقفل</div>`;
    } else {
      watchHTML = `<a href="${lesson.url}" target="_blank" rel="noopener" class="lesson-watch" onclick="event.stopPropagation()"><i data-lucide="play"></i> مشاهدة</a>`;
    }

    // خانة التحديد
    let checkHTML;
    if (locked) {
      checkHTML = `<div class="lesson-checkbox" style="opacity:0.3;cursor:default"><i data-lucide="lock"></i></div>`;
    } else {
      checkHTML = `<div class="lesson-checkbox ${isComp ? 'checked' : ''}" data-skill="${skill.id}" data-lesson="${i}"><i data-lucide="check"></i></div>`;
    }

    row.innerHTML = `
      ${numHTML}
      <span class="lesson-title-text">${lesson.title}</span>
      ${watchHTML}
      ${checkHTML}`;

    body.appendChild(row);
  });
}

function closePanel() {
  document.getElementById('panel-overlay').classList.remove('active');
  document.getElementById('panel').classList.remove('active');
  document.body.style.overflow = '';
  currentSkill = null;
}

// ===== الكونفيتي =====
function launchConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';
  const colors = ['#3B82F6','#8B5CF6','#06B6D4','#10B981','#F59E0B','#EC4899','#F43F5E','#D946EF','#84CC16'];
  const particles = [];
  for (let i = 0; i < 200; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 24,
      vy: (Math.random() - 0.5) * 24 - 12,
      w: Math.random() * 10 + 4,
      h: Math.random() * 6 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * 360,
      rv: (Math.random() - 0.5) * 12,
      g: 0.35 + Math.random() * 0.15,
      o: 1,
      d: 0.005 + Math.random() * 0.008
    });
  }
  let frame;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    for (const p of particles) {
      if (p.o <= 0) continue;
      alive = true;
      p.x += p.vx; p.vy += p.g; p.y += p.vy;
      p.rot += p.rv; p.o -= p.d; p.vx *= 0.99;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.globalAlpha = Math.max(0, p.o);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (alive) { frame = requestAnimationFrame(animate); }
    else { canvas.style.display = 'none'; cancelAnimationFrame(frame); }
  }
  animate();
}

// ===== الإشعارات =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ===== الاقتباس اليومي =====
function setDailyQuote() {
  const quotes = [
    { text: 'النجاح ليس نهائياً، والفشل ليس قاتلاً، بل الشجاعة للاستمرار هي ما يهم.', author: 'ونستون تشرشل' },
    { text: 'الطريقة الوحيدة لعمل عظيم هي أن تحب ما تفعله.', author: 'ستيف جوبز' },
    { text: 'لا تنتظر الفرصة، بل اصنعها.', author: 'جورج برنارد شو' },
    { text: 'التعليم هو أقوى سلاح يمكنك استخدامه لتغيير العالم.', author: 'نيلسون مانديلا' },
    { text: 'كل خبير كان يوماً مبتدئاً.', author: 'هيلين هيز' },
    { text: 'استثمر في نفسك، فهو أفضل استثمار يمكنك القيام به.', author: 'وارن بافيت' },
    { text: 'المعرفة قوة، والممارسة تؤكد المعرفة.', author: 'حكمة' },
    { text: 'لا يهم كم تسير ببطء ما دمت لا تتوقف.', author: 'كونفوشيوس' },
    { text: 'أنت لست بحاجة لأن ترى السلم كله، فقط خذ الخطوة الأولى.', author: 'مارتن لوثر كينغ' },
    { text: 'القرار الأكثر أهمية هو أن تقرر أن تكون على ما يرام في أي ظرف.', author: 'جيم رون' },
    { text: 'النجاح هو الانتقال من فشل إلى فشل دون فقدان الحماس.', author: 'ونستون تشرشل' },
    { text: 'العمل الجاد يهزم الموهبة عندما لا تعمل الموهبة بجد.', author: 'كيفن دورانت' },
    { text: 'لا يوجد طريق مختصر إلى أي مكان يستحق الوصول إليه.', author: 'هيلين كيلر' },
    { text: 'التغيير لا يأتي من الانتظار، بل من العمل.', author: 'باراك أوباما' },
    { text: 'النجاح ليس مفتاح السعادة، السعادة هي مفتاح النجاح.', author: 'ألبرت شفايتزر' },
    { text: 'النجاح يأتي لمن يستعد له كل يوم.', author: 'حكمة' },
    { text: 'الوقت هو رأس المال الحقيقي لكل إنسان.', author: 'حكمة' },
    { text: 'الإنجازات الكبيرة تبدأ بقرار صغير.', author: 'حكمة' },
    { text: 'إذا أردت نتائج مختلفة، غيّر أفعالك اليومية.', author: 'حكمة' },
    { text: 'كل يوم فرصة جديدة لتصبح أفضل من الأمس.', author: 'حكمة' },
    { text: 'العادات الصغيرة تصنع مستقبلك.', author: 'حكمة' },
    { text: 'الانضباط أهم من الحماس، لأنه يبقى عندما يختفي الحماس.', author: 'حكمة' },
    { text: 'لا تؤجل ما تستطيع إنجازه اليوم.', author: 'بنجامين فرانكلين' },
    { text: 'التقدم البسيط المستمر يتفوق على القفزات المؤقتة.', author: 'حكمة' },
    { text: 'ابدأ بما تملك، ومن حيث أنت.', author: 'حكمة' },
    { text: 'الفشل درس، وليس نهاية الطريق.', author: 'حكمة' },
    { text: 'الأهداف الواضحة تقود إلى نتائج واضحة.', author: 'حكمة' },
    { text: 'كل دقيقة تستثمرها في التعلم تعود عليك أضعافاً.', author: 'حكمة' },
    { text: 'القيادة تبدأ بقيادة نفسك أولاً.', author: 'حكمة' },
    { text: 'لا تخف من البداية، فكل محترف بدأ مبتدئاً.', author: 'حكمة' },
    { text: 'من يزرع اليوم يحصد غداً.', author: 'حكمة' },
    { text: 'التعلم رحلة لا تنتهي.', author: 'حكمة' },
    { text: 'النجاح هو مجموع الجهود الصغيرة المتكررة.', author: 'حكمة' },
    { text: 'كل تحدٍ يحمل فرصة للنمو.', author: 'حكمة' },
    { text: 'أفضل وقت للبدء كان بالأمس، وثاني أفضل وقت هو الآن.', author: 'حكمة' },
    { text: 'اصنع مستقبلك بقراراتك لا بظروفك.', author: 'حكمة' },
    { text: 'الثقة بالنفس تُبنى بالإنجاز، لا بالكلام.', author: 'حكمة' },
    { text: 'لا يوجد طريق مختصر إلى النجاح الحقيقي.', author: 'حكمة' },
    { text: 'التركيز هو سر الإنجاز.', author: 'حكمة' },
    { text: 'كل مهارة تتقنها تفتح لك باباً جديداً.', author: 'حكمة' },
    { text: 'استثمر وقتك فيما يزيد قيمتك.', author: 'حكمة' },
    { text: 'الاستمرارية تهزم الموهبة عندما تتوقف الموهبة عن العمل.', author: 'حكمة' },
    { text: 'تعلم شيئاً جديداً كل يوم.', author: 'حكمة' },
    { text: 'المعرفة بلا تطبيق لا تغير شيئاً.', author: 'حكمة' },
    { text: 'النجاح يحب المنظمين.', author: 'حكمة' },
    { text: 'كل إنجاز يبدأ بمحاولة.', author: 'حكمة' },
    { text: 'اجعل أهدافك أكبر من أعذارك.', author: 'حكمة' },
    { text: 'لا تقارن بدايتك بنهاية الآخرين.', author: 'حكمة' },
    { text: 'الإصرار يصنع المستحيل.', author: 'حكمة' },
    { text: 'من يقرأ اليوم يقود غداً.', author: 'حكمة' },
    { text: 'التخطيط الجيد نصف النجاح.', author: 'حكمة' },
    { text: 'النجاح عادة، وليس حدثاً.', author: 'حكمة' },
    { text: 'كل خطوة للأمام تقربك من هدفك.', author: 'حكمة' },
    { text: 'اجعل التعلم جزءاً من حياتك اليومية.', author: 'حكمة' },
    { text: 'القائد الحقيقي يصنع قادة آخرين.', author: 'حكمة' },
    { text: 'لا تتوقف حتى تفخر بنفسك.', author: 'حكمة' },
    { text: 'المثابرة تتغلب على الصعوبات.', author: 'حكمة' },
    { text: 'كل يوم هو صفحة جديدة، فاكتب فيها ما يسعدك غداً.', author: 'حكمة' },
    { text: 'الفرص تأتي لمن يستعد لها.', author: 'حكمة' },
    { text: 'التطوير المستمر هو طريق التميز.', author: 'حكمة' },
    { text: 'اجعل مستقبلك يعتمد على خطتك، لا على حظك.', author: 'حكمة' },
    { text: 'النجاح يبدأ من العقل قبل الواقع.', author: 'حكمة' },
    { text: 'لا تخف من التغيير، فقد يكون بداية النجاح.', author: 'حكمة' },
    { text: 'الإنجاز الحقيقي هو أن تتغلب على نفسك.', author: 'حكمة' },
    { text: 'تعلم، طبّق، كرر.', author: 'حكمة' },
    { text: 'كل يوم تتعلم فيه شيئاً جديداً هو يوم لم يضع سدى.', author: 'حكمة' },
    { text: 'لا يوجد استثمار أفضل من الاستثمار في عقلك.', author: 'حكمة' },
    { text: 'الأفكار العظيمة تحتاج إلى تنفيذ عظيم.', author: 'حكمة' },
    { text: 'المستقبل يكافئ من يستعد له.', author: 'حكمة' },
    { text: 'الالتزام أهم من الدافع المؤقت.', author: 'حكمة' },
    { text: 'كل نجاح يبدأ بخطوة شجاعة.', author: 'حكمة' },
    { text: 'اجعل اليوم أفضل من الأمس.', author: 'حكمة' },
    { text: 'لا تجعل الخوف يمنعك من المحاولة.', author: 'حكمة' },
    { text: 'العلم يفتح الأبواب التي يعجز المال عن فتحها.', author: 'حكمة' },
    { text: 'كل مشكلة تحمل في داخلها فرصة للتعلم.', author: 'حكمة' },
    { text: 'القيمة الحقيقية للإنسان فيما يعرفه ويطبقه.', author: 'حكمة' },
    { text: 'لا تنتظر الظروف المثالية، ابدأ بما لديك.', author: 'حكمة' },
    { text: 'المعرفة بداية الطريق، والعمل هو الوصول.', author: 'حكمة' },
    { text: 'الأهداف الكبيرة تتحقق بخطوات صغيرة.', author: 'حكمة' },
    { text: 'كن صبوراً، فكل إنجاز يحتاج إلى وقت.', author: 'حكمة' },
    { text: 'لا يوجد نجاح بلا تعب.', author: 'حكمة' },
    { text: 'الاستمرار هو الفرق بين الحلم والحقيقة.', author: 'حكمة' },
    { text: 'كل يوم فرصة لتطوير نسخة أفضل منك.', author: 'حكمة' },
    { text: 'العمل الذكي مع العمل الجاد يصنعان المعجزات.', author: 'حكمة' },
    { text: 'اجعل هدفك واضحاً، وسيصبح طريقك أوضح.', author: 'حكمة' },
    { text: 'التحديات تبني الشخصية.', author: 'حكمة' },
    { text: 'لا تجعل الفشل يمنعك من المحاولة مرة أخرى.', author: 'حكمة' },
    { text: 'كل مهارة جديدة تزيد من قيمتك.', author: 'حكمة' },
    { text: 'النجاح قرار قبل أن يكون نتيجة.', author: 'حكمة' },
    { text: 'تعلم كيف تتعلم، وستستطيع تعلم أي شيء.', author: 'حكمة' },
    { text: 'التركيز على هدف واحد أفضل من تشتيت الجهد.', author: 'حكمة' },
    { text: 'اجعل كل يوم يحمل إنجازاً مهما كان صغيراً.', author: 'حكمة' },
    { text: 'القائد يرى الفرصة حيث يرى الآخرون المشكلة.', author: 'حكمة' },
    { text: 'ابدأ الآن، فالتأجيل يسرق الأحلام.', author: 'حكمة' },
    { text: 'الأمل وحده لا يكفي، اعمل من أجل ما تريد.', author: 'حكمة' },
    { text: 'لا تتوقف عن التعلم مهما بلغت خبرتك.', author: 'حكمة' },
    { text: 'اجعل المعرفة عادة يومية.', author: 'حكمة' },
    { text: 'النجاح رحلة مستمرة وليس محطة وصول.', author: 'حكمة' },
    { text: 'كل كتاب تقرؤه يضيف لك حياة جديدة.', author: 'حكمة' },
    { text: 'الإنجاز يبدأ عندما تتوقف عن اختلاق الأعذار.', author: 'حكمة' },
    { text: 'حافظ على شغفك، وادعمه بالانضباط.', author: 'حكمة' },
    { text: 'كل دقيقة تضيعها لن تعود.', author: 'حكمة' },
    { text: 'اصنع اليوم ما يشكرك عليه مستقبلك.', author: 'حكمة' },
    { text: 'من يطور نفسه باستمرار لا يخشى المنافسة.', author: 'حكمة' },
    { text: 'المستحيل كلمة يرددها من لم يحاول بعد.', author: 'حكمة' },
    { text: 'اجعل كل يوم خطوة نحو أفضل نسخة من نفسك.', author: 'حكمة' }
  ];
  const q = quotes[new Date().getDate() % quotes.length];
  document.getElementById('quoteText').textContent = q.text;
  document.getElementById('quoteAuthor').textContent = '— ' + q.author;
}

// ===== المظهر =====
function initTheme() {
  const saved = localStorage.getItem('skillDevTheme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}
function toggleTheme() {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('skillDevTheme', next);
  updateThemeIcon(next);
}
function updateThemeIcon(t) {
  document.getElementById('themeToggle').innerHTML = t === 'dark'
    ? '<i data-lucide="moon" style="width:18px;height:18px"></i>'
    : '<i data-lucide="sun" style="width:18px;height:18px"></i>';
  lucide.createIcons();
}

// ===== البحث =====
function initSearch() {
  document.getElementById('searchInput').addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('.card-wrapper').forEach(w => {
      w.classList.toggle('filtered-out', q && !w.dataset.skill.includes(q));
    });
  });
}

// ===== الأحداث =====
function initEvents() {
  // فتح لوحة الدروس
  document.getElementById('skillsGrid').addEventListener('click', e => {
    const card = e.target.closest('.card');
    if (card) openPanel(card.dataset.skillId);
  });

  // إغلاق اللوحة
  document.getElementById('panelClose').addEventListener('click', closePanel);
  document.getElementById('panel-overlay').addEventListener('click', closePanel);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

  // تفاعل الدروس
  document.getElementById('panelBody').addEventListener('click', e => {
    const cb = e.target.closest('.lesson-checkbox:not([style])');
    if (!cb || cb.style.opacity === '0.3') return;

    const skillId = cb.dataset.skill;
    const lessonIdx = parseInt(cb.dataset.lesson);
    const skill = skillsData.find(s => s.id === skillId);
    if (!skill) return;

    const completed = getCompleted(skillId);

    if (completed.includes(lessonIdx)) {
      // إلغاء الإكمال
      const arr = completed.filter(x => x !== lessonIdx);
      setCompletedArr(skillId, arr);
    } else {
      // إكمال الدرس
      completed.push(lessonIdx);
      setCompletedArr(skillId, completed);

      // التحقق من إكمال الكل
      if (completed.length === skill.lessons.length) {
        setTimeout(() => {
          launchConfetti();
          showToast('🎉 أحسنت! أكملت جميع دروس ' + skill.title);
        }, 400);
      }
    }

    // إعادة عرض الدروس مع تحريك الدرس المفتوح حديثاً
    renderLessons(skill);
    lucide.createIcons();

    // تحريك الدرس الذي تم فتح قفله
    const newlyUnlocked = document.querySelector(`.lesson-row[data-index="${lessonIdx + 1}"]`);
    if (newlyUnlocked && !newlyUnlocked.classList.contains('locked')) {
      newlyUnlocked.classList.add('just-unlocked');
      setTimeout(() => newlyUnlocked.classList.remove('just-unlocked'), 700);
    }

    updateCardProgress(skillId);
    updateGlobalUI();
  });

  // تبديل المظهر
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // العودة للأعلى
  const btt = document.getElementById('back-top');
  window.addEventListener('scroll', () => btt.classList.toggle('visible', window.scrollY > 400));
  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // تغيير حجم الكونفيتي
  window.addEventListener('resize', () => {
    const c = document.getElementById('confetti');
    if (c.style.display === 'block') { c.width = innerWidth; c.height = innerHeight; }
  });
}

// ===== التشغيل =====
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderCards();
  updateGlobalUI();
  setDailyQuote();
  initSearch();
  initEvents();
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 1000);
});