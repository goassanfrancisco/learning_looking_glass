let preguntas_aleatorias = true;
let mostrar_pantalla_juego_terminado = true;
let reiniciar_puntos_al_reiniciar_el_juego = true;
let numero_preguntas = 10;

document.getElementById("bloqueador").style.display = "none";
document.getElementById("botones").style.display = "none";
empezar_cronometro();

window.onload = function () {
  base_preguntas = readText("base-preguntas.json");
  select_id("puntaje").innerHTML = "hola";
  interprete_bp = JSON.parse(base_preguntas);
  escogerPreguntaAleatoria();
};

function empezar_cronometro() {
      emp = new Date() //fecha inicial (en el momento de pulsar)
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
		
let pregunta;
let posibles_respuestas;
btn_correspondiente = [
  select_id("btn1"),
  select_id("btn2"),
  select_id("btn3"),
  select_id("btn4")
];
let npreguntas = [];

let preguntas_hechas = 0;
let preguntas_correctas = 0;

function escogerPreguntaAleatoria() {
  let n;
  if (preguntas_aleatorias) {
    n = Math.floor(Math.random() * interprete_bp.length);
  } else {
    n = 0;
  }

  while (npreguntas.includes(n)) {
    n++;
    if (n >= interprete_bp.length) {
      n = 0;
    }
    if (npreguntas.length == interprete_bp.length) {
      //Aquí es donde el juego se reinicia
      if (mostrar_pantalla_juego_terminado) {
        swal.fire({
          title: "Juego finalizado",
          text:
            "Puntuación: " + 100*preguntas_correctas + "/" + 100*(preguntas_hechas - 1),
          icon: "success"
        });
      }
      if (reiniciar_puntos_al_reiniciar_el_juego) {
        preguntas_correctas = 0
        preguntas_hechas = 0
      }
      npreguntas = [];
    }
  }
    let pc = preguntas_correctas;
    if (preguntas_hechas > 1) {
        select_id("puntaje").innerHTML = pc + "/" + preguntas_hechas;
    } else {
        select_id("puntaje").innerHTML = "";
    }

    if (npreguntas.length == numero_preguntas) {
      //Aquí es donde el juego se reinicia
      if (mostrar_pantalla_juego_terminado) {
        document.getElementById("bloqueador").style.display = "block";
		document.getElementById("botones").style.display = "block";
		document.getElementById("boton").style.display = "none";
		actual = new Date(); //fecha a cada instante
        año = actual.getFullYear();
        mes = actual.getMonth()+1;
        dia = actual.getDate();
        cro = actual-emp; //milisegundos transcurridos.
        cr = new Date(); //pasamos el num. de milisegundos a objeto fecha.
        cr.setTime(cro);
        cs = cr.getMilliseconds();      //milisegundos
        cs = cs/1000;		            //pasar a segundo.
        sg = cr.getSeconds();	        //segundos 
        mn = cr.getMinutes()*60;	    //minutos a segundo
        ho = (cr.getHours()-21)*3600;	//horas	a segundo
        tempo = cs+sg+mn+ho;
        document.getElementById("fechajuego").value = año+"/"+mes+"/"+dia;
		document.getElementById("puntajetotal").value = preguntas_correctas*100 + preguntas_correctas*1000/tempo;
		return;
      }
      if (reiniciar_puntos_al_reiniciar_el_juego) {
        preguntas_correctas = 0
        preguntas_hechas = 0
      }
      npreguntas = [];
    }
  npreguntas.push(n);
  preguntas_hechas++;

  escogerPregunta(n);
}

function escogerPregunta(n) {
  pregunta = interprete_bp[n];
  //select_id("categoria").innerHTML = pregunta.categoria;
  select_id("pregunta").innerHTML = pregunta.pregunta;
  //select_id("numero").innerHTML = n;

  style("imagen").objectFit = pregunta.objectFit;
  desordenarRespuestas(pregunta);
  if (pregunta.imagen) {
    select_id("imagen").setAttribute("src", pregunta.imagen);
    style("imagen").height = "200px";
    style("imagen").width = "100%";
  } else {
    style("imagen").height = "0px";
    style("imagen").width = "0px";
    setTimeout(() => {
      select_id("imagen").setAttribute("src", "");
    }, 500);
  }
}

function desordenarRespuestas(pregunta) {
  posibles_respuestas = [
    pregunta.respuesta,
    pregunta.incorrecta1,
    pregunta.incorrecta2,
    pregunta.incorrecta3,
  ];
  posibles_respuestas.sort(() => Math.random() - 0.5);

  select_id("btn1").innerHTML = posibles_respuestas[0];
  select_id("btn2").innerHTML = posibles_respuestas[1];
  select_id("btn3").innerHTML = posibles_respuestas[2];
  select_id("btn4").innerHTML = posibles_respuestas[3];
}

let suspender_botones = false;

function oprimir_btn(i) {
  if (suspender_botones) {
    return;
  }
  suspender_botones = true;
  if (posibles_respuestas[i] == pregunta.respuesta) {
    preguntas_correctas++;
    btn_correspondiente[i].style.background = "lightgreen";
  } else {
    btn_correspondiente[i].style.background = "pink";
  }
  for (let j = 0; j < 4; j++) {
    if (posibles_respuestas[j] == pregunta.respuesta) {
      //btn_correspondiente[j].style.background = "lightgreen";
      break;
    }
  }
  setTimeout(() => {
    reiniciar();
    suspender_botones = false;
  }, 3000);
}

// let p = prompt("numero")

function reiniciar() {
  for (const btn of btn_correspondiente) {
    btn.style.background = "lightblue";
  }
  escogerPreguntaAleatoria();
}

function select_id(id) {
  return document.getElementById(id);
}

function style(id) {
  return select_id(id).style;
}

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  if (!xmlhttp){
	alert("No ha sido posible crear una instancia de XMLHttpRequest");
  }
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}
