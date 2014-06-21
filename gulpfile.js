var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('default', function(){

    gulp.watch('src/sass/**/*.sass', function(event){
        console.log( event.path+' was '+event.type+', recompiling sass files.');
        gulp.src('src/sass/*.sass')
                .pipe(sass({ style: 'compressed' }))
                .pipe(gulp.dest('static/css'));
        console.log('Compile done.');
    });
});