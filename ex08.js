const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "temp.txt");
fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) 
       console.log("File not found.")
    else {
        fs.unlink(filePath, (err) => {
            if (err)
                console.log("error in delete")
            else
                console.log("File deleted.");
        })
    }
})






