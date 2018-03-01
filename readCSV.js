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
let objects = datas.map((data) => {
  return {
    nom: data[0],
    prenom: data[1],
    sexe: data[2],
    birthday: data[3],
    lieu: data[4]
  }
})

// Mais il y a un problème avec les dates !

objects.forEach((object, index) => {
  //console.log("object, index", object, index);
  // on vérifie que birthday existe
  if (object.birthday) {
    // J'utilise les regexp avec des groupes de capture pour analyser la date
    const analyse = object.birthday.match(/(\w{1,2})\/(\w{1,2})\/(\w{4})/);

    // On vérifie que l'analyse donne un résultat
    if (analyse) {
      //console.log(analyse);
      // je reformate la date pourinverser mois et jour
      object.birthday = `${analyse[2]}/${analyse[1]}/${analyse[3]}`
    } else { // sinon on en informe le développeur
      console.error("À la ligne ", index, "birthday mal formé : ", object);
      // Vous corriger les données à la main jusqu'à ne plus avoir le message
    }
  } else {
    console.error("À la ligne ", index, "pas de birthday : ", object);
    // Dans ce cas, supprimez la ligne, mettez une date arbitraire, filter pour ne pas avoir de ligne vide...
  }
})

//console.log("objects", objects);

// Quand les données sont 'propres', importer dans la base

// Un autre bonne idée est d'avoir un index unique sur vos utilisateurs dans votre base de donnée.
// Dans ce cas, l'opération suivante renvoie des exceptions car il y a des doublons.
// Je vous laisse le soin de faire les tests pour éliminer les doublons.
// Soit en créant un index unique soit en intérrogeant la base pour chaque utilisateur.

// let Db = require('tingodb')().Db;
// let assert = require('assert');
// let db = new Db('./db', {});
// let collection = db.collection("users");
//
// collection.insert(
//   objects.filter((object) => object.birthday),
//   {w:1},
//   function(err, result) {
//     assert.equal(null, err);
//   }
// )
