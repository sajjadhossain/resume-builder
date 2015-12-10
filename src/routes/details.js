var express = require('express');
var router = express.Router();
var writeson = require('writeson');
var main = require('../../index');
var build = require('../data/build.json');
var jobs = {
    jobs: build.jobs
};

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('details', jobs);
});

/* POST users listing. */
router.post('/create', function(req, res) {
    var data = {};
    //console.log(data);
    //writeson(main.src + '/data/details.json', data, function(err) {
    //    if(err) return console.err(err);
    //});
    res.redirect('back');
});

module.exports = router;
