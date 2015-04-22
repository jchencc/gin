var app = require('koa')(),
    serve = require('koa-static'),
    Router = require('koa-router'),
    views = require('koa-views'),
    fs = require('fs');

app.use(views('daily-ui', {default: 'jade'}));

var router = Router({prefix: '/daily-ui'});

router.get('/', function* (next) {
  // console.log(this.path);
  yield this.render('index');
}).get('/:name', function* (next) {
  var name = this.params.name;
  // console.log(this.path, this.params);
  yield this.render(name + '/' + name);
}).get(/[(css)|(js)]$/i, function* (next) {
  // TODO: how to match resource ends with .css or .js
  console.log(this.path);
  this.body = fs.createReadStream(__dirname + this.path);
  // this.body = '';
})

app.use(router.routes());

app.use(function* (next) {
  if (this.path !== '/') return yield next;
  this.redirect('/daily-ui');
});

app.listen(process.argv[2]);