'use strict';

var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var sass = require('gulp-sass');
var del = require('del');

sass.compiler = require('node-sass');

gulp.task('html', () => {
	gulp.src('app/**/*.html')
		.pipe(gulp.dest('./dist'))
		.pipe(gulpConnect.reload());
});

gulp.task('sass', () => {
	gulp.src('app/sass/**/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'))
		.pipe(gulpConnect.reload());
});

gulp.task('js', () => {
	gulp.src('app/**/*.js')
		.pipe(gulp.dest('./dist'))
		.pipe(gulpConnect.reload());
});

gulp.task('watch', () => {
	gulp.watch('app/**/*.html', ['html']);
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch('app/**/*.js', ['js']);
});

gulp.task('connect', () => gulpConnect.server({
	root: ['dist', 'node_modules'],
	port: 8000,
	livereload: true,
}));

gulp.task('clean:dist', () => {
	return del.sync('dist');
});

gulp.task('build', ['clean:dist', 'html', 'sass', 'js']);

gulp.task('default', ['build', 'watch', 'connect']);

