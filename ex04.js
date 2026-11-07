const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'quotes.txt');
fs.readFile(file, 'utf8', (err, text) => {
if (err) return console.error(err.message);
const lines = text
.split(/\r?\n/) 
.filter(line => line.trim() !== '');
const num=Math.floor(Math.random() * lines.length)
console.log(`Random Line:${lines[num]}`)
});
