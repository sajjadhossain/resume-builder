var fs = require('fs');
var chai = require('chai').use(require('chai-fs')).use(require('chai-json-schema'));
var async = require('async');

var main = require('../../../../index');
var objects = require('../../../objects.json');
var selectors = require('../../../selectors');
var defaults = require('../../../defaults');
var build = require(main.src + '/data/build.json');

async.each(objects.step7, function (value) {
    it('Exists: ' +  value, function (done) {
        browser
            .waitForExist(value)
            .then(function (bool) {
                chai.assert(bool === true, value + defaults.defaultMsg);
            }, defaults.defaultWaitForElement)
            .call(done);
    });
});
it('Renders: Step 7', function (done) {
    browser
        .pause(defaults.async)
        .getText(selectors.buildHeader)
        .then(function (header) {
            chai.assert(header === selectors.buildHeaderText, 'Header Text is ' + header + ' --- Expected ' + selectors.buildHeaderText)
        })
        .getText(selectors.stepHeader7)
        .then(function (step) {
            chai.assert(step === selectors.stepHeader7Text, 'Step Text is ' + step + ' --- Expected ' + selectors.stepHeader7Text)
        })
        .getText(selectors.workExperience)
        .then(function (prompt) {
            chai.assert(prompt === selectors.workExperienceText, 'Prompt Text is ' + prompt + ' --- Expected ' + selectors.workExperienceText)
        })
        .call(done);
});
it('Supplies Campaigns', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job0Input, selectors.job0InputValue)
        .getValue(selectors.job0Input)
        .then(function (text) {
            chai.assert(text === selectors.job0InputValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job0InputValue);
        })
        .pause(defaults.async)
        .click(selectors.job)
        .setValue(selectors.job1Input, selectors.job1InputValue)
        .getValue(selectors.job1Input)
        .then(function (text) {
            chai.assert(text === selectors.job1InputValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job1InputValue);
        })
        .pause(defaults.async)
        .click(selectors.job)
        .setValue(selectors.job2Input, selectors.job2InputValue)
        .getValue(selectors.job2Input)
        .then(function (text) {
            chai.assert(text === selectors.job2InputValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2InputValue);
        })
        .call(done);
});
