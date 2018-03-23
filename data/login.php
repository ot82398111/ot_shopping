<?php
  session_start();

	require("init1.php");
	$uname=$_REQUEST["uname"];
	$upwd=$_REQUEST["upwd"];

	$sql="SELECT * FROM mp_user WHERE uname='$uname' AND upwd='$upwd'";
	$row=sql_execute($sql,MYSQLI_ASSOC);
	if($row!=null){
		$uid=$row[0]["uid"];
		$uname=$row[0]["uname"];
		$_SESSION["uid"]=$uid;
		$_SESSION["uname"]=$uname;
		echo '{"code":1,"uid":'.$uid.',"uname":"'.$uname.'","msg":"登陆成功"}';
	}else{
		echo '{"code":-1,"msg":"登陆失败"}';
	}
?>