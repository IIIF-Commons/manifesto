var http = require("http");
var url = require("url");
var path = require("path");
var _ = require("lodash");
import m = Manifesto;

module.exports = <IManifesto>{

    CanvasType: new Manifesto.CanvasType(),
    ElementType: new Manifesto.ElementType(),
    RenderingFormat: new Manifesto.RenderingFormat(),
    ServiceProfile: new Manifesto.ServiceProfile(),
    ViewingDirection: new Manifesto.ViewingDirection(),
    ViewingHint: new Manifesto.ViewingHint(),

    load: function (manifestUri: string, callback: (manifest: any) => void): void {

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
    },

    parse: function(manifest: string): m.Manifest {
        return m.Deserialiser.parse(manifest);
    }
};