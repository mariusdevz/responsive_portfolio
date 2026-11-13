
const year = document.querySelector("#year");
const mneuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector('.nav-menu')

mneuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open')
})

year.textContent = new Date().getFullYear();