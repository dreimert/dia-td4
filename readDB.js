let Db = require('tingodb')().Db;
let assert = require('assert');

let db = new Db('./db', {});

// Fetch a collection to insert document into
let collection = db.collection("users");

// Cherche tous les utilisateurs
collection.find({}).limit(5).toArray(function(err, result) {
  if (err) throw err;
  console.log(result);
  db.close();
});
