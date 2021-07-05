const gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

function style () {
    return gulp.src('./scss/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.stream())
}

function watch () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

function prefix () {
    gulp.src('./css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(concat('style.prefix.css'))
        .pipe(gulp.dest('./css'))
}

function compress () {
    return gulp.src('./css/style.prefix.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(concat('style.compress.css'))
      .pipe(gulp.dest('./css'));
}

exports.watch = watch;

exports.prefix = prefix;
exports.compress = compress;