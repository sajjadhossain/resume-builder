var express = require('express');
var router = express.Router();
var db = require('diskdb');
var main = require('../../index');
var prettydate = require('pretty-date');
var github = require('octonode');
var writeson = require('writeson');

/* GET details */
router.get('/', function(req, res) {
    db.connect(main.data, ['build']);
    var foundBuild = db.build.find();
    var site = foundBuild.site;
    var info = foundBuild.info;
    var template = foundBuild.templates;
    var jobs = foundBuild.resume.jobs;
    var education = foundBuild.resume.education;
    var skills = foundBuild.resume.skills;
    var user = foundBuild.site.gitUser;
    var data = {
        site: site,
        info: info,
        template: template,
        resume: {
            education: education,
            skills: skills,
            jobs: jobs
        },
        github: {}
    };

    // Generate Git Data
    var client = github.client();

    client.get('/users/' + user, {}, function (err, status, body, headers) {
        var created = prettydate.format(new Date(body['created_at']));
        var updated = prettydate.format(new Date(body['updated_at']));
        data['github'] = {
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

        writeson(main.data + '/details.json', data, function(err) {
            if (err) return console.err(err);
        });

        writeson(main.data + '/github.json', data['github'], function(err) {
            if (err) return console.err(err);
        });
    });

    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('details', {
        jobs: jobs
    });
});

module.exports = router;
