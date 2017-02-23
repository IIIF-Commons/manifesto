const browserify = require('./tasks/browserify');
const build = require('./tasks/build');
const bump = require('./tasks/bump');
const bundle = require('./tasks/bundle');
const clean = require('./tasks/clean');
const config = require('./config');
const copy = require('./tasks/copy');
const gulp = require('gulp');
const metadata = require('./package');
const minify = require('./tasks/minify');
const mocha = require('./tasks/mocha');
const prependHeaders = require('./tasks/prependHeaders');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');

const opts = {};
metadata.name = 'manifesto';
opts.metadata = metadata;
opts.libs = [
    'node_modules/exjs/dist/ex.es3.min.js',
    'node_modules/extensions/dist/extensions.min.js',
    'node_modules/http-status-codes/dist/http-status-codes.js'
];

const c = new config(opts);

browserify(c);
build(c);
bundle(c);
clean(c);
copy(c);
minify(c);
mocha(c);
prependHeaders(c);

gulp.task('default', function(cb) {
    runSequence('clean:dist', 'build', 'browserify', 'minify', 'bundle', 'prependHeaders', cb);
});

gulp.task('test', ['mocha']);