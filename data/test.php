<?php
	require("init1.php");
	@$price=$_REQUEST["price"];
	@$mpType=$_REQUEST["mpType"];
	@$type=$_REQUEST["type"];
	@$color=$_REQUEST["color"];
	$sql="INSERT INTO mp_test(id,price,mpType,type,color) VALUES(NULL,
	'$price','$mpType','$type','$color')";
	$result=mysqli_query($conn,$sql);
	if($result){
		echo json_encode(mysqli_insert_id($conn));
	}
?>