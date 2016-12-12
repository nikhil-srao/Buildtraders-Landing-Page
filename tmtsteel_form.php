<?php
$connection = mysql_connect("localhost", "root", "");
$db = mysql_select_db("landing_page", $connection);
$name=$_POST['name1'];
$phno=$_POST['phno'];
$material=$_POST['material1'];
$quantity=$_POST['quantity1'];
$email=$_POST['email1'];
$location=$_POST['location1'];
$query = mysql_query("insert into tmt(name,ph_no,material,quantity,email,location) values('$name', '$phno', '$material', '$quantity', '$email', '$location')");
echo "Form Submitted succesfully";
mysql_close($connection); // Connection Closed

$from = "contact@buildtraders.com";
$to = "nikhil.rao548@gmail.com";
$subject = "Your requirement have been submitted.";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
$headers .= "From: contact@buildtraders.com" . "\r\n" .
"Reply-To: contact@buildtraders.com" . "\r\n" .
"X-Mailer: PHP/" . phpversion();
$headers .= "Return-Path: contact@buildtraders.com\r\n";

$msg = "
<html>
<head>
<link href='http://linktocss/.../etc' rel='stylesheet' type='text/css' />

</head>
<body>

	<div>Name             :-  ". $name ."</div>
  <div>Phone Number     :-  ". $phno . "</div>
	<div>Material         :-  ". $material ."</div>
  <div>Quantity         :-  ". $quantity ."</div>
  <div>Email            :-  ". $email . "</div>
	<div>Location         :-  ". $location ."</div>
</body>
</html>
";

mail($to, $subject, $msg, $headers)or die("mail error");
?>
