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
  
  console.log('NAME: ', this.path, this.params);

  var name = this.params.name,
      tokens = name.split('.');
  
  if (/\./.test(name)) {
    this.type = tokens[1] === 'js' ? 'text/javascript' : 'text/css';
    this.body = fs.createReadStream(
      __dirname + '/daily-ui/' + tokens[0] + '/' + tokens[0] + '.' + tokens[1]
    );
  } else {
    yield this.render(name + '/' + name, {title: name});
  }

}).get(/\/daily-ui\/.+\.(css|js|jpg|png)$/i, function* (next) {
  console.log('STATIC: ', this.path);

  // MIME
  if (/js$/i.test(this.path)) {
    this.type = 'text/javascript';
  } else {
    this.type = this.accepts('text/css', 'image/*');
  }
  
  this.body = fs.createReadStream(__dirname + this.path);
});

app.use(router.routes());

app.use(function* (next) {
  if (this.path !== '/') return yield next;
  this.redirect('/daily-ui');
});

app.listen(process.argv[2]);
