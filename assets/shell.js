/* ===================================================================
   shell.js — الأجزاء الثابتة في الموقع كله: البيانات الشخصية,
   البروفايلات, الأيقونات, نصوص البار والفوتر, ومنطق اللغة.
   مصدر واحد لتلات صفحات. عدّل هنا, يتغير في الكل.

   الصفحة نفسها بتضيف: ملف الداتا بتاعها + رندر المحتوى بتاعها.
   =================================================================== */

window.SITE = {
  name:{en:"Ahmed ElFirgany", ar:"أحمد الفرجاني"},
  /* سطر الدور مقفول في الهوية (قاعدة ٤) وهو نفسه على لينكدإن وجيت هب
     وكل البروفايلات: Software Engineer | Mobile Expert */
  role:{en:"Software Engineer · Mobile Expert · Trusted tech partner",
        ar:"مهندس سوفت وير · خبير تطوير تطبيقات الموبايل · شريك تقني موثوق"},
  links:{
    home:  "/",
    apps:  "/apps/",
    games: "/games/",
    github:"https://github.com/saqrelfirgany",
    linkedin:"https://www.linkedin.com/in/saqrelfirgany/",
    mail:  "mailto:saqrelfirgany@gmail.com"
  }
};

window.PROFILES = [
  {k:'github',    n:'GitHub',    h:'@saqrelfirgany',           u:'https://github.com/saqrelfirgany'},
  {k:'linkedin',  n:'LinkedIn',  h:'@saqrelfirgany',           u:'https://www.linkedin.com/in/saqrelfirgany/'},
  {k:'x',         n:'X',         h:'@saqrelfirgany',           u:'https://x.com/saqrelfirgany'},
  {k:'devto',     n:'dev.to',    h:'@saqrelfirgany',           u:'https://dev.to/saqrelfirgany'},
  {k:'facebook',  n:'Facebook',  h:'@saqrelfirgany',           u:'https://www.facebook.com/saqrelfirgany'},
  {k:'instagram', n:'Instagram', h:'@saqrelfirgany',           u:'https://www.instagram.com/saqrelfirgany'},
  {k:'threads',   n:'Threads',   h:'@saqrelfirgany',           u:'https://www.threads.net/@saqrelfirgany'},
  {k:'email',     n:'Email',     h:'saqrelfirgany@gmail.com',  u:'mailto:saqrelfirgany@gmail.com'}
];

