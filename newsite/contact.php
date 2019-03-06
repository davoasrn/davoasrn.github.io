<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = stripslashes(trim($_POST['name']));
    $email   = stripslashes(trim($_POST['email']));
    $phone   = stripslashes(trim($_POST['phone']));
    $subject = stripslashes(trim($_POST['name']));
    $message = stripslashes(trim($_POST['message']));
    $pattern = '/[\r\n]|Content-Type:|Bcc:|Cc:/i';
    if (preg_match($pattern, $name) || preg_match($pattern, $email) || preg_match($pattern, $subject)) {
        die("Header injection detected");
    }
    $emailIsValid = filter_var($email, FILTER_VALIDATE_EMAIL);
    if ($name && $email && $emailIsValid && $subject && $message) {
		$to = "davoasrn@gmail.com"; // this is your Email address
		$from = $email; // this is the sender's Email address
		$headers = "From:" . $from;
		
        $body = "
        <!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">
        <html>
            <head>
                <meta charset=\"utf-8\">
            </head>
            <body>
                <h1>{$subject}</h1>
                <p><strong>Name</strong> {$name}</p>
                <p><strong>Email</strong> {$email}</p>
                <p><strong>Phone</strong> {$phone}</p>
                <p><strong>Message:</strong> {$message}</p>
            </body>
        </html>";
        mail($to,$subject,$body,$headers);
		echo "Mail Sent. Thank you , we will contact you shortly.";
        $emailSent = true;
    } else {
        $hasError = true;
    }
}