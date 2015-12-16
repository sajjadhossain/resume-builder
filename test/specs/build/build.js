var fs = require('fs');
var chai = require('chai').use(require('chai-fs')).use(require('chai-json-schema'));
var async = require('async');
var writeson = require('writeson');
var main = require('../../../index');
var objects = require('../../objects.json');
var selectors = require('../../selectors');
var defaults = require('../../defaults');
var build = require(main.src + '/data/build.json');

describe('Prepare\'s Builder', function () {
    it('Clears Data', function (done) {
        var build = {
            jobs: {}
        };
        var details = {};
        var bullets = {};
        writeson(main.data + '/build.json', build, function(err) {
            if(err) return console.err(err);
        });
        writeson(main.data + '/details.json', build, function(err) {
            if(err) return console.err(err);
        });
        writeson(main.data + '/bullets.json', build, function(err) {
            if(err) return console.err(err);
        });
        browser.pause(defaults.defaultWaitForElement).call(done);
    });
});

describe('Resumé Builder', function () {
    require('./steps/step1.js');
    require('./steps/step2.js');
    require('./steps/step3.js');
    require('./steps/step4.js');
    require('./steps/step5.js');
    require('./steps/step6.js');
    require('./steps/step7.js');
    require('./submit.js');
    require('./steps/step8.js');
    require('./steps/job1.js');
    require('./steps/job2.js');
    require('./steps/job3.js');
    require('./steps/submitDetails.js');
});

