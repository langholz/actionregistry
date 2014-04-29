var restify = require('restify');
var debug = require('debug')('server');
var dict = require('dict');
var deepCopy = require('deep-copy');
var defaultActionsByEntity = require('./actionsByEntity.js');
var defaultActionDetails = require('./actionDetails.js');
var actionsByEntityRuntime = null;
var actionDetailsRuntime = null;
var port = process.env.port || 1337;
var server = restify.createServer({
    name: 'actionregistry',
    version: '0.0.1'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get(/\/admin\/?.*/, restify.serveStatic({
    directory: './public',
    default: 'index.html'
}));

function reset() {
    actionsByEntityRuntime = dict(deepCopy(defaultActionsByEntity));
    actionDetailsRuntime = dict(deepCopy(defaultActionDetails));
}

function isValidActionsByEntityQuery(parameters) {
    var valid = typeof parameters !== 'undefined'
        && parameters.hasOwnProperty('url')
        && typeof parameters['url'] === 'string';
    return valid;
}

server.get('/getActionsByEntity', function (req, res, next) {
    if (isValidActionsByEntityQuery(req.params)) {
        var url = req.params['url'].trim().toLowerCase();
        if (actionsByEntityRuntime.has(url)) {
            res.send(actionsByEntityRuntime.get(url));
        } else {
            res.send(404);
        }
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
        var actionType = req.params['actionType'].trim().toLowerCase();
        if (actionDetailsRuntime.has(actionType)) {
            res.send(actionDetailsRuntime.get(actionType));
        } else {
            res.send(404);
        }
    } else {
        res.send(400);
    }

    return next();
});


server.post('/reset', function (req, res, next) {
    reset();
    res.send(200);
    return next();
});

server.listen(port, function () {
    debug('%s listening at %s', server.name, server.url);
    reset();
});
