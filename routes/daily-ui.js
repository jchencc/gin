var express = require('express'),
    levelup = require('level'),
    sublevel = require('level-sublevel'),
    bodyParser = require('body-parser');

var router = express.Router(),
    db = sublevel(levelup('./db')),
    sub = db.sublevel('daily-ui'),
    util = require('util');

router.get('/', function(req, res) {
    res.render('daily-ui/index');
});

router.get('/list', function(req, res) {
    var result = [];

    sub.createReadStream().
        on('data', function(data) {
            result.push(data.value);
        }).
        on('end', function() {
            res.send(result);
        });
});

router.post('/add', bodyParser.json(), function(req, res) {
    var v = req.body;
    sub.get(v.link, function(err, data) {
        if (err) {
            v.date = new Date().toISOString();
            sub.put(v.link, v, {valueEncoding: 'json'}, function(err) {
                if (err) {
                    res.send('error on save');
                } else {
                    res.send('OK');
                }
            });
        } else {
            res.send('existed');
        }
    });
});

router.post('/delete', bodyParser.json(), function(req, res) {
    console.log(req.body);
    res.send('xxx');
});

router.use('/:name', function(req, res, next) {
    console.log(req.originalUrl);
    res.render('daily-ui/' + req.params.name); 
    // res.send('what?');
});

module.exports = router;
