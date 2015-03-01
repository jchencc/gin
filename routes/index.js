var express = require('express'),
    router = express.Router(),
    data = require('./data.json');

router.use('/angular', require('./angular'));
router.use('/design', require('./design'));
router.use('/daily-ui', require('./daily-ui'));

router.get('/', function(request, response) {
    response.render('index', data.index);
});

module.exports = router;
