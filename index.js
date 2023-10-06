const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const menu = document.querySelector(".menu");

const openMenu = () => menu.classList.add("menu-opened");

const closeMenu = ({ target }) =>
  (target.matches("a") || target.matches("img")) &&
  menu.classList.remove("menu-opened");

openMenuBtn.addEventListener("click", openMenu);
menu.addEventListener("click", closeMenu);
