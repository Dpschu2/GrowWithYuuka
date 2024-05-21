$('#working_form').submit(function() {

    var action = $(this).attr('action');
    console.log('test', action);
    $("#working_form #message").slideUp(750, function() {
        $('#working_form #message').hide();

        $('#working_form #submit')
            .before('<img src="" class="gif_loader" />')
            .attr('disabled', 'disabled');

        $.post(action, {
                name: $('#working_form #contact-name').val(),
                email: $('#working_form #contact-email').val(),
                comments: $('#working_form #contact-comments').val(),
                subject: $('#working_form #contact-subject').val()
            },
            function(data) {
                console.log('message', data);
                this.getElementById('message').innerHTML = data;
                $('#working_form #contact-message').slideDown('slow');
                $('#working_form #cform img.gif_loader').fadeOut('slow', function() {
                    $(this).remove()
                });
                $('#working_form #submit').removeAttr('disabled');
                if (data.match('success') != null) $('#cform').slideUp('slow');
            }
        );

    });

    return false;

});



