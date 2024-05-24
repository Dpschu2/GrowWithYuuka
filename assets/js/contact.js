// $('#working_form').submit(function(e) {
//     e.preventDefault();
//     $("#working_form #message").slideUp(750, function() {
//         $('#working_form #message').hide();

//         $('#working_form #submit')
//             .before('<img src="" class="gif_loader" />')
//             .attr('disabled', 'disabled');
//         // using Twilio SendGrid's v3 Node.js Library
//         const { sgMail } = require('@sendgrid/mail');
//         sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//         const nameInput = $('#working_form #contact-name').val();
//         const emailInput = $('#working_form #contact-email').val();
//         const messageInput = $('#working_form #contact-comments').val();
//         const msg = {
//             to: 'schulzdean4@gmail.com', // Change to your recipient
//             from: `${emailInput}`, // Change to your verified sender
//             subject: `GWY Contact - ${nameInput}`,
//             text: `${messageInput}`
//         };
//         console.log('test contact form', msg);
//         sgMail
//             .send(msg)
//             .then(() => {
//                 console.log('Email sent');
//                 this.getElementById('message').innerHTML = `<h2>Thank you for contacting me. I will get back to you as soon as possible!</h2>`;
//                 $('#working_form #contact-message').slideDown('slow');
//                 $('#working_form #cform img.gif_loader').fadeOut('slow', function() {
//                     $(this).remove()
//                 });
//                 $('#working_form #submit-contact').removeAttr('disabled');
//                 if (data.match('success') != null) $('#cform').slideUp('slow');
//                 $('#submit-contact').attr('disabled', true);
//             })
//             .catch((error) => {
//                 console.error(error);
//                 $('#simple-msg').html(`
//                     <div class="container">
//                         <h2 style="color: red;">Sorry, your message was not able to send. Try again later.</h2>
//                     </div>
//                 `);
                
//             });
//     });

//     return false;

// });



