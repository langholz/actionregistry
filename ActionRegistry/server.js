﻿var restify = require('restify');
var debug = require('debug')('server');
var dict = require('dict');
var deepCopy = require('deep-copy');
var http = require('http');
var defaultActionsByEntity = require('./actionsByEntity.js');
var defaultActionDetails = require('./actionDetails.js');
var defaultActionsByType = require('./actionsByOGType.js');
var pageInfo = require('./pageInfo.js')

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
            var response = { "actions": [] };
            var actions = actionsByEntityRuntime.get(url);
            for (var i = 0; i < actions.length; i++) {
                var action = actions[i].toLowerCase();
                if (actionDetailsRuntime.has(action)) {
                    response.actions.push(actionDetailsRuntime.get(action));
                }
            }
            res.send(response);
        } else {
            res.send(404);
        }
    } else {
        res.send(400);
    }

    return next();
});

    // Reads the given page and tries to extract the open graph or schema.org type.
    // It then uses the type to return actions
server.get('/getActionsByNewEntity', function (req, res, next) {
    if (isValidActionsByEntityQuery(req.params)) {
        var url = req.params['url'].trim().toLowerCase();
        pageInfo.getType(url, getActionsByNewEntityResponse(res, next));
    } else {
        res.send(400);
        return next();
    }
});

function getActionsByNewEntityResponse(res, next) {
    return function (type) {
        var response = { "actions": defaultActionsByType[type.toLowerCase()] };
        res.send(response);
        return next();
    };
}

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

server.post('/action', function (req, res, next) {
    var url = req.body.entityUrl.toLowerCase();
    var actionType = req.body.action.toLowerCase();
    if (actionsByEntityRuntime.has(url)) {
        var entity = actionsByEntityRuntime.get(url);
        entity.push(actionType);
        res.send(200);
    } else {
        actionsByEntityRuntime.set(url, [actionType]);
        res.send(200);
    }

    return next();
});

server.post('/provider', function (req, res, next) {
    var actionType = req.body.action.toLowerCase();
    if (actionDetailsRuntime.has(actionType)) {
        var action = actionDetailsRuntime.get(actionType);
        action.providers.push(req.body.provider);
        res.send(200);
    } else {
        actionDetailsRuntime.set(
            actionType,
            {
                "friendlyName": req.body.friendlyName,
                "providers": [req.body.provider]
            });
        res.send(200);
    }

    return next();
});

server.listen(port, function () {
    debug('%s listening at %s', server.name, server.url);
    reset();
});
