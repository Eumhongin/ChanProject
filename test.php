<?php
	$conn = mysqli_connect("localhost","root","um0723","interview");	
	if(!$conn){
		echo "connect fail";
	}else{
		echo "connect Success";
	}
	echo $_POST['content']."<br>";
	echo $_POST['major'];
	$sql = "INSERT INTO model_free(content,major) VALUES('".$_POST['content']."','".$_POST['major']."')";
	if($_POST['content'] != ''){
		mysqli_query($conn,$sql);
	}else{
		echo "<script>alert('내용이 없어 저장되지 않았습니다');</script>";
	}

	// $result = mysqli_query($conn,$sql);
	// while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
	// 	echo $row["content"].$row["major"];
	// }
	mysqli_close($conn);
	echo "<script>location.href = 'test.html';</script>";
?>
