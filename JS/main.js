const menuButton = document.querySelector(".js-menuHamburger");
const nav = document.querySelector(".js-nav");

menuButton.onclick = function () {
  if (nav.classList.contains("open")) {
    nav.classList.remove("open")
  } else {
    nav.classList.add("open")
  }
}