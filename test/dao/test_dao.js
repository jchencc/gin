var dao = require('../../lib/dao');

var list = dao.list('test');

console.log(list);

var jarvis = list[0];

jarvis.name = 'jarvis \'\"updated';

dao.update('test', jarvis);

console.log(dao.list('test'));

//dao.remove('test', jarvis);

console.log(dao.list('test'));

