navegador = navigator.userAgent; 
moviles=["Mobile","iPhone","iPod","BlackBerry","Opera Mini","Sony","MOT","Nokia","samsung"];
detector=0; 

for (i in moviles) { 
	compruebo=navegador.indexOf(moviles[i]); 
   	if (compruebo>-1) { 
      		detector=1; //Si es un móvil, cambio el valor del detector
      	}
}

var tamWidh = [67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67];
var tamHeight = [67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67];

var origX = [58,125,192,259,326,58,125,192,259,326,58,125,192,259,326,58,125,192,259,326,58,125,192,259,326];  
var origY = [58,58,58,58,58,125,125,125,125,125,192,192,192,192,192,259,259,259,259,259,326,326,326,326,326];

if (detector==1) { //si es un móvil redirecciono la página.
   	document.write('<script src="../js/main_mobile.js"></script>'); //Se redirecciona hacia la versión móvil.
   }
else {
	document.write('<script src="../js/main_web.js"></script>'); // Sino usa la versión web.
}