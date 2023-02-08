"use strict";

// Récupérer le prénom du visiteur
let celcius = prompt("Entrez la température en °C :");
// Converti celcius en nombre
celcius = Number(celcius);
// Si celcius n'est pas un nombre => on affiche une erreur
if(isNaN(celcius)) {
    alert('Entrez un nombre !');
} else {
    let fahrenheit = celcius * 9 / 5 + 32;
    alert(`${celcius}°C = ${fahrenheit}°F`);
}



// alert("Bonjour le monde !");
let nom = "Steve";
// Affiche la variable dans la console
console.log("Salut"," le ",nom);
// récupère le premier <h1> de la page
const titrePrincipal = document.querySelector("h1");
// titre en jaune
titrePrincipal.style.color = "yellow";

/**
 * Ajoute du style à tous les `<li>` de la page
 */
function styleLi () {
    // Récupère tous les <li> dans un tableau
    const elementsDeListe = document.querySelectorAll("li");
    console.log(elementsDeListe);
    // Mets en rouge le 2e élément trouvé
    elementsDeListe[1].style.color = "red";
    // Boucle qui parcourt et mets un fond jaune à tous les éléments
    for (let i = 0; i < elementsDeListe.length; i++) {
        elementsDeListe[i].style.backgroundColor = "yellow";
    }
    // Même chose avec for..of pour mettre en le texte en gras
    for (let element of elementsDeListe) {
        element.style.fontWeight = "bold";
    }
}

// Ecouter l'événement click sur le <h1>
titrePrincipal.addEventListener("click", styleLi);
// récupère le formulaire
const form = document.querySelector("form");
// récupère la <ol> avec la classe commentaires
const olCommentaires = document.querySelector(".commentaires");
// récupère l'input #commentaire
const inpnutCommenaire = document.querySelector("#commentaire");
// Ecouter l'envoi du formulaire
form.addEventListener("submit", function ajouterCommentaire(event){
    event.preventDefault(); // Stoppe l'envoi du formulaire
    // Si commentaire vide, avertir utilisateur
    if (inpnutCommenaire.value === "") {
        alert("Commentaire vide !");
        return; // Stoppe l'événement
    }
    // ajoute le contenu du champ commentaire à la liste
    olCommentaires.innerHTML += "<li>" + inpnutCommenaire.value + "</li>";
    // Vide le champ commentaire
    inpnutCommenaire.value = "";
    // Redonne le focus au champ commentaire
    inpnutCommenaire.focus();
});

