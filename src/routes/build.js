var express = require('express');
var router = express.Router();
var writeson = require('writeson');
var async = require('async');
var main = require('../../index');
var db = require('diskdb');

// To camel case each job
function camelize (str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/[\s+\.]/g, '');
}

/* GET /build. */
router.get('/', function(req, res) {
    db.connect(main.data, ['build']);
    res.render('build');
});

/* POST build/create */
router.post('/create', function(req, res) {

    // Year and Meta
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    // First Name and Last Name values
    var firstNameLegnth = req.body.firstName.length;
    var lastNameLegnth = req.body.lastName.length;
    var firstNameMobileFontSize;
    var lastNameMobileFontSize;

    if (firstNameLegnth < 7) {
        firstNameMobileFontSize = '70px';
    } if (7 < firstNameLegnth) {
        firstNameMobileFontSize = '40px';
    } if (11 < firstNameLegnth) {
        firstNameMobileFontSize = '20px';
    } if (17 < firstNameLegnth) {
        firstNameMobileFontSize = '10px';
    }

    if (lastNameLegnth < 7) {
        lastNameMobileFontSize = '70px';
    } if (7 < lastNameLegnth) {
        lastNameMobileFontSize = '40px';
    } if (11 < lastNameLegnth) {
        lastNameMobileFontSize = '20px';
    } if (17 < lastNameLegnth) {
        lastNameMobileFontSize = '10px';
    }

    today = mm+'.'+dd+'.'+yyyy;

    // Count and do something with each skill
    var maxSkills = req.body['countSkills'];
    var maxSkillsInt = parseInt(maxSkills);
    var skills = {};
    for (
        var kInt = 0;
        kInt < maxSkillsInt + 1;
        kInt++
    ){
        skills['SKILL' + kInt] = {
            name: req.body['skillName' + kInt],
            tags: req.body['skillDetail' + kInt],
            percent: req.body['skillPercent' + kInt]
        }
    }

    // Count and do something with each school
    var maxSchools = req.body['countSchools'];
    var maxSchoolsInt = parseInt(maxSchools);
    var schools = {};
    for (
        var sInt = 0;
        sInt < maxSchoolsInt + 1;
        sInt++
    ){
        schools['SCHOOL' + sInt] = {
            name: req.body['schoolName' + sInt],
            location: req.body['schoolLocation' + sInt],
            focus: req.body['schoolStudy' + sInt],
            duration: '\'' + req.body['schoolFrom' + sInt] + ' TO \'' + req.body['schoolTo' + sInt]
        }
    }

    // Count and do something with each job
    var maxJobs = req.body['countJobs'];
    var maxJobsInt = parseInt(maxJobs);
    var jobs = {};
    for (
        var jInt = 0;
        jInt < maxJobsInt + 1;
        jInt++
    ){
        jobs['JOB' + jInt] = {
            position: jInt,
            name: req.body['job' + jInt],
            camel: camelize(req.body['job' + jInt])
        }
    }

    var gmail = {
        auth: {
            email: req.body.gmail,
            password: req.body.gmailPassword
        }
    };

    var data = {
        site: {
            gitUser: req.body.gitHub,
            title: req.body.firstName + ' ' + req.body.lastName + ' | ' + req.body.siteDescription,
            siteDescription: req.body.siteDescription,
            keywords: req.body.keywords,
            website: req.body.website,
            host: req.body.host,
            logo: req.body.websiteLogo,
            lastUpdated: today,
            year: yyyy
        },
        templates: {
            firstNameMobileFontSize: firstNameMobileFontSize,
            lastNameMobileFontSize: lastNameMobileFontSize,
            resumeHeader: 'card-panel ' + req.body.background + ' lighten-1 z-depth-1',
            objectiveHeader: 'card-panel ' + req.body.background + ' lighten-5 z-depth-1',
            contactHeader: 'card-panel ' + req.body.background + ' z-depth-1' + ' center',
            skillsHeader: 'card-panel ' + req.body.background + ' darken-2' + ' center',
            educationHeader: 'card-panel ' + req.body.background + ' darken-3 z-depth-1',
            experienceHeader: 'card-panel ' + req.body.background + ' darken-4',
            footer: 'page-footer card-panel ' + req.body.background + ' orange darken-4 z-depth-1',
            footerHeader: 'card-panel ' + req.body.background + ' darken-4 z-depth-1',
            footerCopyright: 'footer-copyright card-panel ' + req.body.background + ' darken-4',
            cards: 'card-panel ' + req.body.background + ' lighten-5 z-depth-1',
            progressOut: 'progress ' + req.body.background + ' lighten-3',
            progressIn: 'determinate ' + req.body.background + ' accent-4',
            modalButtons: 'waves-effect waves-light btn modal-trigger btn-large ' + req.body.background + ' accent-4',
            submitButton: 'btn-large ' + req.body.background + ' accent-4',
            backgroundImage: req.body.backgroundImage
        },
        info: {
            wholeName: req.body.firstName + ' ' + req.body.lastName,
            uniqueName: req.body.firstName + req.body.lastName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailAddress: req.body.emailAddress,
            phoneNumber: req.body.phoneNumber,
            objective: req.body.objective
        },
        resume: {
            skills: skills,
            education: schools,
            jobs: jobs
        }
    };

    writeson(main.path + '/gmail.json', gmail, function(err) {
        if(err) return console.err(err);
    });

    writeson(main.data + '/build.json', data, function(err) {
        if (err) return console.err(err);
    });

    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.redirect('/details')
});

/* POST build/details */
router.post('/details', function(req, res) {
    db.connect(main.data, ['build']);
    var foundResume = db.build.find();
    var site = foundResume.site;
    var info = foundResume.info;
    var template = foundResume.templates;
    var allJobs = foundResume.resume.jobs;
    var education = foundResume.resume.education;
    var skills = foundResume.resume.skills;
    var data = {
        site: site,
        info: info,
        template: template,
        resume: {
            education: education,
            skills: skills,
            jobs: {}
        }
    };

    async.forEachOf(allJobs, function (value, key) {
        // Count and do something with each job bullet
        var camel = value.camel;
        var position = value.position;
        var maxJobBullets = req.body[camel + '-countBullets'];
        data['resume'].jobs[key] = {
            position: position,
            camel: camel,
            name: value.name,
            title: req.body[camel + '-jobTitle'],
            website: req.body[camel + '-jobWebsite'],
            duration: '\'' + req.body[camel + '-jobFrom']+ ' TO \'' + req.body[camel + '-jobTo'],
            logo: req.body[camel + '-jobLogo'],
            location: req.body[camel + '-jobLocation'],
            plus: req.body[camel + '-jobAdditional'],
            description: req.body[camel + '-jobDescription'],
            totalBullets: parseInt(maxJobBullets) + 1,
            bullets: {},
            listedItems: {}
        };
        for (
            var n = 0;
            n < parseInt(maxJobBullets) + 1;
            n++
        ) {
            data['resume'].jobs[key]['bullets'][n] = req.body[camel + '-bullet' + n];
            data['resume'].jobs[key]['listedItems'][n] = '<li class=\"my-list-item\">' + req.body[camel + '-bullet' + n] + '</li>';
        }
    });

    writeson(main.data + '/details.json', data, function(err) {
        if(err) return console.err(err);
    });

    writeson(main.data + '/theme.json', template, function(err) {
        if(err) return console.err(err);
    });

    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.redirect('/build');
});

module.exports = router;
