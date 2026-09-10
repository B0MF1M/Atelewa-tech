const fs = require('fs');
const path = 'c:/Users/ADM/Desktop/AtelewaTech/index.html';
let content = fs.readFileSync(path, 'utf-8');

content = content.replace(/pb-6">\\n\s*/g, 'pb-6">\n');
content = content.replace(/<\/div>\\n\\n\s*/g, '</div>\n\n');

fs.writeFileSync(path, content);
console.log('Cleaned literal newlines!');
