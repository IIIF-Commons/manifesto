var http = require("http");

module.exports = <IManifesto>{

    manifest: null,

    // todo: remove
    sayHello: function(name: string): string {
        return "Hello, " + name;
    },

    load: function (manifestUri: string, callback: (manifest: Manifest) => void, useJSONP?: boolean): void {

        http.get({
            path: manifestUri
        }, (res) => {
            //res.setEncoding('utf8');
            var result = "";
            res.on('data', (chunk) => {
                result += chunk;
            });
            res.on('end', () => {
                this.parse(result, callback);
            });
        }).on('error', (e) => {
            console.log(e.message);
        });
    },

    // todo
    parse: function(manifest: any, callback: (manifest: Manifest) => void): void {
        callback(manifest);
    }
};