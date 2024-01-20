"use strict";

const newQuotesBtn = document.querySelector(".newQuote-button");
const localQuote = document.getElementById("quote");
const localAuthor = document.getElementById("author");
const twitterBtn = document.querySelector(".twitter-button");

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
//javascript method js called
twitterBtn.addEventListener("click", twitterQuote);

//user called
newQuotesBtn.addEventListener("click", function () {
  newQuotes();
});
