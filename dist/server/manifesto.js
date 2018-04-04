// manifesto v2.2.15 https://github.com/iiif-commons/manifesto
var __extends=this&&this.__extends||function(){var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t])};return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),exjs;!function(r){r.version="0.5.0"}(exjs||(exjs={}));var exjs;!function(r){Array.isArray||(Array.isArray=function(r){return"[object Array]"===Object.prototype.toString.call(r)})}(exjs||(exjs={}));var exjs;!function(r){var e=function(){function r(){}return r.prototype.getEnumerator=function(){return{moveNext:function(){return!1},current:void 0}},r.prototype.aggregate=function(r,e){for(var t=r,n=this.getEnumerator();n.moveNext();)t=e(t,n.current);return t},r.prototype.all=function(r){if(r)for(var e=this.getEnumerator(),t=0;e.moveNext();){if(!r(e.current,t))return!1;t++}return!0},r.prototype.any=function(r){for(var e=this.getEnumerator(),t=0;e.moveNext();){if(!r)return!0;if(r(e.current,t))return!0;t++}return!1},r.prototype.append=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];throw new Error("Not implemented")},r.prototype.apply=function(r){throw new Error("Not implemented")},r.prototype.at=function(r){for(var e=this.getEnumerator(),t=0;e.moveNext();){if(t===r)return e.current;t++}},r.prototype.average=function(r){var e=0,t=0;r=r||function(r){if("number"!=typeof r)throw new Error("Object is not a number.");return r};for(var n=this.getEnumerator();n.moveNext();)t+=r(n.current),e++;return 0===e?0:t/e},r.prototype.concat=function(r){throw new Error("Not implemented")},r.prototype.count=function(r){for(var e=0,t=this.getEnumerator();t.moveNext();)r&&!r(t.current)||e++;return e},r.prototype.difference=function(r,e){return e=e||function(r,e){return r===e},r instanceof Array&&(r=r.en()),{intersection:this.intersect(r,e).toArray().en(),aNotB:this.except(r,e).toArray().en(),bNotA:r.except(this,e).toArray().en()}},r.prototype.distinct=function(r){throw new Error("Not implemented")},r.prototype.except=function(r,e){throw new Error("Not implemented")},r.prototype.first=function(r){for(var e=this.getEnumerator();e.moveNext();)if(!r||r(e.current))return e.current},r.prototype.firstIndex=function(r){for(var e=this.getEnumerator(),t=0;e.moveNext();t++)if(!r||r(e.current))return t;return-1},r.prototype.forEach=function(r){for(var e=this.getEnumerator();e.moveNext();)r(e.current)},r.prototype.groupBy=function(r,e){throw new Error("Not implemented")},r.prototype.intersect=function(r,e){throw new Error("Not implemented")},r.prototype.join=function(r,e,t,n,o){throw new Error("Not implemented")},r.prototype.last=function(r){for(var e,t=this.getEnumerator();t.moveNext();)r&&!r(t.current)||(e=t.current);return e},r.prototype.lastIndex=function(r){for(var e=-1,t=this.getEnumerator(),n=0;t.moveNext();n++)r&&!r(t.current)||(e=n);return e},r.prototype.max=function(r){var e=this.getEnumerator();if(!e.moveNext())return 0;r=r||function(r){if("number"!=typeof r)throw new Error("Object is not a number.");return r};for(var t=r(e.current);e.moveNext();)t=Math.max(t,r(e.current));return t},r.prototype.min=function(r){var e=this.getEnumerator();if(!e.moveNext())return 0;r=r||function(r){if("number"!=typeof r)throw new Error("Object is not a number.");return r};for(var t=r(e.current);e.moveNext();)t=Math.min(t,r(e.current));return t},r.prototype.orderBy=function(r,e){throw new Error("Not implemented")},r.prototype.orderByDescending=function(r,e){throw new Error("Not implemented")},r.prototype.prepend=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];throw new Error("Not implemented")},r.prototype.reverse=function(){throw new Error("Not implemented")},r.prototype.select=function(r){throw new Error("Not implemented")},r.prototype.selectMany=function(r){throw new Error("Not implemented")},r.prototype.skip=function(r){throw new Error("Not implemented")},r.prototype.skipWhile=function(r){throw new Error("Not implemented")},r.prototype.standardDeviation=function(r){var e=this.average(r),t=0,n=0;r=r||function(r){if("number"!=typeof r)throw new Error("Object is not a number.");return r};for(var o=this.getEnumerator();o.moveNext();){var u=r(o.current)-e;t+=u*u,n++}return Math.sqrt(t/n)},r.prototype.sum=function(r){var e=0;r=r||function(r){if("number"!=typeof r)throw new Error("Object is not a number.");return r};for(var t=this.getEnumerator();t.moveNext();)e+=r(t.current);return e},r.prototype.take=function(r){throw new Error("Not implemented")},r.prototype.takeWhile=function(r){throw new Error("Not implemented")},r.prototype.traverse=function(r){throw new Error("Not implemented")},r.prototype.traverseUnique=function(r,e){throw new Error("Not implemented")},r.prototype.toArray=function(){for(var r=[],e=this.getEnumerator();e.moveNext();)r.push(e.current);return r},r.prototype.toMap=function(r,e){throw new Error("Not implemented")},r.prototype.toList=function(){throw new Error("Not implemented")},r.prototype.union=function(r,e){throw new Error("Not implemented")},r.prototype.where=function(r){throw new Error("Not implemented")},r.prototype.zip=function(r,e){throw new Error("Not implemented")},r}();r.Enumerable=e}(exjs||(exjs={}));var exjs;!function(r){var e=function(){function e(r){this.size=0,this._keys=[],this._values=[];var e;if(r instanceof Array?e=r.en():r&&r.getEnumerator instanceof Function&&(e=r),e)for(var t=e.getEnumerator();t&&t.moveNext();)this.set(t.current[0],t.current[1])}return e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this.size=0},e.prototype.delete=function(r){var e=this._keys.indexOf(r);return e>-1&&(this._keys.splice(e,1),this._values.splice(e,1),this.size--,!0)},e.prototype.entries=function(){var e=this;return r.range(0,this.size).select(function(r){return[e._keys[r],e._values[r]]})},e.prototype.forEach=function(r,e){null==e&&(e=this);for(var t=0,n=this._keys,o=this._values,u=n.length;t<u;t++)r.call(e,o[t],n[t],this)},e.prototype.get=function(r){var e=this._keys.indexOf(r);return this._values[e]},e.prototype.has=function(r){return this._keys.indexOf(r)>-1},e.prototype.keys=function(){return this._keys.en()},e.prototype.set=function(r,e){var t=this._keys.indexOf(r);t>-1?this._values[t]=e:(this._keys.push(r),this._values.push(e),this.size++)},e.prototype.values=function(){return this._values.en()},e}();r.Map3=e,r.Enumerable.prototype.toMap=function(r,t){for(var n=new e,o=this.getEnumerator();o.moveNext();)n.set(r(o.current),t(o.current));return n},r.List&&(r.List.prototype.toMap=r.Enumerable.prototype.toMap)}(exjs||(exjs={})),function(r){r.Map||(r.Map=exjs.Map3)}("undefined"==typeof window?global:window);var exjs;!function(r){function e(e){var t=new r.Enumerable;return t.getEnumerator=function(){var r={current:void 0,moveNext:function(){return e(r)}};return r},t}r.anonymous=e}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n,o=1,u={current:void 0,moveNext:function(){if(o<2){if(t=t||r.getEnumerator(),t.moveNext())return u.current=t.current,!0;o++}return n=n||e.en().getEnumerator(),n.moveNext()?(u.current=n.current,!0):(u.current=void 0,!1)}};return u}r.Enumerable.prototype.append=function(){for(var t=this,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var u=new r.Enumerable;return u.getEnumerator=function(){return e(t,n)},u},r.List&&(r.List.prototype.append=r.Enumerable.prototype.append)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n=0,o={current:void 0,moveNext:function(){return t||(t=r.getEnumerator()),!!t.moveNext()&&(e(o.current=t.current,n),n++,!0)}};return o}r.Enumerable.prototype.apply=function(t){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return e(n,t)},o},r.List&&(r.List.prototype.apply=r.Enumerable.prototype.apply)}(exjs||(exjs={}));var exjs;!function(r){function e(r){var e=r.length,t={moveNext:void 0,current:void 0},n=-1;return t.moveNext=function(){return n++,n>=e?(t.current=void 0,!1):(t.current=r[n],!0)},t}function t(){return this&&Array.isArray(this)?new n(this):new r.Enumerable}var n=function(r){function t(t){var n=r.call(this)||this;return n.getEnumerator=function(){return e(t)},n.toArray=function(){return t.slice(0)},n}return __extends(t,r),t}(r.Enumerable);try{Object.defineProperty(Array.prototype,"en",{value:t,enumerable:!1,writable:!1,configurable:!1})}catch(r){Array.prototype.en=t}}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n=!1,o={current:void 0,moveNext:function(){return t||(t=r.getEnumerator()),o.current=void 0,t.moveNext()?(o.current=t.current,!0):!n&&(n=!0,t=e.getEnumerator(),!!t.moveNext()&&(o.current=t.current,!0))}};return o}r.Enumerable.prototype.concat=function(t){var n=this,o=t instanceof Array?t.en():t,u=new r.Enumerable;return u.getEnumerator=function(){return e(n,o)},u},r.List&&(r.List.prototype.concat=r.Enumerable.prototype.concat)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n=[],o={current:void 0,moveNext:function(){if(t||(t=r.getEnumerator()),o.current=void 0,!e){for(;t.moveNext();)if(n.indexOf(t.current)<0)return n.push(o.current=t.current),!0;return!1}for(;t.moveNext();){for(var u=0,i=n.length,c=!1;u<i&&!c;u++)c=!!e(n[u],t.current);if(!c)return n.push(o.current=t.current),!0}return!1}};return o}r.Enumerable.prototype.distinct=function(t){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return e(n,t)},o},r.List&&(r.List.prototype.distinct=r.Enumerable.prototype.distinct)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e,t){t=t||function(r,e){return r===e};var n,o={current:void 0,moveNext:function(){for(n||(n=r.getEnumerator()),o.current=void 0;n.moveNext();){for(var u=!1,i=e.getEnumerator();i.moveNext()&&!u;)u=t(n.current,i.current);if(!u)return o.current=n.current,!0}return!1}};return o}r.Enumerable.prototype.except=function(t,n){var o=this,u=t instanceof Array?t.en():t,i=new r.Enumerable;return i.getEnumerator=function(){return e(o,u,n)},i},r.List&&(r.List.prototype.except=r.Enumerable.prototype.except)}(exjs||(exjs={})),Function.prototype.fromJson=function(r,e){function t(r,e){if(null==r)return r;if(e instanceof Function)return e(r);if(e instanceof Array){if(e=e[0],!(e instanceof Function&&r instanceof Array))return;for(var t=[],n=0;n<r.length;n++)t.push(e(r[n]));return t}}var n=new this;if(null==r)return n;var o=[];for(var u in e){var i=t(r[u],e[u]);void 0!==i&&(n[u]=i,o.push(u))}for(var u in this.$jsonMappings)if(!(o.indexOf(u)>-1)){var i=t(r[u],this.$jsonMappings[u]);void 0!==i&&(n[u]=i,o.push(u))}for(var u in r)o.indexOf(u)>-1||(n[u]=r[u]);return n};var exjs;!function(r){function e(r,e,n){var o,u=0,i={current:void 0,moveNext:function(){return o||(o=t(r,e,n)),i.current=void 0,!(u>=o.length)&&(i.current=o[u],u++,!0)}};return i}function t(r,e,t){t=t||function(r,e){return r===e};for(var o,u=[],i=[],c=r.getEnumerator();c.moveNext();){o=e(c.current);for(var a=-1,p=0,f=i.length;p<f;p++)if(t(o,i[p])){a=p;break}var s;a<0?(i.push(o),u.push(s=new n(o))):s=u[a],s._add(c.current)}return u}var n=function(r){function e(e){var t=r.call(this)||this;return t.key=e,t._arr=[],t.getEnumerator=function(){return t._arr.en().getEnumerator()},t}return __extends(e,r),e.prototype._add=function(r){this._arr.push(r)},e}(r.Enumerable);r.Enumerable.prototype.groupBy=function(t,n){var o=this,u=new r.Enumerable;return u.getEnumerator=function(){return e(o,t,n)},u},r.List&&(r.List.prototype.groupBy=r.Enumerable.prototype.groupBy)}(exjs||(exjs={}));var exjs;!function(r){function e(e,t,n){n=n||function(r,e){return r===e};var o,u={current:void 0,moveNext:function(){for(o||(o=r.en(e).distinct().getEnumerator()),u.current=void 0;o.moveNext();){for(var i=!1,c=t.getEnumerator();c.moveNext()&&!i;)i=n(o.current,c.current);if(i)return u.current=o.current,!0}return!1}};return u}r.Enumerable.prototype.intersect=function(t,n){var o=this,u=t instanceof Array?t.en():t,i=new r.Enumerable;return i.getEnumerator=function(){return e(o,u,n)},i},r.List&&(r.List.prototype.intersect=r.Enumerable.prototype.intersect)}(exjs||(exjs={}));var exjs;!function(r){function e(e,t,n,o,u,i){i=i||function(r,e){return r===e};var c,a,p=0,f={current:void 0,moveNext:function(){if(f.current=void 0,!c){if(c=e.getEnumerator(),!c.moveNext())return!1;a=r.en(t).toArray()}var s;do{for(;p<a.length;p++)if(s=a[p],i(n(c.current),o(s)))return p++,f.current=u(c.current,s),!0;p=0}while(c.moveNext());return!1}};return f}r.Enumerable.prototype.join=function(t,n,o,u,i){var c=this,a=t instanceof Array?t.en():t,p=new r.Enumerable;return p.getEnumerator=function(){return e(c,a,n,o,u,i)},p},r.List&&(r.List.prototype.join=r.Enumerable.prototype.join)}(exjs||(exjs={}));var exjs;!function(r){function e(){this.constructor=t}r.Enumerable.prototype.toList=function(){for(var r=new t,e=this.getEnumerator();e.moveNext();)r.push(e.current);return r};var t=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return __extends(e,r),e.prototype.toString=function(){throw new Error("Not implemented")},e.prototype.toLocaleString=function(){throw new Error("Not implemented")},e.prototype.pop=function(){throw new Error("Not implemented")},e.prototype.push=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];throw new Error("Not implemented")},e.prototype.shift=function(){throw new Error("Not implemented")},e.prototype.slice=function(r,e){throw new Error("Not implemented")},e.prototype.sort=function(r){throw new Error("Not implemented")},e.prototype.splice=function(){throw new Error("Not implemented")},e.prototype.unshift=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];throw new Error("Not implemented")},e.prototype.indexOf=function(r,e){throw new Error("Not implemented")},e.prototype.lastIndexOf=function(r,e){throw new Error("Not implemented")},e.prototype.every=function(r,e){throw new Error("Not implemented")},e.prototype.some=function(r,e){throw new Error("Not implemented")},e.prototype.forEach=function(r,e){throw new Error("Not implemented")},e.prototype.map=function(r,e){throw new Error("Not implemented")},e.prototype.filter=function(r,e){throw new Error("Not implemented")},e.prototype.reduce=function(r,e){throw new Error("Not implemented")},e.prototype.reduceRight=function(r,e){throw new Error("Not implemented")},e.prototype.remove=function(r){throw new Error("Not implemented")},e.prototype.removeWhere=function(r){throw new Error("Not implemented")},e}(r.Enumerable);r.List=t;for(var n in Array)Array.hasOwnProperty(n)&&(t[n]=Array[n]);e.prototype=Array.prototype,t.prototype=new e;for(var o in r.Enumerable.prototype)"getEnumerator"!==o&&(t.prototype[o]=r.Enumerable.prototype[o]);t.prototype.getEnumerator=function(){var r=this,e=r.length,t={moveNext:void 0,current:void 0},n=-1;return t.moveNext=function(){return n++,n>=e?(t.current=void 0,!1):(t.current=r[n],!0)},t},t.prototype.remove=function(r){return this.removeWhere(function(e){return e===r}).any()},t.prototype.removeWhere=function(r){for(var e,t=[],n=this.length-1;n>=0;n--)e=this[n],r(e,n)===!0&&(this.splice(n,1),t.push(e));return t.en().reverse()}}(exjs||(exjs={}));var exjs;!function(r){function e(r,e,n,o){return new t(r,e,n,o)}var t=function(e){function t(r,t,n,o){var u=e.call(this)||this;u.Source=r,o=o||function(r,e){return r>e?1:r<e?-1:0};var i=n===!0?-1:1;return u.Sorter=function(r,e){return i*o(t(r),t(e))},u}return __extends(t,e),t.prototype.getEnumerator=function(){var e,t=this.Source,n=this.Sorter,o=0,u={current:void 0,moveNext:function(){return e||(e=r.en(t).toArray(),e.sort(n)),u.current=void 0,!(o>=e.length)&&(u.current=e[o],o++,!0)}};return u},t.prototype.thenBy=function(r,e){return new n(this,r,!1,e)},t.prototype.thenByDescending=function(r,e){return new n(this,r,!0,e)},t}(r.Enumerable),n=function(r){function e(e,t,n,o){var u=r.call(this,e,t,n,o)||this,i=e.Sorter,c=u.Sorter;return u.Sorter=function(r,e){return i(r,e)||c(r,e)},u}return __extends(e,r),e}(t),o=r.Enumerable.prototype;o.orderBy=function(r,t){return e(this,r,!1,t)},o.orderByDescending=function(r,t){return e(this,r,!0,t)},r.List&&(r.List.prototype.orderBy=r.Enumerable.prototype.orderBy,r.List.prototype.orderByDescending=r.Enumerable.prototype.orderByDescending)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n,o=1,u={current:void 0,moveNext:function(){if(o<2){if(t=t||e.en().getEnumerator(),t.moveNext())return u.current=t.current,!0;o++}return n=n||r.getEnumerator(),n.moveNext()?(u.current=n.current,!0):(u.current=void 0,!1)}};return u}r.Enumerable.prototype.prepend=function(){for(var t=this,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var u=new r.Enumerable;return u.getEnumerator=function(){return e(t,n)},u},r.List&&(r.List.prototype.prepend=r.Enumerable.prototype.prepend)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e,t){var n=r-t,o={current:void 0,moveNext:function(){return n+=t,!(n>=e)&&(o.current=n,!0)}};return o}function t(t,n,o){if(t=t||0,n=n||0,t>n)throw new Error("Start cannot be greater than end.");null==o&&(o=1);var u=new r.Enumerable;return u.getEnumerator=function(){return e(t,n,o)},u}r.range=t}(exjs||(exjs={}));var exjs;!function(r){function e(e){var t,n=0,o={current:void 0,moveNext:function(){return t||(t=r.en(e).toArray(),n=t.length),n--,o.current=t[n],n>=0}};return o}r.Enumerable.prototype.reverse=function(){var t=this,n=new r.Enumerable;return n.getEnumerator=function(){return e(t)},n},r.List&&(r.List.prototype.reverse=r.Enumerable.prototype.reverse)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){if(e=e||0,0===e)return Math.round(r);var t=Math.pow(10,e);return Math.round(r*t)/t}r.round=e}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n=0,o={current:void 0,moveNext:function(){return t||(t=r.getEnumerator()),!!t.moveNext()&&(o.current=e(t.current,n),n++,!0)}};return o}function t(e,t){var n,o,u={current:void 0,moveNext:function(){for(u.current=void 0,n||(n=e.getEnumerator());!o||!o.moveNext();){if(!n.moveNext())return!1;o=r.selectorEnumerator(t(n.current))}return u.current=o.current,!0}};return u}r.Enumerable.prototype.select=function(t){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return e(n,t)},o},r.Enumerable.prototype.selectMany=function(e){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return t(n,e)},o},r.List&&(r.List.prototype.select=r.Enumerable.prototype.select,r.List.prototype.selectMany=r.Enumerable.prototype.selectMany)}(exjs||(exjs={}));var exjs;!function(r){function e(r){return Array.isArray(r)?r.en().getEnumerator():null!=r&&"function"==typeof r.getEnumerator?r.getEnumerator():null}r.selectorEnumerator=e}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n={current:void 0,moveNext:function(){if(!t){t=r.getEnumerator();for(var o=0;o<e;o++)if(!t.moveNext())return!1}return t.moveNext()?(n.current=t.current,!0):(n.current=void 0,!1)}};return n}function t(r,e){var t,n={current:void 0,moveNext:function(){if(!t){t=r.getEnumerator();for(var o=0;t.moveNext();o++)if(!e(n.current=t.current,o))return!0;return n.current=void 0,!1}return t.moveNext()?(n.current=t.current,!0):(n.current=void 0,!1)}};return n}r.Enumerable.prototype.skip=function(t){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return e(n,t)},o},r.Enumerable.prototype.skipWhile=function(e){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return t(n,e)},o},r.List&&(r.List.prototype.skip=r.Enumerable.prototype.skip,r.List.prototype.skipWhile=r.Enumerable.prototype.skipWhile)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n=0,o={current:void 0,moveNext:function(){return t||(t=r.getEnumerator()),n++,!(n>e)&&(o.current=void 0,!!t.moveNext()&&(o.current=t.current,!0))}};return o}function t(r,e){var t,n=0,o={current:void 0,moveNext:function(){return t||(t=r.getEnumerator()),t.moveNext()&&e(t.current,n)?(n++,o.current=t.current,!0):(o.current=void 0,!1)}};return o}r.Enumerable.prototype.take=function(t){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return e(n,t)},o},r.Enumerable.prototype.takeWhile=function(e){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return t(n,e)},o},r.List&&(r.List.prototype.take=r.Enumerable.prototype.take,r.List.prototype.takeWhile=r.Enumerable.prototype.takeWhile)}(exjs||(exjs={}));var exjs;!function(r){function e(e,t){var n,o=!1,u=[],i={current:void 0,moveNext:function(){if(o){if(null==n)return!1;u.push(n),n=r.selectorEnumerator(t(i.current))}else n=e.getEnumerator(),o=!0;for(;!(n&&n.moveNext()||u.length<1);)n=u.pop();return i.current=null==n?void 0:n.current,void 0!==i.current}};return i}function t(e,t,n){var o,u=!1,i=[],c={current:void 0,moveNext:function(){if(u){if(null==o)return!1;i.push(o),o=r.selectorEnumerator(t(c.current))}else o=e.getEnumerator(),u=!0;do{for(;!(o&&o.moveNext()||i.length<1);)o=i.pop();c.current=null==o?void 0:o.current}while(n(c.current));return void 0!==c.current}};return c}r.Enumerable.prototype.traverse=function(t){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return e(n,t)},o},r.Enumerable.prototype.traverseUnique=function(e,n){var o=this,u=[],i=new r.Enumerable;return n?i.getEnumerator=function(){return t(o,e,function(r){return!!u.some(function(e){return n(r,e)})||(u.push(r),!1)})}:i.getEnumerator=function(){return t(o,e,function(r){return u.indexOf(r)>-1||(u.push(r),!1)})},i},r.List&&(r.List.prototype.traverse=r.Enumerable.prototype.traverse,r.List.prototype.traverseUnique=r.Enumerable.prototype.traverseUnique)}(exjs||(exjs={}));var exjs;!function(r){function e(e,t,n){n=n||function(r,e){return r===e};var o,u,i=[],c={current:void 0,moveNext:function(){if(o||(o=r.en(e).distinct().getEnumerator()),c.current=void 0,!u&&o.moveNext())return i.push(c.current=o.current),!0;for(u=u||r.en(t).distinct().getEnumerator();u.moveNext();){for(var a=0,p=!1,f=i.length;a<f&&!p;a++)p=n(i[a],u.current);if(!p)return c.current=u.current,!0}return!1}};return c}r.Enumerable.prototype.union=function(t,n){var o=this,u=t instanceof Array?t.en():t,i=new r.Enumerable;return i.getEnumerator=function(){return e(o,u,n)},i},r.List&&(r.List.prototype.union=r.Enumerable.prototype.union)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n={current:void 0,moveNext:function(){t||(t=r.getEnumerator());for(var o;t.moveNext();)if(e(o=t.current))return n.current=o,!0;return!1}};return n}r.Enumerable.prototype.where=function(t){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return e(n,t)},o},r.List&&(r.List.prototype.where=r.Enumerable.prototype.where)}(exjs||(exjs={}));var exjs;!function(r){function e(e){var n=new r.Enumerable;return n.getEnumerator=function(){return t(e)},n}function t(r){var e=r.getEnumerator(),t={current:void 0,moveNext:void 0};return t.moveNext=function(){return e.moveNext()?(t.current=e.current,!0):(t.current=void 0,!1)},t}r.en=e}(exjs||(exjs={}));var ex=exjs.en,exjs;!function(r){function e(r,e,t){var n,o,u={current:void 0,moveNext:function(){return n||(n=r.getEnumerator()),o||(o=e.getEnumerator()),u.current=void 0,!(!n.moveNext()||!o.moveNext())&&(u.current=t(n.current,o.current),!0)}};return u}r.Enumerable.prototype.zip=function(t,n){var o=this,u=t instanceof Array?t.en():t,i=new r.Enumerable;return i.getEnumerator=function(){return e(o,u,n)},i},r.List&&(r.List.prototype.zip=r.Enumerable.prototype.zip)}(exjs||(exjs={}));
//# sourceMappingURL=ex.es3.min.js.map

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.httpStatusCodes = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var HTTPStatusCode;
(function (HTTPStatusCode) {
    HTTPStatusCode.CONTINUE = 100;
    HTTPStatusCode.SWITCHING_PROTOCOLS = 101;
    HTTPStatusCode.PROCESSING = 102;
    HTTPStatusCode.OK = 200;
    HTTPStatusCode.CREATED = 201;
    HTTPStatusCode.ACCEPTED = 202;
    HTTPStatusCode.NON_AUTHORITATIVE_INFORMATION = 203;
    HTTPStatusCode.NO_CONTENT = 204;
    HTTPStatusCode.RESET_CONTENT = 205;
    HTTPStatusCode.PARTIAL_CONTENT = 206;
    HTTPStatusCode.MULTI_STATUS = 207;
    HTTPStatusCode.MULTIPLE_CHOICES = 300;
    HTTPStatusCode.MOVED_PERMANENTLY = 301;
    HTTPStatusCode.MOVED_TEMPORARILY = 302;
    HTTPStatusCode.SEE_OTHER = 303;
    HTTPStatusCode.NOT_MODIFIED = 304;
    HTTPStatusCode.USE_PROXY = 305;
    HTTPStatusCode.TEMPORARY_REDIRECT = 307;
    HTTPStatusCode.BAD_REQUEST = 400;
    HTTPStatusCode.UNAUTHORIZED = 401;
    HTTPStatusCode.PAYMENT_REQUIRED = 402;
    HTTPStatusCode.FORBIDDEN = 403;
    HTTPStatusCode.NOT_FOUND = 404;
    HTTPStatusCode.METHOD_NOT_ALLOWED = 405;
    HTTPStatusCode.NOT_ACCEPTABLE = 406;
    HTTPStatusCode.PROXY_AUTHENTICATION_REQUIRED = 407;
    HTTPStatusCode.REQUEST_TIME_OUT = 408;
    HTTPStatusCode.CONFLICT = 409;
    HTTPStatusCode.GONE = 410;
    HTTPStatusCode.LENGTH_REQUIRED = 411;
    HTTPStatusCode.PRECONDITION_FAILED = 412;
    HTTPStatusCode.REQUEST_ENTITY_TOO_LARGE = 413;
    HTTPStatusCode.REQUEST_URI_TOO_LARGE = 414;
    HTTPStatusCode.UNSUPPORTED_MEDIA_TYPE = 415;
    HTTPStatusCode.REQUESTED_RANGE_NOT_SATISFIABLE = 416;
    HTTPStatusCode.EXPECTATION_FAILED = 417;
    HTTPStatusCode.IM_A_TEAPOT = 418;
    HTTPStatusCode.UNPROCESSABLE_ENTITY = 422;
    HTTPStatusCode.LOCKED = 423;
    HTTPStatusCode.FAILED_DEPENDENCY = 424;
    HTTPStatusCode.UNORDERED_COLLECTION = 425;
    HTTPStatusCode.UPGRADE_REQUIRED = 426;
    HTTPStatusCode.PRECONDITION_REQUIRED = 428;
    HTTPStatusCode.TOO_MANY_REQUESTS = 429;
    HTTPStatusCode.REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
    HTTPStatusCode.INTERNAL_SERVER_ERROR = 500;
    HTTPStatusCode.NOT_IMPLEMENTED = 501;
    HTTPStatusCode.BAD_GATEWAY = 502;
    HTTPStatusCode.SERVICE_UNAVAILABLE = 503;
    HTTPStatusCode.GATEWAY_TIME_OUT = 504;
    HTTPStatusCode.HTTP_VERSION_NOT_SUPPORTED = 505;
    HTTPStatusCode.VARIANT_ALSO_NEGOTIATES = 506;
    HTTPStatusCode.INSUFFICIENT_STORAGE = 507;
    HTTPStatusCode.BANDWIDTH_LIMIT_EXCEEDED = 509;
    HTTPStatusCode.NOT_EXTENDED = 510;
    HTTPStatusCode.NETWORK_AUTHENTICATION_REQUIRED = 511;
})(HTTPStatusCode || (HTTPStatusCode = {}));
(function (g) {
    if (!g.HTTPStatusCode) {
        g.HTTPStatusCode = HTTPStatusCode;
    }
})(global);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});

