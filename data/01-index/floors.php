<?php
	header("Content-Type:application/json;charset=UTF-8");
	require_once("../init1.php");

	$output=[
		"iphone"=>null,
		"huawei"=>null,
		"oppo"=>null,
		"vivo"=>null,
		"jinli"=>null,
		"meizu"=>null
	];

	$sql="SELECT mid,img FROM mp_type WHERE mname='苹果'";
	$output["iphone"]=sql_execute($sql,MYSQLI_ASSOC);
	$sql="SELECT tid,img,descript FROM mp_fault_type";
	$output["iphone"]["faultTypeImgs"]=sql_execute($sql,MYSQLI_ASSOC);
	
	$sql="SELECT mid,img FROM mp_type WHERE mname='华为'";
	$output["huawei"]=sql_execute($sql,MYSQLI_ASSOC);
	$sql="SELECT tid,img,descript FROM mp_fault_type WHERE fault_type='screen'";
	$output["huawei"]["faultTypeImgs"]=sql_execute($sql,MYSQLI_ASSOC);
	
	$sql="SELECT mid,img FROM mp_type WHERE mname='oppo'";
	$output["oppo"]=sql_execute($sql,MYSQLI_ASSOC);
	$sql="SELECT tid,img,descript FROM mp_fault_type WHERE fault_type='screen'";
	$output["oppo"]["faultTypeImgs"]=sql_execute($sql,MYSQLI_ASSOC);
	
	$sql="SELECT mid,img FROM mp_type WHERE mname='vivo'";
	$output["vivo"]=sql_execute($sql,MYSQLI_ASSOC);
	$sql="SELECT tid,img,descript FROM mp_fault_type WHERE fault_type='screen'";
	$output["vivo"]["faultTypeImgs"]=sql_execute($sql,MYSQLI_ASSOC);
	
	$sql="SELECT mid,img FROM mp_type WHERE mname='金立'";
	$output["jinli"]=sql_execute($sql,MYSQLI_ASSOC);
	$sql="SELECT tid,img,descript FROM mp_fault_type WHERE fault_type='screen' OR fault_type='camera' OR fault_type='battery' OR fault_type='speakers' OR fault_type='bordercase'";
	$output["jinli"]["faultTypeImgs"]=sql_execute($sql,MYSQLI_ASSOC);
	
	$sql="SELECT mid,img FROM mp_type WHERE mname='魅族'";
	$output["meizu"]=sql_execute($sql,MYSQLI_ASSOC);
	$sql="SELECT tid,img,descript FROM mp_fault_type WHERE fault_type='screen' OR fault_type='camera' OR fault_type='battery' OR fault_type='speakers' OR fault_type='bordercase' OR fault_type='other'";
	$output["meizu"]["faultTypeImgs"]=sql_execute($sql,MYSQLI_ASSOC);

	echo json_encode($output);
?>