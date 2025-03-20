// selection des éléments html
let oBody = document.querySelector("body");
let oMenu = document.querySelector("#boutonMenu");
let oLiens = document.querySelectorAll(".nav-principale a");

// event listeners
oMenu.addEventListener("click", menuAppuyé);
document.addEventListener("scroll", gererAffichage);

// boucle pour laisser l'utilisateur scroll encore après avoir cliqué un lien
for (let unLien of oLiens) {
  unLien.addEventListener("click", lienAppuyé);
}

// fonctions
// pour que l'utilisateur ne peut pas scroll lorsqu'il ouvre le menu
function menuAppuyé(event) {
  if (oMenu.checked == true) {
    oBody.style.overflow = "hidden";
  } else {
    oBody.style.overflow = "scroll";
  }
}

// lorsque l'utilisateur a cliqué un lien, il peut scroll encore
function lienAppuyé() {
  oMenu.checked = false;

  oBody.style.overflow = "scroll";
}

// plus l'utilisateur scroll, plus il peut voir les sections
function gererAffichage() {
  let hauteurViewport = window.innerHeight;
  let lesSections = document.querySelectorAll(".section-personnage");

  for (let uneSection of lesSections) {
    let basSection = uneSection.getBoundingClientRect().top;

    if (basSection < hauteurViewport) {
      uneSection.classList.add("active");
    } else {
      uneSection.classList.remove("active");
    }
  }
}
