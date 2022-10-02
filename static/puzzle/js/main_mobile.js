/*Programacion de JavaScript*/

window.onload = function() {
	visor = document.getElementById("reloj");
	var cro = 0; //estado inicial del cronómetro.
}

document.getElementById("bloqueador").style.display = "none";
document.getElementById("botones").style.display = "none";

document.getElementById("bloqueador").style.display = "none";

var complet = "¡Felicitaciones! La figura está completa.";

var piezas = document.getElementsByClassName('movil');
var cajas = document.getElementsByClassName('padre');

for(var i=0;i<piezas.length;i++){
	piezas[i].setAttribute("width", tamWidh[i]);
	piezas[i].setAttribute("height",tamHeight[i]);
	piezas[i].setAttribute("x", Math.floor((Math.random() * 150) + 1));
	piezas[i].setAttribute("y", Math.floor((Math.random() * 309) + 1));
	piezas[i].setAttribute("ontouchstart","seleccionarElemento(evt)");
}

empezar_cronometro();
var elementSelect = 0;  
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function empezar_cronometro() {
	emp = new Date() //fecha inicial (en el momento de pulsar)
	elcrono=setInterval(tiempo,10); //función del temporizador.
}
		  
function tiempo() { 
   actual = new Date(); //fecha a cada instante
   año = actual.getFullYear();
   mes = actual.getMonth()+1;
   dia = actual.getDate();
   
   //tiempo del crono (cro) = fecha instante (actual) - fecha inicial (emp)
   cro = actual-emp; //milisegundos transcurridos.
   cr = new Date(); //pasamos el num. de milisegundos a objeto fecha.
   cr.setTime(cro);

   //obtener los distintos formatos de la fecha:
   cs = cr.getMilliseconds(); //milisegundos 
   cs = cs/10;		//pasar a centésimas de segundo.
   cs = Math.round(cs);	//redondear las centésimas
   sg = cr.getSeconds();	//segundos 
   mn = cr.getMinutes();	//minutos 
   ho = cr.getHours()-21;	//horas	 
   if (cs<10) {cs="0"+cs;} 
   if (sg<10) {sg="0"+sg;} 
   if (mn<10) {mn="0"+mn;} 
   //llevar resultado al visor.		 
   visor.innerHTML= ho+":"+mn+":"+sg+"."+cs; 
   }

function parar_cronometro() { 
  clearInterval(elcrono); //parar el crono
}



function seleccionarElemento(evt) {
 	elementSelect = reordenar(evt);
	evt.preventDefault();
	currentX =  evt.touches[0].clientX;        
	currentY =  evt.touches[0].clientY;
	currentPosx = parseFloat(elementSelect.getAttribute("x"));     
	currentPosy = parseFloat(elementSelect.getAttribute("y"));
	elementSelect.setAttribute("ontouchmove","moverElemento(evt)");	
}

function moverElemento(evt){
	var padre = evt.target.parentNode;
	var id = padre.getAttribute("id");
	var dx =  evt.touches[0].clientX - currentX;
	var dy =  evt.touches[0].clientY - currentY;
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	elementSelect.setAttribute("x",currentPosx);
	elementSelect.setAttribute("y",currentPosy);
	currentX =  evt.touches[0].clientX;        
	currentY =  evt.touches[0].clientY;
	elementSelect.setAttribute("ontouchcancel","deseleccionarElemento(evt)");
	elementSelect.setAttribute("ontouchend","deseleccionarElemento(evt)");
	elementSelect.setAttribute("ontouchleave","deseleccionarElemento(evt)");
	iman();
}

function deseleccionarElemento(evt){
	if(elementSelect != 0){			
		elementSelect.removeAttribute("ontouchmove");
		elementSelect.removeAttribute("ontouchcancel");
		elementSelect.removeAttribute("ontouchend");
		elementSelect.removeAttribute("ontouchleave");
		elementSelect = 0;
	}
	testing();
}

var entorno = document.getElementById('entorno');

function reordenar(evt){
	var padre = evt.target.parentNode;
	var clone = padre.cloneNode(true);
	var id = padre.getAttribute("id");
	entorno.removeChild(document.getElementById(id));
	entorno.appendChild(clone);
	return entorno.lastChild.firstChild;
}

function iman(){
	for(var i=0;i<piezas.length;i++){
		if (Math.abs(currentPosx-origX[i])<10 && Math.abs(currentPosy-origY[i])<10) {
			elementSelect.setAttribute("x",origX[i]);
			elementSelect.setAttribute("y",origY[i]);
		}
	}
}

function testing() {
	var bien_ubicada = 0;
	var padres = document.getElementsByClassName('padre');
	for(var i=0;i<piezas.length;i++){
		var posx = parseFloat(padres[i].firstChild.getAttribute("x"));    
		var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
		ide = padres[i].getAttribute("id");
		if(origX[ide] == posx && origY[ide] == posy){
			bien_ubicada = bien_ubicada + 1;
		}
	}
	if(bien_ubicada == piezas.length){
		parar_cronometro();
		document.getElementById("bloqueador").style.display = "block";
		document.getElementById("botones").style.display = "block";
		document.getElementById("boton").style.display = "none";
		document.getElementById("fechajuego").value = año+"/"+mes+"/"+dia;
		document.getElementById("tiempototal").value = ho+":"+mn+":"+sg+"."+cs;
	}
}

if(document.getElementById("btnModal")){
	var modal = document.getElementById("myModal");
	var btn = document.getElementById("btnModal");
	var span = document.getElementsByClassName("close")[0];
	var body = document.getElementsByTagName("body")[0];

	btn.onclick = function() {
		modal.style.display = "block";

		body.style.position = "static";
		body.style.height = "100%";
		body.style.overflow = "hidden";
	}

	span.onclick = function() {
		modal.style.display = "none";

		body.style.position = "inherit";
		body.style.height = "auto";
		body.style.overflow = "visible";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";

			body.style.position = "inherit";
			body.style.height = "auto";
			body.style.overflow = "visible";
		}
	}
}

