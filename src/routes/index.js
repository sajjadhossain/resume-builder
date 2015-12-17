var express = require('express');
var router = express.Router();
var db = require('diskdb');
var main = require('../../index');

var resumeData = require('../data/resume.json');

// GET home page
router.get('/', function(req, res) {
    db.connect(main.data, ['details', 'github']);
    var foundResume = db.details.find();
    var site = foundResume.site;
    var info = foundResume.info;
    var template = foundResume.templates;
    var jobs = foundResume.resume.jobs;
    var education = foundResume.resume.education;
    var skills = foundResume.resume.skills;
    var foundUser = db.github.find();
    var github = foundUser.user;
    var data = {
        site: site,
        info: info,
        template: template,
        resume: {
            education: education,
            skills: skills,
            jobs: jobs
        },
        github: github
    };

    //var dats = {
    //    firstName: foundResume.info.firstName,
    //    lastName: foundResume.info.lastName,
    //    host: foundResume.info.host,
    //    website: foundResume.info.website,
    //    git: foundResume.site.gitUser,
    //    email: foundResume.info.email,
    //    phone: foundResume.info.phone,
    //    skills: foundDetails.resume.skills,
    //    education: foundDetails.resume.education,
    //    keywords: foundResume.site.keywords,
    //    description: foundResume.site.siteDescription,
    //    title: foundResume.site.title,
    //    year: foundResume.site.year,
    //    logo: foundResume.site.logo,
    //    templates: foundResume.templates,
    //    resume: foundDetails.resume.jobs,
    //    gitHubUserData: foundUser.site.gitUser
    //};
    var gitUser = foundUser.user.login;
    var web = {
        firstName: resumeData.firstName,
        lastName: resumeData.lastName,
        host: resumeData.host,
        website: resumeData.website,
        git: resumeData.git,
        email: resumeData.email,
        phone: resumeData.phone,
        skills: resumeData.skills,
        education: resumeData.education,
        keywords: resumeData.keywords,
        description: resumeData.description,
        title: resumeData.title,
        year: resumeData.year,
        logo: resumeData.logo,
        templates: resumeData.templates,
        resume: resumeData.resume,
        gitHubUserData: gitUser
    };
    res.render('index', web);
});

module.exports = router;
