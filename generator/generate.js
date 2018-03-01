const noms = require("./nom.json");
const prenoms = require("./prenom.json");
const villes = require("./ville.json");

// max exclu
const getInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const getInArray = function(liste) {
  return liste[getInt(0, liste.length)];
};

const getPersonne = function() {
  const nom = getInArray(noms);
  const prenom = getInArray(prenoms);

  return {
    nom: nom.name,
    prenom: prenom.prenom,
    sexe: prenom.sexe,
    //birthday: `${getInt(1, 29)}/${getInt(1, 13)}/${getInt(1900, 2000)}`,
    birthday: `${getInt(1, 13)}/${getInt(1, 29)}/${getInt(1900, 2000)}`,
    lieu: getInArray(villes)
  };
};

const insertInDB = function(nb = 10) {
  let Db = require('tingodb')().Db;
  let assert = require('assert');
  let db = new Db('./db', {});


  let data = Array.from({length: nb}, getPersonne);

  // Fetch a collection to insert document into
  let collection = db.collection("users");

  collection.insert(data, {w:1}, function(err, result) {
    assert.equal(null, err);
    console.log("Insertion terminée");
  });

}

const insertListInDB = function(liste) {
  let Db = require('tingodb')().Db;
  let assert = require('assert');
  let db = new Db('./db', {});

  // Fetch a collection to insert document into
  let collection = db.collection("users");

  collection.insert(liste, {w:1}, function(err, result) {
    assert.equal(null, err);
    console.log("Insertion terminée");
  });

}

const generate = function(nb = 10) {
  for (let i = 0; i < nb; i++) {
    const p = getPersonne();
    console.log(p.nom, ";", p.prenom, ";", p.sexe, ";", p.birthday, ";", p.lieu);
  }
};

//generate(200);
//insertInDB(500)
insertListInDB([
  {
    nom: "Meilleur",
    prenom: "Vivien",
    sexe: "m",
    birthday: "28/6/1914",
    lieu: "Albi"
  },{
    nom: "Frappier",
    prenom: "Lilian",
    sexe: "m",
    birthday: "3/10/1921",
    lieu: "Castres"
  },{
    nom: "Dunn",
    prenom: "Fiore",
    sexe: "f",
    birthday: "14/2/1914",
    lieu: "Lille"
  },{
    nom: "Marleau",
    prenom: "Paul",
    sexe: "m",
    birthday: "19/11/1927",
    lieu: "Boulogne-Billancourt"
  },{
    nom: "Simoneau",
    prenom: "Titus",
    sexe: "m",
    birthday: "15/7/1950",
    lieu: "Le Mans"
  },{
    nom: "Deschênes",
    prenom: "Claudine",
    sexe: "f",
    birthday: "22/12/1962",
    lieu: "Versailles"
  }
])
