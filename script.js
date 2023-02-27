const menuBars = document.getElementById("menu_bars");
const overlay = document.getElementById("menu_overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");

function toggleMenuBar() {
  // toogle menubar open or closed
  menuBars.classList.toggle("change"); // change class will be taking from css file
}

menuBars.addEventListener("click", toggleMenuBar);
