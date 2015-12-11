var fs = require('fs');
var chai = require('chai').use(require('chai-fs')).use(require('chai-json-schema'));
var async = require('async');

var main = require('../../../../index');
var objects = require('../../../objects.json');
var selectors = require('../../../selectors');
var defaults = require('../../../defaults');
var build = require(main.src + '/data/build.json');

async.each(objects.step6, function (value) {
    it('Exists: ' +  value, function (done) {
        browser
            .waitForExist(value)
            .then(function (bool) {
                chai.assert(bool === true, value + defaults.defaultMsg);
            }, defaults.defaultWaitForElement)
            .call(done);
    });
});
it('Renders: Step 6', function (done) {
    browser
        .pause(defaults.async)
        .getText(selectors.buildHeader)
        .then(function (header) {
            chai.assert(header === selectors.buildHeaderText, 'Header Text is ' + header + ' --- Expected ' + selectors.buildHeaderText)
        })
        .getText(selectors.stepHeader6)
        .then(function (step) {
            chai.assert(step === selectors.stepHeader6Text, 'Step Text is ' + step + ' --- Expected ' + selectors.stepHeader6Text)
        })
        .getText(selectors.siteDetails)
        .then(function (prompt) {
            chai.assert(prompt === selectors.siteDetailsText, 'Prompt Text is ' + prompt + ' --- Expected ' + selectors.siteDetailsText)
        })
        .call(done);
});
it('Supplies Details', function (done) {
    browser
        .pause(defaults.async)
        .getValue(selectors.hostInput)
        .then(function (text) {
            chai.assert(text === selectors.hostInputValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.hostInputValue);
        })
        .setValue(selectors.websiteInput, selectors.websiteInputValue)
        .getValue(selectors.websiteInput)
        .then(function (text) {
            chai.assert(text === selectors.websiteInputValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.websiteInputValue);
        })
        .setValue(selectors.siteDescriptionInput, selectors.siteDescriptionInputValue)
        .getValue(selectors.siteDescriptionInput)
        .then(function (text) {
            chai.assert(text === selectors.siteDescriptionInputValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.siteDescriptionInputValue);
        })
        .click(selectors.keywordsInput)
        .keys(selectors.keywordsInputValue)
        .pause(defaults.async)
        .getValue(selectors.keywordsInput)
        .then(function (text) {
            chai.assert(text === selectors.keywordsInputValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.keywordsInputValue);
        })
        .call(done);
});
it('Navigates: Step 7', function (done) {
    browser
        .pause(defaults.async)
        .click(objects.step6.next)
        .call(done);
});
