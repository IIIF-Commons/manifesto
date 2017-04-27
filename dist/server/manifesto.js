// manifesto v2.0.7 https://github.com/viewdir/manifesto
var __extends=this&&this.__extends||function(){var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t])};return function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}(),exjs;!function(r){r.version="0.5.0"}(exjs||(exjs={}));var exjs;!function(r){Array.isArray||(Array.isArray=function(r){return"[object Array]"===Object.prototype.toString.call(r)})}(exjs||(exjs={}));var exjs;!function(r){var e=function(){function r(){}return r.prototype.getEnumerator=function(){return{moveNext:function(){return!1},current:void 0}},r.prototype.aggregate=function(r,e){for(var t=r,n=this.getEnumerator();n.moveNext();)t=e(t,n.current);return t},r.prototype.all=function(r){if(r)for(var e=this.getEnumerator(),t=0;e.moveNext();){if(!r(e.current,t))return!1;t++}return!0},r.prototype.any=function(r){for(var e=this.getEnumerator(),t=0;e.moveNext();){if(!r)return!0;if(r(e.current,t))return!0;t++}return!1},r.prototype.append=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];throw new Error("Not implemented")},r.prototype.apply=function(r){throw new Error("Not implemented")},r.prototype.at=function(r){for(var e=this.getEnumerator(),t=0;e.moveNext();){if(t===r)return e.current;t++}},r.prototype.average=function(r){var e=0,t=0;r=r||function(r){if("number"!=typeof r)throw new Error("Object is not a number.");return r};for(var n=this.getEnumerator();n.moveNext();)t+=r(n.current),e++;return 0===e?0:t/e},r.prototype.concat=function(r){throw new Error("Not implemented")},r.prototype.count=function(r){for(var e=0,t=this.getEnumerator();t.moveNext();)r&&!r(t.current)||e++;return e},r.prototype.difference=function(r,e){return e=e||function(r,e){return r===e},r instanceof Array&&(r=r.en()),{intersection:this.intersect(r,e).toArray().en(),aNotB:this.except(r,e).toArray().en(),bNotA:r.except(this,e).toArray().en()}},r.prototype.distinct=function(r){throw new Error("Not implemented")},r.prototype.except=function(r,e){throw new Error("Not implemented")},r.prototype.first=function(r){for(var e=this.getEnumerator();e.moveNext();)if(!r||r(e.current))return e.current},r.prototype.firstIndex=function(r){for(var e=this.getEnumerator(),t=0;e.moveNext();t++)if(!r||r(e.current))return t;return-1},r.prototype.forEach=function(r){for(var e=this.getEnumerator();e.moveNext();)r(e.current)},r.prototype.groupBy=function(r,e){throw new Error("Not implemented")},r.prototype.intersect=function(r,e){throw new Error("Not implemented")},r.prototype.join=function(r,e,t,n,o){throw new Error("Not implemented")},r.prototype.last=function(r){for(var e,t=this.getEnumerator();t.moveNext();)r&&!r(t.current)||(e=t.current);return e},r.prototype.lastIndex=function(r){for(var e=-1,t=this.getEnumerator(),n=0;t.moveNext();n++)r&&!r(t.current)||(e=n);return e},r.prototype.max=function(r){var e=this.getEnumerator();if(!e.moveNext())return 0;r=r||function(r){if("number"!=typeof r)throw new Error("Object is not a number.");return r};for(var t=r(e.current);e.moveNext();)t=Math.max(t,r(e.current));return t},r.prototype.min=function(r){var e=this.getEnumerator();if(!e.moveNext())return 0;r=r||function(r){if("number"!=typeof r)throw new Error("Object is not a number.");return r};for(var t=r(e.current);e.moveNext();)t=Math.min(t,r(e.current));return t},r.prototype.orderBy=function(r,e){throw new Error("Not implemented")},r.prototype.orderByDescending=function(r,e){throw new Error("Not implemented")},r.prototype.prepend=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];throw new Error("Not implemented")},r.prototype.reverse=function(){throw new Error("Not implemented")},r.prototype.select=function(r){throw new Error("Not implemented")},r.prototype.selectMany=function(r){throw new Error("Not implemented")},r.prototype.skip=function(r){throw new Error("Not implemented")},r.prototype.skipWhile=function(r){throw new Error("Not implemented")},r.prototype.standardDeviation=function(r){var e=this.average(r),t=0,n=0;r=r||function(r){if("number"!=typeof r)throw new Error("Object is not a number.");return r};for(var o=this.getEnumerator();o.moveNext();){var u=r(o.current)-e;t+=u*u,n++}return Math.sqrt(t/n)},r.prototype.sum=function(r){var e=0;r=r||function(r){if("number"!=typeof r)throw new Error("Object is not a number.");return r};for(var t=this.getEnumerator();t.moveNext();)e+=r(t.current);return e},r.prototype.take=function(r){throw new Error("Not implemented")},r.prototype.takeWhile=function(r){throw new Error("Not implemented")},r.prototype.traverse=function(r){throw new Error("Not implemented")},r.prototype.traverseUnique=function(r,e){throw new Error("Not implemented")},r.prototype.toArray=function(){for(var r=[],e=this.getEnumerator();e.moveNext();)r.push(e.current);return r},r.prototype.toMap=function(r,e){throw new Error("Not implemented")},r.prototype.toList=function(){throw new Error("Not implemented")},r.prototype.union=function(r,e){throw new Error("Not implemented")},r.prototype.where=function(r){throw new Error("Not implemented")},r.prototype.zip=function(r,e){throw new Error("Not implemented")},r}();r.Enumerable=e}(exjs||(exjs={}));var exjs;!function(r){var e=function(){function e(r){this.size=0,this._keys=[],this._values=[];var e;if(r instanceof Array?e=r.en():r&&r.getEnumerator instanceof Function&&(e=r),e)for(var t=e.getEnumerator();t&&t.moveNext();)this.set(t.current[0],t.current[1])}return e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this.size=0},e.prototype.delete=function(r){var e=this._keys.indexOf(r);return e>-1&&(this._keys.splice(e,1),this._values.splice(e,1),this.size--,!0)},e.prototype.entries=function(){var e=this;return r.range(0,this.size).select(function(r){return[e._keys[r],e._values[r]]})},e.prototype.forEach=function(r,e){null==e&&(e=this);for(var t=0,n=this._keys,o=this._values,u=n.length;t<u;t++)r.call(e,o[t],n[t],this)},e.prototype.get=function(r){var e=this._keys.indexOf(r);return this._values[e]},e.prototype.has=function(r){return this._keys.indexOf(r)>-1},e.prototype.keys=function(){return this._keys.en()},e.prototype.set=function(r,e){var t=this._keys.indexOf(r);t>-1?this._values[t]=e:(this._keys.push(r),this._values.push(e),this.size++)},e.prototype.values=function(){return this._values.en()},e}();r.Map3=e,r.Enumerable.prototype.toMap=function(r,t){for(var n=new e,o=this.getEnumerator();o.moveNext();)n.set(r(o.current),t(o.current));return n},r.List&&(r.List.prototype.toMap=r.Enumerable.prototype.toMap)}(exjs||(exjs={})),function(r){r.Map||(r.Map=exjs.Map3)}("undefined"==typeof window?global:window);var exjs;!function(r){function e(e){var t=new r.Enumerable;return t.getEnumerator=function(){var r={current:void 0,moveNext:function(){return e(r)}};return r},t}r.anonymous=e}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n,o=1,u={current:void 0,moveNext:function(){if(o<2){if(t=t||r.getEnumerator(),t.moveNext())return u.current=t.current,!0;o++}return n=n||e.en().getEnumerator(),n.moveNext()?(u.current=n.current,!0):(u.current=void 0,!1)}};return u}r.Enumerable.prototype.append=function(){for(var t=this,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var u=new r.Enumerable;return u.getEnumerator=function(){return e(t,n)},u},r.List&&(r.List.prototype.append=r.Enumerable.prototype.append)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n=0,o={current:void 0,moveNext:function(){return t||(t=r.getEnumerator()),!!t.moveNext()&&(e(o.current=t.current,n),n++,!0)}};return o}r.Enumerable.prototype.apply=function(t){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return e(n,t)},o},r.List&&(r.List.prototype.apply=r.Enumerable.prototype.apply)}(exjs||(exjs={}));var exjs;!function(r){function e(r){var e=r.length,t={moveNext:void 0,current:void 0},n=-1;return t.moveNext=function(){return n++,n>=e?(t.current=void 0,!1):(t.current=r[n],!0)},t}function t(){return this&&Array.isArray(this)?new n(this):new r.Enumerable}var n=function(r){function t(t){var n=r.call(this)||this;return n.getEnumerator=function(){return e(t)},n.toArray=function(){return t.slice(0)},n}return __extends(t,r),t}(r.Enumerable);try{Object.defineProperty(Array.prototype,"en",{value:t,enumerable:!1,writable:!1,configurable:!1})}catch(r){Array.prototype.en=t}}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n=!1,o={current:void 0,moveNext:function(){return t||(t=r.getEnumerator()),o.current=void 0,t.moveNext()?(o.current=t.current,!0):!n&&(n=!0,t=e.getEnumerator(),!!t.moveNext()&&(o.current=t.current,!0))}};return o}r.Enumerable.prototype.concat=function(t){var n=this,o=t instanceof Array?t.en():t,u=new r.Enumerable;return u.getEnumerator=function(){return e(n,o)},u},r.List&&(r.List.prototype.concat=r.Enumerable.prototype.concat)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n=[],o={current:void 0,moveNext:function(){if(t||(t=r.getEnumerator()),o.current=void 0,!e){for(;t.moveNext();)if(n.indexOf(t.current)<0)return n.push(o.current=t.current),!0;return!1}for(;t.moveNext();){for(var u=0,i=n.length,c=!1;u<i&&!c;u++)c=!!e(n[u],t.current);if(!c)return n.push(o.current=t.current),!0}return!1}};return o}r.Enumerable.prototype.distinct=function(t){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return e(n,t)},o},r.List&&(r.List.prototype.distinct=r.Enumerable.prototype.distinct)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e,t){t=t||function(r,e){return r===e};var n,o={current:void 0,moveNext:function(){for(n||(n=r.getEnumerator()),o.current=void 0;n.moveNext();){for(var u=!1,i=e.getEnumerator();i.moveNext()&&!u;)u=t(n.current,i.current);if(!u)return o.current=n.current,!0}return!1}};return o}r.Enumerable.prototype.except=function(t,n){var o=this,u=t instanceof Array?t.en():t,i=new r.Enumerable;return i.getEnumerator=function(){return e(o,u,n)},i},r.List&&(r.List.prototype.except=r.Enumerable.prototype.except)}(exjs||(exjs={})),Function.prototype.fromJson=function(r,e){function t(r,e){if(null==r)return r;if(e instanceof Function)return e(r);if(e instanceof Array){if(e=e[0],!(e instanceof Function&&r instanceof Array))return;for(var t=[],n=0;n<r.length;n++)t.push(e(r[n]));return t}}var n=new this;if(null==r)return n;var o=[];for(var u in e){var i=t(r[u],e[u]);void 0!==i&&(n[u]=i,o.push(u))}for(var u in this.$jsonMappings)if(!(o.indexOf(u)>-1)){var i=t(r[u],this.$jsonMappings[u]);void 0!==i&&(n[u]=i,o.push(u))}for(var u in r)o.indexOf(u)>-1||(n[u]=r[u]);return n};var exjs;!function(r){function e(r,e,n){var o,u=0,i={current:void 0,moveNext:function(){return o||(o=t(r,e,n)),i.current=void 0,!(u>=o.length)&&(i.current=o[u],u++,!0)}};return i}function t(r,e,t){t=t||function(r,e){return r===e};for(var o,u=[],i=[],c=r.getEnumerator();c.moveNext();){o=e(c.current);for(var a=-1,p=0,f=i.length;p<f;p++)if(t(o,i[p])){a=p;break}var s;a<0?(i.push(o),u.push(s=new n(o))):s=u[a],s._add(c.current)}return u}var n=function(r){function e(e){var t=r.call(this)||this;return t.key=e,t._arr=[],t.getEnumerator=function(){return t._arr.en().getEnumerator()},t}return __extends(e,r),e.prototype._add=function(r){this._arr.push(r)},e}(r.Enumerable);r.Enumerable.prototype.groupBy=function(t,n){var o=this,u=new r.Enumerable;return u.getEnumerator=function(){return e(o,t,n)},u},r.List&&(r.List.prototype.groupBy=r.Enumerable.prototype.groupBy)}(exjs||(exjs={}));var exjs;!function(r){function e(e,t,n){n=n||function(r,e){return r===e};var o,u={current:void 0,moveNext:function(){for(o||(o=r.en(e).distinct().getEnumerator()),u.current=void 0;o.moveNext();){for(var i=!1,c=t.getEnumerator();c.moveNext()&&!i;)i=n(o.current,c.current);if(i)return u.current=o.current,!0}return!1}};return u}r.Enumerable.prototype.intersect=function(t,n){var o=this,u=t instanceof Array?t.en():t,i=new r.Enumerable;return i.getEnumerator=function(){return e(o,u,n)},i},r.List&&(r.List.prototype.intersect=r.Enumerable.prototype.intersect)}(exjs||(exjs={}));var exjs;!function(r){function e(e,t,n,o,u,i){i=i||function(r,e){return r===e};var c,a,p=0,f={current:void 0,moveNext:function(){if(f.current=void 0,!c){if(c=e.getEnumerator(),!c.moveNext())return!1;a=r.en(t).toArray()}var s;do{for(;p<a.length;p++)if(s=a[p],i(n(c.current),o(s)))return p++,f.current=u(c.current,s),!0;p=0}while(c.moveNext());return!1}};return f}r.Enumerable.prototype.join=function(t,n,o,u,i){var c=this,a=t instanceof Array?t.en():t,p=new r.Enumerable;return p.getEnumerator=function(){return e(c,a,n,o,u,i)},p},r.List&&(r.List.prototype.join=r.Enumerable.prototype.join)}(exjs||(exjs={}));var exjs;!function(r){function e(){this.constructor=t}r.Enumerable.prototype.toList=function(){for(var r=new t,e=this.getEnumerator();e.moveNext();)r.push(e.current);return r};var t=function(r){function e(){return null!==r&&r.apply(this,arguments)||this}return __extends(e,r),e.prototype.toString=function(){throw new Error("Not implemented")},e.prototype.toLocaleString=function(){throw new Error("Not implemented")},e.prototype.pop=function(){throw new Error("Not implemented")},e.prototype.push=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];throw new Error("Not implemented")},e.prototype.shift=function(){throw new Error("Not implemented")},e.prototype.slice=function(r,e){throw new Error("Not implemented")},e.prototype.sort=function(r){throw new Error("Not implemented")},e.prototype.splice=function(){throw new Error("Not implemented")},e.prototype.unshift=function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];throw new Error("Not implemented")},e.prototype.indexOf=function(r,e){throw new Error("Not implemented")},e.prototype.lastIndexOf=function(r,e){throw new Error("Not implemented")},e.prototype.every=function(r,e){throw new Error("Not implemented")},e.prototype.some=function(r,e){throw new Error("Not implemented")},e.prototype.forEach=function(r,e){throw new Error("Not implemented")},e.prototype.map=function(r,e){throw new Error("Not implemented")},e.prototype.filter=function(r,e){throw new Error("Not implemented")},e.prototype.reduce=function(r,e){throw new Error("Not implemented")},e.prototype.reduceRight=function(r,e){throw new Error("Not implemented")},e.prototype.remove=function(r){throw new Error("Not implemented")},e.prototype.removeWhere=function(r){throw new Error("Not implemented")},e}(r.Enumerable);r.List=t;for(var n in Array)Array.hasOwnProperty(n)&&(t[n]=Array[n]);e.prototype=Array.prototype,t.prototype=new e;for(var o in r.Enumerable.prototype)"getEnumerator"!==o&&(t.prototype[o]=r.Enumerable.prototype[o]);t.prototype.getEnumerator=function(){var r=this,e=r.length,t={moveNext:void 0,current:void 0},n=-1;return t.moveNext=function(){return n++,n>=e?(t.current=void 0,!1):(t.current=r[n],!0)},t},t.prototype.remove=function(r){return this.removeWhere(function(e){return e===r}).any()},t.prototype.removeWhere=function(r){for(var e,t=[],n=this.length-1;n>=0;n--)e=this[n],r(e,n)===!0&&(this.splice(n,1),t.push(e));return t.en().reverse()}}(exjs||(exjs={}));var exjs;!function(r){function e(r,e,n,o){return new t(r,e,n,o)}var t=function(e){function t(r,t,n,o){var u=e.call(this)||this;u.Source=r,o=o||function(r,e){return r>e?1:r<e?-1:0};var i=n===!0?-1:1;return u.Sorter=function(r,e){return i*o(t(r),t(e))},u}return __extends(t,e),t.prototype.getEnumerator=function(){var e,t=this.Source,n=this.Sorter,o=0,u={current:void 0,moveNext:function(){return e||(e=r.en(t).toArray(),e.sort(n)),u.current=void 0,!(o>=e.length)&&(u.current=e[o],o++,!0)}};return u},t.prototype.thenBy=function(r,e){return new n(this,r,!1,e)},t.prototype.thenByDescending=function(r,e){return new n(this,r,!0,e)},t}(r.Enumerable),n=function(r){function e(e,t,n,o){var u=r.call(this,e,t,n,o)||this,i=e.Sorter,c=u.Sorter;return u.Sorter=function(r,e){return i(r,e)||c(r,e)},u}return __extends(e,r),e}(t),o=r.Enumerable.prototype;o.orderBy=function(r,t){return e(this,r,!1,t)},o.orderByDescending=function(r,t){return e(this,r,!0,t)},r.List&&(r.List.prototype.orderBy=r.Enumerable.prototype.orderBy,r.List.prototype.orderByDescending=r.Enumerable.prototype.orderByDescending)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n,o=1,u={current:void 0,moveNext:function(){if(o<2){if(t=t||e.en().getEnumerator(),t.moveNext())return u.current=t.current,!0;o++}return n=n||r.getEnumerator(),n.moveNext()?(u.current=n.current,!0):(u.current=void 0,!1)}};return u}r.Enumerable.prototype.prepend=function(){for(var t=this,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var u=new r.Enumerable;return u.getEnumerator=function(){return e(t,n)},u},r.List&&(r.List.prototype.prepend=r.Enumerable.prototype.prepend)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e,t){var n=r-t,o={current:void 0,moveNext:function(){return n+=t,!(n>=e)&&(o.current=n,!0)}};return o}function t(t,n,o){if(t=t||0,n=n||0,t>n)throw new Error("Start cannot be greater than end.");null==o&&(o=1);var u=new r.Enumerable;return u.getEnumerator=function(){return e(t,n,o)},u}r.range=t}(exjs||(exjs={}));var exjs;!function(r){function e(e){var t,n=0,o={current:void 0,moveNext:function(){return t||(t=r.en(e).toArray(),n=t.length),n--,o.current=t[n],n>=0}};return o}r.Enumerable.prototype.reverse=function(){var t=this,n=new r.Enumerable;return n.getEnumerator=function(){return e(t)},n},r.List&&(r.List.prototype.reverse=r.Enumerable.prototype.reverse)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){if(e=e||0,0===e)return Math.round(r);var t=Math.pow(10,e);return Math.round(r*t)/t}r.round=e}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n=0,o={current:void 0,moveNext:function(){return t||(t=r.getEnumerator()),!!t.moveNext()&&(o.current=e(t.current,n),n++,!0)}};return o}function t(e,t){var n,o,u={current:void 0,moveNext:function(){for(u.current=void 0,n||(n=e.getEnumerator());!o||!o.moveNext();){if(!n.moveNext())return!1;o=r.selectorEnumerator(t(n.current))}return u.current=o.current,!0}};return u}r.Enumerable.prototype.select=function(t){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return e(n,t)},o},r.Enumerable.prototype.selectMany=function(e){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return t(n,e)},o},r.List&&(r.List.prototype.select=r.Enumerable.prototype.select,r.List.prototype.selectMany=r.Enumerable.prototype.selectMany)}(exjs||(exjs={}));var exjs;!function(r){function e(r){return Array.isArray(r)?r.en().getEnumerator():null!=r&&"function"==typeof r.getEnumerator?r.getEnumerator():null}r.selectorEnumerator=e}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n={current:void 0,moveNext:function(){if(!t){t=r.getEnumerator();for(var o=0;o<e;o++)if(!t.moveNext())return!1}return t.moveNext()?(n.current=t.current,!0):(n.current=void 0,!1)}};return n}function t(r,e){var t,n={current:void 0,moveNext:function(){if(!t){t=r.getEnumerator();for(var o=0;t.moveNext();o++)if(!e(n.current=t.current,o))return!0;return n.current=void 0,!1}return t.moveNext()?(n.current=t.current,!0):(n.current=void 0,!1)}};return n}r.Enumerable.prototype.skip=function(t){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return e(n,t)},o},r.Enumerable.prototype.skipWhile=function(e){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return t(n,e)},o},r.List&&(r.List.prototype.skip=r.Enumerable.prototype.skip,r.List.prototype.skipWhile=r.Enumerable.prototype.skipWhile)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n=0,o={current:void 0,moveNext:function(){return t||(t=r.getEnumerator()),n++,!(n>e)&&(o.current=void 0,!!t.moveNext()&&(o.current=t.current,!0))}};return o}function t(r,e){var t,n=0,o={current:void 0,moveNext:function(){return t||(t=r.getEnumerator()),t.moveNext()&&e(t.current,n)?(n++,o.current=t.current,!0):(o.current=void 0,!1)}};return o}r.Enumerable.prototype.take=function(t){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return e(n,t)},o},r.Enumerable.prototype.takeWhile=function(e){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return t(n,e)},o},r.List&&(r.List.prototype.take=r.Enumerable.prototype.take,r.List.prototype.takeWhile=r.Enumerable.prototype.takeWhile)}(exjs||(exjs={}));var exjs;!function(r){function e(e,t){var n,o=!1,u=[],i={current:void 0,moveNext:function(){if(o){if(null==n)return!1;u.push(n),n=r.selectorEnumerator(t(i.current))}else n=e.getEnumerator(),o=!0;for(;!(n&&n.moveNext()||u.length<1);)n=u.pop();return i.current=null==n?void 0:n.current,void 0!==i.current}};return i}function t(e,t,n){var o,u=!1,i=[],c={current:void 0,moveNext:function(){if(u){if(null==o)return!1;i.push(o),o=r.selectorEnumerator(t(c.current))}else o=e.getEnumerator(),u=!0;do{for(;!(o&&o.moveNext()||i.length<1);)o=i.pop();c.current=null==o?void 0:o.current}while(n(c.current));return void 0!==c.current}};return c}r.Enumerable.prototype.traverse=function(t){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return e(n,t)},o},r.Enumerable.prototype.traverseUnique=function(e,n){var o=this,u=[],i=new r.Enumerable;return n?i.getEnumerator=function(){return t(o,e,function(r){return!!u.some(function(e){return n(r,e)})||(u.push(r),!1)})}:i.getEnumerator=function(){return t(o,e,function(r){return u.indexOf(r)>-1||(u.push(r),!1)})},i},r.List&&(r.List.prototype.traverse=r.Enumerable.prototype.traverse,r.List.prototype.traverseUnique=r.Enumerable.prototype.traverseUnique)}(exjs||(exjs={}));var exjs;!function(r){function e(e,t,n){n=n||function(r,e){return r===e};var o,u,i=[],c={current:void 0,moveNext:function(){if(o||(o=r.en(e).distinct().getEnumerator()),c.current=void 0,!u&&o.moveNext())return i.push(c.current=o.current),!0;for(u=u||r.en(t).distinct().getEnumerator();u.moveNext();){for(var a=0,p=!1,f=i.length;a<f&&!p;a++)p=n(i[a],u.current);if(!p)return c.current=u.current,!0}return!1}};return c}r.Enumerable.prototype.union=function(t,n){var o=this,u=t instanceof Array?t.en():t,i=new r.Enumerable;return i.getEnumerator=function(){return e(o,u,n)},i},r.List&&(r.List.prototype.union=r.Enumerable.prototype.union)}(exjs||(exjs={}));var exjs;!function(r){function e(r,e){var t,n={current:void 0,moveNext:function(){t||(t=r.getEnumerator());for(var o;t.moveNext();)if(e(o=t.current))return n.current=o,!0;return!1}};return n}r.Enumerable.prototype.where=function(t){var n=this,o=new r.Enumerable;return o.getEnumerator=function(){return e(n,t)},o},r.List&&(r.List.prototype.where=r.Enumerable.prototype.where)}(exjs||(exjs={}));var exjs;!function(r){function e(e){var n=new r.Enumerable;return n.getEnumerator=function(){return t(e)},n}function t(r){var e=r.getEnumerator(),t={current:void 0,moveNext:void 0};return t.moveNext=function(){return e.moveNext()?(t.current=e.current,!0):(t.current=void 0,!1)},t}r.en=e}(exjs||(exjs={}));var ex=exjs.en,exjs;!function(r){function e(r,e,t){var n,o,u={current:void 0,moveNext:function(){return n||(n=r.getEnumerator()),o||(o=e.getEnumerator()),u.current=void 0,!(!n.moveNext()||!o.moveNext())&&(u.current=t(n.current,o.current),!0)}};return u}r.Enumerable.prototype.zip=function(t,n){var o=this,u=t instanceof Array?t.en():t,i=new r.Enumerable;return i.getEnumerator=function(){return e(o,u,n)},i},r.List&&(r.List.prototype.zip=r.Enumerable.prototype.zip)}(exjs||(exjs={}));
//# sourceMappingURL=ex.es3.min.js.map