window.ICON = {
  github:'<svg viewBox="0 0 24 24"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0C17 4.7 18 5 18 5c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.3v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8.5h5V24H0zM8 8.5h4.8v2.1h.1c.7-1.3 2.3-2.6 4.7-2.6 5 0 6 3.3 6 7.6V24h-5v-6.8c0-1.6 0-3.7-2.3-3.7s-2.6 1.8-2.6 3.6V24H8z"/></svg>',
  x:'<svg viewBox="0 0 24 24"><path d="M18.9 2H22l-7.6 8.7L23 22h-6.8l-5.3-6.9L4.8 22H1.7l8.2-9.4L1 2h7l4.8 6.4L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z"/></svg>',
  devto:'<svg viewBox="0 0 24 24"><path d="M7.4 7.9c-.3-.2-.6-.3-.9-.3H5.4v8.8h1.1c.3 0 .6-.1.9-.3.3-.2.4-.5.4-.9V9.1c0-.4-.1-.7-.4-.9zm3.9-.3c-.4 0-.8.1-1.1.4-.3.3-.5.7-.5 1.1v5.8c0 .4.2.8.5 1.1.3.3.7.4 1.1.4h4.6v-1.6h-4v-1.8h2.5v-1.6h-2.5V9.2h4V7.6zM3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/></svg>',
  facebook:'<svg viewBox="0 0 24 24"><path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.8V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z"/></svg>',
  instagram:'<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1zm0 3.6A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-10.5a1.44 1.44 0 1 1-1.4-1.4 1.44 1.44 0 0 1 1.4 1.4z"/></svg>',
  threads:'<svg viewBox="0 0 24 24"><path d="M16.7 11.2c-.1 0-.2-.1-.3-.1-.2-3-1.8-4.7-4.5-4.7-1.6 0-3 .7-3.8 2l1.5 1c.6-.9 1.5-1.1 2.3-1.1 1.4 0 2.4.9 2.6 2.4-.7-.2-1.4-.3-2.2-.2-2.2.1-3.7 1.4-3.6 3.3.1 1.9 1.8 2.9 3.5 2.8 2.2-.1 3.4-1.6 3.6-3.5.7.4 1.2 1 1.4 1.8.4 1.3-.4 3.3-2.9 3.9-2.2.5-4.6-.1-5.9-2-.9-1.3-1.2-3-1.2-4.6 0-1.6.3-3.3 1.2-4.6C9.4 5.9 11 5.2 12.9 5.2c2 0 3.5.7 4.5 2.1.5.6.8 1.4 1 2.2l1.8-.5c-.3-1.1-.7-2.1-1.4-3-1.3-1.8-3.4-2.8-6-2.8-2.5 0-4.6 1-5.9 2.8C5.5 8 5 10 5 12s.5 4 1.7 5.6c1.3 1.9 3.4 2.9 6 2.8 2.9-.1 5.2-1.6 5.9-4.1.5-1.7-.1-3.6-1.9-5.1zm-4.4 4.4c-1 .1-1.9-.4-1.9-1.2 0-.6.5-1.2 1.9-1.3.6 0 1.2 0 1.7.1-.1 1.5-.8 2.3-1.7 2.4z"/></svg>',
  email:'<svg viewBox="0 0 24 24"><path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm10 7L3 6.2V18h18V6.2L12 11z"/></svg>',
  play:'<svg viewBox="0 0 24 24"><path d="M3.6 2.3 13 12 3.6 21.7A2 2 0 0 1 3 20.3V3.7a2 2 0 0 1 .6-1.4Zm11 10.9 2.6 2.6-9.4 5.4 6.8-8Zm0-2.4-6.8-8 9.4 5.4-2.6 2.6Zm4.2-1.5 2.7 1.6a1.9 1.9 0 0 1 0 3.2l-2.7 1.6-3-3 3-3.4Z"/></svg>',
  ios:'<svg viewBox="0 0 24 24"><path d="M16.4 12.8c0-2.2 1.8-3.3 1.9-3.3-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.8-3.6 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.2 1.1 0 1.5-.7 2.8-.7 1.3 0 1.6.7 2.8.7 1.2 0 1.9-1.1 2.6-2.1.8-1.2 1.2-2.4 1.2-2.4s-2.2-.9-2.2-3.4ZM14.3 6c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.7-.9 2.6 1 .1 2-.5 2.6-1.2Z"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/></svg>',
  run:'<svg viewBox="0 0 24 24"><path d="M8 5.1v13.8c0 .8.9 1.3 1.6.9l10.9-6.9a1 1 0 0 0 0-1.7L9.6 4.2A1 1 0 0 0 8 5.1Z"/></svg>',
  grid:'<svg viewBox="0 0 24 24"><path d="M3 3h8v8H3V3Zm10 0h8v8h-8V3ZM3 13h8v8H3v-8Zm10 0h8v8h-8v-8Z"/></svg>',
  pad:'<svg viewBox="0 0 24 24"><path d="M17 6H7a5 5 0 0 0-5 5v3a4 4 0 0 0 7.2 2.4l.6-.9h4.4l.6.9A4 4 0 0 0 22 14v-3a5 5 0 0 0-5-5ZM8.8 12.4H7.6v1.2a.9.9 0 1 1-1.8 0v-1.2H4.6a.9.9 0 1 1 0-1.8h1.2V9.4a.9.9 0 1 1 1.8 0v1.2h1.2a.9.9 0 1 1 0 1.8Zm6.5.6a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Zm2.6 2a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Zm0-4a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Z"/></svg>'
};

