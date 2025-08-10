let totalGDP = 0;
let autoGDP = 0;

const gdpDisplay = document.getElementById("gdp-display");
const gdpButton = document.getElementById("gdp-button");

gdpButton.addEventListener("click", function() {
    totalGDP += 1;
    updateGDPDisplay();
});

setInterval(function() {
    totalGDP += autoGDP;
    updateGDPDisplay();
}, 1000);

function updateGDPDisplay() {
    gdpDisplay.textContent = "GDP: " + totalGDP;
}
