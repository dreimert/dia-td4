const fs = require('fs');

// on charge le fichier
const csv = fs.readFileSync('./client_data.csv', 'utf8');

// Je suis sympa avec le fichier, il n'y a pas de blague dans le format...
// Ce n'est pas toujours le cas.
// Du coup, ici, j'utilise directement fs et je fais une exactiob basique à la main
// En production, il faudra passer par un librairie
// Mais on va faire simple.

// Je divise le fichier en lignes en splitant sur '\n'
let lignes = csv.split("\n");

// Je divise chaque lignes en splitant sur ';'
// je nettoie les espace en trop avec trim
let datas = lignes.map((ligne) => ligne.split(";").map((data) => data.trim()));

// je tranforme les tableaux en objects
let objects = datas.map((data) => return {
  nom: data[0],
  prenom: data[1],
  sexe: data[2],
  birthday: data[3],
  lieu: data[4]
})

console.log("datas", datas);
