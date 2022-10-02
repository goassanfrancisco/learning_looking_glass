.<?php
public function index(){
$host ="localhost";
$uname = "concienciafrsfco_conciencia";
$pwd = "concienciabases";
$db_name = "concienciafrsfco_telescopio_webb";

$conexion_db = mysqli_connect($host,$uname,$pwd,$db_name) or die("Could not connect to database." .mysqli_error());

$consulta = "SELECT user,time FROM ranking_jupiter ORDER BY time ASC;
$datos = mysqli_query($conexion_db,$consulta);
return $datos;
}
?>