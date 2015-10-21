'use strict';

var fs = require('fs');
var path = require('path');

var gulp = require('gulp'),
    zip = require('gulp-zip'),
    cpr = require('cpr').cpr,
    rmdir = require( 'rmdir'),
    makedir = require('makedir'),
    async = require('async');

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
// | Archive tasks                                                     |
// ---------------------------------------------------------------------

gulp.task('archive:zip', ['copy:create-dist-archive'], function (done) {
    var archiveName = path.resolve(dirs.archive, pkg.name + '_v' + pkg.version + '.zip');
    gulp.src(main.src)
        .pipe(zip(archiveName))
        .pipe(gulp.dest(main.archive));
    done();
});

// ---------------------------------------------------------------------
// | Clean tasks                                                       |
// ---------------------------------------------------------------------

gulp.task('clean-archive', function (done) {
    require('del')([
        main.archive
    ], done);
});

gulp.task('clean-dist', function (done) {
    require('del')([
        main.dist
    ], done);
});

gulp.task('clean-vendor', function (done) {
    require('del')([
        main.vendor
    ], done);
});

// ---------------------------------------------------------------------
// | Copy tasks                                                        |
// ---------------------------------------------------------------------

gulp.task('copy', function (done) {
    runSequence(
        'copy:create_dist_dir',
        'copy:create_vendor_dirs',
        'copy:license',
        'copy:jquery',
        'copy:normalize',
        'copy:all',
        done);
});

gulp.task('copy:jquery', function () {
    return gulp.src(['node_modules/jquery/dist/jquery.min.js'])
        .pipe(plugins.rename('jquery-' + pkg.devDependencies.jquery + '.min.js'))
        .pipe(gulp.dest(dirs.dist + '/public/javascripts/vendor'));
});

gulp.task('copy:license', function () {
    return gulp.src('LICENSE.txt')
        .pipe(gulp.dest(dirs.dist));
});

gulp.task('copy:normalize', function () {
    return gulp.src('node_modules/normalize.css/normalize.css')
        .pipe(gulp.dest(dirs.dist + '/public/stylesheets'));
});

gulp.task('copy:all', function () {
    return cpr(main.src, main.dist, {
        deleteFirst: false, //Delete "to" before
        overwrite: true, //If the file exists, overwrite it
        confirm: true //After the copy, stat all the copied files to make sure they are there
    }, function(err) {
        if (err) console.error(err);
    });
});

// ---------------------------------------------------------------------
// | Create directories                                                |
// ---------------------------------------------------------------------

gulp.task('copy:create_archive_dir', function () {
    if (!fs.existsSync(main.archive)) {
        makedir.makedir(main.archive);
    }
});

gulp.task('copy:create_dist_dir', function () {
    if (!fs.existsSync(main.dist)) {
        makedir.makedir(main.dist);
    }
});

gulp.task('copy:create_vendor_dirs', function () {
    var css = main.dist + '/public/stylesheets',
        js = main.dist + '/public/javascripts';
    if (!fs.existsSync(css)) {
        makedir.makedir(css);
    }
    if (!fs.existsSync(js)) {
        makedir.makedir(js);
    }
});

// ---------------------------------------------------------------------
// | Vendor tasks                                                      |
// ---------------------------------------------------------------------


gulp.task('copy:vendor-javascripts', function () {
    return gulp.src([
        'node_modules/materialize-css/dist/js/*.min.js',
        'bower_components/PACE/pace.js'
    ])
        .pipe(gulp.dest(main.vendor));
});

gulp.task('copy:vendor-stylesheets', function () {
    return gulp.src([
        'node_modules/materialize-css/dist/js/*.min.js',
        'bower_components/PACE/pace.js'
    ])
        .pipe(gulp.dest(main.vendor));
});

// ---------------------------------------------------------------------
// | Lint tasks                                                        |
// ---------------------------------------------------------------------

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
        ['lint:js'],
    done);
});

gulp.task('default', ['build']);
