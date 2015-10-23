/* jshint mocha: true */

var assert = require('assert');
var fs = require('fs');
var path = require('path');
var async = require('async');
var main = require('./../../../index');
var pkg = require('./../../../package.json');
var chai = require('chai');
chai.use(require('chai-fs'));
var expectedFilesInArchiveDir = [
    pkg.name + '_v' + pkg.version + '.zip'
];

var filesInSrcDir = [];
var expectedFilesInDistDir = [
    'app.js',
    'browserconfig.xml',
    'crossdomain.xml',
    'humans.txt',
    'robots.txt',
    'bin/www',
    'data/keywords.json',
    'data/resume.json',
    'data/resume.js',
    'doc/README.md',
    'doc/TOC.md',
    'doc/css.md',
    'doc/extend.md',
    'doc/faq.md',
    'doc/js.md',
    'doc/html.md',
    'doc/misc.md',
    'doc/usage.md',
    'routes/contact.js',
    'routes/index.js',
    'routes/users.js',
    'views/error.jade',
    'views/index.jade',
    'views/layout.jade',
    'views/mail.jade',
    'views/includes/candidate.jade',
    'views/includes/education.jade',
    'views/includes/footer.jade',
    'views/includes/header.jade',
    'views/includes/hello.jade',
    'views/includes/links.jade',
    'views/includes/left.jade',
    'views/includes/objective.jade',
    'views/includes/resume.jade',
    'views/includes/right.jade',
    'views/includes/skills.jade',
    'public/LICENSE.txt',
    'public/images/adcade.png',
    'public/images/allhdd.png',
    'public/images/amplify.png',
    'public/images/bg_blur_1024.jpg',
    'public/images/bg_blur_2880.jpg',
    'public/images/comix.png',
    'public/images/bg_blur_320.jpg',
    'public/images/face.png',
    'public/images/favicon.ico',
    'public/images/logo.png',
    'public/images/withpulp.png',
    'public/images/maghrib.jpg',
    'public/stylesheets/materialize.min.css',
    'public/stylesheets/main.css',
    'public/stylesheets/mail.css',
    'public/stylesheets/normalize.css',
    'public/stylesheets/pace-theme-flat-top.css',
    'public/javascripts/main.js',
    'public/javascripts/mail.js',
    'public/javascripts/plugins.js',
    'public/javascripts/vendor/init.js',
    'public/javascripts/vendor/jquery-1.11.3.min.js',
    'public/javascripts/vendor/materialize.min.js',
    'public/javascripts/vendor/modernizr-2.8.3.min.js',
    'public/javascripts/vendor/pace.js'
];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe('Files from archive/', function () {
    it(expectedFilesInArchiveDir + ' should exist', function () {
        chai.expect(main.archive + '/' + expectedFilesInArchiveDir).to.be.a.file(expectedFilesInArchiveDir + ' does not exist');
    });
});

describe('Files from src/', function () {
    var recursive = require('recursive-readdir');

    // ignore files named 'foo.cs' or files that end in '.html'.
    // console log this to update files in src to dist comparison tests.
    recursive(main.src, ['*.DS_Store'], function (err, files) {
        // Files is an array of filename
        filesInSrcDir.push(files);
    });
    async.each(expectedFilesInDistDir, function (value) {
        it(value + 'should exist in dist/ ', function (done) {
            chai.expect(main.dist + '/' + value).to.be.a.file(value + ' does not exist');
            done();
        });
    });

});
