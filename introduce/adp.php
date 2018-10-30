<?php
$conn = mysqli_connect("localhost","root","um0723","hong");
if(!$conn){
echo "connect fail";
}else{
echo "connect Success";
}
echo "<script>alert(".$_POST['lev3'].");</script>"
$sql = "SELECT * FROM ex WHERE major = '".$_POST["lev3"]."'";

$result = mysqli_query($conn,$sql);
while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
echo "<li>".$row["content"]."</li><br>";
}
mysqli_close($conn);

 ?>
