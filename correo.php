<?php
// $server = "31.220.106.27"; //mx1.hostinger.es
// $user = "info@alann.cl";
// $pass = "Alan123.";
// $connection = fsockopen($server, 110, $errno, $errstr, 30);

// fputs($connection, "user $usern");
// echo fgets($connection)."<br>";
// fputs($connection, "pass $passn");
// echo fgets($connection)."<br>";

// fputs($connection, "RETR 2n");
// $total = 0;
// $bloque = 1000;
// while ($total < $tamano) {
//     echo fread($connection, $bloque);
//     $total = $total + $bloque;
// }

$mbox = imap_open("{localhost:110/pop3}INBOX", "info@alann.cl", "Alan123.");
$cabecera = imap_headerinfo($mbox, 1);
$from = $cabecera->from;
$subject = $cabecera->subject;
$leer = imap_fetchstructure($mbox, 1);
echo $leer;
echo "nada";
?>