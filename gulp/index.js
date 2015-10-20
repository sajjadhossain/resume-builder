var fs = require('fs');
var path = require('path');

var gulp = require('gulp'),
    zip = require('gulp-zip'),
    cpr = require('cpr').cpr;

var main = require('../index');

// Load all gulp plugins automatically
// and attach them to the `plugins` object
var plugins = require('gulp-load-plugins')();

// Temporary solution until gulp 4
// https://github.com/gulpjs/gulp/issues/355
var runSequence = require('run-sequence');

var pkg = require('../package.json');
var dirs = pkg.configs.directories;

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

gulp.task('archive:create_archive_dir', function () {
    fs.mkdirSync(path.resolve(dirs.archive), '0755');
});

gulp.task('archive:zip', function (done) {
    var archiveName = path.resolve(dirs.archive, pkg.name + '_v' + pkg.version + '.zip');
    gulp.src(main.src)
        .pipe(zip(archiveName))
        .pipe(gulp.dest(main.dist));
});

gulp.task('clean', function (done) {
    require('del')([
        dirs.archive,
        dirs.dist
    ], done);
});

gulp.task('copy', [
    'copy:.htaccess',
    'copy:index.html',
    'copy:jquery',
    'copy:license',
    'copy:all',
    'copy:normalize',
    'copy:materialize.js',
    'copy:materialize.css',
    'copy:materialize.fonts',
    'copy:pace'
]);

gulp.task('copy:jquery', function () {
    return gulp.src(['node_modules/jquery/dist/jquery.min.js'])
               .pipe(plugins.rename('jquery-' + pkg.devDependencies.jquery + '.min.js'))
               .pipe(gulp.dest(dirs.dist + '/public/javascripts/vendor'));
});

gulp.task('copy:license', function () {
    return gulp.src('LICENSE.txt')
               .pipe(gulp.dest(dirs.dist));
});

gulp.task('copy:all', function () {
    return cpr(main.src, main.dist, {
        deleteFirst: true, //Delete "to" before
        overwrite: true, //If the file exists, overwrite it
        confirm: true //After the copy, stat all the copied files to make sure they are there
    }, function(err) {
        if (err) console.error(err);
    });
});

gulp.task('copy:normalize', function () {
    return gulp.src('node_modules/normalize.css/normalize.css')
               .pipe(gulp.dest(dirs.dist + '/css'));
});

gulp.task('lint:js', function () {
    return gulp.src([
        'gulpfile.js',
        dirs.src + '/js/*.js',
        dirs.test + '/*.js'
    ]).pipe(plugins.jscs())
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('jshint-stylish'))
      .pipe(plugins.jshint.reporter('fail'));
});

gulp.task('copy:materialize.js', function () {
    return gulp.src(['node_modules/materialize-css/dist/js/*.min.js'])
        .pipe(gulp.dest(dirs.dist + '/public/javascripts/vendor'))
        .pipe(gulp.dest(dirs.src + '/public/javascripts/vendor'));
});

gulp.task('copy:materialize.css', function () {
    return gulp.src(['node_modules/materialize-css/dist/css/*.min.css'])
        .pipe(gulp.dest(dirs.dist + '/public/stylesheets'))
        .pipe(gulp.dest(dirs.src + '/public/stylesheets'));
});

gulp.task('copy:pace-big-counter', function () {
    return gulp.src(['bower_components/PACE/themes/orange/pace-theme-big-counter.css'])
        .pipe(gulp.dest(dirs.dist + '/public/stylesheets'))
        .pipe(gulp.dest(dirs.src + '/public/stylesheets'));
});


// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

gulp.task('archive', function (done) {
    runSequence(
        'build',
        'archive:create_archive_dir',
        'archive:zip',
    done);
});

gulp.task('build', function (done) {
    runSequence(
        ['clean', 'lint:js'],
        'copy',
    done);
});

gulp.task('default', ['clean', 'build', 'archive']);
