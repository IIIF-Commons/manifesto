var http = require("http");
var url = require("url");

module.exports = <IManifesto>{

    manifest: null,

    // todo: remove
    sayHello: function(msg: string): string {
        return "hello " + msg;
    },

    load: function (manifestUri: string, callback: (manifest: IManifest) => void): void {

        var u = url.parse(manifestUri);

        var fetch = http.request({
            host: u.hostname,
            port: u.port || 80,
            path: u.pathname,
            method: "GET",
            withCredentials: false
        }, (res) => {
            var result = "";
            res.on('data', (chunk) => {
                result += chunk;
            });
            res.on('end', () => {
                this.parse(result, callback);
            });
        });

        fetch.end();
    },

    getRootRange: function() {

        // loop through structures looking for viewingHint="top"
        if (this.manifest.structures){
            for (var i = 0; i < this.manifest.structures.length; i++){
                var s = this.manifest.structures[i];
                if (s.viewingHint == "top"){
                    this.rootStructure = s;
                    break;
                }
            }
        }

        if (!this.rootStructure){
            this.rootStructure = {
                path: "",
                ranges: this.manifest.structures
            };
        }

        return this.rootStructure;
    },

    parse: function(manifest: any, callback: (manifest: IManifest) => void): void {
        this.manifest = <IManifest>JSON.parse(manifest);

        callback(manifest);
    }
};