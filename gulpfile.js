var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass');


//TASKS

var cwd = process.cwd();

gulp.task('restart', function () {
    nodemon({
        script: './bin/www'
        , ext: 'js hbs css'
        , env: { 'NODE_ENV': 'development' }
    })
})

gulp.task('sass', function(){
    gulp.src(cwd + '/styles/**/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cwd + '/public/css'))
});

//Watch task
gulp.task('watch',function() {
    gulp.watch(cwd + '/styles/**/**/*.scss', ['sass']);
});

gulp.task('default', ['restart', 'watch']);