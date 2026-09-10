/* hero-3d.js — Three.js 3D floating code cards */
(function codeBg3D() {
  var canvas  = document.getElementById('hero-canvas');
  var section = document.getElementById('hero-section');
  if (!canvas || typeof THREE === 'undefined') return;

  /* ── Renderer ── */
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  var scene  = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
  camera.position.z = 13;

  function resize() {
    var w = section.offsetWidth;
    var h = section.offsetHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  /* ── Code snippets ── */
  var BLOCKS = [
    [ 'function buildProduct(idea) {',
      '  const design = await figma.export(idea)',
      '  const code   = engineer.build(design)',
      '  return deploy({ env: "production" })',
      '}' ],

    [ 'router.post("/api/submit", validate,',
      '  async (req, res) => {',
      '    const id = await db.insert(req.body)',
      '    await notify.send(id)',
      '    res.json({ success: true, id })',
      '  })' ],

    [ 'const schema = z.object({',
      '  name:  z.string().min(2),',
      '  email: z.string().email(),',
      '  type:  z.enum(["sistema", "app"])',
      '})' ],

    [ 'SELECT id, name, conversions',
      'FROM   projects',
      "WHERE  status = 'active'",
      'ORDER  BY conversions DESC',
      'LIMIT  10' ],

    [ 'export default function App() {',
      '  const [data] = useQuery(METRICS)',
      '  return (',
      '    <Dashboard metrics={data} />',
      '  )',
      '}' ],

    [ '$ npm run build',
      '✓ Build complete     1.2s',
      '$ vercel deploy --prod',
      '✓ Deployed → atelewa.tech',
      '  Status: 200 OK  · Edge: GRU' ],
  ];

  /* ── Syntax token colors ── */
  var KW = 'function,const,let,var,return,async,await,export,default,import,from,class,new,if,else,for,SELECT,FROM,WHERE,ORDER,BY,LIMIT,AND'.split(',');

  function tokenColor(w) {
    if (KW.indexOf(w.trim()) >= 0)                     return 'rgba(145,155,255,0.93)';
    if (/^["'`]/.test(w) || /["'`]$/.test(w))         return 'rgba(244,165,75,0.92)';
    if (/^\d+(\.\d+)?$/.test(w.trim()))                return 'rgba(102,210,145,0.90)';
    if (/^[{}()\[\]]$/.test(w.trim()))                 return 'rgba(185,185,185,0.55)';
    if (/^(\/\/|#|\$|✓|→|·)/.test(w.trim()))          return 'rgba(88,98,115,0.85)';
    return 'rgba(215,218,228,0.87)';
  }

  /* ── Manual roundRect (max browser compat) ── */
  function rr(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
  }

  /* ── Build canvas texture for a code block ── */
  function makeTexture(lines) {
    var TW  = 480, TH = 28 + lines.length * 18 + 18;
    var DPR = 2;
    var c   = document.createElement('canvas');
    c.width  = TW * DPR;
    c.height = TH * DPR;
    var ctx  = c.getContext('2d');
    ctx.scale(DPR, DPR);

    /* card bg */
    rr(ctx, 0, 0, TW, TH, 12);
    ctx.fillStyle = 'rgba(10,12,22,0.97)';
    ctx.fill();

    /* border glow */
    ctx.strokeStyle = 'rgba(0,102,255,0.25)';
    ctx.lineWidth   = 1;
    rr(ctx, 0.5, 0.5, TW - 1, TH - 1, 12);
    ctx.stroke();

    /* titlebar */
    rr(ctx, 0, 0, TW, 28, [12, 12, 0, 0]);
    ctx.fillStyle = 'rgba(255,255,255,0.03)';
    ctx.fill();

    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth   = 1;
    ctx.beginPath(); ctx.moveTo(0, 28); ctx.lineTo(TW, 28); ctx.stroke();

    /* dots */
    [['#FF5F57', 14], ['#FFBD2E', 30], ['#28C840', 46]].forEach(function(d) {
      ctx.fillStyle = d[0];
      ctx.beginPath(); ctx.arc(d[1], 14, 4.5, 0, Math.PI * 2); ctx.fill();
    });

    /* code lines */
    ctx.font          = '12.5px "JetBrains Mono", "Courier New", monospace';
    ctx.textBaseline  = 'top';

    lines.forEach(function(line, li) {
      var y = 36 + li * 18;

      /* line number */
      ctx.fillStyle = 'rgba(78,85,105,0.55)';
      ctx.fillText((li + 1 < 10 ? ' ' : '') + (li + 1), 12, y);

      /* tokens */
      var words = line.split(/(\s+|(?=[{}()\[\];,<>.])|(?<=[{}()\[\];,<>.]))/);
      var cx    = 44;
      words.forEach(function(w) {
        if (w === '') return;
        if (/^\s+$/.test(w)) { cx += ctx.measureText(w).width; return; }
        ctx.fillStyle = tokenColor(w);
        ctx.fillText(w, cx, y);
        cx += ctx.measureText(w).width;
      });
    });

    var tex = new THREE.CanvasTexture(c);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return { tex: tex, tw: TW, th: TH };
  }

  /* ── Build cards ── */
  var pivot = new THREE.Group();
  scene.add(pivot);

  var CARDS = [];
  var N = BLOCKS.length;

  BLOCKS.forEach(function(lines, i) {
    var result = makeTexture(lines);
    var tw = result.tw, th = result.th;
    var aspect = tw / th;
    var cardH  = 2.4;
    var cardW  = cardH * aspect;

    var geo = new THREE.PlaneGeometry(cardW, cardH);
    var mat = new THREE.MeshBasicMaterial({
      map: result.tex,
      transparent: true,
      opacity: 0.58,
      depthWrite: false,
      side: THREE.FrontSide,
    });
    var mesh = new THREE.Mesh(geo, mat);

    /* position in ring */
    var angle  = (i / N) * Math.PI * 2;
    var radius = 5.8 + (i % 2) * 1.8;
    mesh.position.x = Math.cos(angle) * radius;
    mesh.position.y = (i % 3 - 1) * 2.4 + (Math.random() - 0.5) * 0.6;
    mesh.position.z = Math.sin(angle) * radius * 0.5 - 2;

    /* tilt toward viewer */
    mesh.rotation.y = -angle * 0.32;
    mesh.rotation.x = (Math.random() - 0.5) * 0.1;

    CARDS.push({
      mesh:  mesh,
      baseY: mesh.position.y,
      phase: (Math.random() * Math.PI * 2),
      speed: 0.22 + Math.random() * 0.28,
    });

    pivot.add(mesh);
  });

  /* ── Mouse parallax ── */
  var mX = 0, mY = 0, cX = 0, cY = 0;
  window.addEventListener('mousemove', function(e) {
    mX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  /* ── Render loop ── */
  function loop() {
    requestAnimationFrame(loop);
    var t = performance.now() * 0.001;

    /* orbit */
    pivot.rotation.y = t * 0.045;

    /* vertical float per card */
    CARDS.forEach(function(card) {
      card.mesh.position.y = card.baseY + Math.sin(t * card.speed + card.phase) * 0.38;
    });

    /* smooth camera parallax */
    cX += (mX * 2.5 - cX) * 0.045;
    cY += (-mY * 1.4 - cY) * 0.045;
    camera.position.x = cX;
    camera.position.y = cY;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }
  loop();
})();
