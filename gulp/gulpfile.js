var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');

function getDataForFile(file){
	return {
		example: 'data loaded for ' + file.relative
	};
}

gulp.task('default', function(){
	nunjucksRender.nunjucks.configure(['src/templates/'], {watch:false});
	return gulp.src('src/templates/*.html')
		.pipe(data(getDatForFile))
		.pipe(nunjucksRender())
		.pipe(gulp.dest('dist'));
});