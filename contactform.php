<?php

if (isset($_POST['submit'])){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $textarea = $_POST['textarea'];

    $mailTo = "contact@anifabakes.com";
    $headers = "From: ".$email;
    $txt = "You have recieved an email from ".$name.".\n\n".$textarea;
    
    mail( $mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}