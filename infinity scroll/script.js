const count = 10;
const apiKey = "UO0d1dnw5qxi__g3AKbnjvBmnaWPiGzzNPvfgWSGTbw";

const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count} `;

//get photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console("error", error);
  }
}

getPhotos();
