
(() => {
    const update = () => {
        const time = new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        });

        document.querySelectorAll(".bubbles-clock span")
            .forEach(clock => clock.textContent = time);
    };

    update();
    setInterval(update, 1000);
})();
