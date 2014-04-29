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
  "/getActionsByEntity?fb_url=/pages/Seattle-Washington/110843418940484": {
	  BookFlight: {
		  Kayak: {
        target: "http://www.kayak.com/flights/%origin%-%daddr%/%depart/%return%"
      },
		  Expedia: {target: ""}
	  },
	  GetDirections: {
		  GoogleMaps: {
        target: "https://maps.google.com/maps?daddr=%daddr%&saddr=%saddr%"
      },
		  BingMaps: {target: ""}
	  },
    BookHotel: {
      Expedia: {
        target: "http://www.expedia.com/Seattle-Hotels-The-Westin-Seattle.h16673.Hotel-Information"
      }
    }
  }
};

for (var uri in cases) {
  var expected = cases[uri];
  client.get(uri, function(err, req, res, obj) {
    assert.ifError(err);
    debug('Server returned: %j', obj);
    assert.deepEqual(JSON.parse(res.body), expected);
  });
}
