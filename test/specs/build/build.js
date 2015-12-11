var fs = require('fs');
var chai = require('chai').use(require('chai-fs')).use(require('chai-json-schema'));
var async = require('async');

var main = require('../../../index');
var objects = require('../../objects.json');
var selectors = require('../../selectors');
var defaults = require('../../defaults');
var build = require(main.src + '/data/build.json');

describe('Resumé Builder', function () {
    require('./steps/step1.js');
    require('./steps/step2.js');
    require('./steps/step3.js');
    require('./steps/step4.js');
    require('./steps/step5.js');
    require('./steps/step6.js');
    require('./steps/step7.js');
    require('./submit.js');
    require('./steps/job1.js');
});

