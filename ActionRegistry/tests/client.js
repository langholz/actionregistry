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

client.get('/getActionsByEntity', function (err, req, res, obj) {
    assert.ifError(err);
    debug('Server returned: %j', obj);
});
