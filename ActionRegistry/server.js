var restify = require('restify');
var debug = require('debug')('server');
var port = process.env.port || 1337;
var server = restify.createServer({
    name: 'actionregistry',
    version: '0.0.1'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

function isValidActionsByEntityQuery(parameters) {
    var valid = typeof parameters !== 'undefined'
        && parameters.hasOwnProperty('fb_url')
        && typeof parameters['fb_url'] === 'string';
    return valid;
}

server.get('/getActionsByEntity', function (req, res, next) {
    if (isValidActionsByEntityQuery(req.params)) {
        res.send(req.params);
    } else {
        res.send(400);
    }

    return next();
});

function isValidActionDetailsQuery(parameters) {
    var valid = typeof parameters !== 'undefined'
        && parameters.hasOwnProperty('actionType')
        && typeof parameters['actionType'] === 'string';
    return valid;
}

server.get('/getActionDetails', function (req, res, next) {
    if (isValidActionDetailsQuery(req.params)) {
        res.send(req.params);
    } else {
        res.send(400);
    }

    return next();
});

server.listen(port, function () {
    debug('%s listening at %s', server.name, server.url);
});
