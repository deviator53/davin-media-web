<?php
// Simple contact form handler
header('Content-Type: application/json');

// Configuration
$receiving_email = 'info@vimtechmedia.com';
$subject_prefix = 'Contact Form - Vimtech Media';

// Validate request method
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get and sanitize form data
$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$service = isset($_POST['service']) ? strip_tags(trim($_POST['service'])) : '';
$subject = isset($_POST['subject']) ? strip_tags(trim($_POST['subject'])) : '';
$message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

// Build email content
$email_subject = "$subject_prefix: $subject";
$email_body = "You have received a new message from your website contact form.\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
if (!empty($service)) {
    $email_body .= "Service Interest: $service\n";
}
$email_body .= "Subject: $subject\n\n";
$email_body .= "Message:\n$message\n";

// Email headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($receiving_email, $email_subject, $email_body, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Your message has been sent. Thank you!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Oops! Something went wrong and we couldn\'t send your message.']);
}
?>
