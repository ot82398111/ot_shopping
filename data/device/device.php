<?php
	header("Conttent-Type:application/json;charset=utf8");
	require("../init1.php");
	$id=$_REQUEST["id"];
	$sql="SELECT * FROM rc_msg WHERE id=$id";
	echo json_encode(sql_execute($sql,MYSQLI_ASSOC));
?>