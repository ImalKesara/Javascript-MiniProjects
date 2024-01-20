"use strict";

let apiQoutes = [];

// get information from api
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQoutes = await response.json();
    console.log(apiQoutes);
  } catch (error) {
    // Catch error here
    alert(error);
  }
}

getQuotes();
