
var darkModeToggle = document.getElementById("dark-mode-toggle");
var body = document.body;
var backgroundOverlay = document.getElementById("background-overlay");
var lightIcon = document.querySelector(".light-icon");
var darkIcon = document.querySelector(".dark-icon");

darkModeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  lightIcon.style.display = body.classList.contains("dark-mode")
    ? "none"
    : "block";
  darkIcon.style.display = body.classList.contains("dark-mode")
    ? "block"
    : "none";
  if (body.classList.contains("dark-mode")) {
    backgroundOverlay.style.filter = "brightness(33%)";
  } else {
    backgroundOverlay.style.filter = "brightness(100%)";
  }
});