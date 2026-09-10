/* code-to-site-3d.js — Animação Premium Senior de Transição Código-Site */
(function() {
  var canvas = document.getElementById('code-to-site-canvas');
  var container = canvas ? canvas.parentElement : null;
  if (!canvas || !container || typeof THREE === 'undefined') return;

  var width = container.clientWidth;
  var height = container.clientHeight;

  // Cena, Câmera e Renderizador com ajustes profissionais de iluminação
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  camera.position.set(0, 0, 9);

  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setSize(width, height, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Redimensionamento Inteligente
  window.addEventListener('resize', function() {
    if (!container || !canvas) return;
    var w = container.clientWidth;
    var h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  });

  // 1. Texturas de Alta Definição (Códigos reais com Syntax Highlight limpo)
  var snippets = [
    ["const app = Express()", "app.use(authMiddleware)", "app.listen(3000)"],
    ["import { AI } from 'atelewa-ai'", "const response = await AI.ask(query)", "return response.insights"],
    ["const data = useQuery(GET_METRICS)", "if (loading) return <Spinner />", "return <Visualizer data={data} />"],
    ["version: '3.8'", "services:", "  web:", "    build: .", "    ports: ['80:80']"],
    ["SELECT name, revenue", "FROM clients", "JOIN analytics ON id = client_id", "LIMIT 10;"]
  ];

  function createCodeTexture(lines) {
    var c = document.createElement('canvas');
    c.width = 512; c.height = 256;
    var ctx = c.getContext('2d');
    
    // Fundo elegante de painel escuro
    ctx.fillStyle = 'rgba(10, 10, 18, 0.95)';
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(0, 0, 512, 256, 16) : ctx.rect(0, 0, 512, 256);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0, 102, 255, 0.3)';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Menu Bar (dots estilo Mac)
    ctx.fillStyle = '#ff5f56'; ctx.beginPath(); ctx.arc(28, 28, 7, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#ffbd2e'; ctx.beginPath(); ctx.arc(48, 28, 7, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#27c93f'; ctx.beginPath(); ctx.arc(68, 28, 7, 0, Math.PI*2); ctx.fill();

    // Escrever código linha a linha com cores modernas
    ctx.font = 'bold 19px "JetBrains Mono", monospace';
    lines.forEach(function(line, idx) {
      ctx.fillStyle = (idx === 0) ? '#8b9dff' : (idx === 1) ? '#6ecf96' : '#ffffff';
      ctx.fillText(line, 28, 85 + idx * 35);
    });

    var tex = new THREE.CanvasTexture(c);
    tex.minFilter = THREE.LinearFilter;
    return tex;
  }

  var codeTextures = snippets.map(createCodeTexture);

  // 2. Texturas de Alta Definição (Interface Real de Negócios / SaaS Dashboard)
  var dashboardPanels = [
    { title: "Monthly Growth", color: "#0066FF", type: "line" },
    { title: "Active Deals", color: "#10b981", type: "bars" },
    { title: "Conversion Funnel", color: "#f59e0b", type: "list" },
    { title: "Server Performance", color: "#8b9dff", type: "graph" },
    { title: "Operational Uptime", color: "#10b981", type: "bars" }
  ];

  function createSiteTexture(panel) {
    var c = document.createElement('canvas');
    c.width = 512; c.height = 256;
    var ctx = c.getContext('2d');
    
    // Card estilo Glassmorphic escuro de altíssimo nível
    ctx.fillStyle = '#0d1117';
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(0, 0, 512, 256, 16) : ctx.rect(0, 0, 512, 256);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Título do Painel do Site
    ctx.font = 'bold 22px "Inter", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(panel.title, 32, 50);

    // Renderizar componentes reais dependendo do tipo do card
    if (panel.type === "bars" || panel.type === "graph") {
      ctx.fillStyle = panel.color;
      for (var i = 0; i < 7; i++) {
        var h = 40 + Math.random() * 110;
        ctx.beginPath();
        ctx.roundRect ? ctx.roundRect(90 + i * 50, 210 - h, 28, h, 6) : ctx.rect(90 + i * 50, 210 - h, 28, h);
        ctx.fill();
      }
    } else if (panel.type === "line") {
      // Desenhar uma linha de gráfico profissional
      ctx.strokeStyle = panel.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(40, 180);
      ctx.lineTo(120, 110);
      ctx.lineTo(200, 150);
      ctx.lineTo(280, 80);
      ctx.lineTo(360, 130);
      ctx.lineTo(440, 60);
      ctx.stroke();

      // Pontos do gráfico
      ctx.fillStyle = '#ffffff';
      [120, 200, 280, 360, 440].forEach(function(x, idx) {
        var y = [110, 150, 80, 130, 60][idx];
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI*2);
        ctx.fill();
      });
    } else {
      // Lista de Leads convertendo
      for (var j = 0; j < 3; j++) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.beginPath();
        ctx.roundRect ? ctx.roundRect(32, 85 + j * 45, 448, 32, 6) : ctx.rect(32, 85 + j * 45, 448, 32);
        ctx.fill();
        ctx.fillStyle = panel.color;
        ctx.beginPath();
        ctx.arc(56, 101 + j * 45, 8, 0, Math.PI*2);
        ctx.fill();
      }
    }

    var tex = new THREE.CanvasTexture(c);
    tex.minFilter = THREE.LinearFilter;
    return tex;
  }

  var siteTextures = dashboardPanels.map(createSiteTexture);

  // Criar Estruturas de Malhas 3D
  var group = new THREE.Group();
  scene.add(group);

  var items = [];
  var totalItems = 5; // Quantidade perfeita para não poluir visualmente

  for (var i = 0; i < totalItems; i++) {
    var geo = new THREE.PlaneGeometry(3.2, 1.6);
    var mat = new THREE.MeshBasicMaterial({
      map: codeTextures[i % codeTextures.length],
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
      depthWrite: false
    });

    var mesh = new THREE.Mesh(geo, mat);

    // Estado de código (Dispersão dinâmica e 3D acentuado)
    var startPos = new THREE.Vector3(
      (Math.random() - 0.5) * 4.5,
      (Math.random() - 0.5) * 4.0,
      (Math.random() - 0.5) * 2.5
    );

    // Estado do Site (Montagem do dashboard do produto)
    var gridX = ((i % 2) - 0.5) * 3.4;
    var gridY = (Math.floor(i / 2) - 0.5) * 1.8;
    // Centralizar o último se for ímpar
    if (i === totalItems - 1) {
      gridX = 0;
      gridY = 0;
    }
    var endPos = new THREE.Vector3(gridX, -gridY, 0.1);

    mesh.position.copy(startPos);

    items.push({
      mesh: mesh,
      mat: mat,
      startPos: startPos,
      endPos: endPos,
      startRot: new THREE.Euler(
        (Math.random() - 0.5) * 0.9,
        (Math.random() - 0.5) * 1.5,
        (Math.random() - 0.5) * 0.5
      ),
      endRot: new THREE.Euler(0, 0, 0),
      codeTex: codeTextures[i % codeTextures.length],
      siteTex: siteTextures[i % siteTextures.length]
    });

    group.add(mesh);
  }

  // Adicionar uma grid cibernética futurista atrás
  var gridHelper = new THREE.GridHelper(12, 24, 0x0066FF, 0x181828);
  gridHelper.position.z = -2;
  gridHelper.rotation.x = Math.PI / 2;
  scene.add(gridHelper);

  // Parâmetros de Transição (Smooth Lerp com Easing)
  var transition = 0;
  var targetTransition = 0;
  var modeTimer = 0;

  // Interatividade com cursor (Parallax da câmera)
  var mouseX = 0, mouseY = 0;
  window.addEventListener('mousemove', function(e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 1.4;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 1.4;
  });

  function animate() {
    requestAnimationFrame(animate);

    // Ciclar estados de forma automatizada e polida
    modeTimer += 0.016;
    if (modeTimer > 5.5) {
      modeTimer = 0;
      targetTransition = targetTransition === 0 ? 1 : 0;
    }

    // Interpolação suave (Slerp/Lerp) para a transição
    transition += (targetTransition - transition) * 0.05;

    items.forEach(function(item) {
      // Posição
      item.mesh.position.lerpVectors(item.startPos, item.endPos, transition);

      // Rotação
      item.mesh.rotation.x = THREE.MathUtils.lerp(item.startRot.x, item.endRot.x, transition);
      item.mesh.rotation.y = THREE.MathUtils.lerp(item.startRot.y, item.endRot.y, transition);
      item.mesh.rotation.z = THREE.MathUtils.lerp(item.startRot.z, item.endRot.z, transition);

      // Troca suave de textura baseada na transição
      if (transition > 0.5) {
        item.mat.map = item.siteTex;
      } else {
        item.mat.map = item.codeTex;
      }
    });

    // Parallax suave da câmera
    camera.position.x += (mouseX - camera.position.x) * 0.06;
    camera.position.y += (-mouseY - camera.position.y) * 0.06;
    camera.lookAt(scene.position);

    // Movimento sutil na grid de fundo
    gridHelper.rotation.z = elapsedTime = performance.now() * 0.0001;

    renderer.render(scene, camera);
  }

  animate();
})();