var Manifesto;
(function (Manifesto) {
    var StringValue = /** @class */ (function () {
        function StringValue(value) {
            this.value = "";
            if (value) {
                this.value = value.toLowerCase();
            }
        }
        StringValue.prototype.toString = function () {
            return this.value;
        };
        return StringValue;
    }());
    Manifesto.StringValue = StringValue;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var AnnotationMotivation = /** @class */ (function (_super) {
        __extends(AnnotationMotivation, _super);
        function AnnotationMotivation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // todo: use getters when ES3 target is no longer required.
        AnnotationMotivation.prototype.bookmarking = function () {
            return new AnnotationMotivation(AnnotationMotivation.BOOKMARKING.toString());
        };
        AnnotationMotivation.prototype.classifying = function () {
            return new AnnotationMotivation(AnnotationMotivation.CLASSIFYING.toString());
        };
        AnnotationMotivation.prototype.commenting = function () {
            return new AnnotationMotivation(AnnotationMotivation.COMMENTING.toString());
        };
        AnnotationMotivation.prototype.describing = function () {
            return new AnnotationMotivation(AnnotationMotivation.DESCRIBING.toString());
        };
        AnnotationMotivation.prototype.editing = function () {
            return new AnnotationMotivation(AnnotationMotivation.EDITING.toString());
        };
        AnnotationMotivation.prototype.highlighting = function () {
            return new AnnotationMotivation(AnnotationMotivation.HIGHLIGHTING.toString());
        };
        AnnotationMotivation.prototype.identifying = function () {
            return new AnnotationMotivation(AnnotationMotivation.IDENTIFYING.toString());
        };
        AnnotationMotivation.prototype.linking = function () {
            return new AnnotationMotivation(AnnotationMotivation.LINKING.toString());
        };
        AnnotationMotivation.prototype.moderating = function () {
            return new AnnotationMotivation(AnnotationMotivation.MODERATING.toString());
        };
        AnnotationMotivation.prototype.painting = function () {
            return new AnnotationMotivation(AnnotationMotivation.PAINTING.toString());
        };
        AnnotationMotivation.prototype.questioning = function () {
            return new AnnotationMotivation(AnnotationMotivation.QUESTIONING.toString());
        };
        AnnotationMotivation.prototype.replying = function () {
            return new AnnotationMotivation(AnnotationMotivation.REPLYING.toString());
        };
        AnnotationMotivation.prototype.tagging = function () {
            return new AnnotationMotivation(AnnotationMotivation.TAGGING.toString());
        };
        AnnotationMotivation.prototype.transcribing = function () {
            return new AnnotationMotivation(AnnotationMotivation.TRANSCRIBING.toString());
        };
        AnnotationMotivation.BOOKMARKING = new AnnotationMotivation("oa:bookmarking");
        AnnotationMotivation.CLASSIFYING = new AnnotationMotivation("oa:classifying");
        AnnotationMotivation.COMMENTING = new AnnotationMotivation("oa:commenting");
        AnnotationMotivation.DESCRIBING = new AnnotationMotivation("oa:describing");
        AnnotationMotivation.EDITING = new AnnotationMotivation("oa:editing");
        AnnotationMotivation.HIGHLIGHTING = new AnnotationMotivation("oa:highlighting");
        AnnotationMotivation.IDENTIFYING = new AnnotationMotivation("oa:identifying");
        AnnotationMotivation.LINKING = new AnnotationMotivation("oa:linking");
        AnnotationMotivation.MODERATING = new AnnotationMotivation("oa:moderating");
        AnnotationMotivation.PAINTING = new AnnotationMotivation("sc:painting");
        AnnotationMotivation.QUESTIONING = new AnnotationMotivation("oa:questioning");
        AnnotationMotivation.REPLYING = new AnnotationMotivation("oa:replying");
        AnnotationMotivation.TAGGING = new AnnotationMotivation("oa:tagging");
        AnnotationMotivation.TRANSCRIBING = new AnnotationMotivation("oad:transcribing");
        return AnnotationMotivation;
    }(Manifesto.StringValue));
    Manifesto.AnnotationMotivation = AnnotationMotivation;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var IIIFResourceType = /** @class */ (function (_super) {
        __extends(IIIFResourceType, _super);
        function IIIFResourceType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // todo: use getters when ES3 target is no longer required.
        IIIFResourceType.prototype.annotation = function () {
            return new IIIFResourceType(IIIFResourceType.ANNOTATION.toString());
        };
        IIIFResourceType.prototype.canvas = function () {
            return new IIIFResourceType(IIIFResourceType.CANVAS.toString());
        };
        IIIFResourceType.prototype.collection = function () {
            return new IIIFResourceType(IIIFResourceType.COLLECTION.toString());
        };
        IIIFResourceType.prototype.manifest = function () {
            return new IIIFResourceType(IIIFResourceType.MANIFEST.toString());
        };
        IIIFResourceType.prototype.range = function () {
            return new IIIFResourceType(IIIFResourceType.RANGE.toString());
        };
        IIIFResourceType.prototype.sequence = function () {
            return new IIIFResourceType(IIIFResourceType.SEQUENCE.toString());
        };
        IIIFResourceType.ANNOTATION = new IIIFResourceType("annotation");
        IIIFResourceType.CANVAS = new IIIFResourceType("canvas");
        IIIFResourceType.COLLECTION = new IIIFResourceType("collection");
        IIIFResourceType.MANIFEST = new IIIFResourceType("manifest");
        IIIFResourceType.RANGE = new IIIFResourceType("range");
        IIIFResourceType.SEQUENCE = new IIIFResourceType("sequence");
        return IIIFResourceType;
    }(Manifesto.StringValue));
    Manifesto.IIIFResourceType = IIIFResourceType;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var ManifestType = /** @class */ (function (_super) {
        __extends(ManifestType, _super);
        function ManifestType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // todo: use getters when ES3 target is no longer required.
        ManifestType.prototype.empty = function () {
            return new ManifestType(ManifestType.EMPTY.toString());
        };
        ManifestType.prototype.manuscript = function () {
            return new ManifestType(ManifestType.MANUSCRIPT.toString());
        };
        ManifestType.prototype.monograph = function () {
            return new ManifestType(ManifestType.MONOGRAPH.toString());
        };
        ManifestType.EMPTY = new ManifestType("");
        ManifestType.MANUSCRIPT = new ManifestType("manuscript");
        ManifestType.MONOGRAPH = new ManifestType("monograph");
        return ManifestType;
    }(Manifesto.StringValue));
    Manifesto.ManifestType = ManifestType;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var RenderingFormat = /** @class */ (function (_super) {
        __extends(RenderingFormat, _super);
        function RenderingFormat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // todo: use getters when ES3 target is no longer required.
        RenderingFormat.prototype.pdf = function () {
            return new RenderingFormat(RenderingFormat.PDF.toString());
        };
        RenderingFormat.prototype.doc = function () {
            return new RenderingFormat(RenderingFormat.DOC.toString());
        };
        RenderingFormat.prototype.docx = function () {
            return new RenderingFormat(RenderingFormat.DOCX.toString());
        };
        RenderingFormat.PDF = new RenderingFormat("application/pdf");
        RenderingFormat.DOC = new RenderingFormat("application/msword");
        RenderingFormat.DOCX = new RenderingFormat("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
        return RenderingFormat;
    }(Manifesto.StringValue));
    Manifesto.RenderingFormat = RenderingFormat;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var MediaType = /** @class */ (function (_super) {
        __extends(MediaType, _super);
        function MediaType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // todo: use getters when ES3 target is no longer required.
        MediaType.prototype.jpg = function () {
            return new MediaType(MediaType.JPG.toString());
        };
        MediaType.prototype.mp4 = function () {
            return new MediaType(MediaType.MP4.toString());
        };
        MediaType.prototype.pdf = function () {
            return new MediaType(MediaType.PDF.toString());
        };
        MediaType.prototype.threejs = function () {
            return new MediaType(MediaType.THREEJS.toString());
        };
        MediaType.prototype.webm = function () {
            return new MediaType(MediaType.WEBM.toString());
        };
        MediaType.JPG = new MediaType("image/jpeg");
        MediaType.MP4 = new MediaType("video/mp4");
        MediaType.PDF = new MediaType("application/pdf");
        MediaType.THREEJS = new MediaType("application/vnd.threejs+json");
        MediaType.WEBM = new MediaType("video/webm");
        return MediaType;
    }(Manifesto.StringValue));
    Manifesto.MediaType = MediaType;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var ResourceType = /** @class */ (function (_super) {
        __extends(ResourceType, _super);
        function ResourceType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // todo: use getters when ES3 target is no longer required.
        ResourceType.prototype.canvas = function () {
            return new ResourceType(ResourceType.CANVAS.toString());
        };
        ResourceType.prototype.choice = function () {
            return new ResourceType(ResourceType.CHOICE.toString());
        };
        ResourceType.prototype.document = function () {
            return new ResourceType(ResourceType.DOCUMENT.toString());
        };
        ResourceType.prototype.image = function () {
            return new ResourceType(ResourceType.IMAGE.toString());
        };
        ResourceType.prototype.movingimage = function () {
            return new ResourceType(ResourceType.MOVINGIMAGE.toString());
        };
        ResourceType.prototype.physicalobject = function () {
            return new ResourceType(ResourceType.PHYSICALOBJECT.toString());
        };
        ResourceType.prototype.sound = function () {
            return new ResourceType(ResourceType.SOUND.toString());
        };
        ResourceType.prototype.text = function () {
            return new ResourceType(ResourceType.TEXT.toString());
        };
        ResourceType.CANVAS = new ResourceType("canvas");
        ResourceType.CHOICE = new ResourceType("choice");
        ResourceType.DOCUMENT = new ResourceType("document");
        ResourceType.IMAGE = new ResourceType("image");
        ResourceType.MOVINGIMAGE = new ResourceType("movingimage");
        ResourceType.PHYSICALOBJECT = new ResourceType("physicalobject");
        ResourceType.SOUND = new ResourceType("sound");
        ResourceType.TEXT = new ResourceType("textualbody");
        return ResourceType;
    }(Manifesto.StringValue));
    Manifesto.ResourceType = ResourceType;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var ServiceProfile = /** @class */ (function (_super) {
        __extends(ServiceProfile, _super);
        function ServiceProfile() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // todo: use getters when ES3 target is no longer required.
        ServiceProfile.prototype.auth1Clickthrough = function () {
            return new ServiceProfile(ServiceProfile.AUTH1CLICKTHROUGH.toString());
        };
        ServiceProfile.prototype.auth1External = function () {
            return new ServiceProfile(ServiceProfile.AUTH1EXTERNAL.toString());
        };
        ServiceProfile.prototype.auth1Kiosk = function () {
            return new ServiceProfile(ServiceProfile.AUTH1KIOSK.toString());
        };
        ServiceProfile.prototype.auth1Login = function () {
            return new ServiceProfile(ServiceProfile.AUTH1LOGIN.toString());
        };
        ServiceProfile.prototype.auth1Logout = function () {
            return new ServiceProfile(ServiceProfile.AUTH1LOGOUT.toString());
        };
        ServiceProfile.prototype.auth1Token = function () {
            return new ServiceProfile(ServiceProfile.AUTH1TOKEN.toString());
        };
        ServiceProfile.prototype.autoComplete = function () {
            return new ServiceProfile(ServiceProfile.AUTOCOMPLETE.toString());
        };
        ServiceProfile.prototype.iiif1ImageLevel1 = function () {
            return new ServiceProfile(ServiceProfile.IIIF1IMAGELEVEL1.toString());
        };
        ServiceProfile.prototype.iiif1ImageLevel2 = function () {
            return new ServiceProfile(ServiceProfile.IIIF1IMAGELEVEL2.toString());
        };
        ServiceProfile.prototype.iiif2ImageLevel1 = function () {
            return new ServiceProfile(ServiceProfile.IIIF2IMAGELEVEL1.toString());
        };
        ServiceProfile.prototype.iiif2ImageLevel2 = function () {
            return new ServiceProfile(ServiceProfile.IIIF2IMAGELEVEL2.toString());
        };
        ServiceProfile.prototype.ixif = function () {
            return new ServiceProfile(ServiceProfile.IXIF.toString());
        };
        ServiceProfile.prototype.login = function () {
            return new ServiceProfile(ServiceProfile.AUTHLOGIN.toString());
        };
        ServiceProfile.prototype.clickThrough = function () {
            return new ServiceProfile(ServiceProfile.AUTHCLICKTHROUGH.toString());
        };
        ServiceProfile.prototype.restricted = function () {
            return new ServiceProfile(ServiceProfile.AUTHRESTRICTED.toString());
        };
        ServiceProfile.prototype.logout = function () {
            return new ServiceProfile(ServiceProfile.AUTHLOGOUT.toString());
        };
        ServiceProfile.prototype.otherManifestations = function () {
            return new ServiceProfile(ServiceProfile.OTHERMANIFESTATIONS.toString());
        };
        ServiceProfile.prototype.search = function () {
            return new ServiceProfile(ServiceProfile.SEARCH.toString());
        };
        ServiceProfile.prototype.stanfordIIIFImageCompliance1 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString());
        };
        ServiceProfile.prototype.stanfordIIIFImageCompliance2 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString());
        };
        ServiceProfile.prototype.stanfordIIIFImageConformance1 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString());
        };
        ServiceProfile.prototype.stanfordIIIFImageConformance2 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString());
        };
        ServiceProfile.prototype.stanfordIIIF1ImageCompliance1 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString());
        };
        ServiceProfile.prototype.stanfordIIIF1ImageCompliance2 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString());
        };
        ServiceProfile.prototype.stanfordIIIF1ImageConformance1 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString());
        };
        ServiceProfile.prototype.stanfordIIIF1ImageConformance2 = function () {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString());
        };
        ServiceProfile.prototype.token = function () {
            return new ServiceProfile(ServiceProfile.AUTHTOKEN.toString());
        };
        ServiceProfile.prototype.trackingExtensions = function () {
            return new ServiceProfile(ServiceProfile.TRACKINGEXTENSIONS.toString());
        };
        ServiceProfile.prototype.uiExtensions = function () {
            return new ServiceProfile(ServiceProfile.UIEXTENSIONS.toString());
        };
        ServiceProfile.prototype.printExtensions = function () {
            return new ServiceProfile(ServiceProfile.PRINTEXTENSIONS.toString());
        };
        ServiceProfile.prototype.shareExtensions = function () {
            return new ServiceProfile(ServiceProfile.SHAREEXTENSIONS.toString());
        };
        // image api
        ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE0 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/compliance.html#level0");
        ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/compliance.html#level1");
        ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/compliance.html#level2");
        ServiceProfile.STANFORDIIIFIMAGECONFORMANCE0 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/conformance.html#level0");
        ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/conformance.html#level1");
        ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/conformance.html#level2");
        ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE0 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0");
        ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1");
        ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2");
        ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE0 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level0");
        ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1");
        ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2 = new ServiceProfile("http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2");
        ServiceProfile.IIIF1IMAGELEVEL0 = new ServiceProfile("http://iiif.io/api/image/1/level0.json");
        ServiceProfile.IIIF1IMAGELEVEL0PROFILE = new ServiceProfile("http://iiif.io/api/image/1/profiles/level0.json");
        ServiceProfile.IIIF1IMAGELEVEL1 = new ServiceProfile("http://iiif.io/api/image/1/level1.json");
        ServiceProfile.IIIF1IMAGELEVEL1PROFILE = new ServiceProfile("http://iiif.io/api/image/1/profiles/level1.json");
        ServiceProfile.IIIF1IMAGELEVEL2 = new ServiceProfile("http://iiif.io/api/image/1/level2.json");
        ServiceProfile.IIIF1IMAGELEVEL2PROFILE = new ServiceProfile("http://iiif.io/api/image/1/profiles/level2.json");
        ServiceProfile.IIIF2IMAGELEVEL0 = new ServiceProfile("http://iiif.io/api/image/2/level0.json");
        ServiceProfile.IIIF2IMAGELEVEL0PROFILE = new ServiceProfile("http://iiif.io/api/image/2/profiles/level0.json");
        ServiceProfile.IIIF2IMAGELEVEL1 = new ServiceProfile("http://iiif.io/api/image/2/level1.json");
        ServiceProfile.IIIF2IMAGELEVEL1PROFILE = new ServiceProfile("http://iiif.io/api/image/2/profiles/level1.json");
        ServiceProfile.IIIF2IMAGELEVEL2 = new ServiceProfile("http://iiif.io/api/image/2/level2.json");
        ServiceProfile.IIIF2IMAGELEVEL2PROFILE = new ServiceProfile("http://iiif.io/api/image/2/profiles/level2.json");
        // auth api
        ServiceProfile.AUTHCLICKTHROUGH = new ServiceProfile("http://iiif.io/api/auth/0/login/clickthrough");
        ServiceProfile.AUTHLOGIN = new ServiceProfile("http://iiif.io/api/auth/0/login");
        ServiceProfile.AUTHLOGOUT = new ServiceProfile("http://iiif.io/api/auth/0/logout");
        ServiceProfile.AUTHRESTRICTED = new ServiceProfile("http://iiif.io/api/auth/0/login/restricted");
        ServiceProfile.AUTHTOKEN = new ServiceProfile("http://iiif.io/api/auth/0/token");
        ServiceProfile.AUTH1CLICKTHROUGH = new ServiceProfile("http://iiif.io/api/auth/1/clickthrough");
        ServiceProfile.AUTH1EXTERNAL = new ServiceProfile("http://iiif.io/api/auth/1/external");
        ServiceProfile.AUTH1KIOSK = new ServiceProfile("http://iiif.io/api/auth/1/kiosk");
        ServiceProfile.AUTH1LOGIN = new ServiceProfile("http://iiif.io/api/auth/1/login");
        ServiceProfile.AUTH1LOGOUT = new ServiceProfile("http://iiif.io/api/auth/1/logout");
        ServiceProfile.AUTH1TOKEN = new ServiceProfile("http://iiif.io/api/auth/1/token");
        // search api
        ServiceProfile.AUTOCOMPLETE = new ServiceProfile("http://iiif.io/api/search/0/autocomplete");
        ServiceProfile.SEARCH = new ServiceProfile("http://iiif.io/api/search/0/search");
        // extensions
        ServiceProfile.TRACKINGEXTENSIONS = new ServiceProfile("http://universalviewer.io/tracking-extensions-profile");
        ServiceProfile.UIEXTENSIONS = new ServiceProfile("http://universalviewer.io/ui-extensions-profile");
        ServiceProfile.PRINTEXTENSIONS = new ServiceProfile("http://universalviewer.io/print-extensions-profile");
        ServiceProfile.SHAREEXTENSIONS = new ServiceProfile("http://universalviewer.io/share-extensions-profile");
        // other
        ServiceProfile.OTHERMANIFESTATIONS = new ServiceProfile("http://iiif.io/api/otherManifestations.json");
        ServiceProfile.IXIF = new ServiceProfile("http://wellcomelibrary.org/ld/ixif/0/alpha.json");
        return ServiceProfile;
    }(Manifesto.StringValue));
    Manifesto.ServiceProfile = ServiceProfile;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var ViewingDirection = /** @class */ (function (_super) {
        __extends(ViewingDirection, _super);
        function ViewingDirection() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // todo: use getters when ES3 target is no longer required.
        ViewingDirection.prototype.leftToRight = function () {
            return new ViewingDirection(ViewingDirection.LEFTTORIGHT.toString());
        };
        ViewingDirection.prototype.rightToLeft = function () {
            return new ViewingDirection(ViewingDirection.RIGHTTOLEFT.toString());
        };
        ViewingDirection.prototype.topToBottom = function () {
            return new ViewingDirection(ViewingDirection.TOPTOBOTTOM.toString());
        };
        ViewingDirection.prototype.bottomToTop = function () {
            return new ViewingDirection(ViewingDirection.BOTTOMTOTOP.toString());
        };
        ViewingDirection.LEFTTORIGHT = new ViewingDirection("left-to-right");
        ViewingDirection.RIGHTTOLEFT = new ViewingDirection("right-to-left");
        ViewingDirection.TOPTOBOTTOM = new ViewingDirection("top-to-bottom");
        ViewingDirection.BOTTOMTOTOP = new ViewingDirection("bottom-to-top");
        return ViewingDirection;
    }(Manifesto.StringValue));
    Manifesto.ViewingDirection = ViewingDirection;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var ViewingHint = /** @class */ (function (_super) {
        __extends(ViewingHint, _super);
        function ViewingHint() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // todo: use getters when ES3 target is no longer required.
        ViewingHint.prototype.continuous = function () {
            return new ViewingHint(ViewingHint.CONTINUOUS.toString());
        };
        ViewingHint.prototype.empty = function () {
            return new ViewingHint(ViewingHint.EMPTY.toString());
        };
        ViewingHint.prototype.individuals = function () {
            return new ViewingHint(ViewingHint.INDIVIDUALS.toString());
        };
        ViewingHint.prototype.nonPaged = function () {
            return new ViewingHint(ViewingHint.NONPAGED.toString());
        };
        ViewingHint.prototype.paged = function () {
            return new ViewingHint(ViewingHint.PAGED.toString());
        };
        ViewingHint.prototype.top = function () {
            return new ViewingHint(ViewingHint.TOP.toString());
        };
        ViewingHint.CONTINUOUS = new ViewingHint("continuous");
        ViewingHint.EMPTY = new ViewingHint("");
        ViewingHint.INDIVIDUALS = new ViewingHint("individuals");
        ViewingHint.NONPAGED = new ViewingHint("non-paged");
        ViewingHint.PAGED = new ViewingHint("paged");
        ViewingHint.TOP = new ViewingHint("top");
        return ViewingHint;
    }(Manifesto.StringValue));
    Manifesto.ViewingHint = ViewingHint;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    var JSONLDResource = /** @class */ (function () {
        function JSONLDResource(jsonld) {
            this.__jsonld = jsonld;
            this.context = this.getProperty('context');
            this.id = this.getProperty('id');
        }
        JSONLDResource.prototype.getProperty = function (name) {
            var prop = null;
            if (this.__jsonld) {
                prop = this.__jsonld[name];
                if (!prop) {
                    // property may have a prepended '@'
                    prop = this.__jsonld['@' + name];
                }
            }
            return prop;
        };
        return JSONLDResource;
    }());
    Manifesto.JSONLDResource = JSONLDResource;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var ManifestResource = /** @class */ (function (_super) {
        __extends(ManifestResource, _super);
        function ManifestResource(jsonld, options) {
            var _this = _super.call(this, jsonld) || this;
            _this.options = options;
            return _this;
        }
        ManifestResource.prototype.getIIIFResourceType = function () {
            return new Manifesto.IIIFResourceType(Manifesto.Utils.normaliseType(this.getProperty('type')));
        };
        ManifestResource.prototype.getLabel = function () {
            return Manifesto.TranslationCollection.parse(this.getProperty('label'), this.options.locale);
        };
        ManifestResource.prototype.getMetadata = function () {
            var _metadata = this.getProperty('metadata');
            var metadata = [];
            if (!_metadata)
                return metadata;
            for (var i = 0; i < _metadata.length; i++) {
                var item = _metadata[i];
                var metadataItem = new Manifesto.MetadataItem(this.options.locale);
                metadataItem.parse(item);
                metadata.push(metadataItem);
            }
            return metadata;
        };
        ManifestResource.prototype.getRendering = function (format) {
            var renderings = this.getRenderings();
            // normalise format to string
            if (typeof (format) !== 'string') {
                format = format.toString();
            }
            for (var i = 0; i < renderings.length; i++) {
                var rendering = renderings[i];
                if (rendering.getFormat().toString() === format) {
                    return rendering;
                }
            }
            return null;
        };
        ManifestResource.prototype.getRenderings = function () {
            var rendering;
            // if passing a manifesto-parsed object, use the __jsonld.rendering property,
            // otherwise look for a rendering property
            if (this.__jsonld) {
                rendering = this.__jsonld.rendering;
            }
            else {
                rendering = this.rendering;
            }
            var renderings = [];
            if (!rendering)
                return renderings;
            // coerce to array
            if (!Array.isArray(rendering)) {
                rendering = [rendering];
            }
            for (var i = 0; i < rendering.length; i++) {
                var r = rendering[i];
                renderings.push(new Manifesto.Rendering(r, this.options));
            }
            return renderings;
        };
        ManifestResource.prototype.getService = function (profile) {
            return Manifesto.Utils.getService(this, profile);
        };
        ManifestResource.prototype.getServices = function () {
            return Manifesto.Utils.getServices(this);
        };
        ManifestResource.prototype.getThumbnail = function () {
            var thumbnail = this.getProperty('thumbnail');
            if (Array.isArray(thumbnail)) {
                thumbnail = thumbnail[0];
            }
            if (thumbnail) {
                return new Manifesto.Thumbnail(thumbnail, this.options);
            }
            return null;
        };
        ManifestResource.prototype.isAnnotation = function () {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.ANNOTATION.toString();
        };
        ManifestResource.prototype.isCanvas = function () {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.CANVAS.toString();
        };
        ManifestResource.prototype.isCollection = function () {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.COLLECTION.toString();
        };
        ManifestResource.prototype.isManifest = function () {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.MANIFEST.toString();
        };
        ManifestResource.prototype.isRange = function () {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.RANGE.toString();
        };
        ManifestResource.prototype.isSequence = function () {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.SEQUENCE.toString();
        };
        return ManifestResource;
    }(Manifesto.JSONLDResource));
    Manifesto.ManifestResource = ManifestResource;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var Resource = /** @class */ (function (_super) {
        __extends(Resource, _super);
        function Resource(jsonld, options) {
            return _super.call(this, jsonld, options) || this;
        }
        Resource.prototype.getFormat = function () {
            var format = this.getProperty('format');
            if (format) {
                return new Manifesto.MediaType(format.toLowerCase());
            }
            return null;
        };
        Resource.prototype.getResources = function () {
            var resources = [];
            if (!this.__jsonld.resources)
                return resources;
            for (var i = 0; i < this.__jsonld.resources.length; i++) {
                var a = this.__jsonld.resources[i];
                var annotation = new Manifesto.Annotation(a, this.options);
                resources.push(annotation);
            }
            return resources;
        };
        Resource.prototype.getType = function () {
            var type = this.getProperty('type');
            if (type) {
                return new Manifesto.ResourceType(Manifesto.Utils.normaliseType(type));
            }
            return null;
        };
        Resource.prototype.getWidth = function () {
            return this.getProperty('width');
        };
        Resource.prototype.getHeight = function () {
            return this.getProperty('height');
        };
        Resource.prototype.getMaxWidth = function () {
            return this.getProperty('maxWidth');
        };
        Resource.prototype.getMaxHeight = function () {
            var maxHeight = this.getProperty('maxHeight');
            // if a maxHeight hasn't been specified, default to maxWidth.
            // maxWidth in essence becomes maxEdge
            if (!maxHeight) {
                return this.getMaxWidth();
            }
            return null;
        };
        return Resource;
    }(Manifesto.ManifestResource));
    Manifesto.Resource = Resource;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var Canvas = /** @class */ (function (_super) {
        __extends(Canvas, _super);
        function Canvas(jsonld, options) {
            return _super.call(this, jsonld, options) || this;
        }
        // http://iiif.io/api/image/2.1/#canonical-uri-syntax
        Canvas.prototype.getCanonicalImageUri = function (w) {
            var id = null;
            var region = 'full';
            var rotation = 0;
            var quality = 'default';
            var width = w;
            var size;
            // if an info.json has been loaded
            if (this.externalResource && this.externalResource.data && this.externalResource.data['@id']) {
                id = this.externalResource.data['@id'];
                if (!width) {
                    width = this.externalResource.data.width;
                }
                if (this.externalResource.data['@context']) {
                    if (this.externalResource.data['@context'].indexOf('/1.0/context.json') > -1 ||
                        this.externalResource.data['@context'].indexOf('/1.1/context.json') > -1 ||
                        this.externalResource.data['@context'].indexOf('/1/context.json') > -1) {
                        quality = 'native';
                    }
                }
            }
            else {
                // info.json hasn't been loaded yet
                var images = this.getImages();
                if (images && images.length) {
                    var firstImage = images[0];
                    var resource = firstImage.getResource();
                    var services = resource.getServices();
                    if (!width) {
                        width = resource.getWidth();
                    }
                    if (services.length) {
                        var service = services[0];
                        id = service.id;
                        quality = Manifesto.Utils.getImageQuality(service.getProfile());
                    }
                    else if (width === resource.getWidth()) {
                        // if the passed width is the same as the resource width
                        // i.e. not looking for a thumbnail
                        // return the full size image.
                        // used for download options when loading static images.
                        return resource.id;
                    }
                }
                // todo: should this be moved to getThumbUri?
                if (!id) {
                    var thumbnail = this.getProperty('thumbnail');
                    if (thumbnail) {
                        if (typeof (thumbnail) === 'string') {
                            return thumbnail;
                        }
                        else {
                            return thumbnail['@id'];
                        }
                    }
                }
            }
            size = width + ',';
            // trim off trailing '/'
            if (id && id.endsWith('/')) {
                id = id.substr(0, id.length - 1);
            }
            var uri = [id, region, size, rotation, quality + '.jpg'].join('/');
            return uri;
        };
        Canvas.prototype.getMaxDimensions = function () {
            var maxDimensions = null;
            var profile;
            if (this.externalResource.data && this.externalResource.data.profile) {
                profile = this.externalResource.data.profile;
                if (Array.isArray(profile)) {
                    profile = profile.en().where(function (p) { return p["maxWidth" || "maxwidth"]; }).first();
                    if (profile) {
                        maxDimensions = new Manifesto.Size(profile.maxWidth, profile.maxHeight ? profile.maxHeight : profile.maxWidth);
                    }
                }
            }
            return maxDimensions;
        };
        // Presentation API 3.0
        Canvas.prototype.getContent = function () {
            var content = [];
            var items = this.__jsonld.items || this.__jsonld.content;
            if (!items)
                return content;
            // should be contained in an AnnotationPage
            var annotationPage = null;
            if (items.length) {
                annotationPage = new Manifesto.AnnotationPage(items[0], this.options);
            }
            if (!annotationPage) {
                return content;
            }
            var annotations = annotationPage.getItems();
            for (var i = 0; i < annotations.length; i++) {
                var a = annotations[i];
                var annotation = new Manifesto.Annotation(a, this.options);
                content.push(annotation);
            }
            return content;
        };
        Canvas.prototype.getDuration = function () {
            return this.getProperty('duration');
        };
        Canvas.prototype.getImages = function () {
            var images = [];
            if (!this.__jsonld.images)
                return images;
            for (var i = 0; i < this.__jsonld.images.length; i++) {
                var a = this.__jsonld.images[i];
                var annotation = new Manifesto.Annotation(a, this.options);
                images.push(annotation);
            }
            return images;
        };
        Canvas.prototype.getIndex = function () {
            return this.getProperty('index');
        };
        Canvas.prototype.getOtherContent = function () {
            var _this = this;
            var otherContent = Array.isArray(this.getProperty('otherContent')) ?
                this.getProperty('otherContent') :
                [this.getProperty('otherContent')];
            var canonicalComparison = function (typeA, typeB) {
                if (typeof typeA !== 'string' || typeof typeB !== 'string') {
                    return false;
                }
                return typeA.toLowerCase() === typeA.toLowerCase();
            };
            var otherPromises = otherContent
                .filter(function (otherContent) { return otherContent && canonicalComparison(otherContent['@type'], 'sc:AnnotationList'); })
                .map(function (annotationList, i) { return ((new Manifesto.AnnotationList(annotationList['label'] || "Annotation list " + i, annotationList, _this.options))); })
                .map(function (annotationList) { return annotationList.load(); });
            return Promise.all(otherPromises);
        };
        // Prefer thumbnail service to image service if supplied and if
        // the thumbnail service can provide a satisfactory size +/- x pixels.
        // this is used to get thumb URIs *before* the info.json has been requested
        // and populate thumbnails in a viewer.
        // the publisher may also provide pre-computed fixed-size thumbs for better performance.
        //getThumbUri(width: number): string {
        //
        //    var uri;
        //    var images: IAnnotation[] = this.getImages();
        //
        //    if (images && images.length) {
        //        var firstImage = images[0];
        //        var resource: IResource = firstImage.getResource();
        //        var services: IService[] = resource.getServices();
        //
        //        for (let i = 0; i < services.length; i++) {
        //            var service: IService = services[i];
        //            var id = service.id;
        //
        //            if (!_endsWith(id, '/')) {
        //                id += '/';
        //            }
        //
        //            uri = id + 'full/' + width + ',/0/' + Utils.getImageQuality(service.getProfile()) + '.jpg';
        //        }
        //    }
        //
        //    return uri;
        //}
        //getType(): CanvasType {
        //    return new CanvasType(this.getProperty('@type').toLowerCase());
        //}
        Canvas.prototype.getWidth = function () {
            return this.getProperty('width');
        };
        Canvas.prototype.getHeight = function () {
            return this.getProperty('height');
        };
        return Canvas;
    }(Manifesto.Resource));
    Manifesto.Canvas = Canvas;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var IIIFResource = /** @class */ (function (_super) {
        __extends(IIIFResource, _super);
        function IIIFResource(jsonld, options) {
            var _this = _super.call(this, jsonld, options) || this;
            _this.index = -1;
            _this.isLoaded = false;
            var defaultOptions = {
                defaultLabel: '-',
                locale: 'en-GB',
                resource: _this,
                pessimisticAccessControl: false
            };
            _this.options = Object.assign(defaultOptions, options);
            return _this;
        }
        IIIFResource.prototype.getAttribution = function () {
            var attribution = this.getProperty('attribution');
            if (attribution) {
                return Manifesto.TranslationCollection.parse(attribution, this.options.locale);
            }
            return [];
        };
        IIIFResource.prototype.getDescription = function () {
            var description = this.getProperty('description');
            if (description) {
                return Manifesto.TranslationCollection.parse(description, this.options.locale);
            }
            return [];
        };
        IIIFResource.prototype.getIIIFResourceType = function () {
            return new Manifesto.IIIFResourceType(Manifesto.Utils.normaliseType(this.getProperty('type')));
        };
        IIIFResource.prototype.getLogo = function () {
            var logo = this.getProperty('logo');
            if (!logo)
                return null;
            if (typeof (logo) === 'string')
                return logo;
            return logo['@id'];
        };
        IIIFResource.prototype.getLicense = function () {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('license'), this.options.locale);
        };
        IIIFResource.prototype.getNavDate = function () {
            return new Date(this.getProperty('navDate'));
        };
        IIIFResource.prototype.getRelated = function () {
            return this.getProperty('related');
        };
        IIIFResource.prototype.getSeeAlso = function () {
            return this.getProperty('seeAlso');
        };
        IIIFResource.prototype.getLabel = function () {
            var label = this.getProperty('label');
            if (label) {
                return Manifesto.TranslationCollection.parse(label, this.options.locale);
            }
            return [];
        };
        IIIFResource.prototype.getDefaultLabel = function () {
            return Manifesto.TranslationCollection.getValue(this.getLabel());
        };
        IIIFResource.prototype.getDefaultTree = function () {
            this.defaultTree = new Manifesto.TreeNode('root');
            this.defaultTree.data = this;
            return this.defaultTree;
        };
        IIIFResource.prototype.isCollection = function () {
            if (this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.COLLECTION.toString()) {
                return true;
            }
            return false;
        };
        IIIFResource.prototype.isManifest = function () {
            if (this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.MANIFEST.toString()) {
                return true;
            }
            return false;
        };
        IIIFResource.prototype.load = function () {
            var that = this;
            return new Promise(function (resolve, reject) {
                if (that.isLoaded) {
                    resolve(that);
                }
                else {
                    var options_1 = that.options;
                    options_1.navDate = that.getNavDate();
                    var id = that.__jsonld.id;
                    if (!id) {
                        id = that.__jsonld['@id'];
                    }
                    Manifesto.Utils.loadResource(id).then(function (data) {
                        that.parentLabel = Manifesto.TranslationCollection.getValue(that.getLabel(), options_1.locale);
                        var parsed = Manifesto.Deserialiser.parse(data, options_1);
                        that = Object.assign(that, parsed);
                        that.index = options_1.index;
                        resolve(that);
                    });
                }
            });
        };
        return IIIFResource;
    }(Manifesto.ManifestResource));
    Manifesto.IIIFResource = IIIFResource;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var Manifest = /** @class */ (function (_super) {
        __extends(Manifest, _super);
        function Manifest(jsonld, options) {
            var _this = _super.call(this, jsonld, options) || this;
            _this.index = 0;
            _this._allRanges = null;
            _this.items = [];
            _this._topRanges = [];
            if (_this.__jsonld.structures && _this.__jsonld.structures.length) {
                var topRanges = _this._getTopRanges();
                for (var i = 0; i < topRanges.length; i++) {
                    var range = topRanges[i];
                    _this._parseRanges(range, String(i));
                }
            }
            return _this;
        }
        Manifest.prototype.getDefaultTree = function () {
            _super.prototype.getDefaultTree.call(this);
            this.defaultTree.data.type = Manifesto.Utils.normaliseType(Manifesto.TreeNodeType.MANIFEST.toString());
            if (!this.isLoaded) {
                return this.defaultTree;
            }
            var topRanges = this.getTopRanges();
            // if there are any ranges in the manifest, default to the first 'top' range or generated placeholder
            if (topRanges.length) {
                topRanges[0].getTree(this.defaultTree);
            }
            Manifesto.Utils.generateTreeNodeIds(this.defaultTree);
            return this.defaultTree;
        };
        Manifest.prototype._getTopRanges = function () {
            var topRanges = [];
            if (this.__jsonld.structures && this.__jsonld.structures.length) {
                for (var i = 0; i < this.__jsonld.structures.length; i++) {
                    var json = this.__jsonld.structures[i];
                    if (json.viewingHint === Manifesto.ViewingHint.TOP.toString()) {
                        topRanges.push(json);
                    }
                }
                // if no viewingHint="top" range was found, create a default one
                if (!topRanges.length) {
                    var range = {};
                    range.ranges = this.__jsonld.structures;
                    topRanges.push(range);
                }
            }
            return topRanges;
        };
        Manifest.prototype.getTopRanges = function () {
            return this._topRanges;
        };
        Manifest.prototype._getRangeById = function (id) {
            if (this.__jsonld.structures && this.__jsonld.structures.length) {
                for (var i = 0; i < this.__jsonld.structures.length; i++) {
                    var r = this.__jsonld.structures[i];
                    if (r['@id'] === id || r.id === id) {
                        return r;
                    }
                }
            }
            return null;
        };
        //private _parseRangeCanvas(json: any, range: IRange): void {
        // todo: currently this isn't needed
        //var canvas: IJSONLDResource = new JSONLDResource(json);
        //range.items.push(<IManifestResource>canvas);
        //}
        Manifest.prototype._parseRanges = function (r, path, parentRange) {
            var range;
            var id = null;
            if (typeof (r) === 'string') {
                id = r;
                r = this._getRangeById(id);
            }
            if (!r) {
                console.warn("Range:", id, "does not exist");
                return;
            }
            range = new Manifesto.Range(r, this.options);
            range.parentRange = parentRange;
            range.path = path;
            if (!parentRange) {
                this._topRanges.push(range);
            }
            else {
                parentRange.items.push(range);
            }
            var items = r.items || r.members;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    // todo: use an ItemType constant?
                    if (item['@type'] && item['@type'].toLowerCase() === 'sc:range' || item['type'] && item['type'].toLowerCase() === 'range') {
                        this._parseRanges(item, path + '/' + i, range);
                    }
                    else if (item['@type'] && item['@type'].toLowerCase() === 'sc:canvas' || item['type'] && item['type'].toLowerCase() === 'canvas') {
                        // store the ids on the __jsonld object to be used by Range.getCanvasIds()
                        if (!range.canvases) {
                            range.canvases = [];
                        }
                        var id_1 = item.id || item['@id'];
                        range.canvases.push(id_1);
                    }
                }
            }
            else if (r.ranges) {
                for (var i = 0; i < r.ranges.length; i++) {
                    this._parseRanges(r.ranges[i], path + '/' + i, range);
                }
            }
        };
        Manifest.prototype.getAllRanges = function () {
            if (this._allRanges != null)
                return this._allRanges;
            this._allRanges = [];
            var topRanges = this.getTopRanges();
            for (var i = 0; i < topRanges.length; i++) {
                var topRange = topRanges[i];
                if (topRange.id) {
                    this._allRanges.push(topRange); // it might be a placeholder root range
                }
                var subRanges = topRange.getRanges();
                this._allRanges = this._allRanges.concat(subRanges.en().traverseUnique(function (range) { return range.getRanges(); }).toArray());
            }
            return this._allRanges;
        };
        Manifest.prototype.getRangeById = function (id) {
            var ranges = this.getAllRanges();
            for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                if (range.id === id) {
                    return range;
                }
            }
            return null;
        };
        Manifest.prototype.getRangeByPath = function (path) {
            var ranges = this.getAllRanges();
            for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                if (range.path === path) {
                    return range;
                }
            }
            return null;
        };
        Manifest.prototype.getSequences = function () {
            if (this.items.length) {
                return this.items;
            }
            // IxIF mediaSequences overrode sequences, so need to be checked first.
            // deprecate this when presentation 3 ships
            var items = this.__jsonld.mediaSequences || this.__jsonld.sequences;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    var s = items[i];
                    var sequence = new Manifesto.Sequence(s, this.options);
                    this.items.push(sequence);
                }
            }
            else if (this.__jsonld.items) {
                var sequence = new Manifesto.Sequence(this.__jsonld.items, this.options);
                this.items.push(sequence);
            }
            return this.items;
        };
        Manifest.prototype.getSequenceByIndex = function (sequenceIndex) {
            return this.getSequences()[sequenceIndex];
        };
        Manifest.prototype.getTotalSequences = function () {
            return this.getSequences().length;
        };
        Manifest.prototype.getManifestType = function () {
            var service = this.getService(Manifesto.ServiceProfile.UIEXTENSIONS);
            if (service) {
                return new Manifesto.ManifestType(service.getProperty('manifestType'));
            }
            return new Manifesto.ManifestType('');
        };
        Manifest.prototype.getTrackingLabel = function () {
            var service = this.getService(Manifesto.ServiceProfile.TRACKINGEXTENSIONS);
            if (service) {
                return service.getProperty('trackingLabel');
            }
            return '';
        };
        Manifest.prototype.isMultiSequence = function () {
            return this.getTotalSequences() > 1;
        };
        Manifest.prototype.isPagingEnabled = function () {
            return this.getViewingHint().toString() === Manifesto.ViewingHint.PAGED.toString();
        };
        Manifest.prototype.getViewingDirection = function () {
            if (this.getProperty('viewingDirection')) {
                return new Manifesto.ViewingDirection(this.getProperty('viewingDirection'));
            }
            return Manifesto.ViewingDirection.LEFTTORIGHT;
        };
        Manifest.prototype.getViewingHint = function () {
            if (this.getProperty('viewingHint')) {
                return new Manifesto.ViewingHint(this.getProperty('viewingHint'));
            }
            return Manifesto.ViewingHint.EMPTY;
        };
        return Manifest;
    }(Manifesto.IIIFResource));
    Manifesto.Manifest = Manifest;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var Collection = /** @class */ (function (_super) {
        __extends(Collection, _super);
        function Collection(jsonld, options) {
            var _this = _super.call(this, jsonld, options) || this;
            _this.items = [];
            _this._collections = null;
            _this._manifests = null;
            jsonld.__collection = _this;
            return _this;
        }
        Collection.prototype.getCollections = function () {
            if (this._collections) {
                return this._collections;
            }
            return this._collections = this.items.en().where(function (m) { return m.isCollection(); }).toArray();
        };
        Collection.prototype.getManifests = function () {
            if (this._manifests) {
                return this._manifests;
            }
            return this._manifests = this.items.en().where(function (m) { return m.isManifest(); }).toArray();
        };
        Collection.prototype.getCollectionByIndex = function (collectionIndex) {
            var collections = this.getCollections();
            if (!collections[collectionIndex]) {
                throw new Error("Collection index is outside range of array");
            }
            var collection = collections[collectionIndex];
            collection.options.index = collectionIndex;
            // id for collection MUST be dereferenceable
            return collection.load();
        };
        Collection.prototype.getManifestByIndex = function (manifestIndex) {
            var manifests = this.getManifests();
            if (!manifests[manifestIndex]) {
                throw new Error("Manifest index is outside range of array");
            }
            var manifest = manifests[manifestIndex];
            manifest.options.index = manifestIndex;
            return manifest.load();
        };
        Collection.prototype.getTotalCollections = function () {
            return this.getCollections().length;
        };
        Collection.prototype.getTotalManifests = function () {
            return this.getManifests().length;
        };
        Collection.prototype.getTotalItems = function () {
            return this.items.length;
        };
        Collection.prototype.getViewingDirection = function () {
            if (this.getProperty('viewingDirection')) {
                return new Manifesto.ViewingDirection(this.getProperty('viewingDirection'));
            }
            return Manifesto.ViewingDirection.LEFTTORIGHT;
        };
        /**
         * Get a tree of sub collections and manifests, using each child manifest's first 'top' range.
         */
        Collection.prototype.getDefaultTree = function () {
            _super.prototype.getDefaultTree.call(this);
            this.defaultTree.data.type = Manifesto.Utils.normaliseType(Manifesto.TreeNodeType.COLLECTION.toString());
            this._parseManifests(this);
            this._parseCollections(this);
            Manifesto.Utils.generateTreeNodeIds(this.defaultTree);
            return this.defaultTree;
        };
        Collection.prototype._parseManifests = function (parentCollection) {
            if (parentCollection.getManifests() && parentCollection.getManifests().length) {
                for (var i = 0; i < parentCollection.getManifests().length; i++) {
                    var manifest = parentCollection.getManifests()[i];
                    var tree = manifest.getDefaultTree();
                    tree.label = manifest.parentLabel || Manifesto.TranslationCollection.getValue(manifest.getLabel(), this.options.locale) || 'manifest ' + (i + 1);
                    tree.navDate = manifest.getNavDate();
                    tree.data.id = manifest.id;
                    tree.data.type = Manifesto.Utils.normaliseType(Manifesto.TreeNodeType.MANIFEST.toString());
                    parentCollection.defaultTree.addNode(tree);
                }
            }
        };
        Collection.prototype._parseCollections = function (parentCollection) {
            if (parentCollection.getCollections() && parentCollection.getCollections().length) {
                for (var i = 0; i < parentCollection.getCollections().length; i++) {
                    var collection = parentCollection.getCollections()[i];
                    var tree = collection.getDefaultTree();
                    tree.label = collection.parentLabel || Manifesto.TranslationCollection.getValue(collection.getLabel(), this.options.locale) || 'collection ' + (i + 1);
                    tree.navDate = collection.getNavDate();
                    tree.data.id = collection.id;
                    tree.data.type = Manifesto.Utils.normaliseType(Manifesto.TreeNodeType.COLLECTION.toString());
                    parentCollection.defaultTree.addNode(tree);
                    this._parseCollections(collection);
                }
            }
        };
        return Collection;
    }(Manifesto.IIIFResource));
    Manifesto.Collection = Collection;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var Range = /** @class */ (function (_super) {
        __extends(Range, _super);
        function Range(jsonld, options) {
            var _this = _super.call(this, jsonld, options) || this;
            _this._ranges = null;
            _this.canvases = null;
            _this.items = [];
            return _this;
        }
        Range.prototype.getCanvasIds = function () {
            if (this.__jsonld.canvases) {
                return this.__jsonld.canvases;
            }
            else if (this.canvases) {
                return this.canvases;
            }
            return [];
        };
        // getCanvases(): ICanvas[] {
        //     if (this._canvases) {
        //         return this._canvases;
        //     }
        //     return this._canvases = <ICanvas[]>this.items.en().where(m => m.isCanvas()).toArray();
        // }
        Range.prototype.getRanges = function () {
            if (this._ranges) {
                return this._ranges;
            }
            return this._ranges = this.items.en().where(function (m) { return m.isRange(); }).toArray();
        };
        Range.prototype.getBehavior = function () {
            if (this.getProperty('behavior')) {
                return new Manifesto.Behavior(this.getProperty('behavior'));
            }
            return null;
        };
        Range.prototype.getViewingDirection = function () {
            if (this.getProperty('viewingDirection')) {
                return new Manifesto.ViewingDirection(this.getProperty('viewingDirection'));
            }
            return null;
        };
        Range.prototype.getViewingHint = function () {
            if (this.getProperty('viewingHint')) {
                return new Manifesto.ViewingHint(this.getProperty('viewingHint'));
            }
            return null;
        };
        Range.prototype.getTree = function (treeRoot) {
            treeRoot.data = this;
            this.treeNode = treeRoot;
            var ranges = this.getRanges();
            if (ranges && ranges.length) {
                for (var i = 0; i < ranges.length; i++) {
                    var range = ranges[i];
                    var node = new Manifesto.TreeNode();
                    treeRoot.addNode(node);
                    this._parseTreeNode(node, range);
                }
            }
            Manifesto.Utils.generateTreeNodeIds(treeRoot);
            return treeRoot;
        };
        Range.prototype._parseTreeNode = function (node, range) {
            node.label = Manifesto.TranslationCollection.getValue(range.getLabel(), this.options.locale);
            node.data = range;
            node.data.type = Manifesto.Utils.normaliseType(Manifesto.TreeNodeType.RANGE.toString());
            range.treeNode = node;
            var ranges = range.getRanges();
            if (ranges && ranges.length) {
                for (var i = 0; i < ranges.length; i++) {
                    var childRange = ranges[i];
                    var behavior = childRange.getBehavior();
                    if (behavior && behavior.toString() === Manifesto.Behavior.NONAV.toString()) {
                        continue;
                    }
                    else {
                        var childNode = new Manifesto.TreeNode();
                        node.addNode(childNode);
                        this._parseTreeNode(childNode, childRange);
                    }
                }
            }
        };
        return Range;
    }(Manifesto.ManifestResource));
    Manifesto.Range = Range;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var Rendering = /** @class */ (function (_super) {
        __extends(Rendering, _super);
        function Rendering(jsonld, options) {
            return _super.call(this, jsonld, options) || this;
        }
        Rendering.prototype.getFormat = function () {
            return new Manifesto.RenderingFormat(this.getProperty('format'));
        };
        return Rendering;
    }(Manifesto.ManifestResource));
    Manifesto.Rendering = Rendering;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var Sequence = /** @class */ (function (_super) {
        __extends(Sequence, _super);
        function Sequence(jsonld, options) {
            var _this = _super.call(this, jsonld, options) || this;
            _this.items = [];
            _this._thumbnails = null;
            return _this;
        }
        Sequence.prototype.getCanvases = function () {
            if (this.items.length) {
                return this.items;
            }
            var items = this.__jsonld.canvases || this.__jsonld.elements;
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    var c = items[i];
                    var canvas = new Manifesto.Canvas(c, this.options);
                    canvas.index = i;
                    this.items.push(canvas);
                }
            }
            else if (this.__jsonld) {
                for (var i = 0; i < this.__jsonld.length; i++) {
                    var c = this.__jsonld[i];
                    var canvas = new Manifesto.Canvas(c, this.options);
                    canvas.index = i;
                    this.items.push(canvas);
                }
            }
            return this.items;
        };
        Sequence.prototype.getCanvasById = function (id) {
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                // normalise canvas id
                var canvasId = Manifesto.Utils.normaliseUrl(canvas.id);
                if (Manifesto.Utils.normaliseUrl(id) === canvasId) {
                    return canvas;
                }
            }
            return null;
        };
        Sequence.prototype.getCanvasByIndex = function (canvasIndex) {
            return this.getCanvases()[canvasIndex];
        };
        Sequence.prototype.getCanvasIndexById = function (id) {
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                if (canvas.id === id) {
                    return i;
                }
            }
            return null;
        };
        Sequence.prototype.getCanvasIndexByLabel = function (label, foliated) {
            label = label.trim();
            if (!isNaN(label)) {
                label = parseInt(label, 10).toString(); // trim any preceding zeros.
                if (foliated)
                    label += 'r'; // default to recto
            }
            var doublePageRegExp = /(\d*)\D+(\d*)/;
            var match, regExp, regStr, labelPart1, labelPart2;
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                // check if there's a literal match
                if (Manifesto.TranslationCollection.getValue(canvas.getLabel(), this.options.locale) === label) {
                    return i;
                }
                // check if there's a match for double-page spreads e.g. 100-101, 100_101, 100 101
                match = doublePageRegExp.exec(label);
                if (!match)
                    continue;
                labelPart1 = match[1];
                labelPart2 = match[2];
                if (!labelPart2)
                    continue;
                regStr = "^" + labelPart1 + "\\D+" + labelPart2 + "$";
                regExp = new RegExp(regStr);
                if (regExp.test(canvas.getLabel().toString())) {
                    return i;
                }
            }
            return -1;
        };
        Sequence.prototype.getLastCanvasLabel = function (alphanumeric) {
            for (var i = this.getTotalCanvases() - 1; i >= 0; i--) {
                var canvas = this.getCanvasByIndex(i);
                var label = Manifesto.TranslationCollection.getValue(canvas.getLabel(), this.options.locale);
                if (alphanumeric) {
                    var regExp = /^[a-zA-Z0-9]*$/;
                    if (regExp.test(label)) {
                        return label;
                    }
                }
                else if (label) {
                    return label;
                }
            }
            return this.options.defaultLabel;
        };
        Sequence.prototype.getLastPageIndex = function () {
            return this.getTotalCanvases() - 1;
        };
        Sequence.prototype.getNextPageIndex = function (canvasIndex, pagingEnabled) {
            var index;
            if (pagingEnabled) {
                var indices = this.getPagedIndices(canvasIndex);
                if (this.getViewingDirection().toString() === Manifesto.ViewingDirection.RIGHTTOLEFT.toString()) {
                    index = indices[0] + 1;
                }
                else {
                    index = indices[indices.length - 1] + 1;
                }
            }
            else {
                index = canvasIndex + 1;
            }
            if (index > this.getLastPageIndex()) {
                return -1;
            }
            return index;
        };
        Sequence.prototype.getPagedIndices = function (canvasIndex, pagingEnabled) {
            var indices = [];
            if (!pagingEnabled) {
                indices.push(canvasIndex);
            }
            else {
                if (this.isFirstCanvas(canvasIndex) || this.isLastCanvas(canvasIndex)) {
                    indices = [canvasIndex];
                }
                else if (canvasIndex % 2) {
                    indices = [canvasIndex, canvasIndex + 1];
                }
                else {
                    indices = [canvasIndex - 1, canvasIndex];
                }
                if (this.getViewingDirection().toString() === Manifesto.ViewingDirection.RIGHTTOLEFT.toString()) {
                    indices = indices.reverse();
                }
            }
            return indices;
        };
        Sequence.prototype.getPrevPageIndex = function (canvasIndex, pagingEnabled) {
            var index;
            if (pagingEnabled) {
                var indices = this.getPagedIndices(canvasIndex);
                if (this.getViewingDirection().toString() === Manifesto.ViewingDirection.RIGHTTOLEFT.toString()) {
                    index = indices[indices.length - 1] - 1;
                }
                else {
                    index = indices[0] - 1;
                }
            }
            else {
                index = canvasIndex - 1;
            }
            return index;
        };
        Sequence.prototype.getStartCanvasIndex = function () {
            var startCanvas = this.getStartCanvas();
            if (startCanvas) {
                // if there's a startCanvas attribute, loop through the canvases and return the matching index.
                for (var i = 0; i < this.getTotalCanvases(); i++) {
                    var canvas = this.getCanvasByIndex(i);
                    if (canvas.id === startCanvas)
                        return i;
                }
            }
            // default to first canvas.
            return 0;
        };
        // todo: deprecate
        Sequence.prototype.getThumbs = function (width, height) {
            console.warn('getThumbs will be deprecated, use getThumbnails instead');
            var thumbs = [];
            var totalCanvases = this.getTotalCanvases();
            for (var i = 0; i < totalCanvases; i++) {
                var canvas = this.getCanvasByIndex(i);
                var thumb = new Manifesto.Thumb(width, canvas);
                thumbs.push(thumb);
            }
            return thumbs;
        };
        Sequence.prototype.getThumbnails = function () {
            if (this._thumbnails != null)
                return this._thumbnails;
            this._thumbnails = [];
            var canvases = this.getCanvases();
            for (var i = 0; i < canvases.length; i++) {
                var thumbnail = canvases[i].getThumbnail();
                if (thumbnail) {
                    this._thumbnails.push(thumbnail);
                }
            }
            return this._thumbnails;
        };
        Sequence.prototype.getStartCanvas = function () {
            return this.getProperty('startCanvas');
        };
        Sequence.prototype.getTotalCanvases = function () {
            return this.getCanvases().length;
        };
        Sequence.prototype.getViewingDirection = function () {
            if (this.getProperty('viewingDirection')) {
                return new Manifesto.ViewingDirection(this.getProperty('viewingDirection'));
            }
            else if (this.options.resource.getViewingDirection) {
                return this.options.resource.getViewingDirection();
            }
            return Manifesto.ViewingDirection.LEFTTORIGHT;
        };
        Sequence.prototype.getViewingHint = function () {
            if (this.getProperty('viewingHint')) {
                return new Manifesto.ViewingHint(this.getProperty('viewingHint'));
            }
            return Manifesto.ViewingHint.EMPTY;
        };
        Sequence.prototype.isCanvasIndexOutOfRange = function (canvasIndex) {
            return canvasIndex > this.getTotalCanvases() - 1;
        };
        Sequence.prototype.isFirstCanvas = function (canvasIndex) {
            return canvasIndex === 0;
        };
        Sequence.prototype.isLastCanvas = function (canvasIndex) {
            return canvasIndex === this.getTotalCanvases() - 1;
        };
        Sequence.prototype.isMultiCanvas = function () {
            return this.getTotalCanvases() > 1;
        };
        Sequence.prototype.isPagingEnabled = function () {
            return this.getViewingHint().toString() === Manifesto.ViewingHint.PAGED.toString();
        };
        // checks if the number of canvases is even - therefore has a front and back cover
        Sequence.prototype.isTotalCanvasesEven = function () {
            return this.getTotalCanvases() % 2 === 0;
        };
        return Sequence;
    }(Manifesto.ManifestResource));
    Manifesto.Sequence = Sequence;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    var Deserialiser = /** @class */ (function () {
        function Deserialiser() {
        }
        Deserialiser.parse = function (manifest, options) {
            if (typeof manifest === 'string') {
                manifest = JSON.parse(manifest);
            }
            return this.parseJson(manifest, options);
        };
        Deserialiser.parseJson = function (json, options) {
            var resource;
            // have options been passed for the manifest to inherit?
            if (options) {
                if (options.navDate && !isNaN(options.navDate.getTime())) {
                    json.navDate = options.navDate.toString();
                }
            }
            if (json['@type']) {
                switch (json['@type']) {
                    case 'sc:Collection':
                        resource = this.parseCollection(json, options);
                        break;
                    case 'sc:Manifest':
                        resource = this.parseManifest(json, options);
                        break;
                    default:
                        return null;
                }
            }
            else {
                // presentation 3
                switch (json['type']) {
                    case 'Collection':
                        resource = this.parseCollection(json, options);
                        break;
                    case 'Manifest':
                        resource = this.parseManifest(json, options);
                        break;
                    default:
                        return null;
                }
            }
            // Top-level resource was loaded from a URI, so flag it to prevent
            // unnecessary reload:
            resource.isLoaded = true;
            return resource;
        };
        Deserialiser.parseCollection = function (json, options) {
            var collection = new Manifesto.Collection(json, options);
            if (options) {
                collection.index = options.index || 0;
            }
            else {
                collection.index = 0;
            }
            this.parseCollections(collection, options);
            this.parseManifests(collection, options);
            this.parseItems(collection, options);
            return collection;
        };
        Deserialiser.parseCollections = function (collection, options) {
            var items;
            if (collection.__jsonld.collections) {
                items = collection.__jsonld.collections;
            }
            else if (collection.__jsonld.items) {
                items = collection.__jsonld.items.en().where(function (m) { return m.type.toLowerCase() === 'collection'; }).toArray();
            }
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    if (options) {
                        options.index = i;
                    }
                    var item = this.parseCollection(items[i], options);
                    item.index = i;
                    item.parentCollection = collection;
                    collection.items.push(item);
                }
            }
        };
        Deserialiser.parseManifest = function (json, options) {
            var manifest = new Manifesto.Manifest(json, options);
            return manifest;
        };
        Deserialiser.parseManifests = function (collection, options) {
            var items;
            if (collection.__jsonld.manifests) {
                items = collection.__jsonld.manifests;
            }
            else if (collection.__jsonld.items) {
                items = collection.__jsonld.items.en().where(function (m) { return m.type.toLowerCase() === 'manifest'; }).toArray();
            }
            if (items) {
                for (var i = 0; i < items.length; i++) {
                    var item = this.parseManifest(items[i], options);
                    item.index = i;
                    item.parentCollection = collection;
                    collection.items.push(item);
                }
            }
        };
        Deserialiser.parseItem = function (json, options) {
            if (json['@type']) {
                if (json['@type'].toLowerCase() === 'sc:manifest') {
                    return this.parseManifest(json, options);
                }
                else if (json['@type'].toLowerCase() === 'sc:collection') {
                    return this.parseCollection(json, options);
                }
            }
            else if (json.type) {
                if (json.type.toLowerCase() === 'manifest') {
                    return this.parseManifest(json, options);
                }
                else if (json.type.toLowerCase() === 'collection') {
                    return this.parseCollection(json, options);
                }
            }
            return null;
        };
        Deserialiser.parseItems = function (collection, options) {
            var items = collection.__jsonld.members || collection.__jsonld.items;
            if (items) {
                var _loop_1 = function (i) {
                    if (options) {
                        options.index = i;
                    }
                    var item = this_1.parseItem(items[i], options);
                    if (!item)
                        return { value: void 0 };
                    // only add to items if not already parsed from backwards-compatible collections/manifests arrays
                    if (collection.items.en().where(function (m) { return m.id === item.id; }).first()) {
                        return "continue";
                    }
                    item.index = i;
                    item.parentCollection = collection;
                    collection.items.push(item);
                };
                var this_1 = this;
                for (var i = 0; i < items.length; i++) {
                    var state_1 = _loop_1(i);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
            }
        };
        return Deserialiser;
    }());
    Manifesto.Deserialiser = Deserialiser;
    var Serialiser = /** @class */ (function () {
        function Serialiser() {
        }
        Serialiser.serialise = function (manifest) {
            // todo
            return "";
        };
        return Serialiser;
    }());
    Manifesto.Serialiser = Serialiser;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var Service = /** @class */ (function (_super) {
        __extends(Service, _super);
        function Service(jsonld, options) {
            return _super.call(this, jsonld, options) || this;
        }
        Service.prototype.getProfile = function () {
            var profile = this.getProperty('profile');
            if (!profile) {
                profile = this.getProperty('dcterms:conformsTo');
            }
            if (Array.isArray(profile)) {
                return new Manifesto.ServiceProfile(profile[0]);
            }
            return new Manifesto.ServiceProfile(profile);
        };
        Service.prototype.getConfirmLabel = function () {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('confirmLabel'), this.options.locale);
        };
        Service.prototype.getDescription = function () {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('description'), this.options.locale);
        };
        Service.prototype.getFailureDescription = function () {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('failureDescription'), this.options.locale);
        };
        Service.prototype.getFailureHeader = function () {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('failureHeader'), this.options.locale);
        };
        Service.prototype.getHeader = function () {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('header'), this.options.locale);
        };
        Service.prototype.getServiceLabel = function () {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('label'), this.options.locale);
        };
        Service.prototype.getInfoUri = function () {
            var infoUri = this.id;
            if (!infoUri.endsWith('/')) {
                infoUri += '/';
            }
            infoUri += 'info.json';
            return infoUri;
        };
        return Service;
    }(Manifesto.ManifestResource));
    Manifesto.Service = Service;
})(Manifesto || (Manifesto = {}));


