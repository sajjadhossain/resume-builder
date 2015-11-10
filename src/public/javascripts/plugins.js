// Avoid `console` errors in browsers that lack a console.
document.addEventListener('DOMContentLoaded', function() {
    var next = 1;
    $(".add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn =
            '<div id="field' + next + '" class="card-panel">' +
            '<div class="row">' +
            '<div class="col s12">' +
            '<div class="row">' +
            '<div class="col s12 m6">' +
            '<input id="jobName' + next + '" placeholder="Batman" type="text" name="jobName' + next + '" required="required" class="validate truncate"/>' +
            '<label for="jobName' + next + '">Job Name</label>' +
            '</div>' +
            '<div class="col s12 m6">' +
            '<input id="jobTitle' + next + '" placeholder="Vigilante" type="text" name="jobTitle' + next + '" required="required" class="validate truncate"/>' +
            '<label for="jobTitle' + next + '">Job Title</label>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col s12">' +
            '<div class="row valign-wrapper">' +
            '<div class="col s5 valign">' +
            '<input id="jobFrom' + next + '" placeholder="98" type="text" name="jobFrom' + next + '" required="required" class="validate truncate"/>' +
            '<label for="jobFrom' + next + '">From</label>' +
            '</div>' +
            '<div class="col s2 valign center-align">TO</div>' +
            '<div class="col s5 valign">' +
            '<input id="jobTo' + next + '" placeholder="Present" type="text" name="jobTo' + next + '" required="required" class="validate truncate"/>' +
            '<label for="jobTo' + next + '">To</label>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col s12 m6">' +
            '<input id="jobLogo' + next + '" placeholder="http://localhost:3000/images/batman-logo.png" type="url" name="jobLogo' + next + '" required="required" class="validate truncate"/>' +
            '<label for="jobLogo' + next + '">Job Logo <small class="smaller">(*) ./src/public/images/</small></label>' +
            '</div>' +
            '<div class="col s12 m6">' +
            '<input id="jobLocation' + next + '" placeholder="Gotham, NY" type="text" name="jobLocation' + next + '" required="required" class="validate truncate"/>' +
            '<label for="jobLocation' + next + '">Job Location</label>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="offset-s1 col s10">' +
            '<div class="row valign-wrapper">' +
            '<div class="col s8 valign left-align"><span class="flow-text">Add a job additional</span></div>' +
            '<div class="col s4 valign right-align"><a class="btn-floating btn-large waves-effect waves-light addJobAdditionalButton' + next + '"><i class="material-icons">trending_up</i></a></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="offset-s1 col s10 inputAdditionalWrap' + next + '">' +
            '<input id="jobAdditional' + next + '" placeholder="Acquired by Batman, Inc." type="text" name="jobAdditional' + next + '" required="required" class="validate truncate padding-top"/>' +
            '<label for="jobAdditional' + next + '">Job Additional <small class="smaller">(*)</small></label>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col s12">' +
            '<textarea id="description' + next + '" placeholder="Batman is the superhero protector of Gotham City, a man dressed like a bat who fights against evil and strikes terror into the hearts of criminals everywhere." name="description' + next + '" required="required" class="materialize-textarea validate truncate"></textarea>' +
            '<label for="description' + next + '">Job Description</label>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="offset-s1 col s10">' +
            '<div class="row valign-wrapper">' +
            '<div class="col s8 valign left-align"><span class="flow-text">Add a job bullet</span></div>' +
            '<div class="col s4 valign right-align"><a class="btn-floating btn-large waves-effect waves-light addJobBulletButton' + next + '"><i class="material-icons">format_list_bulleted</i></a></div>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="offset-s1 col s10 inputAdditionalWrap">' +
            '<textarea id="bullet' + next + '" placeholder="Spent youth traveling the world, training to intellectual and physical perfection and learning a variety of crime-fighting skills, including chemistry, criminology, forensics, martial arts, gymnastics, disguise, and escape artistry." name="bullet' + next + '" required="required" class="materialize-textarea validate truncate"></textarea>' +
            '<label for="bullet' + next + '">Job Bullet</label>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        var newInput = $(newIn);
        var removeBtn = '<div class="row right"><a id="remove' + (next - 1) + '" type="button" class="btn-floating btn-large waves-effect waves-light remove-me"><i class="material-icons">remove</i></a></div>';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);

        $('.remove-me').click(function(e){
            e.preventDefault();
            var fieldNum = this.id.charAt(this.id.length-1);
            var fieldID = "#field" + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
    });
    console.log('Sup fellow developer.');
    console.log('Contact me via sajjad@withpulp.com.');
    console.log('Fork me from https://github.com/sajjadhossain/resume-builder.');
    $(' form ').wizard();
    $('ul.tabs').tabs();
    $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    $('.dropdown-button').dropdown();
    (function() {
        var method;
        var noop = function () {};
        var methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
        ];
        var length = methods.length;
        var console = (window.console = window.console || {});

        while (length--) {
            method = methods[length];

            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }
    }());
});
// GOOGLE Analytics
