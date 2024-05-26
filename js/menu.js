const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", openMenu);
}
if (close) {
  close.addEventListener("click", closeMenu);
}
function openMenu() {
  navbar.classList.add("active");
}
function closeMenu() {
  navbar.classList.remove("active");
}
