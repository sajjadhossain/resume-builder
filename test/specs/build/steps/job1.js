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
it('Supplies Campaign Details: Title', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job1Title, selectors.job1TitleValue)
        .getValue(selectors.job1Title)
        .then(function (text) {
            chai.assert(text === selectors.job1TitleValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job1TitleValue);
        })
        .pause(defaults.async)
        .setValue(selectors.job2Title, selectors.job2TitleValue)
        .getValue(selectors.job2Title)
        .then(function (text) {
            chai.assert(text === selectors.job2TitleValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2TitleValue);
        })
        .pause(defaults.async)
        .setValue(selectors.job3Title, selectors.job3TitleValue)
        .getValue(selectors.job3Title)
        .then(function (text) {
            chai.assert(text === selectors.job3TitleValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job3TitleValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Supplies Campaign Details: From', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job1From, selectors.job1FromValue)
        .getValue(selectors.job1From)
        .then(function (text) {
            chai.assert(text === selectors.job1FromValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job1FromValue);
        })
        .pause(defaults.async)
        .setValue(selectors.job2From, selectors.job2FromValue)
        .getValue(selectors.job2From)
        .then(function (text) {
            chai.assert(text === selectors.job2FromValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2FromValue);
        })
        .pause(defaults.async)
        .setValue(selectors.job3From, selectors.job3FromValue)
        .getValue(selectors.job3From)
        .then(function (text) {
            chai.assert(text === selectors.job3FromValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job3FromValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Supplies Campaign Details: To', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job1To, selectors.job1ToValue)
        .getValue(selectors.job1To)
        .then(function (text) {
            chai.assert(text === selectors.job1ToValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job1ToValue);
        })
        .pause(defaults.async)
        .setValue(selectors.job2To, selectors.job2ToValue)
        .getValue(selectors.job2To)
        .then(function (text) {
            chai.assert(text === selectors.job2ToValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2ToValue);
        })
        .pause(defaults.async)
        .setValue(selectors.job3To, selectors.job3ToValue)
        .getValue(selectors.job3To)
        .then(function (text) {
            chai.assert(text === selectors.job3ToValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job3ToValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Supplies Campaign Details: Logo', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job1Logo, selectors.job1LogoValue)
        .getValue(selectors.job1Logo)
        .then(function (text) {
            chai.assert(text === selectors.job1LogoValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job1LogoValue);
        })
        .pause(defaults.async)
        .setValue(selectors.job2Logo, selectors.job2LogoValue)
        .getValue(selectors.job2Logo)
        .then(function (text) {
            chai.assert(text === selectors.job2LogoValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2LogoValue);
        })
        .pause(defaults.async)
        .setValue(selectors.job3Logo, selectors.job3LogoValue)
        .getValue(selectors.job3Logo)
        .then(function (text) {
            chai.assert(text === selectors.job3LogoValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job3LogoValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Supplies Campaign Details: Location', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job1Location, selectors.job1LocationValue)
        .getValue(selectors.job1Location)
        .then(function (text) {
            chai.assert(text === selectors.job1LocationValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job1LocationValue);
        })
        .pause(defaults.async)
        .setValue(selectors.job2Location, selectors.job2LocationValue)
        .getValue(selectors.job2Location)
        .then(function (text) {
            chai.assert(text === selectors.job2LocationValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2LocationValue);
        })
        .pause(defaults.async)
        .setValue(selectors.job3Location, selectors.job3LocationValue)
        .getValue(selectors.job3Location)
        .then(function (text) {
            chai.assert(text === selectors.job3LocationValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job3LocationValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Supplies Campaign Details: Additional', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job1Additional, selectors.job1AdditionalValue)
        .getValue(selectors.job1Additional)
        .then(function (text) {
            chai.assert(text === selectors.job1AdditionalValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job1AdditionalValue);
        })
        .pause(defaults.async)
        .setValue(selectors.job2Additional, selectors.job2AdditionalValue)
        .getValue(selectors.job2Additional)
        .then(function (text) {
            chai.assert(text === selectors.job2AdditionalValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2AdditionalValue);
        })
        .pause(defaults.async)
        .setValue(selectors.job3Additional, selectors.job3AdditionalValue)
        .getValue(selectors.job3Additional)
        .then(function (text) {
            chai.assert(text === selectors.job3AdditionalValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job3AdditionalValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Supplies Campaign Details: Description', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job1Description, selectors.job1DescriptionValue)
        .getValue(selectors.job1Description)
        .then(function (text) {
            chai.assert(text === selectors.job1DescriptionValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job1DescriptionValue);
        })
        .pause(defaults.async)
        .setValue(selectors.job2Description, selectors.job2DescriptionValue)
        .getValue(selectors.job2Description)
        .then(function (text) {
            chai.assert(text === selectors.job2DescriptionValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2DescriptionValue);
        })
        .pause(defaults.async)
        .setValue(selectors.job3Description, selectors.job3DescriptionValue)
        .getValue(selectors.job3Description)
        .then(function (text) {
            chai.assert(text === selectors.job3DescriptionValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job3DescriptionValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Submits Form', function (done) {
    browser
        .click(selectors.submitDetails)
        .pause(defaults.defaultWaitForElement)
        .call(done)
});
