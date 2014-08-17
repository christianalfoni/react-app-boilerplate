/** 
  Use Browserify to bundle up our tests.

  gulp test --watch --tests './tests/checkboxWithLabel-test.js'

  Thanks to - http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/ 
*/

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var livereload = require('gulp-livereload');
var gulpif = require('gulp-if');
var path = require('path');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');

var handleError = require('./handleError');

var runBrowserify = function (options) {

    var bundler = browserify({
        entries: [options.src],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    });
    var rebundle = function() {
        var fileName = path.basename(options.src);
        bundler.bundle()
        .on('error', handleError('Browserify'))
        .pipe(source(options.isTest ? 'test.js' : fileName))
        .pipe(gulpif(options.uglify, streamify(uglify())))
        .pipe(gulp.dest(options.dest))
        .pipe(gulpif(options.isTest, livereload()));
    };

    if (options.isTest) {
        livereload.listen();
    }

    if (options.watch) {
        bundler = watchify(bundler);
        bundler.on('update', rebundle);
    }

    bundler.transform(reactify);

    return rebundle();

};

module.exports = runBrowserify;