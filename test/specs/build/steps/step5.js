var fs = require('fs');
var chai = require('chai').use(require('chai-fs')).use(require('chai-json-schema'));
var async = require('async');

var main = require('../../../../index');
var objects = require('../../../objects.json');
var selectors = require('../../../selectors');
var defaults = require('../../../defaults');
var build = require(main.src + '/data/build.json');

async.each(objects.step5, function (value) {
    it('Exists: ' +  value, function (done) {
        browser
            .waitForExist(value)
            .then(function (bool) {
                chai.assert(bool === true, value + defaults.defaultMsg);
            }, defaults.defaultWaitForElement)
            .call(done);
    });
});
it('Renders: Step 5', function (done) {
    browser
        .pause(defaults.async)
        .getText(selectors.buildHeader)
        .then(function (header) {
            chai.assert(header === selectors.buildHeaderText, 'Header Text is ' + header + ' --- Expected ' + selectors.buildHeaderText)
        })
        .getText(selectors.stepHeader5)
        .then(function (step) {
            chai.assert(step === selectors.stepHeader5Text, 'Step Text is ' + step + ' --- Expected ' + selectors.stepHeader5Text)
        })
        .getText(selectors.addEducation)
        .then(function (prompt) {
            chai.assert(prompt === selectors.addEducationText, 'Prompt Text is ' + prompt + ' --- Expected ' + selectors.addEducationText)
        })
        .call(done);
});
it('Supplies Education', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.schoolName1Input, selectors.schoolName1InputValue)
        .getValue(selectors.schoolName1Input)
        .then(function (text) {
            chai.assert(text === selectors.schoolName1InputValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.schoolName1InputValue);
        })
        .setValue(selectors.schoolLocation1Input, selectors.schoolLocation1InputValue)
        .getValue(selectors.schoolLocation1Input)
        .then(function (text) {
            chai.assert(text === selectors.schoolLocation1InputValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.schoolLocation1InputValue);
        })
        .setValue(selectors.schoolStudy1Input, selectors.schoolStudy1InputValue)
        .getValue(selectors.schoolStudy1Input)
        .then(function (text) {
            chai.assert(text === selectors.schoolStudy1InputValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.schoolStudy1InputValue);
        })
        .setValue(selectors.schoolFrom1Input, selectors.schoolFrom1InputValue)
        .getValue(selectors.schoolFrom1Input)
        .then(function (text) {
            chai.assert(text === selectors.schoolFrom1InputValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.schoolFrom1InputValue);
        })
        .setValue(selectors.schoolTo1Input, selectors.schoolTo1InputValue)
        .getValue(selectors.schoolTo1Input)
        .then(function (text) {
            chai.assert(text === selectors.schoolTo1InputValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.schoolTo1InputValue);
        })
        .call(done);
});
it('Navigates: Step 6', function (done) {
    browser
        .pause(defaults.async)
        .click(objects.step5.next)
        .call(done);
});
