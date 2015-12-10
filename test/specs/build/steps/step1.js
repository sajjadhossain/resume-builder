var fs = require('fs');
var chai = require('chai').use(require('chai-fs')).use(require('chai-json-schema'));
var async = require('async');

var main = require('../../../../index');
var objects = require('../../../objects.json');
var selectors = require('../../../selectors');
var defaults = require('../../../defaults');
var build = require(main.src + '/data/build.json');

it('Renders: Step 1', function (done) {
    browser
        .url('/build')
        .pause(defaults.async)
        .getTitle()
        .then(function (title) {
            chai.assert(title === selectors.appTitle, 'Title is ' + title + ' --- Expected ' + selectors.appTitle)
        })
        .getText(selectors.buildHeader)
        .then(function (header) {
            chai.assert(header === selectors.buildHeaderText, 'Header Text is ' + header + ' --- Expected ' + selectors.buildHeaderText)
        })
        .getText(selectors.stepHeader1)
        .then(function (step) {
            chai.assert(step === selectors.stepHeader1Text, 'Step Text is ' + step + ' --- Expected ' + selectors.stepHeader1Text)
        })
        .getText(selectors.themeYourResume)
        .then(function (prompt) {
            chai.assert(prompt === selectors.themeYourResumeText, 'Prompt Text is ' + prompt + ' --- Expected ' + selectors.themeYourResumeText)
        })
        .call(done);
});
async.each(objects.step1, function (value) {
    it('Exists: ' +  value, function (done) {
        browser
            .waitForExist(value)
            .then(function (bool) {
                chai.assert(bool === true, value + defaults.defaultMsg);
            }, defaults.defaultWaitForElement)
            .call(done);
    });
});
it('Creates Theme', function (done) {
    browser
        .pause(defaults.async)
        .click(selectors.pickAColor)
        .click(selectors.pickPink)
        .then(function () {
            return this.getAttribute(selectors.colorPreview, 'class')
                .then(function (value) {
                    chai.assert(value === selectors.pinkColorPreview, 'Color Preview is ' + value + ' --- Expected ' + selectors.pinkColorPreview);
                })
        })
        .setValue(selectors.backgroundImageInput, selectors.backgroundImageInputValue)
        .getValue(selectors.backgroundImageInput)
        .then(function (text) {
            chai.assert(text === selectors.backgroundImageInputValue, 'Background Image Value is ' + text + ' --- Expected ' + selectors.backgroundImageInputValue);
        })
        .call(done);
});
it('Navigates: Step 2', function (done) {
    browser
        .pause(defaults.async)
        .click(objects.step1.next)
        .call(done);
});
