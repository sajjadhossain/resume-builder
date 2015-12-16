var express = require('express');
var router = express.Router();
var db = require('diskdb');
var main = require('../../index');

/* GET details */
router.get('/', function(req, res) {
    db = db.connect(main.data, ['build']);
    var foundJobs = db.build.find();

    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.render('details', foundJobs);
});

module.exports = router;
