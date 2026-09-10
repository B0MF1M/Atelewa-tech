/* hero-bg.js — Website de alta qualidade renderizado no canvas da hero */
(function heroBgSite() {
  var canvas  = document.getElementById('hero-canvas');
  var section = document.getElementById('hero-section');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var W = 0, H = 0;
  var RW = 1440, RH = 860; /* coordenadas de referência */

  function resize() {
    W = canvas.width  = section.offsetWidth;
    H = canvas.height = section.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  var t0 = Date.now();

  /* ── Utilitários ── */
  function ease(t) { return t < .5 ? 2*t*t : -1+(4-2*t)*t; }
  function clamp(v,a,b) { return Math.max(a,Math.min(b,v)); }

  function rr(x,y,w,h,r,fill,stroke,lw) {
    ctx.beginPath();
    ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y);
    ctx.arcTo(x+w,y,x+w,y+r,r);
    ctx.lineTo(x+w,y+h-r);
    ctx.arcTo(x+w,y+h,x+w-r,y+h,r);
    ctx.lineTo(x+r,y+h);
    ctx.arcTo(x,y+h,x,y+h-r,r);
    ctx.lineTo(x,y+r);
    ctx.arcTo(x,y,x+r,y,r);
    ctx.closePath();
    if (fill)   { ctx.fillStyle   = fill;   ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw||1; ctx.stroke(); }
  }

  function txt(text, x, y, font, color, maxW) {
    ctx.fillStyle = color;
    ctx.font = font;
    if (maxW) ctx.fillText(text, x, y, maxW);
    else      ctx.fillText(text, x, y);
  }

  /* ── Draw frame ── */
  function draw() {
    var t = (Date.now() - t0) / 1000;

    ctx.clearRect(0,0,W,H);
    ctx.save();

    /* transform para coordenadas de referência */
    var s  = Math.max(W/RW, H/RH);
    ctx.translate((W-RW*s)/2, (H-RH*s)/2);
    ctx.scale(s, s);

    /* ─── BACKGROUND ─── */
    ctx.globalAlpha = 0.55;
    ctx.fillStyle = '#080808';
    ctx.fillRect(0,0,RW,RH);

    /* grid */
    ctx.globalAlpha = 0.55;
    ctx.strokeStyle = 'rgba(255,255,255,0.025)';
    ctx.lineWidth = 1;
    for (var gx=0; gx<RW; gx+=48) { ctx.beginPath(); ctx.moveTo(gx,0); ctx.lineTo(gx,RH); ctx.stroke(); }
    for (var gy=0; gy<RH; gy+=48) { ctx.beginPath(); ctx.moveTo(0,gy); ctx.lineTo(RW,gy); ctx.stroke(); }

    /* glow orb */
    var orb = ctx.createRadialGradient(720,-60,0,720,-60,650);
    orb.addColorStop(0,'rgba(0,102,255,0.20)');
    orb.addColorStop(1,'rgba(0,0,0,0)');
    ctx.globalAlpha = 0.55;
    ctx.fillStyle = orb;
    ctx.fillRect(0,0,RW,RH);

    /* ─── NAVBAR ─── */
    ctx.globalAlpha = clamp((t-0.0)/0.5,0,1) * 0.75;
    rr(36,16, RW-72,52, 12, 'rgba(15,15,15,0.95)', 'rgba(255,255,255,0.07)', 1);
    /* logo */
    rr(58,28, 30,30, 8, '#0066FF', null);
    txt('A', 66, 50, 'bold 16px Inter,sans-serif', 'white');
    txt('Atelewa Tech', 96, 50, '600 13px Inter,sans-serif', 'rgba(238,238,238,0.9)');
    /* links */
    ctx.fillStyle = 'rgba(150,150,150,0.7)';
    ctx.font = '12px Inter,sans-serif';
    ['Soluções','Processo','Projetos','Dúvidas'].forEach(function(l,i){ ctx.fillText(l,420+i*110,50); });
    /* cta */
    rr(RW-200,28, 156,28, 8, '#0066FF', null);
    txt('Falar no WhatsApp →', RW-192, 47, '600 11px Inter,sans-serif', 'white');

    /* ─── BADGE ─── */
    ctx.globalAlpha = clamp((t-0.3)/0.4,0,1) * 0.75;
    rr(56,90, 295,26, 13, 'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.09)', 1);
    txt('● AGÊNCIA DE TECNOLOGIA & DESIGN DE PRODUTO', 70,107, '10px JetBrains Mono,monospace', 'rgba(100,100,100,0.9)');

    /* ─── H1 ─── */
    var h1A = clamp((t-0.5)/0.5,0,1);
    ctx.globalAlpha = h1A * 0.85;
    txt('Transformamos ideias', 56,175, 'bold 52px Inter,sans-serif','rgba(240,240,240,0.96)');
    txt('complexas em',         56,234, 'bold 52px Inter,sans-serif','rgba(240,240,240,0.96)');
    var hg = ctx.createLinearGradient(56,240,590,240);
    hg.addColorStop(0,'#ffffff'); hg.addColorStop(1,'#0066FF');
    ctx.fillStyle = hg; ctx.font = 'bold 52px Inter,sans-serif';
    ctx.fillText('produtos digitais.',56,293);

    /* ─── SUBTEXT ─── */
    ctx.globalAlpha = clamp((t-0.8)/0.5,0,1) * 0.65;
    txt('Desenvolvemos aplicações web, sistemas sob medida e interfaces', 56,332, '15px Inter,sans-serif','rgba(160,160,160,0.9)');
    txt('intuitivas que modernizam operações e aceleram o crescimento.', 56,354, '15px Inter,sans-serif','rgba(160,160,160,0.9)');

    /* ─── BUTTONS ─── */
    ctx.globalAlpha = clamp((t-1.0)/0.4,0,1) * 0.85;
    rr(56,375, 200,44, 10, '#0066FF', null);
    txt('Solicitar Proposta Gratuita', 74,402, '600 12px Inter,sans-serif','white');
    rr(268,375, 150,44, 10, 'rgba(0,0,0,0)', 'rgba(255,255,255,0.12)', 1);
    txt('Ver Projetos', 314,402, '600 12px Inter,sans-serif','rgba(200,200,200,0.85)');

    /* ─── PILLS ─── */
    ctx.globalAlpha = clamp((t-1.2)/0.4,0,1) * 0.7;
    var pills = ['✓  100% Código Proprietário','✓  Metodologia Ágil','✓  Performance & UX'];
    var px2 = 56;
    ctx.font = '10px JetBrains Mono,monospace';
    pills.forEach(function(p) {
      var pw2 = ctx.measureText(p).width + 24;
      rr(px2,435,pw2,26,13,'rgba(255,255,255,0.03)','rgba(255,255,255,0.08)',1);
      ctx.fillStyle='rgba(120,120,120,0.85)'; ctx.fillText(p,px2+12,452);
      px2 += pw2+10;
    });

    /* ─── HERO MOCKUP (right column) ─── */
    var mA = clamp((t-0.6)/0.7,0,1);
    ctx.globalAlpha = mA * 0.75;
    var MX=768,MY=84,MW=636,MH=386;

    /* glow */
    var mg2 = ctx.createRadialGradient(MX+MW/2,MY+MH/2,0,MX+MW/2,MY+MH/2,300);
    mg2.addColorStop(0,'rgba(0,102,255,0.09)'); mg2.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=mg2; ctx.fillRect(MX-50,MY-50,MW+100,MH+100);

    rr(MX,MY,MW,MH,16,'rgba(16,16,16,0.97)','rgba(255,255,255,0.08)',1);

    /* titlebar */
    rr(MX,MY,MW,38,16,'rgba(24,24,24,0.95)',null);
    ctx.beginPath(); ctx.moveTo(MX,MY+38); ctx.lineTo(MX+MW,MY+38); ctx.strokeStyle='rgba(255,255,255,0.06)'; ctx.lineWidth=1; ctx.stroke();
    ctx.fillStyle='#FF5F57'; ctx.beginPath(); ctx.arc(MX+14,MY+19,5,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#FFBD2E'; ctx.beginPath(); ctx.arc(MX+30,MY+19,5,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#28C840'; ctx.beginPath(); ctx.arc(MX+46,MY+19,5,0,Math.PI*2); ctx.fill();
    rr(MX+66,MY+9,220,20,5,'rgba(255,255,255,0.05)',null);
    txt('atelewa.tech/dashboard', MX+76,MY+22,'10px Inter,sans-serif','rgba(100,100,100,0.7)');

    /* ── Stat mini cards ── */
    var sdata = [
      {lbl:'CONVERSÃO',val:'+47%',sub:'↑ vs. mês',bg:'rgba(0,102,255,0.14)',bd:'rgba(0,102,255,0.28)'},
      {lbl:'USUÁRIOS', val:'12.4k',sub:'↑ semana', bg:'rgba(255,255,255,0.04)',bd:'rgba(255,255,255,0.07)'},
      {lbl:'UPTIME',   val:'99.9%',sub:'30 dias',  bg:'rgba(255,255,255,0.04)',bd:'rgba(255,255,255,0.07)'},
    ];
    var scw = (MW-16*4)/3;
    sdata.forEach(function(sd,si) {
      var scx=MX+16+si*(scw+16), scy=MY+48;
      rr(scx,scy,scw,68,10,sd.bg,sd.bd,1);
      txt(sd.lbl, scx+10,scy+16,'8px JetBrains Mono,monospace','rgba(120,120,120,0.8)');
      txt(sd.val,  scx+10,scy+42,'bold 20px Inter,sans-serif','rgba(228,228,228,0.95)');
      txt(sd.sub,  scx+10,scy+58,'9px Inter,sans-serif','rgba(100,200,130,0.85)');
    });

    /* ── Chart ── */
    var CHY=MY+128,CHH=106,CHX=MX+16,CHW=MW-32;
    rr(CHX,CHY,CHW,CHH,10,'rgba(255,255,255,0.025)','rgba(255,255,255,0.05)',1);
    txt('PERFORMANCE — 7 DIAS', CHX+12,CHY+15,'8px JetBrains Mono,monospace','rgba(110,110,110,0.7)');
    var bars2=[.42,.58,.50,.74,.63,.87,1.0];
    var barT = ease(clamp((t-1.0)/1.4,0,1));
    var bw2  = (CHW-28)/bars2.length - 4;
    bars2.forEach(function(bh2,bi2) {
      var bx2=CHX+14+bi2*(bw2+4);
      var fh2=(CHH-28)*bh2*barT;
      var by2=CHY+CHH-10-fh2;
      var bg2=ctx.createLinearGradient(bx2,by2,bx2,by2+fh2);
      bg2.addColorStop(0,'rgba(0,122,255,0.95)');
      bg2.addColorStop(1,'rgba(0,60,180,0.35)');
      rr(bx2,by2,bw2,fh2,3,bg2,null);
    });

    /* ── Code snippet ── */
    var CY2=MY+246,CX2=MX+16,CW3=MW-32,CH3=82;
    rr(CX2,CY2,CW3,CH3,10,'rgba(0,0,0,0.45)','rgba(255,255,255,0.05)',1);
    var clines=[
      {t:'// deploy concluído · 1.2s',            c:'rgba(80,80,80,0.8)'},
      {t:'const app = build({ env: "production" })',c:'rgba(180,180,180,0.85)'},
      {t:'await app.deploy()  →  ✓ online',        c:'rgba(100,200,140,0.9)'},
      {t:'git push origin main  ·  Atelewa v2.0',  c:'rgba(100,120,200,0.75)'},
    ];
    clines.forEach(function(cl,cli) {
      txt(cl.t, CX2+12,CY2+18+cli*16,'10px JetBrains Mono,monospace',cl.c);
    });

    /* ── Floating badge ── */
    var fl = Math.sin(t*1.3)*5;
    rr(MX+MW-118,MY+MH-34+fl,108,34,9,'#0066FF','rgba(255,255,255,0.18)',1);
    txt('LANÇADO EM',  MX+MW-106,MY+MH-20+fl,'8px JetBrains Mono,monospace','rgba(255,255,255,0.6)');
    txt('3 semanas',   MX+MW-106,MY+MH-5+fl, 'bold 12px Inter,sans-serif','white');

    /* ─── STATS ROW ─── */
    ctx.globalAlpha = clamp((t-1.4)/0.5,0,1) * 0.7;
    ctx.strokeStyle='rgba(255,255,255,0.06)'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(36,488); ctx.lineTo(RW-36,488); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(36,556); ctx.lineTo(RW-36,556); ctx.stroke();
    var stats2=[{v:'99.9%',l:'UPTIME GARANTIDO'},{v:'5x',l:'MAIS RÁPIDO'},{v:'100+',l:'PROJETOS ENTREGUES'},{v:'24/7',l:'SUPORTE TÉCNICO'}];
    stats2.forEach(function(st2,si2) {
      var stx2=36+si2*(RW-72)/4+(RW-72)/8-50;
      txt(st2.v, stx2,534,'bold 28px Inter,sans-serif','rgba(0,140,255,0.95)');
      txt(st2.l, stx2,551,'8px JetBrains Mono,monospace','rgba(90,90,90,0.8)');
    });

    /* ─── SOLUTIONS SECTION ─── */
    ctx.globalAlpha = clamp((t-1.6)/0.5,0,1) * 0.75;
    rr(36,565,RW-72,1,0,'rgba(255,255,255,0.05)',null);
    txt('01 — SOLUÇÕES', 56,595,'10px JetBrains Mono,monospace','rgba(0,102,255,0.8)');
    txt('O que construímos para o seu negócio', 56,628,'bold 30px Inter,sans-serif','rgba(228,228,228,0.9)');
    txt('Soluções completas de ponta a ponta, do rascunho ao produto em produção.', 56,652,'14px Inter,sans-serif','rgba(130,130,130,0.7)');

    /* ─── SERVICE CARDS ─── */
    var svc=[
      {icon:'⌨',title:'Desenvolvimento Web & Sistemas',text:'Plataformas robustas, dashboards e portais.'},
      {icon:'◈',title:'UI/UX Design & Prototipagem',   text:'Figma, pesquisa e interfaces de alta conversão.'},
      {icon:'⊞',title:'Aplicativos & Produtos Digitais',text:'MVPs e apps do zero ao deploy em produção.'},
      {icon:'⟳',title:'Automação & Integração de APIs', text:'Fluxos e integrações que eliminam retrabalho.'},
    ];
    var scW=(RW-72-3*16)/4;
    svc.forEach(function(sv,si3) {
      var cvA=clamp((t-1.8-si3*0.1)/0.45,0,1);
      ctx.globalAlpha = cvA * 0.78;
      var cvX=36+si3*(scW+16), cvY=668;
      rr(cvX,cvY,scW,118,14,'rgba(18,18,18,0.9)','rgba(255,255,255,0.07)',1);
      /* icon bg */
      rr(cvX+14,cvY+14,36,36,10,'rgba(0,102,255,0.12)',null);
      txt(sv.icon, cvX+22,cvY+39,'18px Inter,sans-serif','rgba(0,130,255,0.9)');
      txt(sv.title, cvX+14,cvY+68,'600 12px Inter,sans-serif','rgba(220,220,220,0.92)',scW-28);
      txt(sv.text,  cvX+14,cvY+88,'11px Inter,sans-serif','rgba(110,110,110,0.8)',scW-28);
      /* hover accent line */
      rr(cvX,cvY,4,118,2,'rgba(0,102,255,0.6)',null);
    });

    ctx.restore();
  }

  function loop() { requestAnimationFrame(loop); draw(); }
  loop();
})();
