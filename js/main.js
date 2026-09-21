import { pays } from "./data.js";
import { creerCarte } from "./ui.js";

const grille = document.querySelector(".grille");
const filtre = document.getElementById("filtre-region");

function afficherListe(liste) {
  const fragment = document.createDocumentFragment();
  liste.forEach((p) => fragment.append(creerCarte(p)));
  grille.replaceChildren(fragment);
}

afficherListe(pays);

filtre.addEventListener("change", () => {
  const valeur = filtre.value;
  const filtres =
    valeur === "toutes" ? pays : pays.filter((p) => p.region === valeur);
  afficherListe(filtres);
});

grille.addEventListener("click", (e) => {
  const carte = e.target.closest("article");
  if (!carte) return;

  const paysClique = pays.find((p) => p.code === carte.dataset.code);
  console.log(paysClique);
});
