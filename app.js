var app = require('koa')(),
    serve = require('koa-static'),
    Router = require('koa-router'),
    views = require('koa-views'),
    fs = require('fs');

app.use(views('daily-ui', {default: 'jade'}));
app.use(serve('public'));
app.use(serve('bower_components'));

var router = Router();

/**
 * /daily-ui => index
 * /daily-ui/xxx => xxx.jade
 * /daily-ui/xxx/xxx.css => static resource
 */
router.get('/daily-ui', function* (next) {
  // console.log(this.path);
  yield this.render('index/index');
}).get('/daily-ui/:name', function* (next) {
  var name = this.params.name;
  console.log('NAME: ', this.path, this.params);
  yield this.render(name + '/' + name);
}).get(/\/daily-ui\/.+\.(css|js)$/i, function* (next) {
  // TODO: how to match resource ends with .css or .js
  console.log('STATIC: ', this.path);
  this.body = fs.createReadStream(__dirname + this.path);
});

app.use(router.routes());

app.use(function* (next) {
  if (this.path !== '/') return yield next;
  this.redirect('/daily-ui');
});

app.listen(process.argv[2]);