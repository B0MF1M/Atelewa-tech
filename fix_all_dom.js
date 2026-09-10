const fs = require('fs');

const filePath = 'c:/Users/ADM/Desktop/AtelewaTech/index.html';
let html = fs.readFileSync(filePath, 'utf-8');

// Fix 1: Soluções Cards (change closing </div> for the 4 Soluções articles back to </article> or change opening back to <div>)
// Let's make sure opening <article> has matching closing </article>

// Card 3 Soluções
html = html.replace(
  `<!-- Card 3: Apps & Produtos -->
      <article class="minimal-block glass-card p-8 reveal reveal-delay-2 flex flex-col justify-between min-h-[360px] border border-[#1a1a1a] hover:border-neutral-700 transition-all duration-300 rounded-2xl bg-[#0d0d0d]">
        <div>
          <div class="flex items-center justify-between mb-6">
            <div class="w-10 h-10 rounded-lg bg-[#141414] border border-white/10 flex items-center justify-center text-white">
              <span class="material-symbols-outlined" style="font-size:22px;">smartphone</span>
            </div>
          </div>
          <h3 class="text-xl font-bold text-white mb-3 font-heading">Aplicativos &amp; Produtos Digitais</h3>
          <p class="text-neutral-400 text-[15px] leading-relaxed mb-6 font-sans">Desenvolvimento de MVPs e aplicações completas focadas em entregar valor real aos usuários desde o primeiro dia.</p>
        </div>

        <div class="rounded-xl bg-[#050505] border border-white/10 p-3.5 flex items-center gap-3">
          <div class="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-white font-bold text-xs font-mono">iOS</div>
          <div class="flex-1">
            <div class="text-[12px] font-bold text-white font-heading">Native Performance</div>
            <div class="text-[10px] text-neutral-500">60 FPS Smooth UX</div>
          </div>
        </div>
      </div>`,
  `<!-- Card 3: Apps & Produtos -->
      <article class="minimal-block glass-card p-8 reveal reveal-delay-2 flex flex-col justify-between min-h-[360px] border border-[#1a1a1a] hover:border-neutral-700 transition-all duration-300 rounded-2xl bg-[#0d0d0d]">
        <div>
          <div class="flex items-center justify-between mb-6">
            <div class="w-10 h-10 rounded-lg bg-[#141414] border border-white/10 flex items-center justify-center text-white">
              <span class="material-symbols-outlined" style="font-size:22px;">smartphone</span>
            </div>
          </div>
          <h3 class="text-xl font-bold text-white mb-3 font-heading">Aplicativos &amp; Produtos Digitais</h3>
          <p class="text-neutral-400 text-[15px] leading-relaxed mb-6 font-sans">Desenvolvimento de MVPs e aplicações completas focadas em entregar valor real aos usuários desde o primeiro dia.</p>
        </div>

        <div class="rounded-xl bg-[#050505] border border-white/10 p-3.5 flex items-center gap-3">
          <div class="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-white font-bold text-xs font-mono">iOS</div>
          <div class="flex-1">
            <div class="text-[12px] font-bold text-white font-heading">Native Performance</div>
            <div class="text-[10px] text-neutral-500">60 FPS Smooth UX</div>
          </div>
        </div>
      </article>`
);

// Card 4 Soluções
html = html.replace(
  `<!-- Card 4: Integração de Sistemas -->
      <article class="minimal-block glass-card p-8 md:col-span-2 lg:col-span-1 reveal reveal-delay-1 flex flex-col justify-between min-h-[360px] border border-[#1a1a1a] hover:border-neutral-700 transition-all duration-300 rounded-2xl bg-[#0d0d0d]">
        <div>
          <div class="flex items-center justify-between mb-6">
            <div class="w-10 h-10 rounded-lg bg-[#141414] border border-white/10 flex items-center justify-center text-white">
              <span class="material-symbols-outlined" style="font-size:22px;">hub</span>
            </div>
          </div>
          <h3 class="text-xl font-bold text-white mb-3 font-heading">Automação &amp; Integração de APIs</h3>
          <p class="text-neutral-400 text-[15px] leading-relaxed mb-6 font-sans">Conexão fluída entre ferramentas, integração de gateways de pagamento, ERPs e automação de processos internos.</p>
        </div>

        <div class="rounded-xl bg-[#050505] border border-white/10 p-4 flex items-center justify-between font-mono text-[11px]">
          <div class="px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 border border-white/5">Webhook</div>
          <div class="h-0.5 w-12 bg-neutral-700"></div>
          <div class="px-2.5 py-1 rounded bg-neutral-800 text-white border border-white/10">Active Sync</div>
        </div>
      </div>`,
  `<!-- Card 4: Integração de Sistemas -->
      <article class="minimal-block glass-card p-8 md:col-span-2 lg:col-span-1 reveal reveal-delay-1 flex flex-col justify-between min-h-[360px] border border-[#1a1a1a] hover:border-neutral-700 transition-all duration-300 rounded-2xl bg-[#0d0d0d]">
        <div>
          <div class="flex items-center justify-between mb-6">
            <div class="w-10 h-10 rounded-lg bg-[#141414] border border-white/10 flex items-center justify-center text-white">
              <span class="material-symbols-outlined" style="font-size:22px;">hub</span>
            </div>
          </div>
          <h3 class="text-xl font-bold text-white mb-3 font-heading">Automação &amp; Integração de APIs</h3>
          <p class="text-neutral-400 text-[15px] leading-relaxed mb-6 font-sans">Conexão fluída entre ferramentas, integração de gateways de pagamento, ERPs e automação de processos internos.</p>
        </div>

        <div class="rounded-xl bg-[#050505] border border-white/10 p-4 flex items-center justify-between font-mono text-[11px]">
          <div class="px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 border border-white/5">Webhook</div>
          <div class="h-0.5 w-12 bg-neutral-700"></div>
          <div class="px-2.5 py-1 rounded bg-neutral-800 text-white border border-white/10">Active Sync</div>
        </div>
      </article>`
);

