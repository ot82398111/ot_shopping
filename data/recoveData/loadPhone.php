<?php
	header("Content-Type:application/json;charset=UTF8");
	$output=[
		"data"=>null,
		"phone"=>null,
	];
	
	require("../init1.php");
	$sql="SELECT * FROM rc_msg LIMIT 9";
	$output["data"]=sql_execute($sql,MYSQLI_ASSOC);

	$sql="SELECT * FROM mp_type";
	$output["phone"]=sql_execute($sql,MYSQLI_ASSOC);
	echo json_encode($output);



?>