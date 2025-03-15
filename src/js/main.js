/* - - - - - - - - - - Main Nav Toggle - - - - - - - - - -  */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("toggle-animate");
});
