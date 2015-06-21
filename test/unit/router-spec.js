var request = require('supertest'),
    chai = require('chai');

var expect = chai.expect;

describe('Router', function() {
  var browser;

  beforeEach(function() {
    browser = request('http://localhost:3000');
  });

  it('should 200', function() {
    expect(/\/daily-ui\/.+\.css$/i.test('/daily-ui/index/index.css'))
      .to.be.true;
    expect(/\/daily-ui\/.+\.js$/i.test('/daily-ui/index/index.js'))
      .to.be.true;
    expect(/\/daily-ui\/.+\.(css|js)$/i.test('/daily-ui/index/index.js'))
      .to.be.true;
    expect(/\/daily-ui\/.+\.(css|js)$/i.test('/daily-ui/index/index.css'))
      .to.be.true;
  });
});