<?php
$arr_length = $_POST['length'];
$question = array_fill(0,$arr_length,NULL);
for($i = 0;$i<$arr_length;$i++){
  $question[$i] = $_POST['question'.$i];
  echo "$question[$i]";
}

$Univ = $_POST['Univ'];
$Major = $_POST['Major'];
$cat = count($question);
echo "$Univ";
echo "$Major";
echo "$cat";

 ?>
