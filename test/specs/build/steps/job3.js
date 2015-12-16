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
        .setValue(selectors.job3Logo, selectors.job3LogoValue)
        .pause(defaults.async)
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
        .setValue(selectors.job3Description, selectors.job3DescriptionValue)
        .getValue(selectors.job3Description)
        .then(function (text) {
            chai.assert(text === selectors.job3DescriptionValue, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job3DescriptionValue);
        })
        .pause(defaults.async)
        .call(done);
});
it('Supplies Campaign Details: Bullets', function (done) {
    browser
        .pause(defaults.async)
        .setValue(selectors.job3Bullet1, selectors.job3Bullet1Value)
        .getValue(selectors.job3Bullet1)
        .then(function (text) {
            chai.assert(text === selectors.job3Bullet1Value, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job3Bullet1Value);
        })
        .pause(defaults.async)
        .click(selectors.job3AddBullet)
        .pause(defaults.async)
        .setValue(selectors.job3Bullet2, selectors.job3Bullet2Value)
        .getValue(selectors.job3Bullet2)
        .then(function (text) {
            chai.assert(text === selectors.job3Bullet2Value, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job3Bullet2Value);
        })
        .pause(defaults.async)
        .click(selectors.job3AddBullet)
        .pause(defaults.async)
        .setValue(selectors.job3Bullet3, selectors.job3Bullet3Value)
        .getValue(selectors.job3Bullet3)
        .then(function (text) {
            chai.assert(text === selectors.job3Bullet3Value, 'Job Name Value is ' + text + ' --- Expected ' + selectors.job3Bullet3Value);
        })
        .pause(defaults.async)
        .call(done)
});

