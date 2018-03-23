<?php
	header("Content-Type:application/json;charset=utf-8");
	$conn=mysqli_connect('127.0.0.1','root','','mp',3306);
	mysqli_query($conn,"SET NAMES UTF8");
	
	function sql_execute($sql,$type){
		global $conn;
		$result = mysqli_query($conn, $sql);

		if(!$result){
			return  "查询执行失败！请检查SQL语法：$sql";
		}else {
			return $rowList = mysqli_fetch_all($result,$type);
		}
	}
?>