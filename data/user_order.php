<?php
	require("init1.php");
	$uid=$_REQUEST["uid"];
	$mpType=$_REQUEST["mpType"];
	$type=$_REQUEST["type"];
	$color=$_REQUEST["color"];
	$price=$_REQUEST["price"];
	$province=$_REQUEST["province"];
	$city=$_REQUEST["city"];
	$area=$_REQUEST["area"];
	$detailAddress=$_REQUEST["detailAddress"];
	$xiuxiuCenter=$_REQUEST["xiuxiuCenter"];
	$username=$_REQUEST["username"];
	$phone=$_REQUEST["phone"];
	$imei=$_REQUEST["imei"];
	$remark=$_REQUEST["remark"];
	$sql="INSERT INTO	mp_order(id,uid,mpType,type,color,price,province,city,area,detailAddress,xiuxiuCenter,username,phone,imei,remark) VALUES(NULL,$uid,'$mpType','$type','$color','$price','$province','$city','$area','$detailAddress','$xiuxiuCenter','$username','$phone','$imei','$remark')";
	$result=mysqli_query($conn,$sql);
	if($result){
		$row=mysqli_affected_rows($conn);
		if($row!=null){
			echo '{"code":1,"msg":"下单成功！"}';
		}
	}
?>