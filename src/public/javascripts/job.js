document.addEventListener('DOMContentLoaded', function() {
    var next = 1;
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
            '<input id="skillPercent' + next + '" placeholder="85%" type="text" name="skillPercent' + next + '" required="required" class="validate truncate"/>' +
            '<label for="skillPercent' + next + '">Percent</label>' +
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
        $('#count-skill').val(next);
        $('.remove-job').click(function(e){
            e.preventDefault();
            var fieldNum = this.id.charAt(this.id.length-1);
            var fieldID = '#skill' + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var next = 1;
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
        $('#count-job').val(next);

        $('.remove-job').click(function(e){
            e.preventDefault();
            var fieldNum = this.id.charAt(this.id.length-1);
            var fieldID = '#job' + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
    });
});
function setBackground(value) {
    var element = document.getElementById('background');
    element.value = value;
    $("#colorPreview").removeClass().addClass( value + ' card-panel' )
}
