const fs = require('fs');
const html = fs.readFileSync('c:/Users/ADM/Desktop/AtelewaTech/index.html', 'utf-8');

// Basic HTML tag balancer check
const tagRegex = /<\/?([a-zA-Z0-9]+)(\s+[^>]*)?>/g;
let stack = [];
let match;
let lineNum = 1;

const selfClosing = new Set(['img', 'br', 'hr', 'input', 'link', 'meta', 'source']);

const lines = html.split('\n');
lines.forEach((line, idx) => {
  let m;
  const regex = /<\/?([a-zA-Z0-9]+)(\s+[^>]*)?>/g;
  while ((m = regex.exec(line)) !== null) {
    const isEnd = m[0].startsWith('</');
    const tagName = m[1].toLowerCase();
    
    if (selfClosing.has(tagName)) continue;
    
    if (!isEnd) {
      stack.push({ tag: tagName, line: idx + 1 });
    } else {
      if (stack.length === 0) {
        console.log(`Unmatched closing tag </${tagName}> at line ${idx + 1}`);
      } else {
        const top = stack.pop();
        if (top.tag !== tagName) {
          console.log(`Mismatch at line ${idx + 1}: expected </${top.tag}> (opened line ${top.line}), found </${tagName}>`);
        }
      }
    }
  }
});

console.log('Remaining open tags in stack:', stack);
