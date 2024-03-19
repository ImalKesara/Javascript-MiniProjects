"use strict";
const Screen = document.querySelector(".screen");
const clearBtn = document.querySelector(".clearBtn");
const inputBtns = document.querySelectorAll("button");
// let numbers = document.querySelectorAll(".number");
// let op = document.querySelectorAll(".operator");
// let firstNumber = "";
// let secondNumber = "";
// let result;
// let operator = "";
// let add = document.querySelector(".add");
// let mul = document.querySelector(".mul");
// let division = document.querySelector(".division");
// let ac = document.querySelector(".AC");
// let substra = document.querySelector(".substras");
// let equal = document.querySelector(".equal");

// let liveScreen = "";

// numbers.forEach(function (element) {
//   element.addEventListener("click", function () {
//     liveScreen = parseInt(this.getAttribute("value"));
//     firstNumber = liveScreen;
//     Screen.textContent = firstNumber;
//   });
// });

// op.forEach(function (operator) {
//   operator.addEventListener("click", function () {
//     liveScreen = this.getAttribute("value");
//     operator = liveScreen;
//     Screen.textContent = operator;
//   });
// });
function sendNumberValue(number) {
  const displayValue = Screen.textContent;
  Screen.textContent = displayValue === "0" ? number : displayValue + number;
}

function addDecimal() {
  if (!Screen.textContent.includes(".")) {
    Screen.textContent = `${Screen.textContent}.`;
  }
}

inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length == 0) {
    inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", () => addDecimal);
  }
});

function clearAll() {
  Screen.textContent = "0";
}

clearBtn.addEventListener("click", clearAll);