// Para quem é Section Cards
const oldParaQuemSection = `<div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <article class="minimal-block glass-card p-8 reveal rounded-2xl bg-[#0d0d0d] border border-[#1f1f1f]">
        <div class="w-10 h-10 flex items-center mb-4 text-white">
          <span class="material-symbols-outlined text-[28px]">rocket_launch</span>
        </div>
        <div class="text-[14px] font-bold text-white mb-2 uppercase tracking-wide font-heading">Startups &amp; Empreendedores</div>
        <p class="text-neutral-400 text-[15px] leading-relaxed font-sans">Lançamento de MVP ágil, bonito e funcional no menor tempo possível, sem abrir mão de qualidade técnica.</p>
      </div>
      
      <article class="minimal-block glass-card p-8 reveal reveal-delay-1 rounded-2xl bg-[#0d0d0d] border border-[#1f1f1f]">
        <div class="w-10 h-10 flex items-center mb-4 text-white">
          <span class="material-symbols-outlined text-[28px]">storefront</span>
        </div>
        <div class="text-[14px] font-bold text-white mb-2 uppercase tracking-wide font-heading">Pequenas &amp; Médias Empresas</div>
        <p class="text-neutral-400 text-[15px] leading-relaxed font-sans">Digitalização de processos manuais, planilhas confusas e tarefas repetitivas, ganhando escala e precisão.</p>
      </div>
      
      <article class="minimal-block glass-card p-8 reveal reveal-delay-2 rounded-2xl bg-[#0d0d0d] border border-[#1f1f1f]">
        <div class="w-10 h-10 flex items-center mb-4 text-white">
          <span class="material-symbols-outlined text-[28px]">apartment</span>
        </div>
        <div class="text-[14px] font-bold text-white mb-2 uppercase tracking-wide font-heading">Empresas Consolidadas</div>
        <p class="text-neutral-400 text-[15px] leading-relaxed font-sans">Modernização de sistemas legados, melhoria na experiência visual e aumento das taxas de conversão.</p>
      </div>
    </div>`;

const newParaQuemSection = `<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <article class="minimal-block glass-card p-8 reveal rounded-2xl bg-[#0d0d0d] border border-[#1f1f1f]">
        <div class="w-10 h-10 flex items-center mb-4 text-white">
          <span class="material-symbols-outlined text-[28px]">rocket_launch</span>
        </div>
        <div class="text-[14px] font-bold text-white mb-2 uppercase tracking-wide font-heading">Startups &amp; Empreendedores</div>
        <p class="text-neutral-400 text-[15px] leading-relaxed font-sans">Lançamento de MVP ágil, bonito e funcional no menor tempo possível, sem abrir mão de qualidade técnica.</p>
      </article>
      
      <article class="minimal-block glass-card p-8 reveal reveal-delay-1 rounded-2xl bg-[#0d0d0d] border border-[#1f1f1f]">
        <div class="w-10 h-10 flex items-center mb-4 text-white">
          <span class="material-symbols-outlined text-[28px]">storefront</span>
        </div>
        <div class="text-[14px] font-bold text-white mb-2 uppercase tracking-wide font-heading">Pequenas &amp; Médias Empresas</div>
        <p class="text-neutral-400 text-[15px] leading-relaxed font-sans">Digitalização de processos manuais, planilhas confusas e tarefas repetitivas, ganhando escala e precisão.</p>
      </article>
      
      <article class="minimal-block glass-card p-8 reveal reveal-delay-2 rounded-2xl bg-[#0d0d0d] border border-[#1f1f1f]">
        <div class="w-10 h-10 flex items-center mb-4 text-white">
          <span class="material-symbols-outlined text-[28px]">apartment</span>
        </div>
        <div class="text-[14px] font-bold text-white mb-2 uppercase tracking-wide font-heading">Empresas Consolidadas</div>
        <p class="text-neutral-400 text-[15px] leading-relaxed font-sans">Modernização de sistemas legados, melhoria na experiência visual e aumento das taxas de conversão.</p>
      </article>
    </div>`;

html = html.replace(oldParaQuemSection, newParaQuemSection);

// Fix WhatsApp FAB button SVG path
const oldWhatsApp = `<a href="https://wa.me/5571996166794?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20com%20a%20Atelewa%20Tech." target="_blank" rel="noopener" class="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#25D366] text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group" aria-label="Falar no WhatsApp">
  <span class="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0a0a0a] animate-ping"></span>
  <span class="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0a0a0a]"></span>
  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
</a>`;

const newWhatsApp = `<a href="https://wa.me/5571996166794?text=Ol%C3%A1%21%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20com%20a%20Atelewa%20Tech." target="_blank" rel="noopener" class="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#25D366] text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group" aria-label="Falar no WhatsApp">
  <span class="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0a0a0a] animate-ping"></span>
  <span class="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#0a0a0a]"></span>
  <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-0.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
  </svg>
</a>`;

html = html.replace(oldWhatsApp, newWhatsApp);

fs.writeFileSync(filePath, html);
console.log('Fixed DOM mismatched tags!');
