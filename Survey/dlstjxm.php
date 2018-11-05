<?php

$arr_length = $_POST['length'];
$question = array_fill(0,$arr_length,NULL); //길이가 arr_length인 배열 선언

$Univ = $_POST['Univ'];
$Major = $_POST['Major'];
$cat = count($question);
echo "대학교는$Univ<br />";
echo "학과는$Major<br />";
echo "배열의 길이는$cat<br />";

for($i = 0;$i<$arr_length;$i++){
  $question[$i] = $_POST['question'.$i];
  echo "질문 $i 는 $question[$i]<br />";
}


 ?>
