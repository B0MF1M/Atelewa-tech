const fs = require('fs');

const path = 'c:/Users/ADM/Desktop/AtelewaTech/index.html';
let content = fs.readFileSync(path, 'utf-8');

// Upgrade max-w-6xl to max-w-7xl for a spacious 1280px layout
content = content.replace(/max-w-6xl mx-auto px-6/g, 'max-w-7xl mx-auto px-6 md:px-8');

fs.writeFileSync(path, content);
console.log('Upgraded container width to max-w-7xl!');
