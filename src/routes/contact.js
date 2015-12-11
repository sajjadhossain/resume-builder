var express = require('express');
var fs = require('fs');
var router = express.Router();
var nodemailer = require('nodemailer');
var jade = require('jade');
var main = require('../../index');
var gmail = require('../../gmail.json');
var resumeData = require('../data/resume.json');
var candidateName = resumeData.firstName + ' ' + resumeData.lastName;
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

/* POST request from contact page by clicking send button to send the name, email and message to gmail account */
router.post('/send', function (req, res) {
    var transporter = nodemailer.createTransport ({ // nodemailer has its own API
        // providing gmail service credential
        service : 'Gmail',
        auth : {
            user : gmail.auth.email,
            pass : gmail.auth.password
        }
    });
    fs.readFile(main.dist + '/views/mail.jade', 'utf8', function (error, data) {
        if (error) {
            throw error;
        }
        var fn = jade.compile(data);
        var html = fn({
            senderName: req.body.name,
            message: req.body.message,
            senderEmail: req.body.email,
            name: candidateName
        });
        // setup e-mail data with unicode symbols
        var mailOptions = {
            from: gmail.auth.email,
            to: req.body.email,
            bcc: gmail.auth.email,
            subject: 'Website Submission to ' + candidateName,
            text: 'Name: ' + req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message,
            html: html
        };
        transporter.sendMail(mailOptions, function(error) {
            if (error) {
                throw error;
            }
        });
    });
    res.redirect('back');
});

module.exports = router;
