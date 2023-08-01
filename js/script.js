let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".dropdown_menu");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}