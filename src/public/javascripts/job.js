function setBackground(value) {
    var element = document.getElementById('background');
    element.value = value;
    $("#colorPreview").removeClass().addClass( value + ' card-panel' )
}
document.addEventListener('DOMContentLoaded', function() {
    var next = 0;
    $('.add-skill').click(function(e){
        e.preventDefault();
        var addto = '#skill';
        var addRemove = '#skill' + (next);
        next = next + 1;
        var newIn =
            '<div class="row padding-top">' +
            '<div class="col s8">' +
            '<input id="skillName' + next + '" placeholder="Detective" type="text" name="skillName' + next + '" required="required" class="validate truncate"/>' +
            '<label for="skillName' + next + '">Skill</label>' +
            '</div>' +
            '<div class="col s4">' +
            '<input id="skillPercent' + next + '" placeholder="85" type="text" name="skillPercent' + next + '" required="required" class="validate truncate"/>' +
            '<label for="skillPercent' + next + '">Percent (%)</label>' +
            '</div>' +
            '</div>' +
            '<div class="row remove-margin-bottom">' +
            '<div class="col s12 padding-bottom">' +
            '<textarea id="skillDetail' + next + '" placeholder="Database, Searching, Forensic Science, Scene Recreation, Statistical Probability" type="text" required="required" name="skillDetail' + next + '" class="materialize-textarea validate truncate"></textarea>' +
            '<label for="skillDetail' + next + '">Things I used for said Skill  </label>' +
            '</div>' +
            '</div>';
        var newInput = $(newIn);
        var removeBtn =
            '<div class="col s12 right-align">' +
            '<a id="remove-skill' + (next - 1) + '"type="button" class="btn-floating btn-large waves-effect waves-light remove-job red"><i class="material-icons">remove</i></a></div>' +
            '</div>';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $('#skill' + next).attr('data-source',$(addto).attr('data-source'));
        document.getElementById('count-skill').value = next;
        $('.remove-skill').click(function(e){
            e.preventDefault();
            var fieldNum = this.id.charAt(this.id.length-1);
            var fieldID = '#skill' + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var next = 0;
    $('.add-school').click(function(e){
        e.preventDefault();
        var addto = '#school';
        var addRemove = '#school' + (next);
        next = next + 1;
        var newIn =
            '<div class="row padding-top">' +
            '<div class="col s12">' +
            '<input id="schoolName' + next + '" placeholder="Gotham University for the Gifted" type="text" name="schoolName' + next + '" required="required" class="validate truncate"/>' +
            '<label for="schoolName' + next + '">School Name</label>' +
            '<input id="schoolLocation' + next + '" placeholder="Gotham, NY" type="text" name="schoolLocation' + next + '" required="required" class="validate truncate"/>' +
            '<label for="schoolLocation' + next + '">School Location</label>' +
            '<input id="schoolStudy' + next + '" placeholder="Business" type="text" name="schoolStudy' + next + '" required="required" class="validate truncate"/>' +
            '<label for="schoolStudy' + next + '">Study Focus</label>' +
            '</div>' +
            '</div>' +
            '<div class="row valign-wrapper">' +
            '<div class="col s5 valign">' +
            '<input id="schoolFrom' + next + '" placeholder="98" type="text" name="schoolFrom' + next + '" required="required" class="validate truncate"/>' +
            '<label for="schoolFrom' + next + '">From</label>' +
            '</div>' +
            '<div class="col s2 valign center-align">TO</div>' +
            '<div class="col s5 valign">' +
            '<input id="schoolTo' + next + '" placeholder="02" type="text" name="schoolTo' + next + '" required="required" class="validate truncate"/>' +
            '<label for="schoolTo' + next + '">To</label>' +
            '</div>' +
            '</div>';
        var newInput = $(newIn);
        var removeBtn =
            '<div class="col s12 right-align">' +
            '<a id="remove-school' + (next - 1) + '"type="button" class="btn-floating btn-large waves-effect waves-light remove-school red"><i class="material-icons">remove</i></a></div>' +
            '</div>';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $('#school' + next).attr('data-source',$(addto).attr('data-source'));
        document.getElementById('count-school').value = next;
        $('.remove-school').click(function(e){
            e.preventDefault();
            var fieldNum = this.id.charAt(this.id.length-1);
            var fieldID = '#school' + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
        $('.add-school').click(function(e){

        })
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var next = 0;
    $('.add-job').click(function(e){
        e.preventDefault();
        var addto = '#job' + next;
        var addRemove = '#job' + (next);
        next = next + 1;
        var newIn =
            '<div id="job' + next + '">' +
            '<input autocomplete="on" name="job' + next + '" type="text" placeholder="Batman Inc." class="input"/>' +
            '<label for="job' + next + '">Job/Company Name</label>' +
            '</div>';
        var newInput = $(newIn);
        var removeBtn =
            '<div class="right">' +
            '<a id="remove-job' + (next - 1) + '"type="button" class="btn-floating btn-large waves-effect waves-light remove-job red"><i class="material-icons">remove</i></a></div>' +
            '</div>';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $('#job' + next).attr('data-source',$(addto).attr('data-source'));
        document.getElementById('count-job').value = next;
        $('.remove-job').click(function(e){
            e.preventDefault();
            var fieldNum = this.id.charAt(this.id.length-1);
            var fieldID = '#job' + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
    });
});
var jobz = '../../data/resume.json';
console.log(jQuery.getJSON(jobz));

function addJobBullet() {

}

//function getParents() {
//    //var next = 0;
//    $('div a').click(function(e) {
//        e.preventDefault();
//        var parentId = $(this).closest('div').attr('id');
//        console.log(parentId);
//    });
//    //$('.add-job').click(function(e){
//    //    e.preventDefault();
//    //    var addto = '#job' + next;
//    //    var addRemove = '#job' + (next);
//    //    next = next + 1;
//    //    var newIn =
//    //        '<div id="job' + next + '">' +
//    //        '<input autocomplete="on" name="job' + next + '" type="text" placeholder="Batman Inc." class="input"/>' +
//    //        '<label for="job' + next + '">Job/Company Name</label>' +
//    //        '</div>';
//    //    var newInput = $(newIn);
//    //    var removeBtn =
//    //        '<div class="right">' +
//    //        '<a id="remove-job' + (next - 1) + '"type="button" class="btn-floating btn-large waves-effect waves-light remove-job red"><i class="material-icons">remove</i></a></div>' +
//    //        '</div>';
//    //    var removeButton = $(removeBtn);
//    //    $(addto).after(newInput);
//    //    $(addRemove).after(removeButton);
//    //    $('#job' + next).attr('data-source',$(addto).attr('data-source'));
//    //    document.getElementById('count-job').value = next;
//    //    $('.remove-job').click(function(e){
//    //        e.preventDefault();
//    //        var fieldNum = this.id.charAt(this.id.length-1);
//    //        var fieldID = '#job' + fieldNum;
//    //        $(this).remove();
//    //        $(fieldID).remove();
//    //    });
//    //});
//}
