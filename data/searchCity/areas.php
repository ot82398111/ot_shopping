<?php
require_once("../init1.php");
$cityid=$_REQUEST['cityid'];
$sql="SELECT areaid,area FROM areas WHERE cityid=$cityid";
echo json_encode(sql_execute($sql,MYSQLI_ASSOC));