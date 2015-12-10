var fs = require('fs');
var chai = require('chai').use(require('chai-fs')).use(require('chai-json-schema'));
var async = require('async');

var main = require('../../../../index');
var objects = require('../../../objects.json');
var selectors = require('../../../selectors');
var defaults = require('../../../defaults');
var build = require(main.src + '/data/build.json');

async.each(objects.step4, function (value) {
    it('Exists: ' +  value, function (done) {
        browser
            .waitForExist(value)
            .then(function (bool) {
                chai.assert(bool === true, value + defaults.defaultMsg);
            }, defaults.defaultWaitForElement)
            .call(done);
    });
});
it('Renders: Step 4', function (done) {
    browser
        .pause(defaults.async)
        .getText(selectors.buildHeader)
        .then(function (header) {
            chai.assert(header === selectors.buildHeaderText, 'Header Text is ' + header + ' --- Expected ' + selectors.buildHeaderText)
        })
        .getText(selectors.stepHeader4)
        .then(function (step) {
            chai.assert(step === selectors.stepHeader4Text, 'Step Text is ' + step + ' --- Expected ' + selectors.stepHeader4Text)
        })
        .getText(selectors.addSkills)
        .then(function (prompt) {
            chai.assert(prompt === selectors.addSkillsText, 'Prompt Text is ' + prompt + ' --- Expected ' + selectors.addSkillsText)
        })
        .call(done);
});
it('Supplies Skills', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.skillName1Input, selectors.skillName1InputValue)
        .getValue(selectors.skillName1Input)
        .then(function (text) {
            chai.assert(text === selectors.skillName1InputValue, 'Skill Name Value is ' + text + ' --- Expected ' + selectors.skillName1InputValue);
        })
        .setValue(selectors.skillPercent1Input, selectors.skillPercent1InputValue)
        .getValue(selectors.skillPercent1Input)
        .then(function (text) {
            chai.assert(text === selectors.skillPercent1InputValue, 'Skill Percent Value is ' + text + ' --- Expected ' + selectors.skillPercent1InputValue);
        })
        .setValue(selectors.skillDetail1Input, selectors.skillDetail1InputValue)
        .getValue(selectors.skillDetail1Input)
        .then(function (text) {
            chai.assert(text === selectors.skillDetail1InputValue, 'Skill Detail Value is ' + text + ' --- Expected ' + selectors.skillDetail1InputValue);
        })
        .pause(defaults.async)
        .click(selectors.addSkill)
        .pause(defaults.async)
        .setValue(selectors.skillName2Input, selectors.skillName2InputValue)
        .getValue(selectors.skillName2Input)
        .then(function (text) {
            chai.assert(text === selectors.skillName2InputValue, 'Skill Name Value is ' + text + ' --- Expected ' + selectors.skillName2InputValue);
        })
        .setValue(selectors.skillPercent2Input, selectors.skillPercent2InputValue)
        .getValue(selectors.skillPercent2Input)
        .then(function (text) {
            chai.assert(text === selectors.skillPercent2InputValue, 'Skill Percent Value is ' + text + ' --- Expected ' + selectors.skillPercent2InputValue);
        })
        .setValue(selectors.skillDetail2Input, selectors.skillDetail2InputValue)
        .getValue(selectors.skillDetail2Input)
        .then(function (text) {
            chai.assert(text === selectors.skillDetail2InputValue, 'Skill Detail Value is ' + text + ' --- Expected ' + selectors.skillDetail2InputValue);
        })
        .call(done);
});
it('Navigates: Step 5', function (done) {
    browser
        .pause(defaults.async)
        .click(objects.step4.next)
        .call(done);
});
