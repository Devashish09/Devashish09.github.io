<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "password", "customers");

$result = $conn->query("SELECT Name, Country FROM Customers");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) 
{
    if ($outp != "")
     {
     	$outp .= ",";
     }
    $outp .= '{"Name":"'  . $rs["Name"] .'",';
    $outp .= '"Country":"'. $rs["Country"] . '"}';
}
$outp ='{"records":['.$outp.']}';


$conn->close();

//echo ($outp);

echo $outp;
?>