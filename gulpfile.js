var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')
        .pipe(sass({ errLogToConsole: true }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('webserver', function() {
    gulp.src('src')
        .pipe(server({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});
