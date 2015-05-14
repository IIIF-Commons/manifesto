var http = require("http");

module.exports = <IManifesto>{

    manifestCallback: null,
    manifest: null,

    // todo: remove - just to test mocha
    sayHello: function(name: string): string {
        return "Hello, " + name;
    },

    load: function (manifestUri: string, callback: (manifest: Manifest) => void, useJSONP?: boolean): void {

        http.request({
            //host: "host.com",
            port: 80,
            path: manifestUri,
            method: 'GET',
            withCredentials: false
        }, function(res) {
            var result = "";
            res.on('data', function(chunk) {
                result += chunk;
            });
            res.on('end', function() {
                this.parseManifest(result, callback);
            });
        });
    },

    // todo
    parseManifest: function(manifest: any, callback: (manifest: Manifest) => void): void {
        callback(manifest);
    }
};