/* النصوص المشتركة بين الصفحات. النص الخاص بصفحة بيقعد في صفحته. */
window.SHELL_T = {
  en:{ "nav.home":"Home", "nav.apps":"The apps", "nav.games":"The games",
       "gallery":"Screenshots", "did":"What I built", "hard":"The hard part",
       "open":"Open", "play":"Google Play", "ios":"App Store", "run":"Play", "code":"Code",
       "noshot":"No gallery for this one.",
       "internal":"Internal system — it runs inside the client's company, so there is no public store page.",
       "live":"Live", "soon":"In progress",
       "cta.h":"Have something you need built properly?",
       "cta.p":"Send me what you are trying to ship and what is in your way. If it is a fit I will tell you how I would build it — and if it is not, I will tell you that too.",
       "cta.mail":"Email me", "cta.upd":"Updated", "foot.find":"Find me" },
  ar:{ "nav.home":"الرئيسية", "nav.apps":"التطبيقات", "nav.games":"الألعاب",
       "gallery":"صور", "did":"اللي عملته", "hard":"الجزء الصعب",
       "open":"افتح", "play":"جوجل بلاي", "ios":"آب ستور", "run":"العب", "code":"الكود",
       "noshot":"مفيش معرض صور للحاجة دي.",
       "internal":"نظام داخلي — بيشتغل جوه شركة العميل, فمالوش صفحة على متجر عام.",
       "live":"شغالة", "soon":"تحت الشغل",
       "cta.h":"عندك حاجة محتاجة تتبني صح؟",
       "cta.p":"ابعتلي انت عايز تنزل إيه وإيه اللي واقف قدامك. لو الشغل مناسب هقولك هبنيه إزاي, ولو مش مناسب هقولك كده برضه.",
       "cta.mail":"كلمني", "cta.upd":"آخر تحديث", "foot.find":"تلاقيني هنا" }
};

window.BUILT = '2026-08-04';

