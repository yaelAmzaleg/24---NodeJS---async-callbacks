const fs = require("fs");
const path = require("path");
const path_backup = path.join(__dirname, 'backup')
fs.access(path_backup, fs.constants.F_OK, (err) => {
    if (err) {
        fs.mkdir(path_backup, (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log("Folder created successfully.");
        })
    }
    else
        console.log("Folder already exists.");
}) 
