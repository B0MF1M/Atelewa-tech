const fs = require('fs');
const path = 'c:/Users/ADM/Desktop/AtelewaTech/index.html';
let content = fs.readFileSync(path, 'utf-8');

// 1. Wrap main content in <main>
// After the closing </header> tag (around line 304), insert <main>
content = content.replace(/<\/header>\s*/, '</header>\n\n<main>\n');

// Before the opening <footer> tag, insert </main>
content = content.replace(/\n<!-- ═══════════ FOOTER ═══════════ -->/, '\n</main>\n\n<!-- ═══════════ FOOTER ═══════════ -->');

// 2. Add aria-labels to existing nav and fix mobile nav
content = content.replace(/<nav class="hidden md:flex items-center gap-1">/, '<nav aria-label="Navegação Principal" class="hidden md:flex items-center gap-1">');
content = content.replace(/<div id="mobile-menu" class="md:hidden border-t border-white\/5">/, '<nav id="mobile-menu" aria-label="Menu Mobile" class="md:hidden border-t border-white/5">');
content = content.replace(/<\/div>\s*<\/header>/, '</nav>\n\n</header>'); // since mobile-menu changed to nav, close it with nav

// 3. Footer nav
content = content.replace(/<ul class="space-y-2.5 text-\[14px\] font-sans">/, '<nav aria-label="Menu Rodapé">\n        <ul class="space-y-2.5 text-[14px] font-sans">');
content = content.replace(/<\/ul>\s*<\/div>\s*<div>\s*<p class="text-neutral-400 text-sm mb-2 font-sans">Salvador — BA, Brasil<\/p>/, '</ul>\n        </nav>\n      </div>\n\n      <div>\n        <p class="text-neutral-400 text-sm mb-2 font-sans">Salvador — BA, Brasil</p>');

// 4. Footer address
content = content.replace(/<p class="text-neutral-400 text-sm mb-2 font-sans">Salvador — BA, Brasil<\/p>\s*<p class="text-neutral-400 text-sm font-mono hover:text-white transition-colors">contato@atelewa.tech<\/p>/, '<address class="not-italic">\n          <p class="text-neutral-400 text-sm mb-2 font-sans">Salvador — BA, Brasil</p>\n          <p class="text-neutral-400 text-sm font-mono hover:text-white transition-colors">contato@atelewa.tech</p>\n        </address>');

// 5. Change Soluções Cards to <article>
// Find minimal-block glass-card
content = content.replace(/<div class="minimal-block glass-card/g, '<article class="minimal-block glass-card');
// We need to carefully replace the closing divs for these blocks... 
// Actually, since it's hard to target just the closing div of an article via regex, 
// let's do it with specific string replacements for each card or DOM parser.
// Given node environment, I don't have DOMParser. I will just leave the Soluções and Projetos cards as <article> with regex, and write a custom loop or specific find/replace.

// Let's replace the opening tag for carousel cards
content = content.replace(/<div class="carousel-card/g, '<article class="carousel-card');

// We have 3 "Soluções" cards and 12 "Projetos" cards. Let's close them properly.
// The string replacing method might be too fragile for closing tags. Let's do it!
// Solucoes Card 1 ends at line 412 (before Card 2 comment)
content = content.replace(/<\/div>\s*<!-- Card 2: UI\/UX Design -->/g, '</article>\n\n      <!-- Card 2: UI/UX Design -->');
// Card 2 ends at line 434
content = content.replace(/<\/div>\s*<!-- Card 3: Apps & Produtos -->/g, '</article>\n\n      <!-- Card 3: Apps & Produtos -->');
// Card 3 ends at line 457
content = content.replace(/<\/div>\s*<!-- Card 4: Suporte e Manutenção -->/g, '</article>\n\n      <!-- Card 4: Suporte e Manutenção -->');
// Wait, the original code had steps? "01", "02", "03".
// For the Carousel Cards, they all end before <!-- Name of next card --> or </div> closing track.
// This is getting risky with regex. Let me use DOM manipulation with JSDOM if available, or just carefully craft it.

// Actually, I can leave the <article> replacements out if it risks breaking the HTML, or I can just use a simple replacer.
// Let's replace <div class="carousel-card ...> with <article class="carousel-card ...>
// And since I know exactly the structure of the card:
/*
      <article class="...">
        <a ...>
          <figure class="...">
            <img ...>
          </figure>
          <div class="...">
            ...
          </div>
        </a>
      </article>
*/
// The string of the inner card is exactly the same for all. I'll replace the full card HTML.
// To do this safely, I'll let another tool call handle the cards specifically.

fs.writeFileSync(path, content);
console.log("Basic Semantics applied!");
