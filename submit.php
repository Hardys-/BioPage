<?php
	$first = $_POST['firstName'];
	$last = $_POST['lastName'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$xml = simplexml_load_file('message.xml');
	$record = $xml->addChild('record');
	$record->addChild('firstname', $first);
	$record->addChild('lastname',$last);
	$record->addChild('email', $email);
	$record->addChild('message', $message);
	file_put_contents('message.xml', $xml->asXML());



?>
<!DOCTYPE html>
<html lang="en">
<title>Send a message</title>

<body>
	<main>
	<div class="message">
		<p>Thank you <?php echo $first; ?>, I have received your message. </p>
		<p>I will reply to this  email address (<?php echo $email; ?>) regarding to your message.</p>
	</div>
	</main>
</body>
