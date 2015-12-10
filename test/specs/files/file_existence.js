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
    'data/github.json',
    'data/resume.json',
    'data/build.json',
    'doc/README.md',
    'doc/TOC.md',
    'doc/css.md',
    'doc/extend.md',
    'doc/faq.md',
    'doc/html.md',
    'doc/js.md',
    'doc/misc.md',
    'doc/usage.md',
    'routes/build.js',
    'routes/contact.js',
    'routes/index.js',
    'routes/users.js',
    'public/LICENSE.txt',
    'public/images/adcade.png',
    'public/images/allhdd.png',
    'public/images/amplify.png',
    'public/images/bg_blur_1024.jpg',
    'public/images/bg_blur_2880.jpg',
    'public/images/bg_blur_320.jpg',
    'public/images/comix.png',
    'public/images/face.png',
    'public/images/favicon.ico',
    'public/images/logo.png',
    'public/images/maghrib.jpg',
    'public/images/withpulp.png',
    'public/javascripts/form.js',
    'public/javascripts/job.js',
    'public/javascripts/mail.js',
    'public/javascripts/main.js',
    'public/javascripts/plugins.js',
    'public/javascripts/vendor/init.js',
    'public/javascripts/vendor/jquery-1.11.3.min.js',
    'public/javascripts/vendor/jquery-1.11.3.js',
    'public/javascripts/vendor/jquery.min.map',
    'public/javascripts/vendor/materialize.min.js',
    'public/javascripts/vendor/modernizr-2.8.3.min.js',
    'public/javascripts/vendor/pace.js',
    'public/javascripts/vendor/wizard.js',
    'public/stylesheets/build.css',
    'public/stylesheets/mail.css',
    'public/stylesheets/main.css',
    'public/stylesheets/normalize.css',
    'public/stylesheets/vendor/materialize.min.css',
    'public/stylesheets/vendor/pace-build-theme-flat-top.css',
    'public/stylesheets/vendor/pace-theme-flat-top.css',
    'views/build.jade',
    'views/error.jade',
    'views/index.jade',
    'views/layout.jade',
    'views/mail.jade',
    'views/includes/components/hello.jade',
    'views/includes/components/left.jade',
    'views/includes/components/right.jade',
    'views/includes/build/education.jade',
    'views/includes/build/finish.jade',
    'views/includes/build/jobs.jade',
    'views/includes/build/objective.jade',
    'views/includes/build/resume.jade',
    'views/includes/build/site.jade',
    'views/includes/build/skills.jade',
    'views/includes/build/user.jade',
    'views/includes/build/theme.jade',
    'views/includes/common/footer.jade',
    'views/includes/common/header.jade',
    'views/includes/form/form.html',
    'views/includes/resume/candidate.jade',
    'views/includes/resume/education.jade',
    'views/includes/resume/github.jade',
    'views/includes/resume/links.jade',
    'views/includes/resume/objective.jade',
    'views/includes/resume/skills.jade',
    'views/includes/resume/resume.jade'
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
        //console.log( files )
    });
    async.each(expectedFilesInDistDir, function (value) {
        it(value + ' should exist in dist/ ', function (done) {
            chai.expect(main.dist + '/' + value).to.be.a.file(value + ' does not exist');
            done();
        });
    });
});
