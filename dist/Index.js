var Index = (function () {
    function Index() {
    }
    Index.prototype.Escape = function (html) {
        return html.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    };
    Index.prototype.Unescape = function (html) {
        return html.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, '\'').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    };
    return Index;
})();
module.exports = Index;
