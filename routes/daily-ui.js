var express = require('express'),
    dao = require(process.cwd() + '/lib/dao'),
    bodyParser = require('body-parser');

var router = express.Router(),
    util = require('util');

router.get('/', function(req, res) {
    res.render('daily-ui/index');
});

router.get('/list', function(req, res) {
    var result = dao.list('daily-ui');

    res.send(result);
});

router.post('/add', bodyParser.json(), function(req, res) {
    var v = req.body,
        data = dao.list('daily-ui'),
        isExisted = false;

    data.forEach(function(o) {
        if (o.link == v.link) {
            isExisted = true;
        }
    });

    if (isExisted) {
        res.send('esisted');
    } else {
        v.date = new Date().toISOString();
        dao.add('daily-ui', v);
        res.send('OK');
    }
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
