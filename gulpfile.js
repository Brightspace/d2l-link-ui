var gulp = require( 'gulp' ),
	vui = require( 'vui-helpers' );

gulp.task( 'clean', function() {
	return vui.clean( [ 'dist/**/*', 'lib', 'output' ] );
} );

gulp.task( 'css', [ 'less-dependencies' ], function () {
	return vui.makeCss( 'src/**/*.style', 'dist/' );
} );

gulp.task( 'less-dependencies', function () {
	return gulp.src( 'node_modules/vui-focus/dist/*.less' )
		.pipe( gulp.dest( 'lib/' ) );
} );

gulp.task( 'less', function () {
	return vui.makeLess( 'src/**/*.less', 'dist/' );
} );

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css', 'less' );
} );

gulp.task( 'test', function () {
	return vui.test(
			'test/unit/karma.conf.js',
			'test/unit/**/*Spec.js',
			'dist/**/*.css'
		);
} );
