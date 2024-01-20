"use strict";

const newQuotesBtn = document.querySelector(".newQuote-button");
const localQuote = document.getElementById("quote");
const localAuthor = document.getElementById("author");
console.log(newQuotesBtn);

// let apiQoutes = [];

const newQuotes = function () {
  // pick random quotes from apiQutes array
  let quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
  console.log(localQuotes.length);
};

// get information from api
// async function getQuotes() {
//   const apiUrl = "https://type.fit/api/quotes";
//   try {
//     const response = await fetch(apiUrl);
//     apiQoutes = await response.json();
//     // console.log(apiQoutes[12 ]);
//     newQuotes();
//   } catch (error) {
//     // Catch error here
//     alert(error);
//   }
// }

// getQuotes();

newQuotesBtn.addEventListener("click", function () {
  //   console.log("hi");
  newQuotes();
});
