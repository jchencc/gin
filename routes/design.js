var express = require('express'),
    router = express.Router();

router.get('/', function(request, response) {
    response.render('design/index');
});

router.get('/color', function(request, response) {
    response.render('design/color');
});

module.exports = router;