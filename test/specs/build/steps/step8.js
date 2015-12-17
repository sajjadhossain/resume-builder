var fs = require('fs');
var chai = require('chai').use(require('chai-fs')).use(require('chai-json-schema'));
var async = require('async');

var main = require('../../../../index');
var objects = require('../../../objects.json');
var selectors = require('../../../selectors-build.js');
var defaults = require('../../../defaults');
var build = require(main.src + '/data/build.json');

async.each(objects.details.forms, function (value) {
    it('Exists: ' +  value, function (done) {
        browser
            .waitForExist(value)
            .then(function (bool) {
                chai.assert(bool === true, value + defaults.defaultMsg);
            }, defaults.defaultWaitForElement)
            .call(done);
    });
});
it('Renders: Job Details', function (done) {
    browser
        .pause(defaults.async)
        .getText(selectors.step8Header)
        .then(function (header) {
            chai.assert(header === selectors.step8HeaderText, 'Header Text is ' + header + ' --- Expected ' + selectors.step8HeaderText)
        })
        .call(done);
});
