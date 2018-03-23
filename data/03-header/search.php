<?php
	header("Content-Type:application/json;charset=UTF-8");
	require_once("../init.php");
	$kw=$_REQUEST["kw"];
	$sql="SELECT title FROM xz_laptop WHERE title LIKE '%".$kw."%' ORDER BY sold_count DESC LIMIT 10";
	echo json_encode(sql_execute($sql));
?>