var express = require('express'),
    router = express.Router(),
    async = require('async'),
    nodemailer = require('nodemailer');

var resumeData = require('../data/resume.json');

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
        year: resumeData.y,
        logo: resumeData.logo,
        templates: resumeData.templates,
        resume: resumeData.resume
    };

var transporter = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "sajjad@withpulp.com",
        pass: "Knight22"
    }
});

// GET home page
router.get('/', function(req, res, next) {
    res.render('index', data);
});

// GET mail page
router.get('/mail', function(req, res, next) {
    res.render('mail', data);
});

// POST to send
router.get('/send',function(req,res){
    var mailOptions={
        from: req.query.email,
        subject : req.query.message,
        text : req.query.text
    };
    transporter.sendMail(mailOptions, function(error, response){
        if(error){
            res.render('404');
        }else{
            res.end("sent");
        }
    });
});

module.exports = router;
