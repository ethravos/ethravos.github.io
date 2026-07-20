const hamburgerMenu = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__list");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
});