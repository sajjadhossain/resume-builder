var express = require('express');
var router = express.Router();
var writeson = require('writeson');
var main = require('../../index');

/* GET details */
router.get('/', function(req, res) {
    var db = require('diskdb');

    db = db.connect(main.data, ['build']);
    var foundJobs = db.build.find();

    var jobs = {
        jobs: foundJobs.jobs
    };

    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('details', jobs);
});

module.exports = router;
