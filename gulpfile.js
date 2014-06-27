var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    util = require('gulp-util');

var LIVERELOAD_PORT = 35729,
    EXPRESS_PORT = 8181,
    EXPRESS_ROOT = __dirname;

function startExpress() {
    var express = require('express');
    var app = express();
    app.use(express.static(EXPRESS_ROOT));
    app.listen(EXPRESS_PORT);
}

gulp.task('default', function(){

    util.log('Starting express server on port '+EXPRESS_PORT);
    startExpress();

    // Watch HTML files
    gulp.watch('design/*.html', function(event){
        util.log( 'HTML files changed.');
        gulp.src('design/*.html')
            .pipe(livereload());
    });

    // Watch sass files
    gulp.watch('src/sass/**/*.sass', function(event){
        util.log( 'Sass files changed recompiling sass files.');

        gulp.src('src/sass/*.sass')
                .pipe(sass({ style: 'compressed' }))
                .pipe(gulp.dest('static/css'))
                .pipe(livereload());
        util.log('Sass compilation done.');

        // util.log('Triggering livereload');
        // fireLivereloadChange(event);
    });
});