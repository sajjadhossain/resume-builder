var fs = require('fs');
var chai = require('chai').use(require('chai-fs')).use(require('chai-json-schema'));
var async = require('async');

var main = require('../../../../index');
var objects = require('../../../objects.json');
var selectors = require('../../../selectors');
var defaults = require('../../../defaults');
var build = require(main.src + '/data/build.json');

it('Renders: Step 2', function (done) {
    browser
        .pause(defaults.async)
        .getText(selectors.buildHeader)
        .then(function (header) {
            chai.assert(header === selectors.buildHeaderText, 'Header Text is ' + header + ' --- Expected ' + selectors.buildHeaderText)
        })
        .getText(selectors.stepHeader2)
        .then(function (step) {
            chai.assert(step === selectors.stepHeader2Text, 'Step Text is ' + step + ' --- Expected ' + selectors.stepHeader2Text)
        })
        .getText(selectors.createYourProfile)
        .then(function (prompt) {
            chai.assert(prompt === selectors.createYourProfileText, 'Prompt Text is ' + prompt + ' --- Expected ' + selectors.createYourProfileText)
        })
        .call(done);
});
async.each(objects.step2, function (value) {
    it('Exists: ' +  value, function (done) {
        browser
            .waitForExist(value)
            .then(function (bool) {
                chai.assert(bool === true, value + defaults.defaultMsg);
            }, defaults.defaultWaitForElement)
            .call(done);
    });
});
it('Creates Profile', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.firstNameInput, selectors.firstNameInputValue)
        .getValue(selectors.firstNameInput)
        .then(function (text) {
            chai.assert(text === selectors.firstNameInputValue, 'First Name Value is ' + text + ' --- Expected ' + selectors.firstNameInputValue);
        })
        .setValue(selectors.lastNameInput, selectors.lastNameInputValue)
        .getValue(selectors.lastNameInput)
        .then(function (text) {
            chai.assert(text === selectors.lastNameInputValue, 'Last Name Value is ' + text + ' --- Expected ' + selectors.lastNameInputValue);
        })
        .setValue(selectors.emailInput, selectors.emailInputValue)
        .getValue(selectors.emailInput)
        .then(function (text) {
            chai.assert(text === selectors.emailInputValue, 'Email Value is ' + text + ' --- Expected ' + selectors.emailInputValue);
        })
        .setValue(selectors.phoneInput, selectors.phoneInputValue)
        .getValue(selectors.phoneInput)
        .then(function (text) {
            chai.assert(text === selectors.phoneInputValue, 'Phone # Value is ' + text + ' --- Expected ' + selectors.phoneInputValue);
        })
        .setValue(selectors.githubInput, selectors.githubInputValue)
        .getValue(selectors.githubInput)
        .then(function (text) {
            chai.assert(text === selectors.githubInputValue, 'GitHub User Value is ' + text + ' --- Expected ' + selectors.githubInputValue);
        })
        .setValue(selectors.gmailInput, selectors.gmailInputValue)
        .getValue(selectors.gmailInput)
        .then(function (text) {
            chai.assert(text === selectors.gmailInputValue, 'Gmail Address Value is ' + text + ' --- Expected ' + selectors.gmailInputValue);
        })
        .setValue(selectors.passwordInput, selectors.passwordInputValue)
        .getValue(selectors.passwordInput)
        .then(function (text) {
            chai.assert(text === selectors.passwordInputValue, 'Gmail Password Value is ' + text + ' --- Expected ' + selectors.passwordInputValue);
        })
        .call(done);
});
it('Navigates: Step 3', function (done) {
    browser
        .pause(defaults.async)
        .scroll(0, 10000)
        .click(objects.step2.next)
        .call(done);
});
