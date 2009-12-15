
var sys = require('sys');

var route = function(req, res, urls){
    for (var i=0;i<urls.length;i++){
        var args = new RegExp(urls[i][0]).exec(req.uri.path);
        if (args !== null){
            args.shift();
            args.unshift(req, res);
            urls[i][1].apply(this, args);
            break;
        }
    }
};

var include = function(urls){
    return function(req, res){route(req, res, urls);};
};

exports.route = route;
exports.include = include


