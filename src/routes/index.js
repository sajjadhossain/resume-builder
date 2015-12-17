var express = require('express');
var router = express.Router();
var db = require('diskdb');
var main = require('../../index');

// GET home page
router.get('/', function(req, res) {
    db.connect(main.data, ['github', 'build', 'details']);
    foundResume = db.build.find();
    foundDetails = db.details.find();
    foundGitUser = db['github'].find();

    var data = {
        firstName: foundResume.info.firstName,
        lastName: foundResume.info.lastName,
        host: foundResume.info.host,
        website: foundResume.info.website,
        git: foundResume.site.gitUser,
        email: foundResume.info.email,
        phone: foundResume.info.phone,
        skills: foundDetails.resume.skills,
        education: foundDetails.resume.education,
        keywords: foundResume.site.keywords,
        description: foundResume.site.siteDescription,
        title: foundResume.site.title,
        year: foundResume.site.year,
        logo: foundResume.site.logo,
        templates: foundResume.templates,
        resume: foundDetails.resume.jobs,
        gitHubUserData: foundGitUser.user.login
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
