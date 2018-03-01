let Db = require('tingodb')().Db;
let assert = require('assert');

let db = new Db('./db', {});

// Fetch a collection to insert document into
let collection = db.collection("users");

const formate = function(p) {
  return `${p.nom};${p.prenom};${p.sexe};${p.birthday};${p.lieu}`;
};

// Cherche tous les utilisateurs
collection.find({}).toArray(function(err, result) {
  if (err) throw err;

  // On prend le tableau
  // on format chaque ligne
  // on joins les lignes avec des sauts de lignes
  let csv = result.map(formate).join('\n');
  // on affiche
  console.log(csv);
  db.close();
});
