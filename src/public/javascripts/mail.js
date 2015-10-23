$(document).ready(function () {
    var name;
    var email;
    var message;
    $('#send-email').click(function () {
        name = $('#name').val();
        email = $('#email').val();
        message = $('#message').val();
        $.get('http://localhost:3000/send', {
            name: name,
            email: email,
            message: message
        }, function (data) {
            if (data === 'sent') {
                $('#email-message').css('display', 'none');
                $('#callback-message').css('display', 'block').innerHTML = '<p class="flow-text">Talk to you soon!</p>';
            }
        });
    });
});
