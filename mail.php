<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['comments'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "schulzdean4@gmail.com",//"grow.withyuuka@gmail.com";

mail($recipient, $subject, $message, $mailheader) or die("Error!");
echo `
    <div class="container">
        <h2>Thank you for contacting me. I will get back to you as soon as possible!</h2>
    </div>
`;
?>