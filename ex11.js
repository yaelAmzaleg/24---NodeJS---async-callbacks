const fs = require("fs");
const path = require("path");
const directoryPath = path.join(__dirname, "data-folder");
fs.readdir(directoryPath, (err, files) => {
    if (err)
        console.log("Error in read folder")
    else {
        let completed = 0
        let totalSize = 0
        files.forEach(file => {
            const CurrentPath = path.join(directoryPath, file)
            fs.lstat(CurrentPath, (err, stats) => {
                if (err)
                    console.log("error in Curren file")
                else {
                    if (stats.isFile())
                        totalSize += stats.size
                    if (completed === files.length - 1)
                        console.log(`Total size: ${totalSize} bytes`)
                    completed++;
                }
            })
        })
    }
})
