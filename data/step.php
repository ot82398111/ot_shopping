<?php
	header("Content-Type:application/json;charset=utf-8");
	require("init1.php");
	@$mid=$_REQUEST["mid"];
	@$tid=$_REQUEST["tid"];
	$output=[
		"data"=>null,
		"phonetype"=>null
	];
	$sql="SELECT * FROM mp_step	WHERE mid=$mid AND tid=$tid";
	$output["data"]=sql_execute($sql,MYSQLI_ASSOC);

	$sql="SELECT type,price FROM m_phoneType WHERE mid=$mid AND tid=$tid";
	$output["phonetype"]=sql_execute($sql,MYSQLI_ASSOC);
	
	echo json_encode($output);
?>