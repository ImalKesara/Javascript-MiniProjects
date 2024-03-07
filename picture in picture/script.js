const videoElement = document.getElementById("video");
const btn = document.getElementById("button");

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("Whoops something :", error);
  }
}

btn.addEventListener("click", async () => {
  btn.disabled = true;
  await videoElement.requestPictureInPicture();
  btn.disabled = false;
});

selectMediaStream();
