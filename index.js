const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const menu = document.querySelector(".menu");

function openMenu() {
  menu.classList.add("menu-opened");
}
function closeMenu() {
  menu.classList.remove("menu-opened");
}

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
