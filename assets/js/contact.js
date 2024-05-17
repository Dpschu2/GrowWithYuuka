$('#working_form').submit(function() {

    var action = $(this).attr('action');

    $("#working_form #message").slideUp(750, function() {
        $('#working_form #message').hide();

        $('#working_form #submit')
            .before('<img src="" class="gif_loader" />')
            .attr('disabled', 'disabled');

        $.post(action, {
                name: $('#working_form #name').val(),
                email: $('#working_form #email').val(),
                comments: $('#working_form #comments').val(),
            },
            function(data) {
                this.getElementById('message').innerHTML = data;
                $('#working_form #message').slideDown('slow');
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



