const fs = require('fs');
const path = 'c:/Users/ADM/Desktop/AtelewaTech/index.html';
let content = fs.readFileSync(path, 'utf-8');

// 1. Update CSS utilities for Senior UI micro-interactions & form styling
const oldStyle = `    .glass-card {
      background: rgba(13, 13, 13, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .glass-card:hover {
      border-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.6), 0 0 20px 0 rgba(255, 255, 255, 0.03);
    }`;

const newStyle = `    .glass-card {
      background: rgba(13, 13, 13, 0.75);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
    }
    .glass-card:hover {
      transform: translateY(-4px);
      border-color: rgba(255, 255, 255, 0.22);
      box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px 0 rgba(255, 255, 255, 0.04);
    }
    
    .section-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 4px 12px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #a3a3a3;
      margin-bottom: 16px;
    }`;

content = content.replace(oldStyle, newStyle);

// Replace form-input classes in HTML to form-input-v2
content = content.replace(/class="form-input"/g, 'class="form-input-v2"');

// 2. Standardize Section Headers & Eyebrows

// Soluções Header
const oldSolucoesHeader = `<div class="mb-16 reveal border-b border-[#1a1a1a] pb-8">
      <h2 class="text-[32px] md:text-[48px] font-bold tracking-tight leading-tight mb-4 text-white font-heading">O que construímos para<br class="hidden md:block"> o seu negócio.</h2>
      <p class="text-neutral-400 text-lg max-w-xl font-sans">Soluções completas de ponta a ponta, do primeiro rascunho ao produto em produção.</p>
    </div>`;

const newSolucoesHeader = `<div class="mb-16 reveal border-b border-white/10 pb-8">
      <div class="section-eyebrow"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Soluções Enterprise</div>
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4 text-white font-heading">O que construímos para<br class="hidden md:block"> o seu negócio.</h2>
      <p class="text-neutral-400 text-base md:text-lg max-w-xl font-sans leading-relaxed">Engenharia de software sob medida, do primeiro protótipo à infraestrutura escalável em nuvem.</p>
    </div>`;

content = content.replace(oldSolucoesHeader, newSolucoesHeader);

// Para Quem É Header
const oldParaQuemHeader = `<div class="mb-16 reveal border-b border-[#1a1a1a] pb-8">
      <h2 class="text-[32px] md:text-[48px] font-bold tracking-tight leading-tight text-white font-heading">Para quem as soluções<br class="hidden md:block"> da Atelewa são ideais.</h2>
    </div>`;

const newParaQuemHeader = `<div class="mb-16 reveal border-b border-white/10 pb-8">
      <div class="section-eyebrow"><span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Fit de Mercado</div>
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4 text-white font-heading">Para quem as soluções<br class="hidden md:block"> da Atelewa são ideais.</h2>
      <p class="text-neutral-400 text-base md:text-lg max-w-xl font-sans leading-relaxed">Parceiro técnico ideal para negócios em diferentes fases de maturidade digital.</p>
    </div>`;

content = content.replace(oldParaQuemHeader, newParaQuemHeader);

// Processo Header
const oldProcessoHeader = `<div class="reveal">
      <h2 class="text-[32px] md:text-[48px] font-bold tracking-tight leading-tight mb-4 text-white font-heading">Do conceito ao lançamento, sem surpresas.</h2>
      <p class="text-neutral-400 text-[16px] leading-relaxed max-w-md font-sans">Cada projeto segue uma metodologia estruturada com pontos de validação. Você sempre sabe onde está o seu projeto.</p>
    </div>`;

const newProcessoHeader = `<div class="reveal">
      <div class="section-eyebrow"><span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Metodologia Ágil</div>
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4 text-white font-heading">Do conceito ao lançamento, sem surpresas.</h2>
      <p class="text-neutral-400 text-base md:text-lg leading-relaxed max-w-md font-sans">Cada projeto segue uma esteira estruturada com entregas contínuas e validações diretas.</p>
    </div>`;

content = content.replace(oldProcessoHeader, newProcessoHeader);

// Projetos Header
const oldProjetosHeader = `<div class="mb-12 reveal flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1a1a1a] pb-8">
      <div>
        <h2 class="text-[32px] md:text-[48px] font-bold tracking-tight leading-tight text-white font-heading">Projetos em Destaque.</h2>
      </div>
      <p class="text-neutral-400 text-base md:text-lg max-w-sm font-sans leading-relaxed">Nossos casos de sucesso em movimento contínuo.</p>
    </div>`;

const newProjetosHeader = `<div class="mb-12 reveal flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
      <div>
        <div class="section-eyebrow"><span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> Portfólio Ativo</div>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white font-heading">Projetos em Destaque.</h2>
      </div>
      <p class="text-neutral-400 text-base md:text-lg max-w-sm font-sans leading-relaxed">Aplicações reais em produção impulsionando operações e vendas.</p>
    </div>`;

content = content.replace(oldProjetosHeader, newProjetosHeader);

// FAQ Header
const oldFAQHeader = `<div class="mb-14 reveal border-b border-[#1a1a1a] pb-8">
      <h2 class="text-[32px] md:text-[48px] font-bold tracking-tight mb-4 text-white font-heading">Perguntas frequentes.</h2>
    </div>`;

const newFAQHeader = `<div class="mb-14 reveal border-b border-white/10 pb-8">
      <div class="section-eyebrow"><span class="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Tira-Dúvidas</div>
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white font-heading">Perguntas frequentes.</h2>
      <p class="text-neutral-400 text-base md:text-lg max-w-xl font-sans leading-relaxed">Transparência técnica e clareza sobre processos, prazos e entregas.</p>
    </div>`;

content = content.replace(oldFAQHeader, newFAQHeader);

// Contato Header
const oldContatoHeader = `<div class="reveal">
        <h2 class="text-[32px] md:text-[48px] font-bold tracking-tight mb-4 text-white font-heading">Pronto para transformar sua ideia em realidade?</h2>
        <p class="text-neutral-400 text-[16px] leading-relaxed font-sans">Preencha o formulário e receba um retorno direto da nossa equipe técnica em <strong class="text-white font-semibold">até 24 horas</strong>. Sem consultores de vendas chatos. Sem perda de tempo.</p>
      </div>`;

const newContatoHeader = `<div class="reveal">
        <div class="section-eyebrow"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Início Imediato</div>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white font-heading leading-tight">Pronto para transformar sua ideia em realidade?</h2>
        <p class="text-neutral-400 text-base md:text-lg leading-relaxed font-sans mb-6">Preencha o formulário e receba um retorno direto da nossa engenharia em <strong class="text-white font-semibold">até 24 horas</strong>.</p>
        
        <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
          <div class="flex items-center gap-3 text-sm text-neutral-300">
            <span class="material-symbols-outlined text-emerald-400">verified</span>
            <span>Garantia de Confidencialidade (NDA)</span>
          </div>
          <div class="flex items-center gap-3 text-sm text-neutral-300">
            <span class="material-symbols-outlined text-emerald-400">speed</span>
            <span>Proposta Técnica Detalhada sem Compromisso</span>
          </div>
        </div>
      </div>`;

content = content.replace(oldContatoHeader, newContatoHeader);

// Save updated file
fs.writeFileSync(path, content);
console.log('Senior UI refactor complete!');
