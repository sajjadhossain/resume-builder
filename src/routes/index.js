var express = require('express');
var router = express.Router();
var db = require('diskdb');
var main = require('../../index');

// GET home page
router.get('/', function(req, res) {
    db.connect(main.data, ['github', 'build', 'details']);
    foundResume = db.build.find();

    var data = {
        firstName: foundResume.info.firstName,
        lastName: foundResume.info.lastName,
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
        gitHubUserData: foundUsers.user
    };
    //var data = {
    //    firstName: foundResume.info.firstName;,
    //    lastName: resumeData.lastName,
    //    host: resumeData.host,
    //    website: resumeData.website,
    //    git: resumeData.git,
    //    email: resumeData.email,
    //    phone: resumeData.phone,
    //    skills: resumeData.skills,
    //    education: resumeData.education,
    //    keywords: resumeData.keywords,
    //    description: resumeData.description,
    //    title: resumeData.title,
    //    year: resumeData.year,
    //    logo: resumeData.logo,
    //    templates: resumeData.templates,
    //    resume: resumeData.resume,
    //    gitHubUserData: foundUsers.user
    //};
    res.render('index', data);

});

module.exports = router;
