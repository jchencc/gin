var leveldb = require('level');

var db = leveldb('./db');

db.get('name', function(err, value) {
    console.log(value);
});