// http-status-codes v0.0.3 https://github.com/edsilv/http-status-codes
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.httpStatusCodes = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});
///<reference path="../node_modules/typescript/lib/lib.es6.d.ts"/>   

var Manifesto;
(function (Manifesto) {
    class StringValue {
        constructor(value) {
            this.value = "";
            if (value) {
                this.value = value.toLowerCase();
            }
        }
        toString() {
            return this.value;
        }
    }
    Manifesto.StringValue = StringValue;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class AnnotationMotivation extends Manifesto.StringValue {
        // todo: use getters when ES3 target is no longer required.
        bookmarking() {
            return new AnnotationMotivation(AnnotationMotivation.BOOKMARKING.toString());
        }
        classifying() {
            return new AnnotationMotivation(AnnotationMotivation.CLASSIFYING.toString());
        }
        commenting() {
            return new AnnotationMotivation(AnnotationMotivation.COMMENTING.toString());
        }
        describing() {
            return new AnnotationMotivation(AnnotationMotivation.DESCRIBING.toString());
        }
        editing() {
            return new AnnotationMotivation(AnnotationMotivation.EDITING.toString());
        }
        highlighting() {
            return new AnnotationMotivation(AnnotationMotivation.HIGHLIGHTING.toString());
        }
        identifying() {
            return new AnnotationMotivation(AnnotationMotivation.IDENTIFYING.toString());
        }
        linking() {
            return new AnnotationMotivation(AnnotationMotivation.LINKING.toString());
        }
        moderating() {
            return new AnnotationMotivation(AnnotationMotivation.MODERATING.toString());
        }
        painting() {
            return new AnnotationMotivation(AnnotationMotivation.PAINTING.toString());
        }
        questioning() {
            return new AnnotationMotivation(AnnotationMotivation.QUESTIONING.toString());
        }
        replying() {
            return new AnnotationMotivation(AnnotationMotivation.REPLYING.toString());
        }
        tagging() {
            return new AnnotationMotivation(AnnotationMotivation.TAGGING.toString());
        }
        transcribing() {
            return new AnnotationMotivation(AnnotationMotivation.TRANSCRIBING.toString());
        }
    }
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
    Manifesto.AnnotationMotivation = AnnotationMotivation;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class ElementType extends Manifesto.StringValue {
        // todo: use getters when ES3 target is no longer required.
        canvas() {
            return new ElementType(ElementType.CANVAS.toString());
        }
        document() {
            return new ElementType(ElementType.DOCUMENT.toString());
        }
        image() {
            return new ElementType(ElementType.IMAGE.toString());
        }
        movingimage() {
            return new ElementType(ElementType.MOVINGIMAGE.toString());
        }
        physicalobject() {
            return new ElementType(ElementType.PHYSICALOBJECT.toString());
        }
        sound() {
            return new ElementType(ElementType.SOUND.toString());
        }
    }
    ElementType.CANVAS = new ElementType("sc:canvas");
    ElementType.DOCUMENT = new ElementType("foaf:document");
    ElementType.IMAGE = new ElementType("dcTypes:image");
    ElementType.MOVINGIMAGE = new ElementType("dctypes:movingimage");
    ElementType.PHYSICALOBJECT = new ElementType("dctypes:physicalobject");
    ElementType.SOUND = new ElementType("dctypes:sound");
    Manifesto.ElementType = ElementType;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class IIIFResourceType extends Manifesto.StringValue {
        // todo: use getters when ES3 target is no longer required.
        annotation() {
            return new IIIFResourceType(IIIFResourceType.ANNOTATION.toString());
        }
        canvas() {
            return new IIIFResourceType(IIIFResourceType.CANVAS.toString());
        }
        collection() {
            return new IIIFResourceType(IIIFResourceType.COLLECTION.toString());
        }
        manifest() {
            return new IIIFResourceType(IIIFResourceType.MANIFEST.toString());
        }
        range() {
            return new IIIFResourceType(IIIFResourceType.RANGE.toString());
        }
        sequence() {
            return new IIIFResourceType(IIIFResourceType.SEQUENCE.toString());
        }
    }
    IIIFResourceType.ANNOTATION = new IIIFResourceType("oa:annotation");
    IIIFResourceType.CANVAS = new IIIFResourceType("sc:canvas");
    IIIFResourceType.COLLECTION = new IIIFResourceType("sc:collection");
    IIIFResourceType.MANIFEST = new IIIFResourceType("sc:manifest");
    IIIFResourceType.RANGE = new IIIFResourceType("sc:range");
    IIIFResourceType.SEQUENCE = new IIIFResourceType("sc:sequence");
    Manifesto.IIIFResourceType = IIIFResourceType;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class ManifestType extends Manifesto.StringValue {
        // todo: use getters when ES3 target is no longer required.
        empty() {
            return new ManifestType(ManifestType.EMPTY.toString());
        }
        manuscript() {
            return new ManifestType(ManifestType.MANUSCRIPT.toString());
        }
        monograph() {
            return new ManifestType(ManifestType.MONOGRAPH.toString());
        }
    }
    ManifestType.EMPTY = new ManifestType("");
    ManifestType.MANUSCRIPT = new ManifestType("manuscript");
    ManifestType.MONOGRAPH = new ManifestType("monograph");
    Manifesto.ManifestType = ManifestType;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class RenderingFormat extends Manifesto.StringValue {
        // todo: use getters when ES3 target is no longer required.
        pdf() {
            return new RenderingFormat(RenderingFormat.PDF.toString());
        }
        doc() {
            return new RenderingFormat(RenderingFormat.DOC.toString());
        }
        docx() {
            return new RenderingFormat(RenderingFormat.DOCX.toString());
        }
    }
    RenderingFormat.PDF = new RenderingFormat("application/pdf");
    RenderingFormat.DOC = new RenderingFormat("application/msword");
    RenderingFormat.DOCX = new RenderingFormat("application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    Manifesto.RenderingFormat = RenderingFormat;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class ResourceFormat extends Manifesto.StringValue {
        // todo: use getters when ES3 target is no longer required.
        jpg() {
            return new ResourceFormat(ResourceFormat.JPG.toString());
        }
        mp4() {
            return new ResourceFormat(ResourceFormat.MP4.toString());
        }
        pdf() {
            return new ResourceFormat(ResourceFormat.PDF.toString());
        }
        threejs() {
            return new ResourceFormat(ResourceFormat.THREEJS.toString());
        }
        webm() {
            return new ResourceFormat(ResourceFormat.WEBM.toString());
        }
    }
    ResourceFormat.JPG = new ResourceFormat("image/jpeg");
    ResourceFormat.MP4 = new ResourceFormat("video/mp4");
    ResourceFormat.PDF = new ResourceFormat("application/pdf");
    ResourceFormat.THREEJS = new ResourceFormat("application/vnd.threejs+json");
    ResourceFormat.WEBM = new ResourceFormat("video/webm");
    Manifesto.ResourceFormat = ResourceFormat;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class ResourceType extends Manifesto.StringValue {
        // todo: use getters when ES3 target is no longer required.
        image() {
            return new ResourceType(ResourceType.IMAGE.toString());
        }
    }
    ResourceType.IMAGE = new ResourceType("dctypes:image");
    Manifesto.ResourceType = ResourceType;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class ServiceProfile extends Manifesto.StringValue {
        // todo: use getters when ES3 target is no longer required.
        auth1Clickthrough() {
            return new ServiceProfile(ServiceProfile.AUTH1CLICKTHROUGH.toString());
        }
        auth1External() {
            return new ServiceProfile(ServiceProfile.AUTH1EXTERNAL.toString());
        }
        auth1Kiosk() {
            return new ServiceProfile(ServiceProfile.AUTH1KIOSK.toString());
        }
        auth1Login() {
            return new ServiceProfile(ServiceProfile.AUTH1LOGIN.toString());
        }
        auth1Logout() {
            return new ServiceProfile(ServiceProfile.AUTH1LOGOUT.toString());
        }
        auth1Token() {
            return new ServiceProfile(ServiceProfile.AUTH1TOKEN.toString());
        }
        autoComplete() {
            return new ServiceProfile(ServiceProfile.AUTOCOMPLETE.toString());
        }
        iiif1ImageLevel1() {
            return new ServiceProfile(ServiceProfile.IIIF1IMAGELEVEL1.toString());
        }
        iiif1ImageLevel2() {
            return new ServiceProfile(ServiceProfile.IIIF1IMAGELEVEL2.toString());
        }
        iiif2ImageLevel1() {
            return new ServiceProfile(ServiceProfile.IIIF2IMAGELEVEL1.toString());
        }
        iiif2ImageLevel2() {
            return new ServiceProfile(ServiceProfile.IIIF2IMAGELEVEL2.toString());
        }
        ixif() {
            return new ServiceProfile(ServiceProfile.IXIF.toString());
        }
        login() {
            return new ServiceProfile(ServiceProfile.AUTHLOGIN.toString());
        }
        clickThrough() {
            return new ServiceProfile(ServiceProfile.AUTHCLICKTHROUGH.toString());
        }
        restricted() {
            return new ServiceProfile(ServiceProfile.AUTHRESTRICTED.toString());
        }
        logout() {
            return new ServiceProfile(ServiceProfile.AUTHLOGOUT.toString());
        }
        otherManifestations() {
            return new ServiceProfile(ServiceProfile.OTHERMANIFESTATIONS.toString());
        }
        search() {
            return new ServiceProfile(ServiceProfile.SEARCH.toString());
        }
        stanfordIIIFImageCompliance1() {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString());
        }
        stanfordIIIFImageCompliance2() {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString());
        }
        stanfordIIIFImageConformance1() {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString());
        }
        stanfordIIIFImageConformance2() {
            return new ServiceProfile(ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString());
        }
        stanfordIIIF1ImageCompliance1() {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString());
        }
        stanfordIIIF1ImageCompliance2() {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString());
        }
        stanfordIIIF1ImageConformance1() {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString());
        }
        stanfordIIIF1ImageConformance2() {
            return new ServiceProfile(ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString());
        }
        token() {
            return new ServiceProfile(ServiceProfile.AUTHTOKEN.toString());
        }
        trackingExtensions() {
            return new ServiceProfile(ServiceProfile.TRACKINGEXTENSIONS.toString());
        }
        uiExtensions() {
            return new ServiceProfile(ServiceProfile.UIEXTENSIONS.toString());
        }
        printExtensions() {
            return new ServiceProfile(ServiceProfile.PRINTEXTENSIONS.toString());
        }
        shareExtensions() {
            return new ServiceProfile(ServiceProfile.SHAREEXTENSIONS.toString());
        }
    }
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
    ServiceProfile.AUTH1CLICKTHROUGH = new ServiceProfile("http://iiif.io/api/auth/1/login/clickthrough");
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
    Manifesto.ServiceProfile = ServiceProfile;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class ViewingDirection extends Manifesto.StringValue {
        // todo: use getters when ES3 target is no longer required.
        leftToRight() {
            return new ViewingDirection(ViewingDirection.LEFTTORIGHT.toString());
        }
        rightToLeft() {
            return new ViewingDirection(ViewingDirection.RIGHTTOLEFT.toString());
        }
        topToBottom() {
            return new ViewingDirection(ViewingDirection.TOPTOBOTTOM.toString());
        }
        bottomToTop() {
            return new ViewingDirection(ViewingDirection.BOTTOMTOTOP.toString());
        }
    }
    ViewingDirection.LEFTTORIGHT = new ViewingDirection("left-to-right");
    ViewingDirection.RIGHTTOLEFT = new ViewingDirection("right-to-left");
    ViewingDirection.TOPTOBOTTOM = new ViewingDirection("top-to-bottom");
    ViewingDirection.BOTTOMTOTOP = new ViewingDirection("bottom-to-top");
    Manifesto.ViewingDirection = ViewingDirection;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class ViewingHint extends Manifesto.StringValue {
        // todo: use getters when ES3 target is no longer required.
        continuous() {
            return new ViewingHint(ViewingHint.CONTINUOUS.toString());
        }
        empty() {
            return new ViewingHint(ViewingHint.EMPTY.toString());
        }
        individuals() {
            return new ViewingHint(ViewingHint.INDIVIDUALS.toString());
        }
        nonPaged() {
            return new ViewingHint(ViewingHint.NONPAGED.toString());
        }
        paged() {
            return new ViewingHint(ViewingHint.PAGED.toString());
        }
        top() {
            return new ViewingHint(ViewingHint.TOP.toString());
        }
    }
    ViewingHint.CONTINUOUS = new ViewingHint("continuous");
    ViewingHint.EMPTY = new ViewingHint("");
    ViewingHint.INDIVIDUALS = new ViewingHint("individuals");
    ViewingHint.NONPAGED = new ViewingHint("non-paged");
    ViewingHint.PAGED = new ViewingHint("paged");
    ViewingHint.TOP = new ViewingHint("top");
    Manifesto.ViewingHint = ViewingHint;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class JSONLDResource {
        constructor(jsonld) {
            this.__jsonld = jsonld;
            this.context = this.getProperty('context');
            this.id = this.getProperty('id');
        }
        getProperty(name) {
            let prop = null;
            if (this.__jsonld) {
                prop = this.__jsonld[name];
                if (!prop) {
                    // property may have a prepended '@'
                    prop = this.__jsonld['@' + name];
                }
            }
            return prop;
        }
    }
    Manifesto.JSONLDResource = JSONLDResource;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class ManifestResource extends Manifesto.JSONLDResource {
        constructor(jsonld, options) {
            super(jsonld);
            this.options = options;
        }
        getIIIFResourceType() {
            return new Manifesto.IIIFResourceType(this.getProperty('@type'));
        }
        getLabel() {
            return Manifesto.TranslationCollection.parse(this.getProperty('label'), this.options.locale);
        }
        getMetadata() {
            const _metadata = this.getProperty('metadata');
            const metadata = [];
            if (!_metadata)
                return metadata;
            for (let i = 0; i < _metadata.length; i++) {
                var item = _metadata[i];
                var metadataItem = new Manifesto.MetadataItem(this.options.locale);
                metadataItem.parse(item);
                metadata.push(metadataItem);
            }
            return metadata;
        }
        getRendering(format) {
            const renderings = this.getRenderings();
            // normalise format to string
            if (typeof (format) !== 'string') {
                format = format.toString();
            }
            for (let i = 0; i < renderings.length; i++) {
                const rendering = renderings[i];
                if (rendering.getFormat().toString() === format) {
                    return rendering;
                }
            }
            return null;
        }
        getRenderings() {
            let rendering;
            // if passing a manifesto-parsed object, use the __jsonld.rendering property,
            // otherwise look for a rendering property
            if (this.__jsonld) {
                rendering = this.__jsonld.rendering;
            }
            else {
                rendering = this.rendering;
            }
            const renderings = [];
            if (!rendering)
                return renderings;
            // coerce to array
            if (!Array.isArray(rendering)) {
                rendering = [rendering];
            }
            for (let i = 0; i < rendering.length; i++) {
                const r = rendering[i];
                renderings.push(new Manifesto.Rendering(r, this.options));
            }
            return renderings;
        }
        getService(profile) {
            return Manifesto.Utils.getService(this, profile);
        }
        getServices() {
            return Manifesto.Utils.getServices(this);
        }
        isAnnotation() {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.ANNOTATION.toString();
        }
        isCanvas() {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.CANVAS.toString();
        }
        isCollection() {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.COLLECTION.toString();
        }
        isManifest() {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.MANIFEST.toString();
        }
        isRange() {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.RANGE.toString();
        }
        isSequence() {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.SEQUENCE.toString();
        }
    }
    Manifesto.ManifestResource = ManifestResource;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class Element extends Manifesto.ManifestResource {
        constructor(jsonld, options) {
            super(jsonld, options);
        }
        getResources() {
            const resources = [];
            if (!this.__jsonld.resources)
                return resources;
            for (let i = 0; i < this.__jsonld.resources.length; i++) {
                const a = this.__jsonld.resources[i];
                const annotation = new Manifesto.Annotation(a, this.options);
                resources.push(annotation);
            }
            return resources;
        }
        getType() {
            return new Manifesto.ElementType(this.getProperty('type'));
        }
    }
    Manifesto.Element = Element;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class Canvas extends Manifesto.Element {
        constructor(jsonld, options) {
            super(jsonld, options);
        }
        // http://iiif.io/api/image/2.1/#canonical-uri-syntax
        getCanonicalImageUri(w) {
            let id = null;
            const region = 'full';
            const rotation = 0;
            let quality = 'default';
            let width = w;
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
                }
                // todo: this is not compatible and should be moved to getThumbUri
                if (!id) {
                    return "undefined" == typeof this.__jsonld.thumbnail
                        ? null : this.__jsonld.thumbnail;
                }
            }
            size = width + ',';
            var uri = [id, region, size, rotation, quality + '.jpg'].join('/');
            return uri;
        }
        // Presentation API 3.0
        getContent() {
            const content = [];
            if (!this.__jsonld.content)
                return content;
            // should be contained in an AnnotationPage
            let annotationPage = null;
            if (this.__jsonld.content.length) {
                annotationPage = new Manifesto.AnnotationPage(this.__jsonld.content[0], this.options);
            }
            if (!annotationPage) {
                return content;
            }
            const annotations = annotationPage.getItems();
            for (let i = 0; i < annotations.length; i++) {
                var a = annotations[i];
                var annotation = new Manifesto.Annotation(a, this.options);
                content.push(annotation);
            }
            return content;
        }
        getImages() {
            const images = [];
            if (!this.__jsonld.images)
                return images;
            for (let i = 0; i < this.__jsonld.images.length; i++) {
                var a = this.__jsonld.images[i];
                var annotation = new Manifesto.Annotation(a, this.options);
                images.push(annotation);
            }
            return images;
        }
        getIndex() {
            return this.getProperty('index');
        }
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
        getWidth() {
            return this.getProperty('width');
        }
        getHeight() {
            return this.getProperty('height');
        }
    }
    Manifesto.Canvas = Canvas;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class IIIFResource extends Manifesto.ManifestResource {
        constructor(jsonld, options) {
            super(jsonld, options);
            this.index = -1;
            this.isLoaded = false;
            const defaultOptions = {
                defaultLabel: '-',
                locale: 'en-GB',
                resource: this,
                pessimisticAccessControl: false
            };
            this.options = Object.assign(defaultOptions, options);
        }
        getAttribution() {
            const attribution = this.getProperty('attribution');
            if (attribution) {
                return Manifesto.TranslationCollection.parse(attribution, this.options.locale);
            }
            return [];
        }
        getDescription() {
            const description = this.getProperty('description');
            if (description) {
                return Manifesto.TranslationCollection.parse(description, this.options.locale);
            }
            return [];
        }
        getIIIFResourceType() {
            return new Manifesto.IIIFResourceType(this.getProperty('@type'));
        }
        getLogo() {
            const logo = this.getProperty('logo');
            if (!logo)
                return null;
            if (typeof (logo) === 'string')
                return logo;
            return logo['@id'];
        }
        getLicense() {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('license'), this.options.locale);
        }
        getNavDate() {
            return new Date(this.getProperty('navDate'));
        }
        getRelated() {
            return this.getProperty('related');
        }
        getSeeAlso() {
            return this.getProperty('seeAlso');
        }
        getLabel() {
            const label = this.getProperty('label');
            if (label) {
                return Manifesto.TranslationCollection.parse(label, this.options.locale);
            }
            return [];
        }
        getDefaultTree() {
            this.defaultTree = new Manifesto.TreeNode('root');
            this.defaultTree.data = this;
            return this.defaultTree;
        }
        isCollection() {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.COLLECTION.toString();
        }
        isManifest() {
            return this.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.MANIFEST.toString();
        }
        load() {
            let that = this;
            return new Promise((resolve, reject) => {
                if (that.isLoaded) {
                    resolve(that);
                }
                else {
                    var options = that.options;
                    options.navDate = that.getNavDate();
                    Manifesto.Utils.loadResource(that.__jsonld['@id']).then(function (data) {
                        that.parentLabel = Manifesto.TranslationCollection.getValue(that.getLabel(), options.locale);
                        var parsed = Manifesto.Deserialiser.parse(data, options);
                        that = Object.assign(that, parsed);
                        that.index = options.index;
                        resolve(that);
                    });
                }
            });
        }
    }
    Manifesto.IIIFResource = IIIFResource;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class Manifest extends Manifesto.IIIFResource {
        constructor(jsonld, options) {
            super(jsonld, options);
            this.index = 0;
            this._allRanges = null;
            this._sequences = null;
            this._topRanges = [];
            if (this.__jsonld.structures && this.__jsonld.structures.length) {
                const topRanges = this._getTopRanges();
                for (let i = 0; i < topRanges.length; i++) {
                    const range = topRanges[i];
                    this._parseRanges(range, String(i));
                }
            }
        }
        getDefaultTree() {
            super.getDefaultTree();
            this.defaultTree.data.type = Manifesto.TreeNodeType.MANIFEST.toString();
            if (!this.isLoaded) {
                return this.defaultTree;
            }
            const topRanges = this.getTopRanges();
            // if there are any ranges in the manifest, default to the first 'top' range or generated placeholder
            if (topRanges.length) {
                topRanges[0].getTree(this.defaultTree);
            }
            Manifesto.Utils.generateTreeNodeIds(this.defaultTree);
            return this.defaultTree;
        }
        _getTopRanges() {
            const topRanges = [];
            if (this.__jsonld.structures && this.__jsonld.structures.length) {
                for (let i = 0; i < this.__jsonld.structures.length; i++) {
                    const json = this.__jsonld.structures[i];
                    if (json.viewingHint === Manifesto.ViewingHint.TOP.toString()) {
                        topRanges.push(json);
                    }
                }
                // if no viewingHint="top" range was found, create a default one
                if (!topRanges.length) {
                    const range = {};
                    range.ranges = this.__jsonld.structures;
                    topRanges.push(range);
                }
            }
            return topRanges;
        }
        getTopRanges() {
            return this._topRanges;
        }
        _getRangeById(id) {
            if (this.__jsonld.structures && this.__jsonld.structures.length) {
                for (let i = 0; i < this.__jsonld.structures.length; i++) {
                    const r = this.__jsonld.structures[i];
                    if (r['@id'] === id) {
                        return r;
                    }
                }
            }
            return null;
        }
        //private _parseRangeCanvas(json: any, range: IRange): void {
        // todo: currently this isn't needed
        //var canvas: IJSONLDResource = new JSONLDResource(json);
        //range.members.push(<IManifestResource>canvas);
        //}
        _parseRanges(r, path, parentRange) {
            let range;
            let id = null;
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
                parentRange.members.push(range);
            }
            if (r.ranges) {
                for (let i = 0; i < r.ranges.length; i++) {
                    this._parseRanges(r.ranges[i], path + '/' + i, range);
                }
            }
            if (r.members) {
                for (let i = 0; i < r.members.length; i++) {
                    const child = r.members[i];
                    // only add to members if not already parsed from backwards-compatible ranges/canvases arrays
                    if (r.members.en().where(m => m.id === child.id).first()) {
                        continue;
                    }
                    if (child['@type'].toLowerCase() === 'sc:range') {
                        this._parseRanges(child, path + '/' + i, range);
                    }
                }
            }
        }
        getAllRanges() {
            if (this._allRanges != null)
                return this._allRanges;
            this._allRanges = [];
            const topRanges = this.getTopRanges();
            for (let i = 0; i < topRanges.length; i++) {
                const topRange = topRanges[i];
                if (topRange.id) {
                    this._allRanges.push(topRange); // it might be a placeholder root range
                }
                const subRanges = topRange.getRanges();
                this._allRanges = this._allRanges.concat(subRanges.en().traverseUnique(range => range.getRanges()).toArray());
            }
            return this._allRanges;
        }
        getRangeById(id) {
            const ranges = this.getAllRanges();
            for (let i = 0; i < ranges.length; i++) {
                const range = ranges[i];
                if (range.id === id) {
                    return range;
                }
            }
            return null;
        }
        getRangeByPath(path) {
            const ranges = this.getAllRanges();
            for (let i = 0; i < ranges.length; i++) {
                const range = ranges[i];
                if (range.path === path) {
                    return range;
                }
            }
            return null;
        }
        getSequences() {
            if (this._sequences !== null)
                return this._sequences;
            this._sequences = [];
            // if IxIF mediaSequences is present, use that. Otherwise fall back to IIIF sequences.
            const children = this.__jsonld.mediaSequences || this.__jsonld.sequences;
            if (children) {
                for (let i = 0; i < children.length; i++) {
                    const s = children[i];
                    const sequence = new Manifesto.Sequence(s, this.options);
                    this._sequences.push(sequence);
                }
            }
            return this._sequences;
        }
        getSequenceByIndex(sequenceIndex) {
            return this.getSequences()[sequenceIndex];
        }
        getTotalSequences() {
            return this.getSequences().length;
        }
        getManifestType() {
            const service = this.getService(Manifesto.ServiceProfile.UIEXTENSIONS);
            if (service) {
                return new Manifesto.ManifestType(service.getProperty('manifestType'));
            }
            return new Manifesto.ManifestType('');
        }
        getTrackingLabel() {
            const service = this.getService(Manifesto.ServiceProfile.TRACKINGEXTENSIONS);
            if (service) {
                return service.getProperty('trackingLabel');
            }
            return '';
        }
        isMultiSequence() {
            return this.getTotalSequences() > 1;
        }
        isPagingEnabled() {
            return this.getViewingHint().toString() === Manifesto.ViewingHint.PAGED.toString();
        }
        getViewingDirection() {
            if (this.getProperty('viewingDirection')) {
                return new Manifesto.ViewingDirection(this.getProperty('viewingDirection'));
            }
            return Manifesto.ViewingDirection.LEFTTORIGHT;
        }
        getViewingHint() {
            if (this.getProperty('viewingHint')) {
                return new Manifesto.ViewingHint(this.getProperty('viewingHint'));
            }
            return Manifesto.ViewingHint.EMPTY;
        }
    }
    Manifesto.Manifest = Manifest;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class Collection extends Manifesto.IIIFResource {
        constructor(jsonld, options) {
            super(jsonld, options);
            this.members = [];
            this._collections = null;
            this._manifests = null;
            jsonld.__collection = this;
        }
        getCollections() {
            if (this._collections) {
                return this._collections;
            }
            return this._collections = this.members.en().where(m => m.isCollection()).toArray();
        }
        getManifests() {
            if (this._manifests) {
                return this._manifests;
            }
            return this._manifests = this.members.en().where(m => m.isManifest()).toArray();
        }
        getCollectionByIndex(collectionIndex) {
            const collection = this.getCollections()[collectionIndex];
            collection.options.index = collectionIndex;
            // id for collection MUST be dereferenceable
            return collection.load();
        }
        getManifestByIndex(manifestIndex) {
            const manifest = this.getManifests()[manifestIndex];
            manifest.options.index = manifestIndex;
            return manifest.load();
        }
        getTotalCollections() {
            return this.getCollections().length;
        }
        getTotalManifests() {
            return this.getManifests().length;
        }
        getTotalMembers() {
            return this.members.length;
        }
        /**
         * Get a tree of sub collections and manifests, using each child manifest's first 'top' range.
         */
        getDefaultTree() {
            super.getDefaultTree();
            this.defaultTree.data.type = Manifesto.TreeNodeType.COLLECTION.toString();
            this._parseManifests(this);
            this._parseCollections(this);
            Manifesto.Utils.generateTreeNodeIds(this.defaultTree);
            return this.defaultTree;
        }
        _parseManifests(parentCollection) {
            if (parentCollection.getManifests() && parentCollection.getManifests().length) {
                for (let i = 0; i < parentCollection.getManifests().length; i++) {
                    var manifest = parentCollection.getManifests()[i];
                    var tree = manifest.getDefaultTree();
                    tree.label = manifest.parentLabel || Manifesto.TranslationCollection.getValue(manifest.getLabel(), this.options.locale) || 'manifest ' + (i + 1);
                    tree.navDate = manifest.getNavDate();
                    tree.data.id = manifest.id;
                    tree.data.type = Manifesto.TreeNodeType.MANIFEST.toString();
                    parentCollection.defaultTree.addNode(tree);
                }
            }
        }
        _parseCollections(parentCollection) {
            if (parentCollection.getCollections() && parentCollection.getCollections().length) {
                for (let i = 0; i < parentCollection.getCollections().length; i++) {
                    var collection = parentCollection.getCollections()[i];
                    var tree = collection.getDefaultTree();
                    tree.label = collection.parentLabel || Manifesto.TranslationCollection.getValue(collection.getLabel(), this.options.locale) || 'collection ' + (i + 1);
                    tree.navDate = collection.getNavDate();
                    tree.data.id = collection.id;
                    tree.data.type = Manifesto.TreeNodeType.COLLECTION.toString();
                    parentCollection.defaultTree.addNode(tree);
                    this._parseCollections(collection);
                }
            }
        }
    }
    Manifesto.Collection = Collection;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class Range extends Manifesto.ManifestResource {
        constructor(jsonld, options) {
            super(jsonld, options);
            this._canvases = null;
            this._ranges = null;
            this.members = [];
        }
        getCanvasIds() {
            if (this.__jsonld.canvases) {
                return this.__jsonld.canvases;
            }
            return [];
        }
        getCanvases() {
            if (this._canvases) {
                return this._canvases;
            }
            return this._canvases = this.members.en().where(m => m.isCanvas()).toArray();
        }
        getRanges() {
            if (this._ranges) {
                return this._ranges;
            }
            return this._ranges = this.members.en().where(m => m.isRange()).toArray();
        }
        getViewingDirection() {
            if (this.getProperty('viewingDirection')) {
                return new Manifesto.ViewingDirection(this.getProperty('viewingDirection'));
            }
            return null;
        }
        getViewingHint() {
            if (this.getProperty('viewingHint')) {
                return new Manifesto.ViewingHint(this.getProperty('viewingHint'));
            }
            return null;
        }
        getTree(treeRoot) {
            treeRoot.data = this;
            this.treeNode = treeRoot;
            var ranges = this.getRanges();
            if (ranges && ranges.length) {
                for (let i = 0; i < ranges.length; i++) {
                    const range = ranges[i];
                    const node = new Manifesto.TreeNode();
                    treeRoot.addNode(node);
                    this._parseTreeNode(node, range);
                }
            }
            Manifesto.Utils.generateTreeNodeIds(treeRoot);
            return treeRoot;
        }
        _parseTreeNode(node, range) {
            node.label = Manifesto.TranslationCollection.getValue(range.getLabel(), this.options.locale);
            node.data = range;
            node.data.type = Manifesto.TreeNodeType.RANGE.toString();
            range.treeNode = node;
            const ranges = range.getRanges();
            if (ranges && ranges.length) {
                for (let i = 0; i < ranges.length; i++) {
                    const childRange = ranges[i];
                    const childNode = new Manifesto.TreeNode();
                    node.addNode(childNode);
                    this._parseTreeNode(childNode, childRange);
                }
            }
        }
    }
    Manifesto.Range = Range;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class Rendering extends Manifesto.ManifestResource {
        constructor(jsonld, options) {
            super(jsonld, options);
        }
        getFormat() {
            return new Manifesto.RenderingFormat(this.getProperty('format'));
        }
    }
    Manifesto.Rendering = Rendering;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class Sequence extends Manifesto.ManifestResource {
        constructor(jsonld, options) {
            super(jsonld, options);
            this.canvases = null;
        }
        getCanvases() {
            if (this.canvases != null)
                return this.canvases;
            this.canvases = [];
            // if IxIF elements are present, use them. Otherwise fall back to IIIF canvases.
            const children = this.__jsonld.elements || this.__jsonld.canvases;
            if (children) {
                for (let i = 0; i < children.length; i++) {
                    var c = children[i];
                    var canvas = new Manifesto.Canvas(c, this.options);
                    canvas.index = i;
                    this.canvases.push(canvas);
                }
            }
            return this.canvases;
        }
        getCanvasById(id) {
            for (let i = 0; i < this.getTotalCanvases(); i++) {
                const canvas = this.getCanvasByIndex(i);
                if (canvas.id === id) {
                    return canvas;
                }
            }
            return null;
        }
        getCanvasByIndex(canvasIndex) {
            return this.getCanvases()[canvasIndex];
        }
        getCanvasIndexById(id) {
            for (let i = 0; i < this.getTotalCanvases(); i++) {
                const canvas = this.getCanvasByIndex(i);
                if (canvas.id === id) {
                    return i;
                }
            }
            return null;
        }
        getCanvasIndexByLabel(label, foliated) {
            label = label.trim();
            if (!isNaN(label)) {
                label = parseInt(label, 10).toString(); // trim any preceding zeros.
                if (foliated)
                    label += 'r'; // default to recto
            }
            var doublePageRegExp = /(\d*)\D+(\d*)/;
            var match, regExp, regStr, labelPart1, labelPart2;
            for (let i = 0; i < this.getTotalCanvases(); i++) {
                const canvas = this.getCanvasByIndex(i);
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
        }
        getLastCanvasLabel(alphanumeric) {
            for (let i = this.getTotalCanvases() - 1; i >= 0; i--) {
                const canvas = this.getCanvasByIndex(i);
                const label = Manifesto.TranslationCollection.getValue(canvas.getLabel(), this.options.locale);
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
        }
        getLastPageIndex() {
            return this.getTotalCanvases() - 1;
        }
        getNextPageIndex(canvasIndex, pagingEnabled) {
            let index;
            if (pagingEnabled) {
                const indices = this.getPagedIndices(canvasIndex);
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
        }
        getPagedIndices(canvasIndex, pagingEnabled) {
            let indices = [];
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
        }
        getPrevPageIndex(canvasIndex, pagingEnabled) {
            let index;
            if (pagingEnabled) {
                const indices = this.getPagedIndices(canvasIndex);
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
        }
        getStartCanvasIndex() {
            const startCanvas = this.getStartCanvas();
            if (startCanvas) {
                // if there's a startCanvas attribute, loop through the canvases and return the matching index.
                for (let i = 0; i < this.getTotalCanvases(); i++) {
                    var canvas = this.getCanvasByIndex(i);
                    if (canvas.id === startCanvas)
                        return i;
                }
            }
            // default to first canvas.
            return 0;
        }
        getThumbs(width, height) {
            const thumbs = [];
            const totalCanvases = this.getTotalCanvases();
            for (let i = 0; i < totalCanvases; i++) {
                var canvas = this.getCanvasByIndex(i);
                thumbs.push(new Manifesto.Thumb(width, canvas));
            }
            return thumbs;
        }
        getStartCanvas() {
            return this.getProperty('startCanvas');
        }
        getTotalCanvases() {
            return this.getCanvases().length;
        }
        getViewingDirection() {
            if (this.getProperty('viewingDirection')) {
                return new Manifesto.ViewingDirection(this.getProperty('viewingDirection'));
            }
            else if (this.options.resource.getViewingDirection) {
                return this.options.resource.getViewingDirection();
            }
            return Manifesto.ViewingDirection.LEFTTORIGHT;
        }
        getViewingHint() {
            if (this.getProperty('viewingHint')) {
                return new Manifesto.ViewingHint(this.getProperty('viewingHint'));
            }
            return Manifesto.ViewingHint.EMPTY;
        }
        isCanvasIndexOutOfRange(canvasIndex) {
            return canvasIndex > this.getTotalCanvases() - 1;
        }
        isFirstCanvas(canvasIndex) {
            return canvasIndex === 0;
        }
        isLastCanvas(canvasIndex) {
            return canvasIndex === this.getTotalCanvases() - 1;
        }
        isMultiCanvas() {
            return this.getTotalCanvases() > 1;
        }
        isPagingEnabled() {
            return this.getViewingHint().toString() === Manifesto.ViewingHint.PAGED.toString();
        }
        // checks if the number of canvases is even - therefore has a front and back cover
        isTotalCanvasesEven() {
            return this.getTotalCanvases() % 2 === 0;
        }
    }
    Manifesto.Sequence = Sequence;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class Deserialiser {
        static parse(manifest, options) {
            if (typeof manifest === 'string') {
                manifest = JSON.parse(manifest);
            }
            return this.parseJson(manifest, options);
        }
        static parseJson(json, options) {
            let resource;
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
        }
        static parseCollection(json, options) {
            const collection = new Manifesto.Collection(json, options);
            if (options) {
                collection.index = options.index || 0;
            }
            else {
                collection.index = 0;
            }
            this.parseCollections(collection, options);
            this.parseManifests(collection, options);
            this.parseMembers(collection, options);
            return collection;
        }
        static parseCollections(collection, options) {
            const children = collection.__jsonld.collections;
            if (children) {
                for (let i = 0; i < children.length; i++) {
                    if (options) {
                        options.index = i;
                    }
                    const child = this.parseCollection(children[i], options);
                    child.index = i;
                    child.parentCollection = collection;
                    collection.members.push(child);
                }
            }
        }
        static parseManifest(json, options) {
            const manifest = new Manifesto.Manifest(json, options);
            return manifest;
        }
        static parseManifests(collection, options) {
            const children = collection.__jsonld.manifests;
            if (children) {
                for (let i = 0; i < children.length; i++) {
                    const child = this.parseManifest(children[i], options);
                    child.index = i;
                    child.parentCollection = collection;
                    collection.members.push(child);
                }
            }
        }
        static parseMember(json, options) {
            if (json['@type'].toLowerCase() === 'sc:manifest') {
                return this.parseManifest(json, options);
            }
            else if (json['@type'].toLowerCase() === 'sc:collection') {
                return this.parseCollection(json, options);
            }
            return null;
        }
        static parseMembers(collection, options) {
            const children = collection.__jsonld.members;
            if (children) {
                for (let i = 0; i < children.length; i++) {
                    if (options) {
                        options.index = i;
                    }
                    var child = this.parseMember(children[i], options);
                    if (!child)
                        return;
                    // only add to members if not already parsed from backwards-compatible collections/manifests arrays
                    if (collection.members.en().where(m => m.id === child.id).first()) {
                        continue;
                    }
                    child.index = i;
                    child.parentCollection = collection;
                    collection.members.push(child);
                }
            }
        }
    }
    Manifesto.Deserialiser = Deserialiser;
    class Serialiser {
        static serialise(manifest) {
            // todo
            return "";
        }
    }
    Manifesto.Serialiser = Serialiser;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class Service extends Manifesto.ManifestResource {
        constructor(jsonld, options) {
            super(jsonld, options);
        }
        getProfile() {
            let profile = this.getProperty('profile');
            if (!profile) {
                profile = this.getProperty('dcterms:conformsTo');
            }
            if (Array.isArray(profile)) {
                return new Manifesto.ServiceProfile(profile[0]);
            }
            return new Manifesto.ServiceProfile(profile);
        }
        getConfirmLabel() {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('confirmLabel'), this.options.locale);
        }
        getDescription() {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('description'), this.options.locale);
        }
        getFailureDescription() {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('failureDescription'), this.options.locale);
        }
        getFailureHeader() {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('failureHeader'), this.options.locale);
        }
        getHeader() {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('header'), this.options.locale);
        }
        getServiceLabel() {
            return Manifesto.Utils.getLocalisedValue(this.getProperty('label'), this.options.locale);
        }
        getInfoUri() {
            let infoUri = this.id;
            if (!infoUri.endsWith('/')) {
                infoUri += '/';
            }
            infoUri += 'info.json';
            return infoUri;
        }
    }
    Manifesto.Service = Service;
})(Manifesto || (Manifesto = {}));


