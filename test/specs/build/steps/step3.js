var fs = require('fs');
var chai = require('chai').use(require('chai-fs')).use(require('chai-json-schema'));
var async = require('async');

var main = require('../../../../index');
var objects = require('../../../objects.json');
var selectors = require('../../../selectors');
var defaults = require('../../../defaults');
var build = require(main.src + '/data/build.json');

async.each(objects.step3, function (value) {
    it('Exists: ' +  value, function (done) {
        browser
            .waitForExist(value)
            .then(function (bool) {
                chai.assert(bool === true, value + defaults.defaultMsg);
            }, defaults.defaultWaitForElement)
            .call(done);
    });
});
it('Renders: Step 3', function (done) {
    browser
        .pause(defaults.async)
        .getText(selectors.buildHeader)
        .then(function (header) {
            chai.assert(header === selectors.buildHeaderText, 'Header Text is ' + header + ' --- Expected ' + selectors.buildHeaderText)
        })
        .getText(selectors.stepHeader3)
        .then(function (step) {
            chai.assert(step === selectors.stepHeader3Text, 'Step Text is ' + step + ' --- Expected ' + selectors.stepHeader3Text)
        })
        .getText(selectors.supplyYourMission)
        .then(function (prompt) {
            chai.assert(prompt === selectors.supplyYourMissionText, 'Prompt Text is ' + prompt + ' --- Expected ' + selectors.supplyYourMissionText)
        })
        .call(done);
});
it('Supplies Mission', function (done) {
    browser
        .pause(defaults.async)
        .click(selectors.objectiveInput)
        .keys(selectors.objectiveInputValue)
        .pause(defaults.async)
        .getValue(selectors.objectiveInput)
        .then(function (text) {
            chai.assert(text === selectors.objectiveInputValue, 'Objective Value is ' + text + ' --- Expected ' + selectors.objectiveInputValue);
        })
        .call(done);
});
it('Navigates: Step 4', function (done) {
    browser
        .pause(defaults.async)
        .click(objects.step3.next)
        .call(done);
});
