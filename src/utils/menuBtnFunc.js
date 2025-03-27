export default function menuClick(){
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-links");

// Toggle the menu visibility on button click
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
}


