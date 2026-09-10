/* code-3d-scene.js — Animação 3D Profissional de Códigos com Three.js */
(function initCode3D() {
  var canvas = document.getElementById('code-3d-canvas');
  var container = canvas ? canvas.parentElement : null;
  if (!canvas || !container || typeof THREE === 'undefined') return;

  var width = container.clientWidth;
  var height = container.clientHeight;

  // Scene & Camera
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 10);

  // Renderer
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setSize(width, height, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Resize handler
  window.addEventListener('resize', function() {
    if (!container || !canvas) return;
    var w = container.clientWidth;
    var h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  });

  // Codigos reais para textura
  var codeLines = [
    "const app = Next.js()",
    "await deploy(app)",
    "API_URL: '/v1/graphql'",
    "db.users.findMany()",
    "git commit -m 'feat: IA'",
    "npm run dev --port 3000",
    "const [data] = useState()",
    "export default App()",
    "SELECT * FROM users",
    "import { React } from 'react'",
    "docker-compose up -d",
    "<html> <head> <body>"
  ];

  // Cores de sintaxe
  var colors = ["#0066FF", "#5db8e8", "#6ecf96", "#8b9dff", "#ffffff"];

  // Criar texturas 2D dinâmicas contendo os códigos reais
  var textures = codeLines.map(function(text) {
    var canvasTex = document.createElement('canvas');
    canvasTex.width = 512;
    canvasTex.height = 64;
    var ctxTex = canvasTex.getContext('2d');
    ctxTex.clearRect(0, 0, 512, 64);
    
    // Fundo transparente escuro
    ctxTex.fillStyle = 'rgba(10, 12, 22, 0.45)';
    ctxTex.beginPath();
    ctxTex.roundRect ? ctxTex.roundRect(0, 0, 512, 64, 8) : ctxTex.rect(0, 0, 512, 64);
    ctxTex.fill();

    // Texto de código
    ctxTex.font = 'bold 24px "JetBrains Mono", "Courier New", monospace';
    ctxTex.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctxTex.textBaseline = 'middle';
    ctxTex.fillText(text, 24, 32);

    var texture = new THREE.CanvasTexture(canvasTex);
    texture.minFilter = THREE.LinearFilter;
    return texture;
  });

  // Grupo pai
  var codeGroup = new THREE.Group();
  scene.add(codeGroup);

  // Criar meshes para cada linha de código no espaço 3D
  var items = [];
  var count = 35; // Quantidade de linhas em suspensão
  
  for (var i = 0; i < count; i++) {
    var tex = textures[i % textures.length];
    // Aspecto do plano para encaixar a linha
    var geometry = new THREE.PlaneGeometry(3.5, 0.43);
    var material = new THREE.MeshBasicMaterial({
      map: tex,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    var mesh = new THREE.Mesh(geometry, material);
    
    // Distribuição espacial aleatória em torno do centro
    mesh.position.set(
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 4
    );

    // Rotações aleatórias sutis para dar o efeito 3D flutuante
    mesh.rotation.x = (Math.random() - 0.5) * 0.4;
    mesh.rotation.y = (Math.random() - 0.5) * 0.6;
    mesh.rotation.z = (Math.random() - 0.5) * 0.2;

    // Velocidade de oscilação e direção individual
    items.push({
      mesh: mesh,
      speedY: (Math.random() * 0.003) + 0.001,
      speedRot: (Math.random() - 0.5) * 0.002,
      offset: Math.random() * Math.PI * 2
    });

    codeGroup.add(mesh);
  }

  // Interação do mouse para rotação da câmera (parallax)
  var mouseX = 0, mouseY = 0;
  window.addEventListener('mousemove', function(e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
  });

  // Render loop
  var clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    var delta = clock.getDelta();
    var elapsedTime = clock.getElapsedTime();

    // Rotação suave do grupo como um todo
    codeGroup.rotation.y = elapsedTime * 0.05;
    codeGroup.rotation.x = Math.sin(elapsedTime * 0.03) * 0.05;

    // Animar elementos individualmente (flutuação)
    items.forEach(function(item) {
      item.mesh.position.y += Math.sin(elapsedTime + item.offset) * 0.0015;
      item.mesh.rotation.y += item.speedRot;
    });

    // Parallax suave com a posição do mouse
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();
})();
