var http = require("http");
var url = require("url");

module.exports = <IManifesto>{

    manifest: null,

    // todo: remove
    sayHello: function(msg: string): string {
        return "hello " + msg;
    },

    load: function (manifestUri: string, callback: (manifest: Manifest) => void): void {

        var url = url.parse(manifestUri);

        var fetch = http.request({
            host: url.hostname,
            port: url.port || 80,
            path: url.pathname,
            method: "GET",
            withCredentials: false
        }, (res) => {
            var result = ""
            res.on('data', (chunk) => {
                result += chunk;
            });
            res.on('end', () => {
                this.parse(result, callback);
            });
        });

        fetch.end();

        //http.get({
        //    path: manifestUri,
        //    withCredentials: false
        //}, (res) => {
        //    //res.setEncoding('utf8');
        //    var result = "";
        //    res.on('data', (chunk) => {
        //        result += chunk;
        //    });
        //    res.on('end', () => {
        //        this.parse(result, callback);
        //    });
        //}).on('error', (e) => {
        //    console.log(e.message);
        //});
    },

    // todo
    parse: function(manifest: any, callback: (manifest: Manifest) => void): void {
        callback(manifest);
    }
};