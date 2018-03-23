<?php
	require("init1.php");
	@$uname=$_REQUEST['uname'];
	@$upwd=$_REQUEST['upwd1'];
	@$email=$_REQUEST['email'];
	@$phone=$_REQUEST['phone'];
	$sql="INSERT INTO mp_user(uid,uname,upwd,email,phone) VALUES (NULL,'$uname','$upwd','email','$phone')";
	$result=mysqli_query($conn,$sql);
	if($result){
		$count=mysqli_affected_rows($conn);
		if($count){
			echo "true";
		}else{
			echo "false";
		}
	}

?>