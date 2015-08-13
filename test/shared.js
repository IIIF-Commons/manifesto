var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

var globalServerForTesting = false;
exports.serve = function(){

    before(function(done) {
        if (!globalServerForTesting) {
            var serve = serveStatic('test/fixtures', {'index': ['index.html', 'index.htm']});

            globalServerForTesting = http.createServer(function(req, res){
                var final = finalhandler(req, res);
                serve(req, res, final)
            });

            globalServerForTesting.listen(3000);
        }

        done();
    });

    after(function() {
        if (globalServerForTesting) {
            globalServerForTesting.close();
            globalServerForTesting = false;
        }
    });
};