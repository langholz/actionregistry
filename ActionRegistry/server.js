var restify = require('restify');
var port = process.env.port || 1337;
var server = restify.createServer({
    name: 'actionregistry',
    version: '0.0.1'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

function isValidActionsByEntityQuery(parameters) {
    var valid = typeof  parameters ;
    if (typeof parameters !== "undefined") {

    }
}

server.get('/actionsByEntity', function (req, res, next) {
    res.send(req.params);

    return next();
});

server.listen(port, function () {
    console.log('%s listening at %s', server.name, server.url);
});
