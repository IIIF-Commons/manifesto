
module.exports = {

    manifestCallback: Object,
    manifest: Manifest,

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
    parseManifest: function(manifest: any, callback: (manifest: Manifest) => void) {
        callback(manifest);
    }

    //escape: function(html) {
    //    return String(html)
    //        .replace(/&/g, '&amp;')
    //        .replace(/"/g, '&quot;')
    //        .replace(/'/g, '&#39;')
    //        .replace(/</g, '&lt;')
    //        .replace(/>/g, '&gt;');
    //},
    //
    ///**
    // * Unescape special characters in the given string of html.
    // *
    // * @param  {String} html
    // * @return {String}
    // */
    //unescape: function(html) {
    //    return String(html)
    //        .replace(/&amp;/g, '&')
    //        .replace(/&quot;/g, '"')
    //        .replace(/&#39;/g, '\'')
    //        .replace(/&lt;/g, '<')
    //        .replace(/&gt;/g, '>');
    //}
};