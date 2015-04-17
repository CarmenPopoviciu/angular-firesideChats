var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var traceur = require('gulp-traceur');
var flatten = require('gulp-flatten');

var PATHS = {
    src: {
        js: 'src/**/*.js',
        html: 'src/**/*.html',
        css: 'src/**/*.css',
        json: 'src/**/*.json'
    },
    lib: [
        'node_modules/gulp-traceur/node_modules/traceur/bin/traceur-runtime.js',
        'node_modules/es6-module-loader/dist/es6-module-loader-sans-promises.src.js',
        'node_modules/systemjs/lib/extension-register.js',
        'node_modules/angular2/node_modules/zone.js/zone.js',
        'node_modules/angular2/node_modules/zone.js/long-stack-trace-zone.js',
        'node_modules/materialize-css/bin/materialize.css',
        'node_modules/whatwg-fetch/fetch.js'
    ]
};

gulp.task('clean', function(done) {
    del(['dist'], done);
});

gulp.task('js', function () {
    return gulp.src(PATHS.src.js)
        .pipe(flatten())
        .pipe(rename({extname: ''})) //hack, see: https://github.com/sindresorhus/gulp-traceur/issues/54
        .pipe(plumber())
        .pipe(traceur({
            modules: 'instantiate',
            moduleName: true,
            annotations: true,
            types: true,
            memberVariables: true
        }))
        .pipe(rename({extname: '.js'})) //hack, see: https://github.com/sindresorhus/gulp-traceur/issues/54
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    return gulp.src(PATHS.src.html)
        .pipe(flatten())
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    return gulp.src(PATHS.src.css)
        .pipe(flatten())
        .pipe(gulp.dest('dist'));
});

gulp.task('json', function () {
    return gulp.src(PATHS.src.json)
        .pipe(flatten())
        .pipe(gulp.dest('dist'));
});

gulp.task('libs', ['angular2'], function () {
    return gulp.src(PATHS.lib)
        .pipe(gulp.dest('dist/lib'));
});

gulp.task('angular2', function () {

    var buildConfig = {
        paths: {
            "angular2/*": "node_modules/angular2/es6/prod/*.es6",
            "rx/*": "node_modules/angular2/node_modules/rx/*.js"
        }
    };

    var Builder = require('systemjs-builder');
    var builder = new Builder(buildConfig);

    return builder.build('angular2/angular2', 'dist/lib/angular2.js', {});
});

gulp.task('serve', ['default'], function () {

    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');

    var port = 9000, app;

    gulp.watch(PATHS.src.html, ['html']);
    gulp.watch(PATHS.src.js, ['js']);

    app = connect().use(serveStatic(__dirname + '/dist'));  // serve everything that is static
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('default', ['js', 'html', 'css', 'json', 'libs']);