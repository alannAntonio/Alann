<?
$nombre = $_POST['nombre'];
$nombre_mod =ucwords($nombre, " ");
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
$fono = $_POST['fono'];
$destinatario = 'info@alann.cl';
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

include ('cuerpo_mensaje.php');
mail($destinatario,$nombre_mod.' - contacto web',$cuerpo,$cabeceras);
echo"<p>Datos enviados correctamente<p>";
?>