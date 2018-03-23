<?php
	require("init1.php");
	@$id=$_REQUEST["id"];
	$sql="SELECT * FROM mp_test	WHERE id=$id";
	echo json_encode(sql_execute($sql,MYSQLI_ASSOC));
?>