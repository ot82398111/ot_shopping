<?php
header('Content-Type: application/json;charset=UTF-8');
require_once("../init1.php");

$kw=$_REQUEST["kw"];
$kws=explode(' ',$kw);
$cond="";
for($i=0;$i<count($kws);$i++){
  $kws[$i]="title LIKE '%".$kws[$i]."%' ";
}
$sql="SELECT * FROM rc_msg where ".join(" AND ",$kws)." ORDER BY id DESC LIMIT 5";

echo json_encode(sql_execute($sql,MYSQLI_ASSOC));