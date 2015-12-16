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
        .setValue(selectors.job1Title, selectors.job1TitleValue)
        .getValue(selectors.job1Title)
        .then(function (text) {
            chai.assert(text === selectors.job1TitleValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job1TitleValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Supplies Campaign Details: Website', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job1Website, selectors.job1WebsiteValue)
        .getValue(selectors.job1Website)
        .then(function (text) {
            chai.assert(text === selectors.job1WebsiteValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job1WebsiteValue);
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
        .call(done);
});
it('Supplies Campaign Details: Location', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job1Location, selectors.job1LocationValue)
        .pause(defaults.async)
        .getValue(selectors.job1Location)
        .then(function (text) {
            chai.assert(text === selectors.job1LocationValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job1LocationValue);
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
        .call(done);
});
it('Supplies Campaign Details: Bullets', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job1Bullet1, selectors.job1Bullet1Value)
        .getValue(selectors.job1Bullet1)
        .then(function (text) {
            chai.assert(text === selectors.job1Bullet1Value, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job1Bullet1Value);
        })
        .pause(defaults.async)
        .click(selectors.job1AddBullet)
        .pause(defaults.async)
        .setValue(selectors.job1Bullet2, selectors.job1Bullet2Value)
        .getValue(selectors.job1Bullet2)
        .then(function (text) {
            chai.assert(text === selectors.job1Bullet2Value, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job1Bullet2Value);
        })
        .pause(defaults.async)
        .click(selectors.job1AddBullet)
        .pause(defaults.async)
        .setValue(selectors.job1Bullet3, selectors.job1Bullet3Value)
        .getValue(selectors.job1Bullet3)
        .then(function (text) {
            chai.assert(text === selectors.job1Bullet3Value, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job1Bullet3Value);
        })
        .pause(defaults.async)
        .call(done)
});
