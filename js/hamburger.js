const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar__menus__item");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".navbar__menus__item__text a").forEach(n => n.
addEventListener("click", () =>  {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active")
}));

