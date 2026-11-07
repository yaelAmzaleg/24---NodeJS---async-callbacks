function countdown(count) {
    console.log(`${count}`);
    const delay = 500 + Math.random() * 1000;
    setTimeout(() => {
        if (count > 0) {
            countdown(count - 1);
        } else {
            console.log(`Done!`);
        }
    }, delay);
}

countdown(3);