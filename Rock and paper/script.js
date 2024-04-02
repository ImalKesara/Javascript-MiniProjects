"use strict";
const sectionButtons = document.querySelectorAll("[data-x]");
const finalColmun = document.querySelector("[data-final-column]");

const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "paper",
  },
  {
    name: "paper",
    emoji: "🤚",
    beats: "scissor",
  },
  {
    name: "scissor",
    emoji: "✌️",
    beats: "rock",
  },
];

sectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.x; //[data-x]
    const selection = SELECTIONS.find((selec) => selec.name === selectionName);
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  const computerWinner = isWinner(computerSelection, selection);
  addselectionResult(computerSelection, computerWinner);
  addselectionResult(selection, yourWinner);
}

function addselectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColmun.after(div);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
  const randomNumber = Math.floor(Math.random() * SELECTIONS.length);
  console.log(randomNumber);
  return SELECTIONS[randomNumber];
}