window.SHELL = (function(){
  var L = pick();

  /* اللغة: من الرابط الأول (عشان تبعت لينك عربي لعميل خليجي), وبعدين اللي
     اختاره قبل كده, وبعدين لغة المتصفح. المفتاح واحد للموقع كله فالاختيار
     بيفضل ثابت وانت بتنط بين الأقسام — دي كانت السبب الرئيسي للتوحيد. */
  function pick(){
    var q=(location.search.match(/[?&]lang=(ar|en)/)||[])[1];
    if(q) return q;
    try{ var s=localStorage.getItem('saqr-lang'); if(s==='ar'||s==='en') return s; }catch(e){}
    return ((navigator.language||'en').slice(0,2)==='ar') ? 'ar' : 'en';
  }
  function t(k){ return (SHELL_T[L]||{})[k] || k; }
  function txt(o){ return (o && typeof o==='object' && !Array.isArray(o)) ? (o[L]!=null?o[L]:o.en) : o; }
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  /* لينك داخلي بيحمل اللغة معاه, عشان اللي فتح عربي يفضل عربي وهو بينط. */
  function href(u){
    if(!u || u.charAt(0)!=='/') return u;
    return u + (u.indexOf('?')<0 ? '?' : '&') + 'lang=' + L;
  }

  function bar(active){
    var items = [['home',SITE.links.home],['apps',SITE.links.apps],['games',SITE.links.games]];
    return '<div class="wrap">'+
      '<a class="brand" href="'+href(SITE.links.home)+'"><span class="dot">AE</span>'+
        '<span>'+esc(txt(SITE.name))+'</span></a>'+
      '<nav>'+ items.map(function(it){
        return '<a class="'+(active===it[0]?'here':'')+'" href="'+href(it[1])+'">'+t('nav.'+it[0])+'</a>';
      }).join('') +
      '<a href="'+SITE.links.github+'" target="_blank" rel="noopener">GitHub</a></nav>'+
      '<button class="lang" id="lang" type="button">'+(L==='ar'?'English':'العربية')+'</button>'+
    '</div>';
  }

  function profiles(){
    return PROFILES.map(function(p){
      return '<a href="'+p.u+'" target="_blank" rel="noopener">'+ICON[p.k]+
             '<span>'+p.n+'</span><span class="hd">'+esc(p.h)+'</span></a>';
    }).join('');
  }

  function foot(fine){
    var links = PROFILES.map(function(p){
      return '<a href="'+p.u+'" target="_blank" rel="noopener">'+ICON[p.k]+
             '<span>'+p.n+'</span></a>';
    }).join('');
    var secs = [['home',SITE.links.home],['apps',SITE.links.apps],['games',SITE.links.games]]
      .map(function(it){ return '<a href="'+href(it[1])+'">'+t('nav.'+it[0])+'</a>'; }).join('') +
      '<a href="'+SITE.links.github+'" target="_blank" rel="noopener">GitHub</a>';
    return '<div class="wrap">'+
      '<div class="ftop">'+
        '<div>'+
          '<h2>'+t('cta.h')+'</h2><p>'+t('cta.p')+'</p>'+
          '<div class="btns">'+
            '<a class="btn pri" href="'+SITE.links.mail+'">'+ICON.email+t('cta.mail')+'</a>'+
            '<a class="btn" href="'+SITE.links.linkedin+'" target="_blank" rel="noopener">'+ICON.linkedin+'LinkedIn</a>'+
          '</div>'+
          '<div class="fnav">'+secs+'</div>'+
        '</div>'+
        '<div class="fcol"><h3>'+t('foot.find')+'</h3><div class="flinks">'+links+'</div></div>'+
      '</div>'+
      '<div class="fine">'+
        '<span>'+(fine||'')+'</span>'+
        '<span><b>'+esc(txt(SITE.name))+'</b> &middot; '+t('cta.upd')+
          ' <span class="d8">'+BUILT+'</span></span>'+
      '</div>'+
    '</div>';
  }

  /* المعرض بيلف لوحده لفة مستمرة من غير ما يرجع لورا: الصور بتتكرر مرتين,
     ولما اللفة توصل نص العرض بنطرح النص — النطة مش بتتشاف لأن الشكل هو
     هو. بيقف أول ما تلمسه أو تسحبه, وبيفضل سكرولر حقيقي فتقدر تمسك صورة
     معينة وتبص عليها — ده اللي منعني أعملها بأنيميشن CSS. */
  function autoScroll(g){
    var dir = (document.documentElement.dir === 'rtl') ? -1 : 1;
    var paused=false, raf=0, acc=0;
    var half = g.scrollWidth/2;
    function hold(ms){ paused=true; clearTimeout(g._t); g._t=setTimeout(function(){ paused=false; }, ms); }
    ['pointerenter','focusin'].forEach(function(e){ g.addEventListener(e,function(){ paused=true; clearTimeout(g._t); }); });
    ['pointerleave','focusout'].forEach(function(e){ g.addEventListener(e,function(){ hold(500); }); });
    g.addEventListener('wheel', function(){ hold(2500); }, {passive:true});
    g.addEventListener('touchstart', function(){ hold(3500); }, {passive:true});
    function step(){
      raf=requestAnimationFrame(step);
      if(paused || half<=4) return;
      acc += 1.15;                      // ~٦٩ بكسل في الثانية — بيبان إنه ماشي
      if(acc<1) return;
      var by=Math.floor(acc); acc-=by;
      g.scrollLeft += dir*by;
      if(Math.abs(g.scrollLeft) >= half) g.scrollLeft -= dir*half;
    }
    if(!matchMedia('(prefers-reduced-motion: reduce)').matches) raf=requestAnimationFrame(step);
    g._stop=function(){ cancelAnimationFrame(raf); };
  }
  function wireGalleries(){
    document.querySelectorAll('.gal').forEach(function(g){
      if(g._stop) g._stop();
      var imgs=[].slice.call(g.querySelectorAll('img:not([data-clone])'));
      if(!imgs.length) return;
      var left=imgs.length;
      function ready(){
        if(--left > 0) return;
        /* التكرار بيحصل بس لو المحتوى طالع بره الإطار فعلا. صورة واحدة
           جنبها نسخة منها شكله غلط, وكمان مفيش حاجة تلف أصلا. */
        if(g.scrollWidth <= g.clientWidth + 8) return;
        if(!g.dataset.looped){
          imgs.forEach(function(im){
            var c=im.cloneNode(true); c.setAttribute('aria-hidden','true');
            c.setAttribute('data-clone','1'); g.appendChild(c);
          });
          g.dataset.looped='1';
        }
        autoScroll(g);
      }
      imgs.forEach(function(im){
        if(im.complete) ready();
        else { im.addEventListener('load',ready,{once:true}); im.addEventListener('error',ready,{once:true}); }
      });
    });
  }

  /* صورة من متجر ممكن تتغير في أي وقت. لو وقعت الصفحة تفضل مظبوطة —
     مربع مكسور على بورتفوليو أوحش من مفيش صورة. */
  function wireImages(){
    document.querySelectorAll('.gal img, img.ic, .mtop img, .mshot img, .door .art img').forEach(function(im){
      im.addEventListener('error', function(){
        var art=im.closest('.art');
        if(art){
          if(art.classList.contains('icons')){
            var tile=document.createElement('div'); tile.className='ph'; im.replaceWith(tile);
          } else {
            art.innerHTML='<span class="glyph">🎮</span>';
          }
          return;
        }
        if(im.classList.contains('ic') || im.closest('.mtop')){
          var d=document.createElement('div');
          d.className = im.classList.contains('ic') ? 'icph' : 'ph';
          d.textContent = im.getAttribute('data-fb') || (im.alt||'?').slice(0,2);
          im.replaceWith(d); return;
        }
        var g=im.closest('.gal');
        if(g){ im.remove();
          if(!g.querySelector('img')){
            var n=document.createElement('div'); n.className='noshot';
            n.textContent=g.getAttribute('data-empty')||t('noshot'); g.replaceWith(n); }
          return; }
        var m=im.closest('.mshot');
        if(m){ m.classList.add('none'); m.innerHTML='<div class="big">'+(m.getAttribute('data-fb')||'?')+'</div>'; }
      }, {once:true});
      if(im.complete && im.naturalWidth===0) im.dispatchEvent(new Event('error'));
    });
  }

  /* ---------------------------------------------------------------
     الرندرر المشترك. التطبيقات والألعاب بيستخدموه الاتنين — الفروق
     بينهم بتتبعت كـhooks بدل ما يتكتب الكود مرتين.
       o.icon(a)   الأيقونة (صورة أو إيموجي)
       o.sub(a)    السطر الصغير تحت الاسم في الكارت
       o.chips(a)  الشيبس بعد شيب الدور
       o.links(a)  الأزرار تحت
       o.wide      معرض عريض (لقطات ألعاب) بدل الطولي (سكرين شوت موبايل)
     --------------------------------------------------------------- */
  function cards(items, o){
    return items.map(function(a){
      var name = txt(a.name);
      var shot = (a.shots && a.shots.length)
        ? '<div class="mshot" data-fb="'+esc(o.fb?o.fb(a):name.slice(0,2))+'"><img src="'+a.shots[0]+'" alt="" loading="lazy"></div>'
        : '<div class="mshot none"><div class="big">'+(o.fb?o.fb(a):esc(name.slice(0,2)))+'</div></div>';
      var tags = txt(a.tags).slice(0,3).map(function(x){ return '<span>'+esc(x)+'</span>'; }).join('');
      var nums = (a.stats||[]).slice(0,3).map(function(s){
        return '<div><b>'+esc(txt(s.v))+'</b><span>'+esc(txt(s.l))+'</span></div>'; }).join('');
      return '<button class="mcard" data-go="'+a.key+'" type="button" aria-label="'+esc(name)+'">'+shot+
        '<div class="mbody"><div class="mtop">'+o.icon(a,'card')+
          '<div><b>'+esc(name)+'</b><small>'+o.sub(a)+'</small></div></div>'+
        '<p>'+esc(txt(a.one))+'</p><div class="mtags">'+tags+'</div>'+
        (nums ? '<div class="mnums">'+nums+'</div>' : '')+
        '<div class="mgo">'+(L==='ar'?'شوف التفاصيل':'See the detail')+'<span class="arr">↓</span></div>'+
      '</div></button>';
    }).join('');
  }

  function sections(items, o){
    return items.map(function(a,i){
      var gal = (a.shots && a.shots.length)
        ? '<div class="gal'+(o.wide?' wide':'')+'" data-empty="'+esc(t('noshot'))+'">'+
            a.shots.map(function(s){ return '<img src="'+s+'" alt="'+esc(txt(a.name))+'" loading="lazy">'; }).join('')+
          '</div>'
        : '<div class="noshot">'+t('noshot')+'</div>';
      var stats = (a.stats||[]).map(function(s){
        return '<div><b>'+esc(txt(s.v))+'</b><span>'+esc(txt(s.l))+'</span></div>'; }).join('');
      var did = txt(a.built)||[];
      return '<section class="sec" id="'+a.key+'"><div class="wrap">'+
        '<div class="num">'+String(i+1).padStart(2,'0')+'</div>'+
        '<div class="shead">'+o.icon(a,'head')+'<div style="min-width:260px;flex:1">'+
          '<h2>'+esc(txt(a.name))+'</h2><p class="one">'+esc(txt(a.one))+'</p></div></div>'+
        '<div class="meta"><span class="chip role">'+esc(txt(a.role))+'</span>'+o.chips(a)+
          txt(a.tags).map(function(x){ return '<span class="chip">'+esc(x)+'</span>'; }).join('')+'</div>'+
        '<div class="grid"><div><h3 class="mini">'+t('gallery')+'</h3>'+gal+'</div><div>'+
          (stats ? '<div class="stat3">'+stats+'</div>' : '')+
          '<p class="body">'+esc(txt(a.body))+'</p>'+
          (did.length ? '<h3 class="mini">'+t('did')+'</h3><ul class="did">'+
             did.map(function(b){ return '<li>'+esc(b)+'</li>'; }).join('')+'</ul>' : '')+
          (txt(a.hard) ? '<div class="hardbox"><b>'+t('hard')+'</b><p>'+esc(txt(a.hard))+'</p></div>' : '')+
          '<div class="tech">'+a.tech.join(' &middot; ')+'</div>'+
          '<div class="btns">'+o.links(a)+'</div>'+
        '</div></div></div></section>';
    }).join('');
  }

  /* الهيرو المشترك: الأرقام + صف البروفايلات + الشريط المتحرك. */
  function hero(items, o){
    var hs=document.getElementById('hstats');
    if(hs) hs.innerHTML = PAGE.stats.map(function(s){
      return '<div><b>'+esc(txt(s.v))+'</b><span>'+esc(txt(s.l))+'</span></div>'; }).join('');
    var tr=document.getElementById('track');
    if(tr){ var c=cards(items,o); tr.innerHTML = c + c; }
  }

  function cross(){
    var c=PAGE.cross; if(!c) return;
    var box=document.getElementById('crossbox'); if(!box) return;
    box.innerHTML =
      '<div class="eyebrow">'+esc(txt(c.eyebrow))+'</div>'+
      '<h2>'+esc(txt(c.h))+'</h2><p>'+esc(txt(c.p))+'</p>'+
      '<div class="btns"><a class="btn pri" href="'+href(SITE.links[c.to])+'">'+
        (c.to==='games'?ICON.pad:ICON.grid)+esc(txt(c.btn))+'</a></div>';
  }

  var api = {
    get L(){ return L; }, t:t, txt:txt, esc:esc, href:href,
    cards:cards, sections:sections, hero:hero, cross:cross,
    /* draw() بتاعة الصفحة بتترسم جوه mount, وبتتنادى تاني لما اللغة تتغير. */
    mount:function(opts){
      function render(){
        document.documentElement.lang = L;
        document.documentElement.dir  = (L==='ar') ? 'rtl' : 'ltr';
        document.title = api.txt(opts.title);
        var b=document.getElementById('bar'); if(b) b.innerHTML = bar(opts.active);
        var p=document.getElementById('prow'); if(p) p.innerHTML = profiles();
        var f=document.getElementById('foot'); if(f) f.innerHTML = foot(api.txt(opts.fine));
        /* data-s = حقل من SITE (مشترك) · data-p = حقل من PAGE (خاص بالصفحة) */
        document.querySelectorAll('[data-s]').forEach(function(n){
          n.textContent = api.txt(SITE[n.getAttribute('data-s')]); });
        document.querySelectorAll('[data-p]').forEach(function(n){
          n.textContent = api.txt((window.PAGE||{})[n.getAttribute('data-p')]); });
        if(opts.draw) opts.draw();
        wireImages(); wireGalleries();
        var lb=document.getElementById('lang');
        if(lb) lb.addEventListener('click', function(){
          L = (L==='ar') ? 'en' : 'ar';
          try{ localStorage.setItem('saqr-lang', L); }catch(e){}
          var u=new URL(location.href); u.searchParams.set('lang', L); history.replaceState(null,'',u);
          render(); window.scrollTo({top:0,behavior:'smooth'});
        });
      }
      render();
      addEventListener('scroll', function(){
        var b=document.getElementById('bar'); if(b) b.classList.toggle('on', scrollY>10);
      }, {passive:true});
      document.addEventListener('click', function(e){
        var g=e.target.closest('[data-go]');
        if(g){ var s=document.getElementById(g.getAttribute('data-go'));
               if(s) s.scrollIntoView({behavior:'smooth',block:'start'}); }
      });
      /* لينك زي .../apps/#adam لازم ينزل على القسم ده. المتصفح بيحاول قبل
         ما المحتوى يترسم, فبنعيدها بعد الرسم. */
      if(location.hash.length>1){
        var el=document.getElementById(location.hash.slice(1));
        if(el) setTimeout(function(){ el.scrollIntoView({block:'start'}); }, 60);
      }
    }
  };
  return api;
})();
