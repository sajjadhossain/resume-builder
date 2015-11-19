var express = require('express');
var router = express.Router();
var writeson = require('writeson');
var main = require('../../index');
var build = require('../data/build.json');

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('details', build);
});

/* POST users listing. */
router.post('/create', function(req, res) {
    var data = {
        background: req.body.background,
        backgroundImage: req.body.backgroundImage,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emailAddress: req.body.emailAddress,
        phoneNumber: req.body.phoneNumber,
        gitHub: req.body.gitHub,
        gmail: req.body.gmail,
        gmailPassword: req.body.gmailPassword,
        objective: req.body.objective,
        jobs: {
            job1: req.body.job1,
            job2: req.body.job2,
            job3: req.body.job3
        }
    };
    //console.log(data);
    writeson(main.src + '/data/details.json', data, function(err) {
        if(err) return console.err(err);
    });
    res.redirect('back');
});

module.exports = router;
