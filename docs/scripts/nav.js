const hamburgerMenu = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__list");
const navMenu = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
    navMenu.classList.toggle("active");
});