<!DOCTYPE html>
<html lang="en">
<head>
  
<meta charset="UTF-8">
  
<title>Trivia Telescopio J. Webb</title>
  
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.3.0/dist/sweetalert2.all.min.js"></script>
<link rel="stylesheet" href="css/main.css">

</head>

<body>
<?php
$host ="localhost";
$uname = "concienciafrsfco_conciencia";
$pwd = "concienciabases";
$db_name = "concienciafrsfco_telescopio_webb";

$conexion_db = new mysqli($host,$uname,$pwd,$db_name);

$consulta = "SELECT user,score FROM ranking_trivia ORDER BY score DESC LIMIT 0, 10";
$datos = $conexion_db->query($consulta);
?>

<h1>Trivia</h1>
<h2>Información</h2>

<div class="contenido" style="position: relative;">
	<div id="sectorderecho" width="20%">
	
	<div id="ranking">
	<h2>Ranking</h2>

	<table width="100%" class="table_style">
	<thead>
	<th><strong>Pos.</strong></th>
	<th><strong>Nombre y Apellido</strong></th>
	<th><strong>Puntaje</strong></th>
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
	<td><?php echo $row["score"]; ?></td>
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
<div id="entorno"  width="70%">
<div class="contenedor">
<div class="puntaje" id="puntaje"></div>
<div class="encabezado">
    
<div class="categoria" id="categoria"></div>
<div class="numero" id="numero"></div>
<div class="pregunta" id="pregunta"></div>
<img src="#" class="imagen" id="imagen">
</div>

<div class="btn" id="btn1" onclick="oprimir_btn(0)"></div>
<div class="btn" id="btn2" onclick="oprimir_btn(1)"></div>
<div class="btn" id="btn3" onclick="oprimir_btn(2)"></div>
<div class="btn" id="btn4" onclick="oprimir_btn(3)"></div>
</div>
</div>
</div>

<br>
<br>
<div id="boton">
<a type="button" class="boton-personalizado" href="../juegos.html">Volver a Jugar</a></div>

<div id="botones">
<button class="boton-personalizado" id="btnModal">Registrar Puntuación</button> 
<div id="myModal" class="modalContainer">
<div class="modal-content">
<span class="close">&times;</span> <h2>Registro de Puntuación</h2>
<form method="POST" action="php/registrar_trivia.php">
<label><strong>Nombre y Apellido</strong></label>
<br>
<input type="text" name="nombreapellido" class="form-control" required>
<br>
<label><strong>Correo Electrónico</strong></label>
<br>
<input type="email" name="email" class="form-control" required>
<input type="text" id="puntajetotal" name="puntajetotal" class="form-control" style="display: none">
<input type="text" id="fechajuego" name="fechajuego" class="form-control" style="display: none">
<br>
<button type="submit" class="boton-personalizado btn-derecha">Guardar</button> 
</form>
</div> 
</div>

<a class="boton-personalizado" href="../juegos.html">Volver a Jugar</a> 
</div>

<script  src="js/index.js"></script>
</body>
</html>