var Manifesto;
(function (Manifesto) {
    class Thumb {
        constructor(width, canvas) {
            this.data = canvas;
            this.index = canvas.index;
            this.width = width;
            const heightRatio = canvas.getHeight() / canvas.getWidth();
            if (heightRatio) {
                this.height = Math.floor(this.width * heightRatio);
            }
            else {
                this.height = width;
            }
            this.uri = canvas.getCanonicalImageUri(width);
            this.label = Manifesto.TranslationCollection.getValue(canvas.getLabel()); // todo: pass locale?
        }
    }
    Manifesto.Thumb = Thumb;
})(Manifesto || (Manifesto = {}));


var Manifesto;
(function (Manifesto) {
    class TreeNode {
        constructor(label, data) {
            this.label = label;
            this.data = data || {};
            this.nodes = [];
        }
        addNode(node) {
            this.nodes.push(node);
            node.parentNode = this;
        }
        isCollection() {
            return this.data.type === Manifesto.TreeNodeType.COLLECTION.toString();
        }
        isManifest() {
            return this.data.type === Manifesto.TreeNodeType.MANIFEST.toString();
        }
        isRange() {
            return this.data.type === Manifesto.TreeNodeType.RANGE.toString();
        }
    }
    Manifesto.TreeNode = TreeNode;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class TreeNodeType extends Manifesto.StringValue {
        // todo: use getters when ES3 target is no longer required.
        collection() {
            return new TreeNodeType(TreeNodeType.COLLECTION.toString());
        }
        manifest() {
            return new TreeNodeType(TreeNodeType.MANIFEST.toString());
        }
        range() {
            return new TreeNodeType(TreeNodeType.RANGE.toString());
        }
    }
    TreeNodeType.COLLECTION = new TreeNodeType("sc:collection");
    TreeNodeType.MANIFEST = new TreeNodeType("sc:manifest");
    TreeNodeType.RANGE = new TreeNodeType("sc:range");
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
var http = require("http");
var https = require("https");
var url = require("url");
var Manifesto;
(function (Manifesto) {
    class Utils {
        static getResourceFormat(format) {
            format = format.toLowerCase();
            format = format.split(';')[0];
            return format.trim();
        }
        static getImageQuality(profile) {
            const p = profile.toString();
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
        }
        static getInexactLocale(locale) {
            if (locale.indexOf('-') !== -1) {
                return locale.substr(0, locale.indexOf('-'));
            }
            return locale;
        }
        static getLocalisedValue(resource, locale) {
            // if the resource is not an array of translations, return the string.
            if (!Array.isArray(resource)) {
                return resource;
            }
            // test for exact match
            for (let i = 0; i < resource.length; i++) {
                const value = resource[i];
                const language = value['@language'];
                if (locale === language) {
                    return value['@value'];
                }
            }
            // test for inexact match
            const match = locale.substr(0, locale.indexOf('-'));
            for (let i = 0; i < resource.length; i++) {
                var value = resource[i];
                var language = value['@language'];
                if (language === match) {
                    return value['@value'];
                }
            }
            return null;
        }
        static generateTreeNodeIds(treeNode, index = 0) {
            let id;
            if (!treeNode.parentNode) {
                id = '0';
            }
            else {
                id = treeNode.parentNode.id + "-" + index;
            }
            treeNode.id = id;
            for (let i = 0; i < treeNode.nodes.length; i++) {
                var n = treeNode.nodes[i];
                Utils.generateTreeNodeIds(n, i);
            }
        }
        static isImageProfile(profile) {
            if (profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL0PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL1PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL2PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL0PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL1PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL2PROFILE.toString()) {
                return true;
            }
            return false;
        }
        static isLevel0ImageProfile(profile) {
            if (profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL0PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL0.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL0PROFILE.toString()) {
                return true;
            }
            return false;
        }
        static isLevel1ImageProfile(profile) {
            if (profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL1PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL1.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL1PROFILE.toString()) {
                return true;
            }
            return false;
        }
        static isLevel2ImageProfile(profile) {
            if (profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF1IMAGELEVEL2PROFILE.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL2.toString() ||
                profile.toString() === Manifesto.ServiceProfile.IIIF2IMAGELEVEL2PROFILE.toString()) {
                return true;
            }
            return false;
        }
        static loadResource(uri) {
            return new Promise((resolve, reject) => {
                const u = url.parse(uri);
                var request;
                var opts = {
                    host: u.hostname,
                    port: u.port,
                    path: u.path,
                    method: "GET",
                    withCredentials: false
                };
                if (u.protocol === 'https:') {
                    request = https.request(opts, (response) => {
                        var result = "";
                        response.on('data', (chunk) => {
                            result += chunk;
                        });
                        response.on('end', () => {
                            resolve(result);
                        });
                    });
                }
                else {
                    request = http.request(opts, (response) => {
                        var result = "";
                        response.on('data', (chunk) => {
                            result += chunk;
                        });
                        response.on('end', () => {
                            resolve(result);
                        });
                    });
                }
                request.on('error', (error) => {
                    reject(error);
                });
                request.end();
            });
        }
        static loadExternalResourcesAuth1(resources, openContentProviderWindow, openTokenService, userInteractionWithContentProvider, getContentProviderWindow, showOutOfOptionsMessages) {
            return new Promise((resolve, reject) => {
                const promises = resources.map((resource) => {
                    return Utils.loadExternalResourceAuth1(resource, openContentProviderWindow, openTokenService, userInteractionWithContentProvider, getContentProviderWindow, showOutOfOptionsMessages);
                });
                Promise.all(promises)
                    .then(() => {
                    resolve(resources);
                })["catch"]((error) => {
                    reject(error);
                });
            });
        }
        static loadExternalResourceAuth1(resource, openContentProviderWindow, openTokenService, userInteractionWithContentProvider, getContentProviderWindow, showOutOfOptionsMessages) {
            return __awaiter(this, void 0, void 0, function* () {
                yield resource.getData();
                if (resource.status === HTTPStatusCode.MOVED_TEMPORARILY || resource.status === HTTPStatusCode.UNAUTHORIZED) {
                    resource = yield Utils.doAuthChain(resource, openContentProviderWindow, openTokenService, userInteractionWithContentProvider, getContentProviderWindow, showOutOfOptionsMessages);
                }
                return resource;
            });
        }
        static doAuthChain(resource, openContentProviderWindow, openTokenService, userInteractionWithContentProvider, getContentProviderWindow, showOutOfOptionsMessages) {
            return __awaiter(this, void 0, void 0, function* () {
                // This function enters the flowchart at the < External? > junction
                // http://iiif.io/api/auth/1.0/#workflow-from-the-browser-client-perspective
                if (!resource.isAccessControlled()) {
                    return resource; // no services found
                }
                let serviceToTry = null;
                let lastAttempted = null;
                // repetition of logic is left in these steps for clarity:
                // Looking for external pattern
                serviceToTry = resource.externalService;
                if (serviceToTry) {
                    serviceToTry.options = resource.options;
                    lastAttempted = serviceToTry;
                    //let success = 
                    yield Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry);
                    //if (success) return resource;
                }
                // Looking for kiosk pattern
                serviceToTry = resource.kioskService;
                if (serviceToTry) {
                    serviceToTry.options = resource.options;
                    lastAttempted = serviceToTry;
                    let kioskWindow = openContentProviderWindow(serviceToTry);
                    if (kioskWindow) {
                        yield userInteractionWithContentProvider(kioskWindow);
                        //let success = 
                        yield Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry);
                        //if (success) return resource;
                    }
                    else {
                        // Could not open kiosk window
                    }
                }
                // The code for the next two patterns is identical (other than the profile name).
                // The difference is in the expected behaviour of
                //
                //    await userInteractionWithContentProvider(contentProviderWindow);
                // 
                // For clickthrough the opened window should close immediately having established
                // a session, whereas for login the user might spend some time entering credentials etc.
                // Looking for clickthrough pattern
                serviceToTry = resource.clickThroughService;
                if (serviceToTry) {
                    serviceToTry.options = resource.options;
                    lastAttempted = serviceToTry;
                    let contentProviderWindow = yield getContentProviderWindow(serviceToTry);
                    if (contentProviderWindow) {
                        // should close immediately
                        yield userInteractionWithContentProvider(contentProviderWindow);
                        //let success = 
                        yield Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry);
                        //if (success) return resource;
                    }
                }
                // Looking for login pattern
                serviceToTry = resource.loginService;
                if (serviceToTry) {
                    serviceToTry.options = resource.options;
                    lastAttempted = serviceToTry;
                    let contentProviderWindow = yield getContentProviderWindow(serviceToTry);
                    if (contentProviderWindow) {
                        // we expect the user to spend some time interacting
                        let userInteraction = yield userInteractionWithContentProvider(contentProviderWindow);
                        if (userInteraction) {
                            resource = yield Utils.attemptResourceWithToken(resource, openTokenService, serviceToTry);
                            return resource;
                        }
                    }
                }
                // nothing worked! Use the most recently tried service as the source of
                // messages to show to the user.
                if (lastAttempted) {
                    showOutOfOptionsMessages(lastAttempted);
                }
                return resource;
            });
        }
        static attemptResourceWithToken(resource, openTokenService, authService) {
            return __awaiter(this, void 0, void 0, function* () {
                // attempting token interaction for " + authService["@id"]
                const tokenService = authService.getService(Manifesto.ServiceProfile.AUTH1TOKEN.toString());
                if (tokenService) {
                    // found token service: " + tokenService["@id"]);
                    let tokenMessage = yield openTokenService(tokenService);
                    if (tokenMessage && tokenMessage.accessToken) {
                        yield resource.getData();
                    }
                }
                // Didn't get a 200 info response.
                return resource;
            });
        }
        static loadExternalResourcesAuth09(resources, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options) {
            return new Promise((resolve, reject) => {
                const promises = resources.map((resource) => {
                    return Utils.loadExternalResourceAuth09(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options);
                });
                Promise.all(promises)
                    .then(() => {
                    resolve(resources);
                })["catch"]((error) => {
                    reject(error);
                });
            });
        }
        // IIIF auth api pre v1.0
        // Keeping this around for now until the auth 1.0 implementation is stable
        static loadExternalResourceAuth09(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken, handleResourceResponse, options) {
            return new Promise((resolve, reject) => {
                if (options && options.pessimisticAccessControl) {
                    // pessimistic: access control cookies may have been deleted.
                    // always request the access token for every access controlled info.json request
                    // returned access tokens are not stored, therefore the login window flashes for every request.
                    resource.getData().then(() => {
                        if (resource.isAccessControlled()) {
                            // if the resource has a click through service, use that.
                            if (resource.clickThroughService) {
                                resolve(clickThrough(resource));
                                //} else if(resource.restrictedService) {
                                resolve(restricted(resource));
                            }
                            else {
                                login(resource).then(() => {
                                    getAccessToken(resource, true).then((token) => {
                                        resource.getData(token).then(() => {
                                            resolve(handleResourceResponse(resource));
                                        })["catch"]((message) => {
                                            reject(Utils.createInternalServerError(message));
                                        });
                                    })["catch"]((message) => {
                                        reject(Utils.createInternalServerError(message));
                                    });
                                })["catch"]((message) => {
                                    reject(Utils.createInternalServerError(message));
                                });
                            }
                        }
                        else {
                            // this info.json isn't access controlled, therefore no need to request an access token.
                            resolve(resource);
                        }
                    })["catch"]((message) => {
                        reject(Utils.createInternalServerError(message));
                    });
                }
                else {
                    // optimistic: access control cookies may not have been deleted.
                    // store access tokens to avoid login window flashes.
                    // if cookies are deleted a page refresh is required.
                    // try loading the resource using an access token that matches the info.json domain.
                    // if an access token is found, request the resource using it regardless of whether it is access controlled.
                    getStoredAccessToken(resource, tokenStorageStrategy).then((storedAccessToken) => {
                        if (storedAccessToken) {
                            // try using the stored access token
                            resource.getData(storedAccessToken).then(() => {
                                // if the info.json loaded using the stored access token
                                if (resource.status === HTTPStatusCode.OK) {
                                    resolve(handleResourceResponse(resource));
                                }
                                else {
                                    // otherwise, load the resource data to determine the correct access control services.
                                    // if access controlled, do login.
                                    Utils.authorize(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken).then(() => {
                                        resolve(handleResourceResponse(resource));
                                    })["catch"]((error) => {
                                        // if (resource.restrictedService){
                                        //     reject(Utils.createRestrictedError());
                                        // } else {
                                        reject(Utils.createAuthorizationFailedError());
                                        //}
                                    });
                                }
                            })["catch"]((error) => {
                                reject(Utils.createAuthorizationFailedError());
                            });
                        }
                        else {
                            Utils.authorize(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken).then(() => {
                                resolve(handleResourceResponse(resource));
                            })["catch"]((error) => {
                                reject(Utils.createAuthorizationFailedError());
                            });
                        }
                    })["catch"]((error) => {
                        reject(Utils.createAuthorizationFailedError());
                    });
                }
            });
        }
        static createError(name, message) {
            const error = new Error();
            error.message = message;
            error.name = name;
            return error;
        }
        static createAuthorizationFailedError() {
            return Utils.createError(manifesto.StatusCodes.AUTHORIZATION_FAILED.toString(), "Authorization failed");
        }
        static createRestrictedError() {
            return Utils.createError(manifesto.StatusCodes.RESTRICTED.toString(), "Restricted");
        }
        static createInternalServerError(message) {
            return Utils.createError(manifesto.StatusCodes.INTERNAL_SERVER_ERROR.toString(), message);
        }
        static authorize(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, getStoredAccessToken) {
            return new Promise((resolve, reject) => {
                resource.getData().then(() => {
                    if (resource.isAccessControlled()) {
                        getStoredAccessToken(resource, tokenStorageStrategy).then((storedAccessToken) => {
                            if (storedAccessToken) {
                                // try using the stored access token
                                resource.getData(storedAccessToken).then(() => {
                                    if (resource.status === HTTPStatusCode.OK) {
                                        resolve(resource); // happy path ended
                                    }
                                    else {
                                        // the stored token is no good for this resource
                                        Utils.showAuthInteraction(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, resolve, reject);
                                    }
                                })["catch"]((message) => {
                                    reject(Utils.createInternalServerError(message));
                                });
                            }
                            else {
                                // There was no stored token, but the user might have a cookie that will grant a token
                                getAccessToken(resource, false).then((accessToken) => {
                                    if (accessToken) {
                                        storeAccessToken(resource, accessToken, tokenStorageStrategy).then(() => {
                                            // try using the fresh access token
                                            resource.getData(accessToken).then(() => {
                                                if (resource.status === HTTPStatusCode.OK) {
                                                    resolve(resource);
                                                }
                                                else {
                                                    // User has a token, but it's not good enough
                                                    Utils.showAuthInteraction(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, resolve, reject);
                                                }
                                            })["catch"]((message) => {
                                                reject(Utils.createInternalServerError(message));
                                            });
                                        })["catch"]((message) => {
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
                        })["catch"]((message) => {
                            reject(Utils.createInternalServerError(message));
                        });
                    }
                    else {
                        // this info.json isn't access controlled, therefore there's no need to request an access token
                        resolve(resource);
                    }
                });
            });
        }
        static showAuthInteraction(resource, tokenStorageStrategy, clickThrough, restricted, login, getAccessToken, storeAccessToken, resolve, reject) {
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
                clickThrough(resource).then(() => {
                    getAccessToken(resource, true).then((accessToken) => {
                        storeAccessToken(resource, accessToken, tokenStorageStrategy).then(() => {
                            resource.getData(accessToken).then(() => {
                                resolve(resource);
                            })["catch"]((message) => {
                                reject(Utils.createInternalServerError(message));
                            });
                        })["catch"]((message) => {
                            reject(Utils.createInternalServerError(message));
                        });
                    })["catch"]((message) => {
                        reject(Utils.createInternalServerError(message));
                    });
                });
            }
            else {
                // get an access token
                login(resource).then(() => {
                    getAccessToken(resource, true).then((accessToken) => {
                        storeAccessToken(resource, accessToken, tokenStorageStrategy).then(() => {
                            resource.getData(accessToken).then(() => {
                                resolve(resource);
                            })["catch"]((message) => {
                                reject(Utils.createInternalServerError(message));
                            });
                        })["catch"]((message) => {
                            reject(Utils.createInternalServerError(message));
                        });
                    })["catch"]((message) => {
                        reject(Utils.createInternalServerError(message));
                    });
                });
            }
        }
        ;
        static getService(resource, profile) {
            const services = this.getServices(resource);
            // coerce profile to string
            if (typeof (profile) !== 'string') {
                profile = profile.toString();
            }
            for (let i = 0; i < services.length; i++) {
                const service = services[i];
                if (service.getProfile().toString() === profile) {
                    return service;
                }
            }
            return null;
        }
        static getResourceById(parentResource, id) {
            return [parentResource.__jsonld].en().traverseUnique(x => Utils.getAllArrays(x))
                .first(r => r['@id'] === id);
        }
        static getAllArrays(obj) {
            var all = [].en();
            if (!obj)
                return all;
            for (let key in obj) {
                var val = obj[key];
                if (Array.isArray(val)) {
                    all = all.concat(val);
                }
            }
            return all;
        }
        static getServices(resource) {
            let service;
            // if passing a manifesto-parsed object, use the __jsonld.service property,
            // otherwise look for a service property (info.json services)
            if (resource.__jsonld) {
                service = resource.__jsonld.service;
            }
            else {
                service = resource.service;
            }
            const services = [];
            if (!service)
                return services;
            // coerce to array
            if (!Array.isArray(service)) {
                service = [service];
            }
            for (let i = 0; i < service.length; i++) {
                const s = service[i];
                if (typeof (s) === 'string') {
                    const r = this.getResourceById(resource.options.resource, s);
                    if (r) {
                        services.push(new Manifesto.Service(r.__jsonld || r, resource.options));
                    }
                }
                else {
                    services.push(new Manifesto.Service(s, resource.options));
                }
            }
            return services;
        }
    }
    Manifesto.Utils = Utils;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class MetadataItem {
        constructor(defaultLocale) {
            this.defaultLocale = defaultLocale;
        }
        parse(resource) {
            this.resource = resource;
            this.label = Manifesto.TranslationCollection.parse(this.resource.label, this.defaultLocale);
            this.value = Manifesto.TranslationCollection.parse(this.resource.value, this.defaultLocale);
        }
        // shortcuts to get/set values based on default locale
        getLabel() {
            if (this.label) {
                return Manifesto.TranslationCollection.getValue(this.label, this.defaultLocale);
            }
            return null;
        }
        setLabel(value) {
            if (this.label && this.label.length) {
                var t = this.label.en().where(x => x.locale === this.defaultLocale || x.locale === Manifesto.Utils.getInexactLocale(this.defaultLocale)).first();
                if (t)
                    t.value = value;
            }
        }
        getValue() {
            if (this.value) {
                var locale = this.defaultLocale;
                // if the label has a locale, prefer that to the default locale
                if (this.label.length && this.label[0].locale) {
                    locale = this.label[0].locale;
                }
                return Manifesto.TranslationCollection.getValue(this.value, locale);
            }
            return null;
        }
        setValue(value) {
            if (this.value && this.value.length) {
                var t = this.value.en().where(x => x.locale === this.defaultLocale || x.locale === Manifesto.Utils.getInexactLocale(this.defaultLocale)).first();
                if (t)
                    t.value = value;
            }
        }
    }
    Manifesto.MetadataItem = MetadataItem;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class Translation {
        constructor(value, locale) {
            this.value = value;
            this.locale = locale;
        }
    }
    Manifesto.Translation = Translation;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class TranslationCollection extends Array {
        static parse(translation, defaultLocale) {
            const tc = [];
            let t;
            if (!translation) {
                return tc;
            }
            else if (Array.isArray(translation)) {
                for (let i = 0; i < translation.length; i++) {
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
                t = new Manifesto.Translation(translation['@value'], translation['@language'] || defaultLocale);
                tc.push(t);
                return tc;
            }
            return tc;
        }
        static getValue(translationCollection, locale) {
            if (translationCollection.length) {
                if (locale) {
                    const translation = translationCollection.en().where(t => t.locale === locale || Manifesto.Utils.getInexactLocale(t.locale) === Manifesto.Utils.getInexactLocale(locale)).first();
                    if (translation) {
                        return translation.value;
                    }
                }
                // return the first value
                return translationCollection[0].value;
            }
            return null;
        }
    }
    Manifesto.TranslationCollection = TranslationCollection;
})(Manifesto || (Manifesto = {}));

global.manifesto = global.Manifesto = module.exports = {
    AnnotationMotivation: new Manifesto.AnnotationMotivation(),
    ElementType: new Manifesto.ElementType(),
    IIIFResourceType: new Manifesto.IIIFResourceType(),
    ManifestType: new Manifesto.ManifestType(),
    MetadataItem: Manifesto.MetadataItem,
    RenderingFormat: new Manifesto.RenderingFormat(),
    ResourceFormat: new Manifesto.ResourceFormat(),
    ResourceType: new Manifesto.ResourceType(),
    ServiceProfile: new Manifesto.ServiceProfile(),
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

var Manifesto;
(function (Manifesto) {
    class Annotation extends Manifesto.ManifestResource {
        constructor(jsonld, options) {
            super(jsonld, options);
        }
        getBody() {
            const bodies = [];
            const body = this.getProperty('body');
            if (body) {
                if (body.items) {
                    for (var i = 0; i < body.items.length; i++) {
                        const b = body.items[i];
                        bodies.push(b);
                    }
                }
                else {
                    bodies.push(new Manifesto.AnnotationBody(body));
                }
            }
            return bodies;
        }
        getMotivation() {
            const motivation = this.getProperty('motivation');
            if (motivation) {
                return new Manifesto.AnnotationMotivation(motivation.toLowerCase());
            }
            return null;
        }
        // open annotation
        getOn() {
            return this.getProperty('on');
        }
        getTarget() {
            return this.getProperty('target');
        }
        getResource() {
            return new Manifesto.Resource(this.getProperty('resource'), this.options);
        }
    }
    Manifesto.Annotation = Annotation;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class AnnotationBody extends Manifesto.ManifestResource {
        constructor(jsonld, options) {
            super(jsonld, options);
        }
        getFormat() {
            const format = this.getProperty('format');
            if (format) {
                return new Manifesto.ResourceFormat(Manifesto.Utils.getResourceFormat(format));
            }
            return null;
        }
        getType() {
            const type = this.getProperty('type');
            if (type) {
                return new Manifesto.ResourceType(type.toLowerCase());
            }
            return null;
        }
    }
    Manifesto.AnnotationBody = AnnotationBody;
})(Manifesto || (Manifesto = {}));

var Manifesto;
(function (Manifesto) {
    class AnnotationPage extends Manifesto.ManifestResource {
        constructor(jsonld, options) {
            super(jsonld, options);
        }
        getItems() {
            return this.getProperty('items');
        }
    }
    Manifesto.AnnotationPage = AnnotationPage;
})(Manifesto || (Manifesto = {}));





















var Manifesto;
(function (Manifesto) {
    class Resource extends Manifesto.ManifestResource {
        constructor(jsonld, options) {
            super(jsonld, options);
        }
        getFormat() {
            const format = this.getProperty('format');
            if (format) {
                return new Manifesto.ResourceFormat(format.toLowerCase());
            }
            return null;
        }
        getType() {
            const type = this.getProperty('type');
            if (type) {
                return new Manifesto.ResourceType(type.toLowerCase());
            }
            return null;
        }
        getWidth() {
            return this.getProperty('width');
        }
        getHeight() {
            return this.getProperty('height');
        }
        getMaxWidth() {
            return this.getProperty('maxWidth');
        }
        getMaxHeight() {
            const maxHeight = this.getProperty('maxHeight');
            // if a maxHeight hasn't been specified, default to maxWidth.
            // maxWidth in essence becomes maxEdge
            if (!maxHeight) {
                return this.getMaxWidth();
            }
            return null;
        }
    }
    Manifesto.Resource = Resource;
})(Manifesto || (Manifesto = {}));
