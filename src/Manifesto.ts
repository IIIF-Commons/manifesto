/// <reference path="./_references.ts" />
var http = require("http");
var url = require("url");
var path = require("path");
var _ = require("lodash");

module.exports = <IManifesto>{

    CanvasType: new Manifesto.CanvasType(),
    ElementType: new Manifesto.ElementType(),
    RenderingFormat: new Manifesto.RenderingFormat(),
    ServiceProfile: new Manifesto.ServiceProfile(),
    ViewingDirection: new Manifesto.ViewingDirection(),
    ViewingHint: new Manifesto.ViewingHint(),

    load: function (manifestUri: string, cb: (manifest: any) => void): void {

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
                cb(result);
            });
        });

        fetch.end();
    },

    parse: function(manifest: string): Manifesto.Manifest {
        return Manifesto.Deserialiser.parse(manifest);
    }
};