let Db = require('tingodb')().Db;
let assert = require('assert');

let db = new Db('./db', {});

// Fetch a collection to insert document into
let collection = db.collection("exemple");

// Insert a document
collection.insert(
  [{hello:'world_safe1'}, {hello:'world_safe2'}],
  {w:1},
  function(err, result) {
    assert.equal(null, err);

    // Fetch the document
    collection.findOne({hello:'world_safe2'}, function(err, item) {
      assert.equal(null, err);
      assert.equal('world_safe2', item.hello);
    })
});
