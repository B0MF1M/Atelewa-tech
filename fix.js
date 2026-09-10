const fs = require('fs');

const path = 'c:/Users/ADM/Desktop/AtelewaTech/index.html';
let content = fs.readFileSync(path, 'utf-8');

// The clean 4 cards
const cards = `
      <!-- Blog Nexis -->
      <div class="carousel-card w-[320px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden bg-[#0d0d0d] border border-[#1f1f1f] hover:border-neutral-600 transition-all duration-300 group shadow-2xl flex flex-col justify-between">
        <a href="https://blog.iddnexis.com.br/" target="_blank" rel="noopener noreferrer" class="block h-full cursor-pointer">
          <div class="w-full aspect-[1008/473] overflow-hidden border-b border-white/10 bg-[#080808]">
            <img src="blog-nexis.png" alt="Blog Nexis — Insights &amp; IA" class="w-full h-full object-cover object-top">
          </div>
          <div class="p-5 md:p-6">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xl font-bold text-white font-heading tracking-tight">Blog Nexis</h3>
            </div>
            <p class="text-[14px] text-neutral-300 leading-relaxed mb-5 font-sans">Portal corporativo focado em cibersegurança e inteligência artificial com alta performance e SEO nativo.</p>
            <div class="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
              <span class="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[10px] font-mono font-medium rounded-md uppercase tracking-wider">NEXT.JS 14</span>
              <span class="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[10px] font-mono font-medium rounded-md uppercase tracking-wider">TAILWIND</span>
              <span class="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[10px] font-mono font-medium rounded-md uppercase tracking-wider">SEO &amp; IA</span>
            </div>
          </div>
        </a>
      </div>

      <!-- Paulo Garcia Finance USA -->
      <div class="carousel-card w-[320px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden bg-[#0d0d0d] border border-[#1f1f1f] hover:border-neutral-600 transition-all duration-300 group shadow-2xl flex flex-col justify-between">
        <a href="https://paulo-financas.surge.sh/" target="_blank" rel="noopener noreferrer" class="block h-full cursor-pointer">
          <div class="w-full aspect-[1008/473] overflow-hidden border-b border-white/10 bg-[#080808]">
            <img src="paulo-garcia.png" alt="Paulo Garcia Finance USA" class="w-full h-full object-cover object-top">
          </div>
          <div class="p-5 md:p-6">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xl font-bold text-white font-heading tracking-tight">Paulo Garcia Finance</h3>
            </div>
            <p class="text-[14px] text-neutral-300 leading-relaxed mb-5 font-sans">Plataforma de alta conversão para gestão e proteção de patrimônios globais no mercado USA.</p>
            <div class="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
              <span class="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[10px] font-mono font-medium rounded-md uppercase tracking-wider">FINANCE USA</span>
              <span class="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[10px] font-mono font-medium rounded-md uppercase tracking-wider">UI/UX</span>
              <span class="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[10px] font-mono font-medium rounded-md uppercase tracking-wider">CONVERSÃO</span>
            </div>
          </div>
        </a>
      </div>

      <!-- Just Neto Vinyl -->
      <div class="carousel-card w-[320px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden bg-[#0d0d0d] border border-[#1f1f1f] hover:border-neutral-600 transition-all duration-300 group shadow-2xl flex flex-col justify-between">
        <a href="https://justnetovinyl.surge.sh/" target="_blank" rel="noopener noreferrer" class="block h-full cursor-pointer">
          <div class="w-full aspect-[1008/473] overflow-hidden border-b border-white/10 bg-[#080808]">
            <img src="just-neto-vinyl.png" alt="Just Neto Vinyl" class="w-full h-full object-cover object-top">
          </div>
          <div class="p-5 md:p-6">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xl font-bold text-white font-heading tracking-tight">Just Neto Vinyl</h3>
            </div>
            <p class="text-[14px] text-neutral-300 leading-relaxed mb-5 font-sans">Acervo privado e exclusivo de edições audiófilas com experiência imersiva de navegação.</p>
            <div class="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
              <span class="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[10px] font-mono font-medium rounded-md uppercase tracking-wider">E-COMMERCE</span>
              <span class="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[10px] font-mono font-medium rounded-md uppercase tracking-wider">CURATORIA</span>
              <span class="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[10px] font-mono font-medium rounded-md uppercase tracking-wider">AUDIO</span>
            </div>
          </div>
        </a>
      </div>

      <!-- Mão no Tambor -->
      <div class="carousel-card w-[320px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden bg-[#0d0d0d] border border-[#1f1f1f] hover:border-neutral-600 transition-all duration-300 group shadow-2xl flex flex-col justify-between">
        <a href="https://mao-no-tambor.surge.sh/" target="_blank" rel="noopener noreferrer" class="block h-full cursor-pointer">
          <div class="w-full aspect-[1008/473] overflow-hidden border-b border-white/10 bg-[#080808]">
            <img src="mao-no-tambor.png" alt="Mão no Tambor" class="w-full h-full object-cover object-top">
          </div>
          <div class="p-5 md:p-6">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xl font-bold text-white font-heading tracking-tight">Mão no Tambor</h3>
            </div>
            <p class="text-[14px] text-neutral-300 leading-relaxed mb-5 font-sans">Portal dedicado à preservação litúrgica dos atabaques e agendamento de vivências culturais.</p>
            <div class="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
              <span class="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[10px] font-mono font-medium rounded-md uppercase tracking-wider">PLATAFORMA</span>
              <span class="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[10px] font-mono font-medium rounded-md uppercase tracking-wider">CULTURA</span>
              <span class="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[10px] font-mono font-medium rounded-md uppercase tracking-wider">AGENDAMENTO</span>
            </div>
          </div>
        </a>
      </div>
`;

// Extract everything before the track and after the track end marker
const startString = '    <!-- Carrossel Slider Track (Grid de 3 no Desktop, Infinito Automático) -->\n    <div id="portfolio-track" class="flex gap-6 w-max animate-marquee pb-6">';
const parts = content.split(startString);

if (parts.length === 2) {
  const endMarker = '    <div class="mt-8 text-center reveal">';
  const endParts = parts[1].split(endMarker);
  
  if (endParts.length >= 2) {
    // Reconstruct with properly duplicated cards
    // The trick is to have ALL duplicated cards inside the single `#portfolio-track` div,
    // and then properly close the `#portfolio-track` with exactly ONE `</div>`.
    
    // So:
    // startString +
    // cards x 3 +
    // '\n    </div>\n\n' +
    // endMarker + rest
    
    // Find the last end marker split part
    const rest = endParts.slice(1).join(endMarker); 
    
    const fixedTrack = startString + '\n' + cards + cards + cards + '\n    </div>\n\n    ' + endMarker + rest;
    
    fs.writeFileSync(path, parts[0] + fixedTrack);
    console.log("Fix applied!");
  }
}
