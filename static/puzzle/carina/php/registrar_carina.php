.<?php
$nombre = $_POST["nombreapellido"];   
$email = $_POST["email"];
$tiempo = $_POST["tiempototal"];
$fecha = $_POST["fechajuego"];

$host ="localhost";
$uname = "concienciafrsfco_conciencia";
$pwd = "concienciabases";
$db_name = "concienciafrsfco_telescopio_webb";

$conexion_db = mysqli_connect($host,$uname,$pwd,$db_name) or die("Could not connect to database." .mysqli_error());

$datos_sql = "INSERT INTO ranking_carina (id,user,email,time,date) VALUES ('0','$nombre','$email','$tiempo','$fecha')";
$ready_grabar = mysqli_query($conexion_db,$datos_sql);

$mensaje = 'El tiempo ha sido registrado correctamente';
echo "<script>window.history.go(-2);</script>"
?>