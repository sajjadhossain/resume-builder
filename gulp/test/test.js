'use strict';

var fs = require('fs');
var path = require('path');

var gulp = require('gulp');
var shell = require('shelljs');

// Start selenium, after running in console, open a new tab/window
gulp.task('selenium', function() {
    shell.exec('./node_modules/.bin/selenium-standalone start -Dwebdriver.chrome.driver=./node_modules/chromedriver/lib/chromedriver/chromedriver');
});
