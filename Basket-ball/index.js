let homeScoreEl = document.getElementById("home-score");
let guessScoreEl = document.getElementById("guest-score");

function incrementHomeScore(value) {
  homeScoreEl.textContent = parseInt(homeScoreEl.textContent) + value;
}

function incrementGuessScore(value) {
  guessScoreEl.textContent = parseInt(guessScoreEl.textContent) + value;
}
