// Faction details object
const factionDetails = {
    spaceMarines: "The Space Marines are humanity's greatest defenders, genetically modified warriors with unwavering loyalty to the Emperor.",
    necrons: "The Necrons are an ancient race of skeletal robots, seeking to reclaim the galaxy they once ruled.",
    eldar: "The Eldar are a dying race of highly psychic warriors, fighting to preserve their dwindling numbers.",
    orks: "The Orks are a brutal and barbaric race, living for nothing more than war and destruction."
};

// Get elements
const factionSelect = document.getElementById('faction-select');
const showInfoBtn = document.getElementById('show-info-btn');
const factionDetailsEl = document.getElementById('faction-details');

// Event listener for the button
showInfoBtn.addEventListener('click', () => {
    const selectedFaction = factionSelect.value;

    if (selectedFaction) {
        factionDetailsEl.textContent = factionDetails[selectedFaction];
    } else {
        factionDetailsEl.textContent = "Please select a faction to view its details.";
    }
});
