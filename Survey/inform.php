<?php
session_start();
// $name = $_POST['name'];
// $email = $_POST['email'];
// $phonenumber = $_POST['ph'];

$_SESSION['name'] = $_POST['name'];
$_SESSION['email'] = $_POST['email'];
$_SESSION['ph'] = $_POST['ph'];
//
// echo "Name : ".$name."<br>";
// echo "email : ".$email."<br>";
// echo "P.H : ".$phonenumber."<br>";

echo "<script>location.href='survey.html'</script>";

 ?>
