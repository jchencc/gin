var urls = [
  'http://localhost:3000/daily-ui/20141211-snow/20141211-snow.css',
  'http://localhost:3000/daily-ui/20141211-snow/20141211-snow.js'
];

for (url of urls) {
  console.log(url);
  console.log(/.*\.[(css)|(js)]$/i.test(url));
}