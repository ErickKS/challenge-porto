// NAV
const btnMobile = document.getElementById("btnMobile");
const nav = document.getElementById("navigation");
const navContent = document.getElementById("navigationContent");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  nav.classList.toggle("active");

  document.documentElement.onclick = function ({ target }) {
    console.log(target.offsetParent);
    if (target.offsetParent !== navContent) {
      if (window.screen.width < 769) {
        nav.classList.remove("active");
      }
    }
  };
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
