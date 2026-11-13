
const year = document.querySelector("#year");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const themeToggle = document.querySelector(".theme-toggle");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.dataset.theme !== "light";
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
    themeToggle.textContent = isLight ? "☾" : "☼";
});

themeToggle.textContent = document.documentElement.dataset.theme === "light" ? "☾" : "☼";
year.textContent = new Date().getFullYear();