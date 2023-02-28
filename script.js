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
  // toggle menu active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    //Animate in
    overlay.classList.remove("slide-close");
    overlay.classList.add("slide-open");
    // Animate in navitem
    nav1.classList.remove("slide-out-anm-1");
    nav1.classList.add("slide-in-anm-1");
    nav2.classList.remove("slide-out-anm-2");
    nav2.classList.add("slide-in-anm-2");
    nav3.classList.remove("slide-out-anm-3");
    nav3.classList.add("slide-in-anm-3");
    nav4.classList.remove("slide-out-anm-4");
    nav4.classList.add("slide-in-anm-4");
    nav5.classList.remove("slide-out-anm-5");
    nav5.classList.add("slide-in-anm-5");
  } else {
    // Animate out
    overlay.classList.remove("slide-open");
    overlay.classList.add("slide-close");
    // Animate out navitem
    nav1.classList.remove("slide-in-anm-1");
    nav1.classList.add("slide-out-anm-1");
    nav2.classList.remove("slide-in-anm-2");
    nav2.classList.add("slide-out-anm-2");
    nav3.classList.remove("slide-in-anm-3");
    nav3.classList.add("slide-out-anm-3");
    nav4.classList.remove("slide-in-anm-4");
    nav4.classList.add("slide-out-anm-4");
    nav5.classList.remove("slide-in-anm-5");
    nav5.classList.add("slide-out-anm-5");
  }
}

menuBars.addEventListener("click", toggleMenuBar);