var Manifesto;
(function (Manifesto) {
    // todo: deprecate
    // this is used by Sequence.getThumbs
    var Thumb = /** @class */ (function () {
        function Thumb(width, canvas) {
            this.data = canvas;
            this.index = canvas.index;
            this.width = width;
            var heightRatio = canvas.getHeight() / canvas.getWidth();
            if (heightRatio) {
                this.height = Math.floor(this.width * heightRatio);
            }
            else {
                this.height = width;
            }
            this.uri = canvas.getCanonicalImageUri(width);
            this.label = Manifesto.TranslationCollection.getValue(canvas.getLabel()); // todo: pass locale?
        }
        return Thumb;
    }());
    Manifesto.Thumb = Thumb;
})(Manifesto || (Manifesto = {}));


var Manifesto;
(function (Manifesto) {
    var TreeNode = /** @class */ (function () {
        function TreeNode(label, data) {
            this.label = label;
            this.data = data || {};
            this.nodes = [];
        }
        TreeNode.prototype.addNode = function (node) {
            this.nodes.push(node);
            node.parentNode = this;
        };
        TreeNode.prototype.isCollection = function () {
            return this.data.type === Manifesto.Utils.normaliseType(Manifesto.TreeNodeType.COLLECTION.toString());
        };
        TreeNode.prototype.isManifest = function () {
            return this.data.type === Manifesto.Utils.normaliseType(Manifesto.TreeNodeType.MANIFEST.toString());
        };
        TreeNode.prototype.isRange = function () {
            return this.data.type === Manifesto.Utils.normaliseType(Manifesto.TreeNodeType.RANGE.toString());
        };
        return TreeNode;
    }());
    Manifesto.TreeNode = TreeNode;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var TreeNodeType = /** @class */ (function (_super) {
        __extends(TreeNodeType, _super);
        function TreeNodeType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // todo: use getters when ES3 target is no longer required.
        TreeNodeType.prototype.collection = function () {
            return new TreeNodeType(TreeNodeType.COLLECTION.toString());
        };
        TreeNodeType.prototype.manifest = function () {
            return new TreeNodeType(TreeNodeType.MANIFEST.toString());
        };
        TreeNodeType.prototype.range = function () {
            return new TreeNodeType(TreeNodeType.RANGE.toString());
        };
        TreeNodeType.COLLECTION = new TreeNodeType("collection");
        TreeNodeType.MANIFEST = new TreeNodeType("manifest");
        TreeNodeType.RANGE = new TreeNodeType("range");
        return TreeNodeType;
    }(Manifesto.StringValue));
    Manifesto.TreeNodeType = TreeNodeType;
})(Manifesto || (Manifesto = {}));

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var http = require('http');
var https = require('https');
var url = require('url');
var Manifesto;
(function (Manifesto) {
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.getMediaType = function (type) {
            type = type.toLowerCase();
            type = type.split(';')[0];
            return type.trim();
        };
        Utils.getImageQuality = function (profile) {
            var p = profile.toString();
            if (p === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString() ||
                p === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString() ||
                p === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString() ||
                p === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString() ||
                p === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString() ||
                p === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString() ||
                p === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString() ||
                p === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString() ||
                p === Manifesto.ServiceProfile.IIIF1IMAGELEVEL1.toString() ||
                p === Manifesto.ServiceProfile.IIIF1IMAGELEVEL1PROFILE.toString() ||
                p === Manifesto.ServiceProfile.IIIF1IMAGELEVEL2.toString() ||
                p === Manifesto.ServiceProfile.IIIF1IMAGELEVEL2PROFILE.toString()) {
                return 'native';
            }
            return 'default';
        };
        Utils.getInexactLocale = function (locale) {
            if (locale.indexOf('-') !== -1) {
                return locale.substr(0, locale.indexOf('-'));
            }
            return locale;
        };
        Utils.getLocalisedValue = function (resource, locale) {
            // if the resource is not an array of translations, return the string.
            if (!Array.isArray(resource)) {
                return resource;
            }
            // test for exact match
            for (var i = 0; i < resource.length; i++) {
                var value_1 = resource[i];
                var language_1 = value_1['@language'];
                if (locale === language_1) {
                    return value_1['@value'];
                }
            }
            // test for inexact match
            var match = locale.substr(0, locale.indexOf('-'));
            for (var i = 0; i < resource.length; i++) {
                var value = resource[i];
                var language = value['@language'];
                if (language === match) {
                    return value['@value'];
                }
            }
            return null;
        };
        Utils.generateTreeNodeIds = function (treeNode, index) {
            if (index === void 0) { index = 0; }
            var id;
            if (!treeNode.parentNode) {
                id = '0';
            }
            else {
                id = treeNode.parentNode.id + "-" + index;
            }
            treeNode.id = id;
            for (var i = 0; i < treeNode.nodes.length; i++) {
                var n = treeNode.nodes[i];
                Utils.generateTreeNodeIds(n, i);
            }
        };
        Utils.normaliseType = function (type) {
            type = type.toLowerCase();
            if (type.indexOf(':') !== -1) {
                var split = type.split(':');
                return split[1];
            }
            return type;
        };
        Utils.normaliseUrl = function (url) {
            url = url.substr(url.indexOf('://'));
            if (url.indexOf('#') !== -1) {
                url = url.split('#')[0];
            }
            return url;
        };
        Utils.normalisedUrlsMatch = function (url1, url2) {
            return Utils.normaliseUrl(url1) === Utils.normaliseUrl(url2);
        };
        Utils.isImageProfile = function (profile) {
            if (Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE0.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE0.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE0.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE0.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE0.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF1IMAGELEVEL0.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF1IMAGELEVEL0PROFILE.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF1IMAGELEVEL1.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF1IMAGELEVEL1PROFILE.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF1IMAGELEVEL2.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF1IMAGELEVEL2PROFILE.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF2IMAGELEVEL0.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF2IMAGELEVEL0PROFILE.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF2IMAGELEVEL1.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF2IMAGELEVEL1PROFILE.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF2IMAGELEVEL2.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF2IMAGELEVEL2PROFILE.toString())) {
                return true;
            }
            return false;
        };
        Utils.isLevel0ImageProfile = function (profile) {
            if (Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE0.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE0.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE0.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE0.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF1IMAGELEVEL0.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF1IMAGELEVEL0PROFILE.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF2IMAGELEVEL0.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF2IMAGELEVEL0PROFILE.toString())) {
                return true;
            }
            return false;
        };
        Utils.isLevel1ImageProfile = function (profile) {
            if (Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF1IMAGELEVEL1.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF1IMAGELEVEL1PROFILE.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF2IMAGELEVEL1.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF2IMAGELEVEL1PROFILE.toString())) {
                return true;
            }
            return false;
        };
        Utils.isLevel2ImageProfile = function (profile) {
            if (Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF1IMAGELEVEL2.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF1IMAGELEVEL2PROFILE.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF2IMAGELEVEL2.toString()) ||
                Utils.normalisedUrlsMatch(profile.toString(), Manifesto.ServiceProfile.IIIF2IMAGELEVEL2PROFILE.toString())) {
                return true;
            }
            return false;
        };
        Utils.loadResource = function (uri) {
            return new Promise(function (resolve, reject) {
                var u = url.parse(uri);
                var req;
                var opts = {
                    host: u.hostname,
                    port: u.port,
                    path: u.path,
                    method: "GET",
                    withCredentials: false
                };
                switch (u.protocol) {
                    case 'https:':
                        req = https.request(opts, function (response) {
                            var result = "";
                            response.on('data', function (chunk) {
                                result += chunk;
                            });
                            response.on('end', function () {
                                resolve(result);
                            });
                        });
                        req.on('error', function (error) {
                            reject(error);
                        });
                        req.end();
                        break;
                    case 'dat:':
                        var xhr_1 = new XMLHttpRequest();
                        xhr_1.onreadystatechange = function () {
                            if (xhr_1.readyState === 4) {
                                resolve(xhr_1.response);
                            }
                        };
                        xhr_1.open("GET", uri, true);
                        xhr_1.send();
                        break;
                    default:
                        req = http.request(opts, function (response) {
                            var result = "";
                            response.on('data', function (chunk) {
                                result += chunk;
                            });
                            response.on('end', function () {
                                resolve(result);
                            });
                        });
                        req.on('error', function (error) {
                            reject(error);
                        });
                        req.end();
                        break;
                }
            });
        };
        Utils.loadExternalResourcesAuth1 = function (resources, openContentProviderInteraction, openTokenService, getStoredAccessToken, userInteractedWithContentProvider, getContentProviderInteraction, handleMovedTemporarily, showOutOfOptionsMessages) {
            return new Promise(function (resolve, reject) {
                var promises = resources.map(function (resource) {
                    return Utils.loadExternalResourceAuth1(resource, openContentProviderInteraction, openTokenService, getStoredAccessToken, userInteractedWithContentProvider, getContentProviderInteraction, handleMovedTemporarily, showOutOfOptionsMessages);
                });
                Promise.all(promises)
                    .then(function () {
                    resolve(resources);
                })["catch"](function (error) {
                    reject(error);
                });
            });
        };
        Utils.loadExternalResourceAuth1 = function (resource, openContentProviderInteraction, openTokenService, getStoredAccessToken, userInteractedWithContentProvider, getContentProviderInteraction, handleMovedTemporarily, showOutOfOptionsMessages) {
            return __awaiter(this, void 0, void 0, function () {
                var storedAccessToken;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getStoredAccessToken(resource)];
                        case 1:
                            storedAccessToken = _a.sent();
                            if (!storedAccessToken) return [3 /*break*/, 6];
                            return [4 /*yield*/, resource.getData(storedAccessToken)];
                        case 2:
                            _a.sent();
                            if (!(resource.status === HTTPStatusCode.OK)) return [3 /*break*/, 3];
                            return [2 /*return*/, resource];
                        case 3: 
                        // the stored token is no good for this resource
                        return [4 /*yield*/, Utils.doAuthChain(resource, openContentProviderInteraction, openTokenService, userInteractedWithContentProvider, getContentProviderInteraction, handleMovedTemporarily, showOutOfOptionsMessages)];
                        case 4:
                            // the stored token is no good for this resource
                            _a.sent();
                            _a.label = 5;
                        case 5:
                            if (resource.status === HTTPStatusCode.OK || resource.status === HTTPStatusCode.MOVED_TEMPORARILY) {
                                return [2 /*return*/, resource];
                            }
                            throw Utils.createAuthorizationFailedError();
                        case 6: return [4 /*yield*/, resource.getData()];
                        case 7:
                            _a.sent();
                            if (!(resource.status === HTTPStatusCode.MOVED_TEMPORARILY || resource.status === HTTPStatusCode.UNAUTHORIZED)) return [3 /*break*/, 9];
                            return [4 /*yield*/, Utils.doAuthChain(resource, openContentProviderInteraction, openTokenService, userInteractedWithContentProvider, getContentProviderInteraction, handleMovedTemporarily, showOutOfOptionsMessages)];
                        case 8:
                            _a.sent();
                            _a.label = 9;
                        case 9:
                            if (resource.status === HTTPStatusCode.OK || resource.status === HTTPStatusCode.MOVED_TEMPORARILY) {
                                return [2 /*return*/, resource];
                            }
                            throw Utils.createAuthorizationFailedError();
                    }
                });
            });
        };
        Utils.doAuthChain = function (resource, openContentProviderInteraction, openTokenService, userInteractedWithContentProvider, getContentProviderInteraction, handleMovedTemporarily, showOutOfOptionsMessages) {
            return __awaiter(this, void 0, void 0, function () {
                var externalService, kioskService, clickThroughService, loginService, serviceToTry, lastAttempted, kioskInteraction, contentProviderInteraction, contentProviderInteraction;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // This function enters the flowchart at the < External? > junction
                            // http://iiif.io/api/auth/1.0/#workflow-from-the-browser-client-perspective
                            if (!resource.isAccessControlled()) {
                                return [2 /*return*/, resource]; // no services found
                            }
                            externalService = resource.externalService;
                            if (externalService) {
                                externalService.options = resource.options;
                            }
                            kioskService = resource.kioskService;
                            if (kioskService) {
                                kioskService.options = resource.options;
                            }
                            clickThroughService = resource.clickThroughService;
                            if (clickThroughService) {
                                clickThroughService.options = resource.options;
                            }
                            loginService = resource.loginService;
                            if (loginService) {
                                loginService.options = resource.options;
                            }
                            if (!(!resource.isResponseHandled && resource.status === HTTPStatusCode.MOVED_TEMPORARILY)) return [3 /*break*/, 2];
                            return [4 /*yield*/, handleMovedTemporarily(resource)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, resource];
                        case 2:
                            serviceToTry = null;
                            lastAttempted = null;
                            // repetition of logic is left in these steps for clarity:
                            // Looking for external pattern
                            serviceToTry = externalService;
                            if (!serviceToTry) return [3 /*break*/, 4];
                            lastAttempted = serviceToTry;
                            return [4 /*yield*/, Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry)];
                        case 3:
                            _a.sent();
                            return [2 /*return*/, resource];
                        case 4:
                            // Looking for kiosk pattern
                            serviceToTry = kioskService;
                            if (!serviceToTry) return [3 /*break*/, 7];
                            lastAttempted = serviceToTry;
                            kioskInteraction = openContentProviderInteraction(serviceToTry);
                            if (!kioskInteraction) return [3 /*break*/, 7];
                            return [4 /*yield*/, userInteractedWithContentProvider(kioskInteraction)];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry)];
                        case 6:
                            _a.sent();
                            return [2 /*return*/, resource];
                        case 7:
                            // The code for the next two patterns is identical (other than the profile name).
                            // The difference is in the expected behaviour of
                            //
                            //    await userInteractedWithContentProvider(contentProviderInteraction);
                            // 
                            // For clickthrough the opened window should close immediately having established
                            // a session, whereas for login the user might spend some time entering credentials etc.
                            // Looking for clickthrough pattern
                            serviceToTry = clickThroughService;
                            if (!serviceToTry) return [3 /*break*/, 11];
                            lastAttempted = serviceToTry;
                            return [4 /*yield*/, getContentProviderInteraction(resource, serviceToTry)];
                        case 8:
                            contentProviderInteraction = _a.sent();
                            if (!contentProviderInteraction) return [3 /*break*/, 11];
                            // should close immediately
                            return [4 /*yield*/, userInteractedWithContentProvider(contentProviderInteraction)];
                        case 9:
                            // should close immediately
                            _a.sent();
                            return [4 /*yield*/, Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry)];
                        case 10:
                            _a.sent();
                            return [2 /*return*/, resource];
                        case 11:
                            // Looking for login pattern
                            serviceToTry = loginService;
                            if (!serviceToTry) return [3 /*break*/, 15];
                            lastAttempted = serviceToTry;
                            return [4 /*yield*/, getContentProviderInteraction(resource, serviceToTry)];
                        case 12:
                            contentProviderInteraction = _a.sent();
                            if (!contentProviderInteraction) return [3 /*break*/, 15];
                            // we expect the user to spend some time interacting
                            return [4 /*yield*/, userInteractedWithContentProvider(contentProviderInteraction)];
                        case 13:
                            // we expect the user to spend some time interacting
                            _a.sent();
                            return [4 /*yield*/, Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry)];
                        case 14:
                            _a.sent();
                            return [2 /*return*/, resource];
                        case 15:
                            // nothing worked! Use the most recently tried service as the source of
                            // messages to show to the user.
                            if (lastAttempted) {
                                showOutOfOptionsMessages(lastAttempted);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        Utils.attemptResourceWithToken = function (resource, openTokenService, authService) {
            return __awaiter(this, void 0, void 0, function () {
                var tokenService, tokenMessage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            tokenService = authService.getService(Manifesto.ServiceProfile.AUTH1TOKEN.toString());
                            if (!tokenService) return [3 /*break*/, 3];
                            return [4 /*yield*/, openTokenService(resource, tokenService)];
                        case 1:
                            tokenMessage = _a.sent();
                            if (!(tokenMessage && tokenMessage.accessToken)) return [3 /*break*/, 3];
                            return [4 /*yield*/, resource.getData(tokenMessage)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, resource];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        Utils.loadExternalResourcesAuth09 = function (resources, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options) {
            return new Promise(function (resolve, reject) {
                var promises = resources.map(function (resource) {
                    return Utils.loadExternalResourceAuth09(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options);
                });
                Promise.all(promises)
                    .then(function () {
                    resolve(resources);
                })["catch"](function (error) {
                    reject(error);
                });
            });
        };
        // IIIF auth api pre v1.0
        // Keeping this around for now until the auth 1.0 implementation is stable
        Utils.loadExternalResourceAuth09 = function (resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options) {
            return new Promise(function (resolve, reject) {
                if (options && options.pessimisticAccessControl) {
                    // pessimistic: access control cookies may have been deleted.
                    // always request the access token for every access controlled info.json request
                    // returned access tokens are not stored, therefore the login window flashes for every request.
                    resource.getData().then(function () {
                        if (resource.isAccessControlled()) {
                            // if the resource has a click through service, use that.
                            if (resource.clickThroughService) {
                                resolve(clickThrough(resource));
                                //} else if(resource.restrictedService) {
                                resolve(restricted(resource));
                            }
                            else {
                                login(resource).then(function () {
                                    getAccessToken(resource, true).then(function (token) {
                                        resource.getData(token).then(function () {
                                            resolve(handleResourceResponse(resource));
                                        })["catch"](function (message) {
                                            reject(Utils.createInternalServerError(message));
                                        });
                                    })["catch"](function (message) {
                                        reject(Utils.createInternalServerError(message));
                                    });
                                })["catch"](function (message) {
                                    reject(Utils.createInternalServerError(message));
                                });
                            }
                        }
                        else {
                            // this info.json isn't access controlled, therefore no need to request an access token.
                            resolve(resource);
                        }
                    })["catch"](function (message) {
                        reject(Utils.createInternalServerError(message));
                    });
                }
                else {
                    // optimistic: access control cookies may not have been deleted.
                    // store access tokens to avoid login window flashes.
                    // if cookies are deleted a page refresh is required.
                    // try loading the resource using an access token that matches the info.json domain.
                    // if an access token is found, request the resource using it regardless of whether it is access controlled.
                    getStoredAccessToken(resource, tokenStorageStrategy).then(function (storedAccessToken) {
                        if (storedAccessToken) {
                            // try using the stored access token
                            resource.getData(storedAccessToken).then(function () {
                                // if the info.json loaded using the stored access token
                                if (resource.status === HTTPStatusCode.OK) {
                                    resolve(handleResourceResponse(resource));
                                }
                                else {
                                    // otherwise, load the resource data to determine the correct access control services.
                                    // if access controlled, do login.
                                    Utils.authorize(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken).then(function () {
                                        resolve(handleResourceResponse(resource));
                                    })["catch"](function (error) {
                                        // if (resource.restrictedService){
                                        //     reject(Utils.createRestrictedError());
                                        // } else {
                                        reject(Utils.createAuthorizationFailedError());
                                        //}
                                    });
                                }
                            })["catch"](function (error) {
                                reject(Utils.createAuthorizationFailedError());
                            });
                        }
                        else {
                            Utils.authorize(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken).then(function () {
                                resolve(handleResourceResponse(resource));
                            })["catch"](function (error) {
                                reject(Utils.createAuthorizationFailedError());
                            });
                        }
                    })["catch"](function (error) {
                        reject(Utils.createAuthorizationFailedError());
                    });
                }
            });
        };
        Utils.createError = function (name, message) {
            var error = new Error();
            error.message = message;
            error.name = name;
            return error;
        };
        Utils.createAuthorizationFailedError = function () {
            return Utils.createError(manifesto.StatusCodes.AUTHORIZATION_FAILED.toString(), "Authorization failed");
        };
        Utils.createRestrictedError = function () {
            return Utils.createError(manifesto.StatusCodes.RESTRICTED.toString(), "Restricted");
        };
        Utils.createInternalServerError = function (message) {
            return Utils.createError(manifesto.StatusCodes.INTERNAL_SERVER_ERROR.toString(), message);
        };
        Utils.authorize = function (resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken) {
            return new Promise(function (resolve, reject) {
                resource.getData().then(function () {
                    if (resource.isAccessControlled()) {
                        getStoredAccessToken(resource, tokenStorageStrategy).then(function (storedAccessToken) {
                            if (storedAccessToken) {
                                // try using the stored access token
                                resource.getData(storedAccessToken).then(function () {
                                    if (resource.status === HTTPStatusCode.OK) {
                                        resolve(resource); // happy path ended
                                    }
                                    else {
                                        // the stored token is no good for this resource
                                        Utils.showAuthInteraction(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, resolve, reject);
                                    }
                                })["catch"](function (message) {
                                    reject(Utils.createInternalServerError(message));
                                });
                            }
                            else {
                                // There was no stored token, but the user might have a cookie that will grant a token
                                getAccessToken(resource, false).then(function (accessToken) {
                                    if (accessToken) {
                                        storeAccessToken(resource, accessToken, tokenStorageStrategy).then(function () {
                                            // try using the fresh access token
                                            resource.getData(accessToken).then(function () {
                                                if (resource.status === HTTPStatusCode.OK) {
                                                    resolve(resource);
                                                }
                                                else {
                                                    // User has a token, but it's not good enough
                                                    Utils.showAuthInteraction(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, resolve, reject);
                                                }
                                            })["catch"](function (message) {
                                                reject(Utils.createInternalServerError(message));
                                            });
                                        })["catch"](function (message) {
                                            // not able to store access token
                                            reject(Utils.createInternalServerError(message));
                                        });
                                    }
                                    else {
                                        // The user did not have a cookie that granted a token
                                        Utils.showAuthInteraction(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, resolve, reject);
                                    }
                                });
                            }
                        })["catch"](function (message) {
                            reject(Utils.createInternalServerError(message));
                        });
                    }
                    else {
                        // this info.json isn't access controlled, therefore there's no need to request an access token
                        resolve(resource);
                    }
                });
            });
        };
        Utils.showAuthInteraction = function (resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, resolve, reject) {
            if (resource.status === HTTPStatusCode.MOVED_TEMPORARILY && !resource.isResponseHandled) {
                // if the resource was redirected to a degraded version
                // and the response hasn't been handled yet.
                // if the client wishes to trigger a login, set resource.isResponseHandled to true
                // and call loadExternalResources() again passing the resource.
                resolve(resource);
                // } else if (resource.restrictedService) {
                //     resolve(restricted(resource));
                //     // TODO: move to next etc
            }
            else if (resource.clickThroughService && !resource.isResponseHandled) {
                // if the resource has a click through service, use that.
                clickThrough(resource).then(function () {
                    getAccessToken(resource, true).then(function (accessToken) {
                        storeAccessToken(resource, accessToken, tokenStorageStrategy).then(function () {
                            resource.getData(accessToken).then(function () {
                                resolve(resource);
                            })["catch"](function (message) {
                                reject(Utils.createInternalServerError(message));
                            });
                        })["catch"](function (message) {
                            reject(Utils.createInternalServerError(message));
                        });
                    })["catch"](function (message) {
                        reject(Utils.createInternalServerError(message));
                    });
                });
            }
            else {
                // get an access token
                login(resource).then(function () {
                    getAccessToken(resource, true).then(function (accessToken) {
                        storeAccessToken(resource, accessToken, tokenStorageStrategy).then(function () {
                            resource.getData(accessToken).then(function () {
                                resolve(resource);
                            })["catch"](function (message) {
                                reject(Utils.createInternalServerError(message));
                            });
                        })["catch"](function (message) {
                            reject(Utils.createInternalServerError(message));
                        });
                    })["catch"](function (message) {
                        reject(Utils.createInternalServerError(message));
                    });
                });
            }
        };
        ;
        Utils.getService = function (resource, profile) {
            var services = this.getServices(resource);
            // coerce profile to string
            if (typeof (profile) !== 'string') {
                profile = profile.toString();
            }
            for (var i = 0; i < services.length; i++) {
                var service = services[i];
                if (service.getProfile().toString() === profile) {
                    return service;
                }
            }
            return null;
        };
        Utils.getResourceById = function (parentResource, id) {
            return [parentResource.__jsonld].en().traverseUnique(function (x) { return Utils.getAllArrays(x); })
                .first(function (r) { return r['@id'] === id; });
        };
        Utils.getAllArrays = function (obj) {
            var all = [].en();
            if (!obj)
                return all;
            for (var key in obj) {
                var val = obj[key];
                if (Array.isArray(val)) {
                    all = all.concat(val);
                }
            }
            return all;
        };
        Utils.getServices = function (resource) {
            var service;
            // if passing a manifesto-parsed object, use the __jsonld.service property,
            // otherwise look for a service property (info.json services)
            if (resource.__jsonld) {
                service = resource.__jsonld.service;
            }
            else {
                service = resource.service;
            }
            var services = [];
            if (!service)
                return services;
            // coerce to array
            if (!Array.isArray(service)) {
                service = [service];
            }
            for (var i = 0; i < service.length; i++) {
                var s = service[i];
                if (typeof (s) === 'string') {
                    var r = this.getResourceById(resource.options.resource, s);
                    if (r) {
                        services.push(new Manifesto.Service(r.__jsonld || r, resource.options));
                    }
                }
                else {
                    services.push(new Manifesto.Service(s, resource.options));
                }
            }
            return services;
        };
        return Utils;
    }());
    Manifesto.Utils = Utils;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    var MetadataItem = /** @class */ (function () {
        function MetadataItem(defaultLocale) {
            this.defaultLocale = defaultLocale;
        }
        MetadataItem.prototype.parse = function (resource) {
            this.resource = resource;
            this.label = Manifesto.TranslationCollection.parse(this.resource.label, this.defaultLocale);
            this.value = Manifesto.TranslationCollection.parse(this.resource.value, this.defaultLocale);
        };
        // shortcuts to get/set values based on default locale
        MetadataItem.prototype.getLabel = function () {
            if (this.label) {
                return Manifesto.TranslationCollection.getValue(this.label, this.defaultLocale);
            }
            return null;
        };
        MetadataItem.prototype.setLabel = function (value) {
            var _this = this;
            if (this.label && this.label.length) {
                var t = this.label.en().where(function (x) { return x.locale === _this.defaultLocale || x.locale === Manifesto.Utils.getInexactLocale(_this.defaultLocale); }).first();
                if (t)
                    t.value = value;
            }
        };
        MetadataItem.prototype.getValue = function () {
            if (this.value) {
                var locale = this.defaultLocale;
                // if the label has a locale, prefer that to the default locale
                if (this.label.length && this.label[0].locale) {
                    locale = this.label[0].locale;
                }
                return Manifesto.TranslationCollection.getValue(this.value, locale);
            }
            return null;
        };
        MetadataItem.prototype.setValue = function (value) {
            var _this = this;
            if (this.value && this.value.length) {
                var t = this.value.en().where(function (x) { return x.locale === _this.defaultLocale || x.locale === Manifesto.Utils.getInexactLocale(_this.defaultLocale); }).first();
                if (t)
                    t.value = value;
            }
        };
        return MetadataItem;
    }());
    Manifesto.MetadataItem = MetadataItem;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    var Translation = /** @class */ (function () {
        function Translation(value, locale) {
            this.value = value;
            this.locale = locale;
        }
        return Translation;
    }());
    Manifesto.Translation = Translation;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var TranslationCollection = /** @class */ (function (_super) {
        __extends(TranslationCollection, _super);
        function TranslationCollection() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TranslationCollection.parse = function (translation, defaultLocale) {
            var tc = [];
            var t;
            if (!translation) {
                return tc;
            }
            else if (Array.isArray(translation)) {
                for (var i = 0; i < translation.length; i++) {
                    var value = translation[i];
                    if (typeof (value) === 'string') {
                        t = new Manifesto.Translation(value, defaultLocale);
                    }
                    else {
                        t = new Manifesto.Translation(value['@value'], value['@language'] || defaultLocale);
                    }
                    tc.push(t);
                }
            }
            else if (typeof (translation) === 'string') {
                // if it's just a single string value, create one translation in the configured locale
                t = new Manifesto.Translation(translation, defaultLocale);
                tc.push(t);
                return tc;
            }
            else {
                // it's an object
                if (translation['@value']) {
                    // presentation 2
                    t = new Manifesto.Translation(translation['@value'], translation['@language'] || defaultLocale);
                    tc.push(t);
                }
                else {
                    // presentation 3
                    Object.keys(translation).forEach(function (key) {
                        // todo: support multiple values in array
                        if (translation[key].length) {
                            t = new Manifesto.Translation(translation[key][0], key);
                            tc.push(t);
                        }
                        else {
                            throw new Error('Translation must have a value');
                        }
                    });
                }
            }
            return tc;
        };
        TranslationCollection.getValue = function (translationCollection, locale) {
            if (translationCollection.length) {
                if (locale) {
                    var translation = translationCollection.en().where(function (t) { return t.locale === locale || Manifesto.Utils.getInexactLocale(t.locale) === Manifesto.Utils.getInexactLocale(locale); }).first();
                    if (translation) {
                        return translation.value;
                    }
                }
                // return the first valuel
                return translationCollection[0].value;
            }
            return null;
        };
        return TranslationCollection;
    }(Array));
    Manifesto.TranslationCollection = TranslationCollection;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    var Size = /** @class */ (function () {
        function Size(width, height) {
            this.width = width;
            this.height = height;
        }
        return Size;
    }());
    Manifesto.Size = Size;
})(Manifesto || (Manifesto = {}));

