const os = require("os");
os.cpus().forEach((cpu, index) => {
    console.log(`CPU ${index}: ${cpu.model}`);
});

