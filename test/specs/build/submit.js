var fs = require('fs');
var chai = require('chai').use(require('chai-fs')).use(require('chai-json-schema'));
var async = require('async');

var main = require('../../../index');
var objects = require('../../objects.json');
var selectors = require('../../selectors');
var defaults = require('../../defaults');
var build = require(main.src + '/data/build.json');

it('Submits Form', function (done) {
    browser
        .pause(defaults.async)
        .click(selectors.buildMyShyt)
        .pause(defaults.defaultWaitForElement)
        .call(done);
});
it('Assert JSON Matches', function (done) {
    var buildSchema = {
        "title": "build schema v1",
        "type": "object",
        "required": [
            "background",
            "backgroundImage",
            "firstName",
            "lastName",
            "emailAddress",
            "phoneNumber",
            "gitHub",
            "gmail",
            "gmailPassword",
            "objective",
            "education",
            "skills",
            "jobs"
        ],
        "properties": {
            "background": {
                "type": "string"
            },
            "backgroundImage": {
                "type": "string"
            },
            "firstName": {
                "type": "string"
            },
            "lastName": {
                "type": "string"
            },
            "emailAddress": {
                "type": "string"
            },
            "phoneNumber": {
                "type": "string"
            },
            "gmail": {
                "type": "string"
            },
            "objective": {
                "type": "string"
            },
            "education": {
                "type": "object",
                "minItems": 1,
                "uniqueItems": true,
                "items": {
                    "type": "string"
                }
            },
            "skills": {
                "type": "object",
                "minItems": 1,
                "uniqueItems": true,
                "items": {
                    "type": "string"
                }
            },
            "jobs": {
                "type": "object",
                "minItems": 1,
                "uniqueItems": true,
                "items": {
                    "type": "string"
                }
            }
        }
    };
    browser
        .call(function () {
            return chai.assert.jsonSchema(build, buildSchema, 'JSON Mismatch!');
        })
        .call(done);
});
