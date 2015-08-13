var http = require("http");
var url = require("url");

module Manifesto {
    export class Utils {
        static load (manifestUri: string, cb: (manifest: any) => void): void {
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
        }
    }
};