"use strict";

const newQuotesBtn = document.querySelector(".newQuote-button");
const localQuote = document.getElementById("quote");
const localAuthor = document.getElementById("author");
const loader = document.getElementById("loader");
const twitterBtn = document.querySelector(".twitter-button");
const quoteContainer = document.querySelector(".Quote");

console.log(quoteContainer);
console.log(loader);

const loading = function () {
  loader.hidden = false;
  quoteContainer.hidden = true;
};
const complete = function () {
  quoteContainer.hidden = false;
  loader.hidden = true;
};

// let apiQoutes = [];

const newQuotes = function () {
  loading();
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
  complete();
};

const twitterQuote = function () {
  const twitterUrl = `https://twitter.com/intent/tweet?text= ${localQuote.textContent} - ${localAuthor.textContent}`;
  window.open(twitterUrl, "_blank");
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

// twitterBtn.addEventListener("click", function () {
//   twitterQuote();
// });
// javascript method js called
twitterBtn.addEventListener("click", twitterQuote);

//user called
newQuotesBtn.addEventListener("click", newQuotes);
