var request = require('superagent');
var cheerio = require('cheerio');
var http = require('http');

exports.getType = function(url, callback, res, next) {
    request
        .get(url)
        .end(function (res) {
            $ = cheerio.load(res.text);
            var type = $('head').find("meta[property='og:type']").attr('content');

            callback(type);
        });
}
