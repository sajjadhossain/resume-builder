/* jshint mocha: true */

var assert = require('assert');
var fs = require('fs');
var path = require('path');

var pkg = require('./../package.json');
var dirs = pkg.configs.directories;

var expectedFilesInArchiveDir = [
    pkg.name + '_v' + pkg.version + '.zip'
];

var expectedFilesInDistDir = [

    '.editorconfig',
    '.gitattributes',
    '.gitignore',
    '.htaccess',
    '404.html',
    'browserconfig.xml',
    'crossdomain.xml',

    'css/', // for directories, a `/` character
            // should be included at the end
        'css/main.css',
        'css/normalize.css',
        'css/materialize.min.css',

    'doc/',
        'doc/TOC.md',
        'doc/css.md',
        'doc/extend.md',
        'doc/faq.md',
        'doc/html.md',
        'doc/js.md',
        'doc/misc.md',
        'doc/usage.md',

    'humans.txt',

    'img/',
        'img/.gitignore',
        'img/adcade.png',
        'img/allhdd.png',
        'img/amplify.png',
        'img/comix.png',
        'img/logo.png',
        'img/face.png',
        'img/withpulp.png',
        'img/background_320.jpg',
        'img/background_1024.jpg',
        'img/background_2880.jpg',

    'fonts/',
    'fonts/material-design-icons/',
    'fonts/roboto/',
        'fonts/material-design-icons/LICENSE.txt',
        'fonts/material-design-icons/Material-Design-Icons.eot',
        'fonts/material-design-icons/Material-Design-Icons.svg',
        'fonts/material-design-icons/Material-Design-Icons.ttf',
        'fonts/material-design-icons/Material-Design-Icons.woff',
        'fonts/material-design-icons/Material-Design-Icons.woff2',
        'fonts/roboto/Roboto-Bold.ttf',
        'fonts/roboto/Roboto-Bold.woff2',
        'fonts/roboto/Roboto-Light.woff',
        'fonts/roboto/Roboto-Medium.ttf',
        'fonts/roboto/Roboto-Medium.woff2',
        'fonts/roboto/Roboto-Regular.woff',
        'fonts/roboto/Roboto-Thin.ttf',
        'fonts/roboto/Roboto-Thin.woff2',
        'fonts/roboto/Roboto-Bold.woff',
        'fonts/roboto/Roboto-Light.ttf',
        'fonts/roboto/Roboto-Light.woff2',
        'fonts/roboto/Roboto-Medium.woff',
        'fonts/roboto/Roboto-Regular.ttf',
        'fonts/roboto/Roboto-Regular.woff2',
        'fonts/roboto/Roboto-Thin.woff',

    'index.html',
    'stage.index.html',

    'js/',
        'js/main.js',
        'js/plugins.js',
        'js/vendor/',
            'js/vendor/jquery-' + pkg.devDependencies.jquery + '.min.js',
            'js/vendor/modernizr-2.8.3.min.js',
            'js/vendor/init.js',
            'js/vendor/materialize.min.js',

    'LICENSE.txt',
    'robots.txt'

];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function checkFiles(directory, expectedFiles) {

    // Get the list of files from the specified directory
    var files = require('glob').sync('**/*', {
        'cwd': directory,
        'dot': true,      // include hidden files
        'mark': true      // add a `/` character to directory matches
    });

    // Check if all expected files are present in the
    // specified directory, and are of the expected type
    expectedFiles.forEach(function (file) {

        var ok = false;
        var expectedFileType = (file.slice(-1) !== '/' ? 'regular file' : 'directory');

        // If file exists
        if (files.indexOf(file) !== -1) {

            // Check if the file is of the correct type
            if (file.slice(-1) !== '/') {
                // Check if the file is really a regular file
                ok = fs.statSync(path.resolve(directory, file)).isFile();
            } else {
                // Check if the file is a directory
                // (Since glob adds the `/` character to directory matches,
                // we can simply check if the `/` character is present)
                ok = (files[files.indexOf(file)].slice(-1) === '/');
            }

        }

        it('"' + file + '" should be present and it should be a ' + expectedFileType, function () {
            assert.equal(true, ok);
        });

    });

    // List all files that should be NOT
    // be present in the specified directory
    (files.filter(function (file) {
        return expectedFiles.indexOf(file) === -1;
    })).forEach(function (file) {
        it('"' + file + '" should NOT be present', function () {
            assert(false);
        });
    });

}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function runTests() {

    describe('Test if all the expected files, and only them, are present in the build directories', function () {

        describe(dirs.archive, function () {
            checkFiles(dirs.archive, expectedFilesInArchiveDir);
        });

        describe(dirs.dist, function () {
            checkFiles(dirs.dist, expectedFilesInDistDir);
        });

    });

}

runTests();
