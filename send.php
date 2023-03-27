<?php
$destinatario = "cakedreamland02@gmail.com"; 
$subject = "Nuevo formulario enviado desde Cakedreamland"; 
$name = $_POST["name"]; 
$last_name = $_POST["last_name"]
$email = $_POST["email"]; 
$message = $_POST["message"]; 

$header = "Enviado desde landing page Cakedreamland"
$mensaje = $message . "\nAtentamente: " . $name . $last_name;

mail($destinatario, $subject, $message, $header);

echo "<script>alert('correo enviado exitosamente')</script>"
header("Location: index.html");
?>