<?php
require_once("../init1.php");
$sql="SELECT provinceid,province FROM provinces";
echo json_encode(sql_execute($sql,MYSQLI_ASSOC));