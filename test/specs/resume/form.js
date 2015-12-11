var fs = require('fs');
var chai = require('chai').use(require('chai-fs')).use(require('chai-json-schema'));
var async = require('async');

var main = require('../../../index');
var objects = require('../../objects.json');
var selectors = require('../../selectors-build.js');
var defaults = require('../../defaults');
var build = require(main.src + '/data/build.json');

describe('Use the form', function () {
    it('Renders: Resumé Form', function (done) {
        browser
            .url('/')
            .pause(defaults.async)
            .getTitle()
            .then(function (title) {
                chai.assert(title === selectors.appTitle, 'Title is ' + title + ' --- Expected ' + selectors.appTitle)
            })
            .moveToObject(selectors.bottom)
            .call(done);
    });
    async.each(objects.build.form, function (value) {
        it('Exists: ' +  value, function (done) {
            browser
                .waitForExist(value)
                .then(function (bool) {
                    chai.assert(bool === true, value + defaults.defaultMsg);
                }, defaults.defaultWaitForElement)
                .call(done);
        });
    });
    it('Fills Contact Form', function (done) {
        browser
            .pause(defaults.async)
            .setValue(selectors.nameInput, selectors.nameInputValue)
            .pause(defaults.async)
            .getValue(selectors.nameInput)
            .then(function (text) {
                chai.assert(text === selectors.nameInputValue, 'Background Image Value is ' + text + ' --- Expected ' + selectors.nameInputValue);
            })
            .pause(defaults.async)
            .setValue(selectors.emailInput, selectors.emailInputValue)
            .pause(defaults.async)
            .getValue(selectors.emailInput)
            .then(function (text) {
                chai.assert(text === selectors.emailInputValue, 'Background Image Value is ' + text + ' --- Expected ' + selectors.emailInputValue);
            })
            .pause(defaults.async)
            .setValue(selectors.messageInput, selectors.messageInputValue)
            .pause(defaults.async)
            .getValue(selectors.messageInput)
            .then(function (text) {
                chai.assert(text === selectors.messageInputValue, 'Background Image Value is ' + text + ' --- Expected ' + selectors.messageInputValue);
            })
            .call(done);
    });
    it('Submits Contact Form', function (done) {
        browser
            .pause(defaults.async)
            .click(objects.build.form.submit)
            .pause(defaults.defaultWaitForElement)
            .getTitle()
            .then(function (title) {
                chai.assert(title === selectors.appTitle, 'Title is ' + title + ' --- Expected ' + selectors.appTitle)
            })
            .call(done);
    });
});
