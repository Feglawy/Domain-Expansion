document.addEventListener("DOMContentLoaded", function () {
  var element = document.documentElement; // Get the root element (usually <html>)

  // Attempt to enter fullscreen mode
  function enterFullscreen() {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }

  // Listen for user interaction to trigger fullscreen
  document.addEventListener("click", function () {
    enterFullscreen();
  });
});
var currentAudio = null;

function PlayAudio(audioId) {
  var audio = document.getElementById(audioId);

  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  audio.play();
  currentAudio = audio;
}
