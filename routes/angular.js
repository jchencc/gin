var express = require('express'),
    router = express.Router();

router.get('/', function(request, response) {
    response.render('angular/index');
});

router.param('partial', function(request, response, next, partial) {
    request.partial = partial;
    next();
});

router.get('/:partial', function(request, response, next) {
    response.render('angular/' + request.partial);
});

module.exports = router;