<!DOCTYPE html>
<html lang="es">

<head>
	<title>Puzzles</title>
	<link href="../img/ConCiencia-sinletras.png" rel="shortcut icon">
	<meta charset="utf-8">
	<meta name="ConCiencia">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>
	<link rel="stylesheet" href="../css/main.css">

	<link href="https://fonts.googleapis.com/css?family=Quicksand:700" rel="stylesheet">
</head>


<body>
<?php
$host ="localhost";
$uname = "concienciafrsfco_conciencia";
$pwd = "concienciabases";
$db_name = "concienciafrsfco_telescopio_webb";

$conexion_db = new mysqli($host,$uname,$pwd,$db_name);

$consulta = "SELECT user,time FROM ranking_carina ORDER BY time ASC LIMIT 0, 10";
$datos = $conexion_db->query($consulta);
?>

<h1>Nebulosa de Eta Carinae</h1>

<p>Arrastra las piezas para moverlas y armar la figura dentro del recuadro. Registra el tiempo e ingresa entre los 10 mejores.</p>

<div class="contenido" style="position: relative;">
	<div id="sectorderecho" width="22%">
	
	<div id="cronometro">
  		<div id="reloj">
	  	0:00:00.00
		</div>
	</div>
	<br>	
	<div id="ranking">
	<h2>Ranking</h2>

	<table width="100%" class="table_style">
	<thead>
	<th><strong>Pos.</strong></th>
	<th><strong>Nombre y Apellido</strong></th>
	<th><strong>Tiempo</strong></th>
	</thead>
	<tbody>
	<?php
	if($datos){
	$i=0;
	while($row = $datos->fetch_assoc()){
	$i++;
	?>
	<tr>
	<td><?php echo $i; ?></td>
	<td><?php echo $row["user"]; ?></td>
	<td><?php echo $row["time"]; ?></td>
	</tr>
    <?php    
    }
	}
    ?>
	</tbody>
	</table>
	</div>
	</div>
<div id="bloqueador" class="bloquer"> </div>
<svg id="entorno"  width="70%" height="500">
<g id="fondo"><image xlink:href="img/fondo.png" width="450" height="450"></g>
<g class="padre" id="0"><image xlink:href="img/c1.png" class="movil"></g>
<g class="padre" id="1"><image xlink:href="img/c2.png" class="movil"></g>
<g class="padre" id="2"><image xlink:href="img/c3.png" class="movil"></g>
<g class="padre" id="3"><image xlink:href="img/c4.png" class="movil"></g>
<g class="padre" id="4"><image xlink:href="img/c5.png" class="movil"></g>
<g class="padre" id="5"><image xlink:href="img/c6.png" class="movil"></g>
<g class="padre" id="6"><image xlink:href="img/c7.png" class="movil"></g>
<g class="padre" id="7"><image xlink:href="img/c8.png" class="movil"></g>
<g class="padre" id="8"><image xlink:href="img/c9.png" class="movil"></g>
<g class="padre" id="9"><image xlink:href="img/c10.png" class="movil"></g>
<g class="padre" id="10"><image xlink:href="img/c11.png" class="movil"></g>
<g class="padre" id="11"><image xlink:href="img/c12.png" class="movil"></g>
<g class="padre" id="12"><image xlink:href="img/c13.png" class="movil"></g>
<g class="padre" id="13"><image xlink:href="img/c14.png" class="movil"></g>
<g class="padre" id="14"><image xlink:href="img/c15.png" class="movil"></g>
<g class="padre" id="15"><image xlink:href="img/c16.png" class="movil"></g>
<g class="padre" id="16"><image xlink:href="img/c17.png" class="movil"></g>
<g class="padre" id="17"><image xlink:href="img/c18.png" class="movil"></g>
<g class="padre" id="18"><image xlink:href="img/c19.png" class="movil"></g>
<g class="padre" id="19"><image xlink:href="img/c20.png" class="movil"></g>
<g class="padre" id="20"><image xlink:href="img/c21.png" class="movil"></g>
<g class="padre" id="21"><image xlink:href="img/c22.png" class="movil"></g>
<g class="padre" id="22"><image xlink:href="img/c23.png" class="movil"></g>
<g class="padre" id="23"><image xlink:href="img/c24.png" class="movil"></g>
<g class="padre" id="24"><image xlink:href="img/c25.png" class="movil"></g>
</svg>
</div>

<div id="boton">
<a type="button" class="boton-personalizado" href="../index.html">Volver a Jugar</a></div>

<div id="botones">
<button class="boton-personalizado" id="btnModal">Registrar Tiempo</button> 
<div id="myModal" class="modalContainer">
<div class="modal-content">
<span class="close">&times;</span> <h2>Registro de Tiempo</h2>
<form method="POST" action="php/registrar_carina.php">
<label><strong>Nombre y Apellido</strong></label>
<br>
<input type="text" name="nombreapellido" class="form-control" required>
<br>
<label><strong>Correo Electrónico</strong></label>
<br>
<input type="email" name="email" class="form-control" required>
<input type="text" id="tiempototal" name="tiempototal" class="form-control" style="display: none">
<input type="text" id="fechajuego" name="fechajuego" class="form-control" style="display: none">
<br>
<button type="submit" class="boton-personalizado btn-derecha">Guardar</button> 
</form>
</div> 
</div>

<a class="boton-personalizado" href="../index.html">Volver a Jugar</a> 
</div>


<script type="text/javascript" src="js/main.js"></script>


</body>
