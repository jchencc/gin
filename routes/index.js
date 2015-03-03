var express = require('express'),
    router = express.Router();

router.use('/angular', require('./angular'));
router.use('/design', require('./design'));
router.use('/daily-ui', require('./daily-ui'));

router.get('/', function(request, response) {
    response.render('index'); 
});

module.exports = router;
