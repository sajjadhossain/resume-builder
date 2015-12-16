var total;
var classNames = {};
var idMatches = [];
document.addEventListener('DOMContentLoaded', function () {
    var total = document.getElementsByClassName('btn-floating').length;
    for (i = 0; i < total; i++) {
        classNames[i] = document.getElementsByClassName('btn-floating')[i].className;
        idMatches.push(classNames[i].match(/[A-z]{1,}-addBullet{1,}/g).toString().replace('-addBullet',''));
    }

    idMatches.forEach(function (id) {
        var addForId = '.' + id + '-addBullet';
        var next = 0;
        $(addForId).click(function (e) {
            e.preventDefault();
            var addto = '#' + id + '-bullets';
            next = next + 1;
            var newIn =
                '<textarea placeholder="Spent youth traveling the world, training to intellectual and physical perfection and learning a variety of crime-fighting skills..." name="' +
                id + '-bullet' + next + '" id="' + id + '-bullet' + next + '"' +
                'class="materialize-textarea validate truncate"></textarea>' +
                '<label for="' + id + '-bullet' + next + '" class="active">Job Bullet</label>';
            var newInput = $(newIn);
            $(addto).after(newInput);
            $(id + '-bullets' + next).attr('data-source',$(addto).attr('data-source'));
            document.getElementById(id + '-countBullets').value = next;
        });
    });
});
