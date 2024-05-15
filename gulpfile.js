const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src('assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/scss/dist'))
});

gulp.task('watch', function() {
    gulp.watch(['assets/scss/*.scss', 'assets/scss/_*.scss', 'index.html'], gulp.series('sass'));
});