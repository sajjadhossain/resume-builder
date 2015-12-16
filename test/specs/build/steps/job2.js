var fs = require('fs');
var chai = require('chai').use(require('chai-fs')).use(require('chai-json-schema'));
var async = require('async');

var main = require('../../../../index');
var objects = require('../../../objects.json');
var selectors = require('../../../selectors-build.js');
var defaults = require('../../../defaults');
var build = require(main.src + '/data/build.json');

it('Supplies Campaign Details: Title', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job2Title, selectors.job2TitleValue)
        .getValue(selectors.job2Title)
        .then(function (text) {
            chai.assert(text === selectors.job2TitleValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2TitleValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Supplies Campaign Details: From', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job2From, selectors.job2FromValue)
        .getValue(selectors.job2From)
        .then(function (text) {
            chai.assert(text === selectors.job2FromValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2FromValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Supplies Campaign Details: To', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job2To, selectors.job2ToValue)
        .getValue(selectors.job2To)
        .then(function (text) {
            chai.assert(text === selectors.job2ToValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2ToValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Supplies Campaign Details: Logo', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job2Logo, selectors.job2LogoValue)
        .getValue(selectors.job2Logo)
        .then(function (text) {
            chai.assert(text === selectors.job2LogoValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2LogoValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Supplies Campaign Details: Location', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job2Location, selectors.job2LocationValue)
        .getValue(selectors.job2Location)
        .then(function (text) {
            chai.assert(text === selectors.job2LocationValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2LocationValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Supplies Campaign Details: Additional', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job2Additional, selectors.job2AdditionalValue)
        .pause(defaults.async)
        .getValue(selectors.job2Additional)
        .then(function (text) {
            chai.assert(text === selectors.job2AdditionalValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2AdditionalValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Supplies Campaign Details: Description', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job2Description, selectors.job2DescriptionValue)
        .getValue(selectors.job2Description)
        .then(function (text) {
            chai.assert(text === selectors.job2DescriptionValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2DescriptionValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Supplies Campaign Details: Bullets', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job2Bullet1, selectors.job2Bullet1Value)
        .getValue(selectors.job2Bullet1)
        .then(function (text) {
            chai.assert(text === selectors.job2Bullet1Value, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2Bullet1Value);
        })
        .pause(defaults.async)
        .click(selectors.job2AddBullet)
        .pause(defaults.async)
        .setValue(selectors.job2Bullet2, selectors.job2Bullet2Value)
        .getValue(selectors.job2Bullet2)
        .then(function (text) {
            chai.assert(text === selectors.job2Bullet2Value, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job2Bullet2Value);
        })
        .pause(defaults.async)
        .call(done)
});

