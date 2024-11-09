<?php
$server = "127.0.0.1";
$user = "root";
$pass = "";

$con = new mysqli($server,$user,$pass);
if(!$con){
    die("error : ".mysqli_connect_error());
}