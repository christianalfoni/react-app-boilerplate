// Gulp dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');

var browserify = require('./utils/browserify.js'); 
var css = require('./utils/css.js');

var DEFAULT_OPTIONS = {
	browserify: {
		src: './app/main.js',
		isTest: false,
		dest: './dev/',
		watch: true,
		uglify: false
	},
	css: {
		src: './styles/**/*.css',
		dest: './dev/',
		watch: true
	}
};

gulp.task('browserify', function () {
	return browserify(DEFAULT_OPTIONS.browserify);
});

gulp.task('css', function () {
	return css(DEFAULT_OPTIONS.css);
});

gulp.task('default', ['browserify', 'css']);

gulp.task('deploy', function () {
	DEFAULT_OPTIONS.browserify.dest = './dist/';
	DEFAULT_OPTIONS.browserify.watch = false;
	DEFAULT_OPTIONS.browserify.uglify = true;
	browserify(DEFAULT_OPTIONS.browserify);

	DEFAULT_OPTIONS.css.dest = './dist/';
	DEFAULT_OPTIONS.css.watch = false;
	css(DEFAULT_OPTIONS.css);
});

gulp.task('test', function () {
    var src = '.' + gutil.env[''][''];
    DEFAULT_OPTIONS.browserify.src = src;
    DEFAULT_OPTIONS.browserify.isTest = true;
    return browserify(DEFAULT_OPTIONS.browserify);
});