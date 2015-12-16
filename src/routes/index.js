var express = require('express');
var router = express.Router();
var db = require('diskdb');
var main = require('../../index');
var CronJob = require('cron').CronJob;
var job = new CronJob('00 30 11 * * 1-5', function() {
        /*
         * Runs every weekday (Monday through Friday)
         * at 11:30:00 AM. It does not run on Saturday
         * or Sunday.
         */
        var writeson = require('writeson');
        var prettydate = require('pretty-date');
        var github = require('octonode');
        var githubClient = github.client();

        githubClient.get('/users/sajjadhossain', {}, function (err, status, body, headers) {
            var created = prettydate.format(new Date(body['created_at']));
            var updated = prettydate.format(new Date(body['updated_at']));
            var githubData = {
                user: {
                    login: body['login'],
                    avatar: body['avatar_url'],
                    link: body['html_url'],
                    followers: body['followers'],
                    publicRepos: body['public_repos'],
                    publicGists: body['public_gists'],
                    created: created,
                    updated: updated
                }
            };
            writeson(main.src + '/data/github.json', githubData, function(err) {
                if (err) return console.err(err);
            });
        });
    },
    true, /* Start the job right now */
    'America/New_York' /* Time zone of this job. */
);

// GET home page
router.get('/', function(req, res) {
    var resumeData = require('../data/resume.json');
    db = db.connect(main.data, ['github']);

    var foundUsers = db.github.find();
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
        gitHubUserData: foundUsers.user
    };
    res.render('index', data);

});

module.exports = router;
