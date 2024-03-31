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