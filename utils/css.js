var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');

var handleError = require('./handleError');

var runCss = function (options) {

    if (options.watch) {
        return gulp.watch(options.src, function () {
            return gulp.src(options.src)
            .pipe(concat('main.css'))
            .pipe(gulp.dest(options.dest));
        });
    } else {
        return gulp.src(options.src)
        .pipe(concat('main.css'))
        .pipe(cssmin())
        .pipe(gulp.dest(options.dest));   
    }

};

module.exports = runCss;