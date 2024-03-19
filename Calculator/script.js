"use strict";
const Screen = document.querySelector(".screen");
const clearBtn = document.querySelector(".clearBtn");
const inputBtns = document.querySelectorAll("button");
let firstValue = 0;
let operatorValue = "";
let nextValue = false;

function sendNumberValue(number) {
  if (nextValue) {
    Screen.textContent = number;
    nextValue = false;
  } else {
    const displayValue = Screen.textContent;
    Screen.textContent = displayValue === "0" ? number : displayValue + number;
  }
}

function addDecimal() {
  if (nextValue) return;
  if (!Screen.textContent.includes(".")) {
    Screen.textContent = `${Screen.textContent}.`;
  }
}

function useOperator(operator) {
  const currentValue = Number(Screen.textContent);
  if (!firstValue) {
    firstValue = currentValue;
  } else {
    console.log(currentValue);
  }
  nextValue = true;
  operatorValue = operator;
  console.log(firstValue);
  console.log(operatorValue);
}

inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length == 0) {
    inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => addDecimal);
  }
});

function clearAll() {
  Screen.textContent = "0";
  firstValue = 0;
  operatorValue = "";
  nextValue = false;
}

clearBtn.addEventListener("click", clearAll);
