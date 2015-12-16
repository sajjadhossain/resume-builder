var express = require('express');
var router = express.Router();
var db = require('diskdb');
var main = require('../../index');

/* GET details */
router.get('/', function(req, res) {
    db.connect(main.data, ['build']);
    foundResume = db.build.find();
    jobs = foundResume.resume.jobs;

    var data = {
        jobs: jobs
    };

    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('details', data);
});

module.exports = router;
