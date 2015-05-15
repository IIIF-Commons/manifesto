var http = require("http");

module.exports = <IManifesto>{

    manifest: null,

    // todo: remove
    sayHello: function(msg: string): string {
        return "hello " + msg;
    },

    load: function (manifestUri: string, callback: (manifest: Manifest) => void): void {

        http.get({
            path: manifestUri,
            withCredentials: false
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