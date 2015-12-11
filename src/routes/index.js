var express = require('express');
var router = express.Router();
var resumeData = require('../data/resume.json');
var gitHubData = require('../data/github.json');
var data = {
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
    gitHubUserData: gitHubData['user']
};

// GET home page
router.get('/', function(req, res) {
    res.render('index', data);
});

module.exports = router;
