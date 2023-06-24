
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const backgroundOverlay = document.getElementById("background-overlay");
const lightIcon = document.querySelector(".light-icon");
const darkIcon = document.querySelector(".dark-icon");

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
