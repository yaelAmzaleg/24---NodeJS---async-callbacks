const fs = require("fs");
const path = require("path");
const directoryPath = path.join(__dirname, "my-folder");
fs.readdir(directoryPath, (err, items) => {
    if (err) return console.error(err.message);
    let pending = items.length;
    if (pending === 0) return console.log('empty folder');
    items.forEach((item) => {
        const full = path.join(directoryPath, item);
        fs.lstat(full, (err, stats) => {
            if (!err && stats.isFile())
                 console.log(`File: ${item}`);
        });
    });
});
