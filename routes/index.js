var express = require('express'),
    router = express.Router(),
    dao = require(process.cwd() + '/lib/dao');

router.use('/angular', require('./angular'));
router.use('/design', require('./design'));
router.use('/daily-ui', require('./daily-ui'));

router.get('/', function(request, response) {
    var data = dao.list('daily-ui');
    console.log('index', data);
    response.render('index', data); 
});

module.exports = router;
