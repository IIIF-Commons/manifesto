const finalhandler = require('finalhandler');
const http = require('http');
const serveStatic = require('serve-static');

let server;

function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

before(function(done) {

    const serve = serveStatic('test/fixtures', {'index': ['index.html', 'index.htm']});

    server = http.createServer(function(req, res){
        const final = finalhandler(req, res);
        serve(req, res, final)
    });

    server.listen(3001);

    done();
});

after(function() {
    server.close();
});

importTest('aarau', './tests/aarau');