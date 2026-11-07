// Exercise 5: System Free Memory Logger
// Goal: every 2 seconds, calculate and print the free memory percentage. Stop after 5 logs.
// Required: os.freemem(), os.totalmem(), setInterval(callback, delay), clearInterval(intervalId)
//
// Expected output:
//   Free Memory: 73.25%
//   Free Memory: 72.91%
//   Free Memory: 72.80%
//   Free Memory: 72.75%
//   Free Memory: 72.60%
//   Memory logging complete.
//
// Run: node ex05.js

const os = require("os");

os.freemem(), os.totalmem();
let count = 0;
const id = setInterval(() => {
count++;
console.log(`Free Memory: ${((os.freemem() / os.totalmem()) * 100).toFixed(2)}%`);
if (count === 5) {
clearInterval(id); 
console.log('Memory logging complete.');
}
}, 2000);