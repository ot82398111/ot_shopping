<?php
header("Content-Type:text/plain;charset=UTF-8");
session_start();
@$uid=$_SESSION["uid"];
if($uid){
  require_once("../init1.php");
  $sql="select uname from mp_user where uid=$uid";
  $uname=sql_execute($sql,MYSQL_ASSOC)[0]["uname"];
  echo $uname;
}else
  echo '<a href="login.html">登录</a>';