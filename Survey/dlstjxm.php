<?php
session_start();
$conn = mysqli_connect('localhost','root','um0723','interview');
$arr_length = $_POST['length'];
$question = array_fill(0,$arr_length,NULL); //길이가 arr_length인 배열 선언


$name = $_SESSION['name'];
$email = $_SESSION['email'];
$phonenumber = $_SESSION['ph'];

$sql = "INSERT INTO survey_member(name,email,ph) VALUES('$name','$email','$phonenumber')";
mysqli_query($conn,$sql);

$Univ = $_POST['Univ'];
$Major = $_POST['Major'];
$cat = count($question);
// echo $name."<br />";
// echo $email."<br />";
// echo $phonenumber."<br />";
// echo "대학교는$Univ<br />";
// echo "학과는$Major<br />";
// echo "배열의 길이는$cat<br />";

for($i = 0;$i<$arr_length;$i++){
  $question[$i] = $_POST['question'.$i];
  $sql = "INSERT INTO survey(name,email,phonenumber,univ,Major,question) VALUES('$name','$email','$phonenumber','$Univ','$Major','$question[$i]')";
  mysqli_query($conn,$sql);
  // echo "질문 $i 는 $question[$i]<br />";
}



mysqli_close($conn);
session_destroy();
echo "<script>location.href='survey_result.html'</script>";
 ?>
