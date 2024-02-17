const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const webp = require('gulp-webp');


function compileStyles() {
    return gulp.src(['./**/*.scss', '!./node_modules/**'], { since: gulp.lastRun('compileStyles') })
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
}

function convertImg() {
    return gulp.src(['./**/*.jpg', './**/*.png', './**/*.jpeg', '!./node_modules/**', '!./Server/**'], { since: gulp.lastRun('imgConvert') })
        .pipe(webp())
        .pipe(gulp.dest('./'));
}

exports.compileStyles = compileStyles;

exports.watchSass = function () {
    gulp.watch(['./public/**/*.scss'], gulp.series('compileStyles'));
};

exports.imgConvert = convertImg;

exports.default = gulp.parallel(compileStyles, convertImg);
