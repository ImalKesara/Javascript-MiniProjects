const imageContainer = document.getElementById("image-container");
imageContainer.innerHTML = "";
const loader = document.getElementById("loader");
let photosArray = [];

const count = 10;
const apiKey = "UO0d1dnw5qxi__g3AKbnjvBmnaWPiGzzNPvfgWSGTbw";
// const apiKey = "API_KEY";

const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count} `;

const setAttributes = function (element, attributes) {
  for (const key in attributes) {
    // console.log(key);
    console.log(attributes);
    console.log(attributes[key]);
    element.setAttribute(key, attributes[key]);
    // item.setAttribute("href", photo.links.html);c
  }
};

const displayPhotos = function () {
  photosArray.forEach((photo) => {
    const item = document.createElement("a");
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blank");

    //dry code

    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    // console.log(photo);

    const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    //put <img> inside <a>, then put both inside imageContianer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
};

//get photos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    console.log("error", error);
  }
}

getPhotos();
