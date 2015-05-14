
module.exports = <IManifesto>{

    manifestCallback: null,
    manifest: null,

    sayHello: function(name: string): string {
        return "Hello, " + name;
    },

    load: function (manifestUri: string, callback: (manifest: Manifest) => void, useJSONP?: boolean): void {
        if (!useJSONP){
            $.getJSON(manifestUri, (manifest) => {
                this.parseManifest(manifest, callback);
            });
        } else {
            var settings: JQueryAjaxSettings = <JQueryAjaxSettings>{
                url: manifestUri,
                type: 'GET',
                dataType: 'jsonp',
                jsonp: 'callback',
                jsonpCallback: 'manifestCallback'
            };

            $.ajax(settings);

            this.manifestCallback = (manifest: any) => {
                this.parseManifest(manifest, callback);
            };
        }
    },

    // todo
    parseManifest: function(manifest: any, callback: (manifest: Manifest) => void): void {
        callback(manifest);
    }
};