'use strict';

var gulp = require('gulp');
var prompt = require('prompt');
var writeson = require('writeson');
var shell = require('shelljs');

var main = require('../../index');

// Load all gulp plugins automatically
// and attach them to the `plugins` object
var plugins = require('gulp-load-plugins')();

// Temporary solution until gulp 4
// https://github.com/gulpjs/gulp/issues/355
var runSequence = require('run-sequence');

// ---------------------------------------------------------------------
// | Init tasks                                                        |
// ---------------------------------------------------------------------

gulp.task('init:testing', function (done) {
    shell.exec('./node_modules/.bin/selenium-standalone install', done);
});

gulp.task('init:app', function (done) {
    var schema = {
        properties: {
            email: {
                pattern: /^[a-zA-Z@\.\s\-]+$/,
                message: 'Name must be only letters, spaces, or dashes',
                required: true
            },
            password: {
                hidden: true,
                required: true
            }
        }
    };

    // Start the prompt
    prompt.start();

    // Get two properties from the user: email, password
    prompt.get(schema, function (err, result) {
        // Log the results.

        var data = {
            auth: {
                email: result.email,
                password: result.password
            }
        };

        writeson('gmail.json', data, function(err) {
            if(err) return console.err(err);
        });

        console.log('Command-line input received:');
        console.log('  Google Email Address: ' + result.email);
        console.log('  Google Email Password: ' + result.password);
        done();
    });
});

// ---------------------------------------------------------------------
// | Init Function                                                      |
// ---------------------------------------------------------------------

gulp.task('init', function (done) {
    runSequence(
        'init:testing',
        'init:app',
        done);
});
