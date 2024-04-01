"use strict";
const sectionButtons = document.querySelectorAll("[data-x]");

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
    makeSelection(selectionName);
  });
});

function makeSelection(selection) {
  console.log(selection);
}
