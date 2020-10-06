<!DOCTYPE html>
<html>
<body>

<?php

$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    if (empty($name)) {
        $errors[] = 'Name is empty';
    }

    if (empty($email)) {
        $errors[] = 'Email is empty';
    }

    if (empty($phone)) {
        $errors[] = 'Phone is empty';
    }

    if (empty($message)) {
        $errors[] = 'Message is empty';
    }

    if (empty($errors)) {
        $toEmail = 'info@louisajphotography.com';
        $emailSubject = 'Your contact request for louisajphotography.com';
        $headers = ['From' => $email, 'Reply-To' => $email, 'Cc' => $email, 'Content-type' => 'text/html; charset=iso-8859-1'];

        $bodyParagraphs = ["Name: {$name}", "Phone: {$phone}", "Email: {$email}", "Message:", $message];
        $body = join(PHP_EOL, $bodyParagraphs);

        if (mail($toEmail, $emailSubject, $body, $headers)) {
            header('Location: thank-you.html');
        } else {
            $errorMessage = 'Oops, something went wrong. Please try again later';
        }
    } else {
        $allErrors = join('<br/>', $errors);
        $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
    }
}

echo "$errorMessage"
?>

</body>
</html>