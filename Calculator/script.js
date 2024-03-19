"use strict";
const divs = document.querySelectorAll(".btn");
divs.forEach(function (e) {
  e.addEventListener("click", (btn) => {
    console.log(btn.value);
  });
});
