<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'ssl';
    $mail->SMTPDebug = 2;
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );
    $mail->Username =  'igordaudt1@gmail.com';
    $mail->Password = 'cevwuhgzzqdpdlhl';
    $mail->Port = '465';

    $mail->setFrom('igordaudt1@gmail.com');

    $mail->addAddress('igordaudt1@gmail.com');

    $mail->isHTML(true);

    $mail->Subject = $_POST['subject'];
    $mail->Body = 'eai';

    if (!$mail->send()) { $error = $mail->ErrorInfo; } else {
    }
    echo
    "
    <script>
    document.getElementById('sucess').classList.remove('none');
    alert('Enviado com sucesso');
    </script>
    ";
}
?>