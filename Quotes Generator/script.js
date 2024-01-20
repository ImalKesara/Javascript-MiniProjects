"use strict";

let apiQoutes = [];

const newQuotes = function () {
  // pick random quotes from apiQutes array
  let quote = apiQoutes[Math.floor(Math.random() * apiQoutes.length)];
  console.log(quote);
};

// get information from api
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQoutes = await response.json();
    // console.log(apiQoutes[12 ]);
    newQuotes();
  } catch (error) {
    // Catch error here
    alert(error);
  }
}

getQuotes();
