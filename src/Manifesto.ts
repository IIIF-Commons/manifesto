var http = require("http");
var url = require("url");
var path = require("path");
var _ = require("lodash");
import m = Manifesto;
//declare var M: ManifestoStatic;

module.exports = function(){

    var load = function (manifestUri: string, callback: (manifest: any) => void): void {

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
                callback(result);
            });
        });

        fetch.end();
    }

    var parse = function(manifest: string): m.Manifest {
        this.originalManifest = manifest;
        return this.manifest = m.Deserialiser.parse(this.originalManifest);
    }
};