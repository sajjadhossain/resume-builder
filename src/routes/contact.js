var express = require('express');
var fs = require('fs');
var router = express.Router();
var nodemailer = require('nodemailer');
var jade = require('jade');
var main = require('../../index');
var resumeData = require('../data/resume.json');
var candidateName = resumeData.firstName + ' ' + resumeData.lastName;

/* POST request from contact page by clicking send button to send the name, email and message to gmail account */
router.post('/send', function (req, res) {
    var transporter = nodemailer.createTransport ({ // nodemailer has its own API
        // providing gmail service credential
        service : 'Gmail',
        auth : {
            user : 'sajjad@withpulp.com',
            pass : '****'
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
            from: 'sajjad@withpulp.com',
            to: req.body.email,
            bcc: 'sajjad@withpulp.com',
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
