var main = require('../../index');

// Cron job for github user info
var CronJob = require('cron').CronJob;
var job = new CronJob('00 30 11 * * 1-5', function() {
        var user = foundResume.info;
        /*
         * Runs every weekday (Monday through Friday)
         * at 11:30:00 AM. It does not run on Saturday
         * or Sunday.
         */
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
            writeson(main.data + '/github.json', githubData, function(err) {
                if (err) return console.err(err);
            });
        });
    },
    true, /* Start the job right now */
    'America/New_York' /* Time zone of this job. */
);

module.exports = job;

