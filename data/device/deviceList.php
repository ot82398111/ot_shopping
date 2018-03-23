<?php
	header("Content-Type:application/json;charset=utf8");
	require("../init1.php");
	$mname=$_REQUEST["mname"];
	$output=[];
	$sql="SELECT * FROM rc_msg WHERE mid=(SELECT mid FROM mp_type WHERE mname='$mname')";
	$output["data"]=sql_execute($sql,MYSQLI_ASSOC);
	
	$sql="SELECT COUNT(*) FROM rc_msg WHERE mid=(SELECT mid FROM mp_type WHERE mname='$mname')";
	$output[]=sql_execute($sql,MYSQLI_ASSOC);
	echo json_encode($output);
?>