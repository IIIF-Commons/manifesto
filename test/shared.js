var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

var server;

(function(){
    before(function(done) {

        var serve = serveStatic('test/fixtures', {'index': ['index.html', 'index.htm']});

        server = http.createServer(function(req, res){
            var final = finalhandler(req, res);
            serve(req, res, final)
        });

        server.listen(3000);

        done();
    });

    after(function() {
        server.close();
    });
})();