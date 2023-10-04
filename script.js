document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("rollButton");
    const die1 = document.getElementById("die1");
    const die2 = document.getElementById("die2");
    const totalDisplay = document.getElementById("total");

    rollButton.addEventListener("click", function () {
        // Generate random numbers for two dice (1 to 6)
        const roll1 = Math.floor(Math.random() * 6) + 1;
        const roll2 = Math.floor(Math.random() * 6) + 1;

        // Update the images and total display
        die1.src = `dice-${roll1}.png`;
        die2.src = `dice-${roll2}.png`;

        const total = roll1 + roll2;
        totalDisplay.textContent = total;
    });
});