/// <reference types="http-status-codes" />
global.manifesto = global.Manifesto = module.exports = {
    AnnotationMotivation: new Manifesto.AnnotationMotivation(),
    IIIFResourceType: new Manifesto.IIIFResourceType(),
    ManifestType: new Manifesto.ManifestType(),
    MediaType: new Manifesto.MediaType(),
    MetadataItem: Manifesto.MetadataItem,
    RenderingFormat: new Manifesto.RenderingFormat(),
    ResourceType: new Manifesto.ResourceType(),
    ServiceProfile: new Manifesto.ServiceProfile(),
    Size: Manifesto.Size,
    Translation: Manifesto.Translation,
    TranslationCollection: Manifesto.TranslationCollection,
    TreeNode: Manifesto.TreeNode,
    TreeNodeType: new Manifesto.TreeNodeType(),
    Utils: Manifesto.Utils,
    ViewingDirection: new Manifesto.ViewingDirection(),
    ViewingHint: new Manifesto.ViewingHint(),
    StatusCodes: {
        AUTHORIZATION_FAILED: 1,
        FORBIDDEN: 2,
        INTERNAL_SERVER_ERROR: 3,
        RESTRICTED: 4
    },
    create: function (manifest, options) {
        return Manifesto.Deserialiser.parse(manifest, options);
    },
    loadManifest: function (uri) {
        return Manifesto.Utils.loadResource(uri);
    }
};

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var Annotation = /** @class */ (function (_super) {
        __extends(Annotation, _super);
        function Annotation(jsonld, options) {
            return _super.call(this, jsonld, options) || this;
        }
        Annotation.prototype.getBody = function () {
            var bodies = [];
            var body = this.getProperty('body');
            // todo: make this a generic "property that can be an object or array enumerator" util
            if (body) {
                if (Array.isArray(body)) {
                    for (var i = 0; i < body.length; i++) {
                        var b = body[i];
                        if (b.items) {
                            for (var i_1 = 0; i_1 < b.items.length; i_1++) {
                                var c = b.items[i_1];
                                bodies.push(new Manifesto.AnnotationBody(c, this.options));
                            }
                        }
                        else {
                            bodies.push(new Manifesto.AnnotationBody(b, this.options));
                        }
                    }
                }
                else if (body.items) {
                    for (var i = 0; i < body.items.length; i++) {
                        var b = body.items[i];
                        bodies.push(new Manifesto.AnnotationBody(b, this.options));
                    }
                }
                else {
                    bodies.push(new Manifesto.AnnotationBody(body, this.options));
                }
            }
            return bodies;
        };
        Annotation.prototype.getMotivation = function () {
            var motivation = this.getProperty('motivation');
            if (motivation) {
                return new Manifesto.AnnotationMotivation(motivation.toLowerCase());
            }
            return null;
        };
        // open annotation
        Annotation.prototype.getOn = function () {
            return this.getProperty('on');
        };
        Annotation.prototype.getTarget = function () {
            return this.getProperty('target');
        };
        Annotation.prototype.getResource = function () {
            return new Manifesto.Resource(this.getProperty('resource'), this.options);
        };
        return Annotation;
    }(Manifesto.ManifestResource));
    Manifesto.Annotation = Annotation;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var AnnotationBody = /** @class */ (function (_super) {
        __extends(AnnotationBody, _super);
        function AnnotationBody(jsonld, options) {
            return _super.call(this, jsonld, options) || this;
        }
        AnnotationBody.prototype.getFormat = function () {
            var format = this.getProperty('format');
            if (format) {
                return new Manifesto.MediaType(Manifesto.Utils.getMediaType(format));
            }
            return null;
        };
        AnnotationBody.prototype.getType = function () {
            var type = this.getProperty('type');
            if (type) {
                return new Manifesto.ResourceType(Manifesto.Utils.normaliseType(this.getProperty('type')));
            }
            return null;
        };
        return AnnotationBody;
    }(Manifesto.ManifestResource));
    Manifesto.AnnotationBody = AnnotationBody;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var AnnotationList = /** @class */ (function (_super) {
        __extends(AnnotationList, _super);
        function AnnotationList(label, jsonld, options) {
            var _this = _super.call(this, jsonld) || this;
            _this.label = label;
            _this.options = options;
            return _this;
        }
        AnnotationList.prototype.getIIIFResourceType = function () {
            return new Manifesto.IIIFResourceType(Manifesto.Utils.normaliseType(this.getProperty('type')));
        };
        AnnotationList.prototype.getLabel = function () {
            return this.label;
        };
        AnnotationList.prototype.getResources = function () {
            var _this = this;
            var resources = this.getProperty('resources');
            return resources.map(function (resource) { return new Manifesto.Annotation(resource, _this.options); });
        };
        AnnotationList.prototype.load = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (_this.isLoaded) {
                    resolve(_this);
                }
                else {
                    var id = _this.__jsonld.id;
                    if (!id) {
                        id = _this.__jsonld['@id'];
                    }
                    Manifesto.Utils.loadResource(id).then(function (data) {
                        _this.__jsonld = JSON.parse(data);
                        _this.context = _this.getProperty('context');
                        _this.id = _this.getProperty('id');
                        _this.isLoaded = true;
                        resolve(_this);
                    }).catch(reject);
                }
            });
        };
        return AnnotationList;
    }(Manifesto.JSONLDResource));
    Manifesto.AnnotationList = AnnotationList;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var AnnotationPage = /** @class */ (function (_super) {
        __extends(AnnotationPage, _super);
        function AnnotationPage(jsonld, options) {
            return _super.call(this, jsonld, options) || this;
        }
        AnnotationPage.prototype.getItems = function () {
            return this.getProperty('items');
        };
        return AnnotationPage;
    }(Manifesto.ManifestResource));
    Manifesto.AnnotationPage = AnnotationPage;
})(Manifesto || (Manifesto = {}));

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var Behavior = /** @class */ (function (_super) {
        __extends(Behavior, _super);
        function Behavior() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // todo: use getters when ES3 target is no longer required.
        Behavior.prototype.nonav = function () {
            return new Behavior(Behavior.NONAV.toString());
        };
        Behavior.NONAV = new Behavior("no-nav");
        return Behavior;
    }(Manifesto.StringValue));
    Manifesto.Behavior = Behavior;
})(Manifesto || (Manifesto = {}));

























var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Manifesto;
(function (Manifesto) {
    var Thumbnail = /** @class */ (function (_super) {
        __extends(Thumbnail, _super);
        function Thumbnail(jsonld, options) {
            return _super.call(this, jsonld, options) || this;
        }
        return Thumbnail;
    }(Manifesto.Resource));
    Manifesto.Thumbnail = Thumbnail;
})(Manifesto || (Manifesto = {}));
