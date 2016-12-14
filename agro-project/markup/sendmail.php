<?php
require 'PHPMailer/class.phpmailer.php';
	$mail  = new PHPMailer();

	$mail->IsSMTP();
	$mail->SMTPAuth     = true;
	$mail->SMTPSecure   = 'ssl';
	$mail->Host         = 'smtp.ukr.net';
	$mail->Port         = '465';
	$mail->Username     = 'mqtacc3@ukr.net';
	$mail->Password     = '123qwe45';

	$mail->IsHTML(false);

	$mail->From         = 'mqtacc3@ukr.net';
	$mail->FromName     = 'Website';
	$mail->Subject      = 'Message from ' . $_POST['email'];


	$mail->AddAddress('salenza@mail.ru');


	$mail->Body = $_POST['message'];
	$mail->AltBody = $mail->Body;

	$mail->Send();
	header('Location: /');
