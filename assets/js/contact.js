// const nodemailer = require('nodemailer');

$('#working_form').submit(function(e) {
    e.preventDefault();
    $("#working_form #message").slideUp(750, function() {
        $('#working_form #message').hide();
        $('#working_form #submit')
            .before('<img src="" class="gif_loader" />')
            .attr('disabled', 'disabled');
        const nameInput = $('#working_form #contact-name').val();
        const emailInput = $('#working_form #contact-email').val();
        const messageInput = $('#working_form #contact-comments').val();
        const msg = {
            from: `${emailInput}`, 
            to: 'schulzdean4@gmail.com',
            subject: `GWY Contact - ${nameInput}`,
            text: `${messageInput}`
        };
       
        let transporter = nodemailer.createTransport({
            host: 'smtp.gwyuuka.com',
            server: '465',
            auth: {
                user: "dean@gwyuuka.com", 
                pass: process.env.userpass,
            }
        });
        transporter.sendMail(msg, function(error, info){
            if (error) {
                console.error(error);
                $('#simple-msg').html(`
                    <div class="container">
                        <h2 style="color: red;">Sorry, your message was not able to send. Try again later.</h2>
                    </div>
                `);
            } else {
                console.log('Email sent: ' + info.response);
                this.getElementById('message').innerHTML = `<h2>Thank you for contacting me. I will get back to you as soon as possible!</h2>`;
                $('#working_form #contact-message').slideDown('slow');
                $('#working_form #cform img.gif_loader').fadeOut('slow', function() {
                    $(this).remove();
                });
                $('#working_form #submit-contact').removeAttr('disabled');
                $('#cform').slideUp('slow');
                $('#submit-contact').attr('disabled', true);
            }
        });
    });

    return false;

});



