var koa = require('koa'),
    serve = require('koa-static'),
    jade = require('koa-jade'),
    router = require('koa-router')();

var app = koa();

// view engine setup
app.use(jade.middleware({
  viewPath: __dirname + '/views',
}));

// static resource router
app.use(serve('public'));
app.use(serve('bower_components'));

// TODO: custom routers
router.get('/', function* (next) {
  if (this.path !== '/') return yield next;
  yield this.render('index');
});

app.use(router.routes());


// TODO: custom 404 page

app.listen(3000);
