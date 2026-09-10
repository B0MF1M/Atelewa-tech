const fs = require('fs');
let content = fs.readFileSync('c:/Users/ADM/Desktop/AtelewaTech/index.html', 'utf-8');

// 1. Solucoes BG
content = content.replace(
  /<section id="solucoes" class="py-24 md:py-32">\s*<div class="max-w-\[1440px\] mx-auto px-6">/g,
  `<section id="solucoes" class="py-24 md:py-32 relative overflow-hidden bg-[#070707]">
  <div class="absolute inset-0 mesh-bg opacity-40 mix-blend-screen pointer-events-none"></div>
  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none"></div>
  <div class="max-w-[1440px] mx-auto px-6 relative z-10">`
);

// Add glass-card to minimal blocks in Solucoes
content = content.replace(/minimal-block p-8/g, 'minimal-block glass-card p-8');

// 2. FAQ BG
content = content.replace(
  /<section id="duvidas" class="py-24 md:py-32 bg-\[#050505\]">\s*<div class="max-w-4xl mx-auto px-6">/g,
  `<section id="duvidas" class="py-24 md:py-32 relative overflow-hidden bg-[#050505] bg-grid">
  <div class="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none"></div>
  <div class="max-w-4xl mx-auto px-6 relative z-10">`
);

// 3. Projetos BG
content = content.replace(
  /<section id="projetos" class="py-24 md:py-32 border-t border-\[#1a1a1a\] overflow-hidden">\s*<div class="max-w-\[1440px\] mx-auto px-6">/g,
  `<section id="projetos" class="py-24 md:py-32 border-t border-[#1a1a1a] overflow-hidden relative">
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/10 rounded-[100%] blur-[100px] animate-pulse-glow pointer-events-none"></div>
  <div class="max-w-[1440px] mx-auto px-6 relative z-10">`
);

// 4. Transform Carousel to Marquee
const trackStartOld = '<div id="portfolio-track" class="carousel-container no-scrollbar flex gap-6 overflow-x-auto pb-6 -mx-2 px-2">';
const trackStartNew = '<div id="portfolio-track" class="flex gap-6 w-max animate-marquee pb-6">';
const parts = content.split(trackStartOld);
if (parts.length === 2) {
  const trackEndMarker = '<div class="mt-8 text-center reveal">';
  const trackSubParts = parts[1].split(trackEndMarker);
  if (trackSubParts.length === 2) {
    let cardsContent = trackSubParts[0];
    
    // We want the cards to not shrink so they fit well in the marquee
    cardsContent = cardsContent.replace(/w-full sm:w-\[calc\(50%-12px\)\] lg:w-\[calc\(33.333%-16px\)\] shrink-0/g, 'w-[320px] md:w-[400px] shrink-0');
    
    // Duplicate the cards twice
    const newCardsContent = cardsContent + cardsContent + cardsContent;
    
    content = parts[0] + trackStartNew + newCardsContent + trackEndMarker + trackSubParts[1];
  }
}

// 5. Remove Javascript for AutoPortfolio
content = content.replace(/\/\/ Infinite Portfolio Carousel Logic[\s\S]*?\/\/ Contact form submission feedback/g, '// Contact form submission feedback');

fs.writeFileSync('c:/Users/ADM/Desktop/AtelewaTech/index.html', content);
console.log('Update successful');
