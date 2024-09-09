// Récupération du bouton
const btn = document.querySelector(".btn");

// Ecoute de l'événement "click" sur le bouton
btn.addEventListener("click", (e) => {
  // Création de deux constantes x et y
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  // Création de l'élément HTML span
  const ripples = document.createElement("span");
  ripples.classList.add("ripple");
  // Mise en place du style de la span
  ripples.style.left = x + "px";
  ripples.style.top = y + "px";
  // Ajout de la span dans le DOM
  btn.appendChild(ripples);

  // La méthode globale setTimeout() permet de définir un minuteur qui exécute une fonction ou un code donné après la fin du délai indiqué.
  setTimeout(() => ripples.remove(), 1000);
});
