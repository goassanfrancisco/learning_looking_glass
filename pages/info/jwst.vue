<template>
  <page-container>
    <h1 class="text-2xl text-red-500 text-center font-bolder">Conociendo el Telescopio Espacial James Webb</h1>
    <h2 class="text-xl text-blue-500 font-bold"> Información </h2>

    <p> El 25 de diciembre de 2021 se lanzó el Telescopio Espacial James Webb (JWST), el telescopio de ciencia espacial más grande, poderoso y complejo jamás construido. Su desarrollo estuvo a cargo de 14 países, cooperando conjuntamente la Agencia Espacial Europea, la Agencia Espacial Canadiense y la NASA.</p>

    <p>  Encuentra los objetos en la imagen para conocer más acerca del JWST y algunos de los objetos que ya fueron captados por el mismo. Para acceder a la información se debe hacer click en cada uno de ellos.</p>

    <div  style="display:flex; flex-flow:row wrap; justify-content:center;">
      <div id="contenido" class="contenido" style="position: relative;">
        <img src="/img/fondo.png" width = "600px" height = "600px">

        <a class="btn-info" href="#" data-toggle="popover" style="position: absolute; top:2.55em; right:18.1em;" title="Neptuno" data-content="Neptuno es el último planeta del sistema solar.<br><a href='neptuno.html'><small>Ver más</small></a>"><img src="img/boton.png" height ="20px" width="20px"></a>

        <a class="btn-info" href="#" data-toggle="popover" style="position: absolute; top:3.65em; right:2.1em;" title="Júpiter" data-content="Júpiter es el quinto planeta del sistema solar, el primero de los planetas gaseosos y es el planeta más grande del sistema solar.<br><a href='jupiter.html'><small>Ver más</small></a>"><img src="img/boton.png" height ="20px" width="20px"></a>

        <a class="btn-info" href="#" data-toggle="popover" style="position: absolute; top:16em; right:15.9em;" title="Nebulosa Anillo del Sur"  data-content="Nebulosa planetaria NGC 3132 es una nebulosa planetaria en la constelación de Vela de magnitud aparente 9,87.<br><a href='anillo_sur.html'><small>Ver más</small></a>"><img src="img/boton.png" height ="20px" width="20px"></a>

        <a class="btn-info" href="#" data-toggle="popover" style="position: absolute; top:23.4em; right:16.8em;" title="Nebulosa de Eta Carinae" data-content="La nebulosa de Eta Carinae es una gran nebulosa de emisión que rodea varios cúmulos abiertos de estrellas.<br><a href='carina.html'><small>Ver más</small></a>"><img src="img/boton.png" height ="20px" width="20px"></a>

        <a class="btn-info" href="#" data-toggle="popover" style="position: absolute; top:27em; right:24.2em;" title="SMACS 0723" data-content="El cúmulo de galaxias SMACS 0723 es un aglomerado de galaxias con una distancia aproximada de 5.120 millones de años luz, dentro de la constelación austral de Pez Volador.<br><a href='smacs.html'><small>Ver más</small></a>"><img src="img/boton.png" height ="20px" width="20px"></a>

        <a class="btn-info" href="#" data-toggle="popover" style="position: absolute; top:27.6em; right:27.5em;" title="Nebulosa de la Tarántula" data-content="La nebulosa de la Tarántula se encuentra en la Gran Nube de Magallanes.<br><a href='tarantula.html'><small>Ver más</small></a>"><img src="img/boton.png" height ="20px" width="20px"></a>

        <a class="btn-info" href="#" data-toggle="popover" style="position: absolute; top:21.5em; right:34em;" title="Telescopio Espacial Hubble" data-content="Poner texto aquí <br><a href=''><small>Ver más</small></a>"><img src="img/boton.png" height ="20px" width="20px"></a>

        <a class="btn-info" href="#" data-toggle="popover" style="position: absolute; top:28.5em; right:37em;" title="Telescopio Espacial Spitzer" data-content="Poner texto aquí <br><a href=''><small>Ver más</small></a>"><img src="img/boton.png" height ="20px" width="20px"></a>

        <a class="btn-info" href="#" data-toggle="popover" style="position: absolute; top:39em; right:36em;" title="Estación Espacial Internacional" data-content="Poner texto aquí <br><a href=''><small>Ver más</small></a>"><img src="img/boton.png" height ="20px" width="20px"></a>

        <a class="btn-info" href="#" data-toggle="popover" style="position: absolute; top:32.7em; right:8em;" title="Telescopio Espacial James Webb (Espejos)" data-content="Poner texto aquí <br><a href=''><small>Ver más</small></a>"><img src="img/boton.png" height ="20px" width="20px"></a>

        <a class="btn-info" href="#" data-toggle="popover" style="position: absolute; top:36em; right:13em;" title="Telescopio Espacial James Webb" data-content="Poner texto aquí <br><a href=''><small>Ver más</small></a>"><img src="img/boton.png" height ="20px" width="20px"></a>

        <a class="btn-info" href="#" data-toggle="popover" style="position: absolute; top:37.5em; right:8em;" title="Telescopio Espacial James Webb (Spacecraft bus)" data-content="El Spacecraft bus es el principal elemento de soporte del Telescopio Espacial James Webb (JWST).<br><a href='spacecraft.html'><small>Ver más</small></a>"><img src="img/boton.png" height ="20px" width="20px"></a>

        <a class="btn-info" href="#" data-toggle="popover" style="position: absolute; top:35em; right:7em;" title="Telescopio Espacial James Webb (ISIM)" data-content="El módulo de instrumentos científicos integrados (ISIM) es el corazón del JWST y alberga la principal carga útil científica.<br><a href='isim.html'><small>Ver más</small></a>"><img src="img/boton.png" height ="20px" width="20px"></a>
      </div>
    </div>
    <br />
    <div class="flex justify-center">
      <a class="px-8 py-4 bg-blue-500 text-white rounded-xl" type="button" href="../juegos.html">Volver</a>
    </div>
  </page-container>
</template>

<script>
import PageContainer from "~/components/PageContainer";

export default {
  name: 'JWSTPage',
  components: [
    PageContainer
  ]
}
</script>
