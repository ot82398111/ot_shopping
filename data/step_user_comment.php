<?php
	require("init1.php");

	@$pno=$_REQUEST["pno"];
	@$pageSize=$_REQUEST["pageSize"];
	@$tid=$_REQUEST["tid"];

	if(!$pno)
		$pno=1;
	else{
		$pno=intval($pno);//将字符串的数据转换为整数
	}
	if(!$pageSize){
		$pageSize=4;
	}else{
		$pageSize=intval($pageSize);
	}

	$output=[
		'recodeCount'=>0,     //满足条件的总记录数
		'pageCount'=>0,		  //总页数
		'pno'=>$pno,		  //查询的页码
		'pageSize'=>$pageSize, //每个页大小
		'data'=>null		  //当前页中的数据
	];

	$sql="select count(*) from mp_user_comment WHERE commentType=$tid";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	$output["recodeCount"]=intval($row[0]);
	$output["pageCount"]=ceil($output["recodeCount"]/$output["pageSize"]);

	$start=($output["pno"]-1)*$output["pageSize"];
	$count=$output["pageSize"];


	$sql="SELECT ucid,time,comment,reply FROM mp_user_comment WHERE commentType=$tid ORDER BY ucid DESC LIMIT $start,$count";
	$result=mysqli_query($conn,$sql);
	$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
	$output["data"]=$rows;

	echo json_encode($output);
?>