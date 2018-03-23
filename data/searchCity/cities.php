<?php
require_once("../init1.php");
$provinceid=$_REQUEST['provinceid'];
$sql="SELECT cityid,city FROM cities WHERE provinceid=$provinceid";
echo json_encode(sql_execute($sql,MYSQLI_ASSOC));