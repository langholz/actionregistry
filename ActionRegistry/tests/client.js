var assert = require('assert');
var restify = require('restify');
var debug = require('debug')('client');
var port = process.env.port || 1337;
var host = process.argv[2] || 'localhost';
var url = 'http://' +  host + ':' + port;
console.log('url: ' + url);
var client = restify.createJsonClient({
    url: url,
    version: '~0.0.1'
});

var cases = {
  "/getActionsByEntity?fb_url=\"/pages/Seattle-Washington/110843418940484\"": {
    'foo': 'bar',
  }
};

for (var uri in cases) {
  var expected = cases[uri];
  client.get(uri, function(err, req, res, obj) {
    assert.ifError(err);
    debug('Server returned: %j', obj);
    assert.deepEqual(res.body, expected);
  });
}

client.get('/getActionDetails?actionType=type', function (err, req, res, obj) {
    assert.ifError(err);
    debug('Server returned: %j', obj);
});
