"use strict";

const newQuotesBtn = document.querySelector(".newQuote-button");
const localQuote = document.getElementById("quote");
const localAuthor = document.getElementById("author");

// let apiQoutes = [];

const newQuotes = function () {
  // pick random quotes from apiQutes array
  let quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
  //   check if author is null
  if (!quote.author) {
    localAuthor.textContent = "Unknown";
  } else {
    localAuthor.textContent = quote.author;
  }

  if (quote.text.length < 50) {
    localQuote.classList.add("long-quote");
  } else {
    localQuote.classList.remove("long-quote");
  }

  localQuote.textContent = quote.text;
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
  newQuotes();
});
