var overlay = document.getElementById("video-overlay"),
  video = document.getElementById("video"),
  videoPlaying = false;

function hideOverlay() {
  overlay.style.display = "none";
  videoPlaying = true;
  video.setAttribute("controls", "");
  video.play();
}

function showOverlay() {
  // this check is to differentiate seek and actual pause
  if (video.readyState === 4) {
    overlay.style.display = "flex";
    video.removeAttribute("controls");
    videoPlaying = true;
  }
}

video.addEventListener("pause", showOverlay);
overlay.addEventListener("click", hideOverlay);
