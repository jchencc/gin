var koa = require('koa'),
    serve = require('koa-static'),
    jade = require('koa-jade');

var app = koa();

// view engine setup
app.use(jade.middleware({
  viewPath: __dirname + '/views',
}));

// static resource router
app.use(serve('public'));
app.use(serve('bower_components'));

// TODO: custom routers
app.use(function* (next) {
  if (this.path !== '/') return yield next;
  yield this.render('index');
});

// TODO: custom 404 page

app.listen(3000);
