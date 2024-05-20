const gulp = require('gulp');
const babel = require("gulp-babel");
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src('assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/scss/dist'))
});

gulp.task('watch', function() {
    gulp.watch(['assets/scss/*.scss', 'assets/scss/_*.scss', 'index.html'], gulp.series('sass'));
});

gulp.task("default", function () {
  return gulp.src("assets/js/global.js")
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(gulp.dest("dist"));
});