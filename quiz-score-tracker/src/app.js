const participants = [
    { name: "Alice", score: 0 },
    { name: "Bob", score: 0 },
    { name: "Charlie", score: 0 },
    { name: "Diana", score: 0 }
];

function updateScore(participantName, points) {
    const participant = participants.find(p => p.name === participantName);
    if (participant) {
        participant.score += points;
        displayScores();
    }
}

function updateScore(participantNumber) {
    const scoreElement = document.getElementById(`score${participantNumber}`);
    const currentScore = parseInt(scoreElement.textContent, 10);
    scoreElement.textContent = currentScore + 1;
}

function displayScores() {
    const scoreBoard = document.getElementById("score-board");
    if (!scoreBoard) return;
    scoreBoard.innerHTML = ""; // Clear previous scores
    participants.forEach(participant => {
        const scoreItem = document.createElement("div");
        scoreItem.textContent = `${participant.name}: ${participant.score}`;
        scoreBoard.appendChild(scoreItem);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayScores();

    const scoreForm = document.getElementById("score-form");
    if (scoreForm) {
        scoreForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const participantName = event.target.participant.value;
            const points = parseInt(event.target.points.value, 10);
            updateScore(participantName, points);
            scoreForm.reset();
        });
    }

    /* === SNØEFFEKTER === */
    const snowContainer = document.createElement("div");
    snowContainer.classList.add("snow-container");
    document.body.appendChild(snowContainer);

    const snowCount = 60; // antall snøfnugg
    for (let i = 0; i < snowCount; i++) {
        const snowflake = document.createElement("span");
        snowflake.classList.add("snowflake");

        // Tilfeldig størrelse, plassering og hastighet
        const size = Math.random() * 8 + 4; // mellom 4 og 12px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${5 + Math.random() * 10}s`;
        snowflake.style.animationDelay = `${Math.random() * 10}s`;

        snowContainer.appendChild(snowflake);
    }
});
