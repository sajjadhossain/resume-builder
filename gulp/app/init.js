'use strict';

var gulp = require('gulp');
var prompt = require('prompt');
var writeson = require('writeson');

var main = require('../../index');

// Load all gulp plugins automatically
// and attach them to the `plugins` object
var plugins = require('gulp-load-plugins')();

// ---------------------------------------------------------------------
// | Init tasks                                                        |
// ---------------------------------------------------------------------

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
            },
            keywords: {
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
