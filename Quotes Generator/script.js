"use strict";

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
newQuotes();
