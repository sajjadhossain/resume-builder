var express = require('express');
var fs = require('fs');
var router = express.Router();
var nodemailer = require('nodemailer');
var jade = require('jade');
var main = require('../../index');
var resumeData = require('../data/resume.json');
var email = resumeData.email;
var candidateName = resumeData.firstName + ' ' + resumeData.lastName;

/* POST request from contact page by clicking send button to send the name, email and message to gmail account */
router.post('/send', function (req, res) {
    var transporter = nodemailer.createTransport ({ // nodemailer has its own API
        // providing gmail service credential
        service : 'Gmail',
        auth : {
            user : email,
            pass : 'Knight22'
        }
    });
    fs.readFile(main.dist + '/views/mail.jade', 'utf8', function (err, data) {
        if (err) {
            throw err;
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
            from: email,
            to: req.body.email,
            bcc: email,
            subject: 'Website Submission to ' + name,
            text: 'Name: ' + req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message,
            html: html
        };
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                return res.render('error', {
                    message: info.response,
                    stack: error
                });
            }
        });
    });
    res.redirect('back');
});

module.exports = router;
