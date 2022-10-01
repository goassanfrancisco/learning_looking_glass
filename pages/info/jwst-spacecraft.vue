<template>
  <page-container>

    <h1>Telescopio Espacial James Webb (Spacecraft Bus)</h1>

    <p>El Spacecraft bus es el principal elemento de soporte del Telescopio Espacial James Webb (JWST). Alberga una multitud de componentes informáticos, de comunicación, de propulsión y estructurales. Los otros tres elementos del JWST son el elemento del telescopio óptico (OTE), el módulo de instrumentos científicos integrados (ISIM) y el parasol.</p>

    <div  style="display:flex; flex-flow:row wrap; justify-content:center;">
      <figure>
        <img src="/img/spacecraft1.png" width="570px" />
        <figcaption><small>Fig .1: Ubicación del Spacecraft bus en el telescopio. Obsérvese que siempre está expuesto por el Sol.</small></figcaption>
      </figure>
    </div>
    <br>

    <p>El Spacecraft bus debe soportar estructuralmente el telescopio espacial de 6,5 toneladas, con un peso de solo 350 kg. Está hecho principalmente de material compuesto de grafito. Se ensambló en el estado de California en 2015 y luego tuvo que integrarse con el resto del telescopio espacial antes de su lanzamiento.</p>

    <p>El Spacecraft bus está localizado en el lado "cálido" del telescopio que mira hacia el Sol y opera a una temperatura de aproximadamente 300 kelvins (80 °F, 27 °C). Otro aspecto importante del bus de la nave espacial es el equipo central de computación, almacenamiento de memoria y comunicaciones. El procesador y el software dirigen los datos hacia y desde los instrumentos, al núcleo de memoria de estado sólido y al sistema de radio que puede enviar datos a la Tierra y recibir comandos. La computadora también controla el apuntamiento y el movimiento de la nave espacial, tomando datos de los sensores de los giroscopios y el rastreador de estrellas, y enviando los comandos necesarios a las ruedas de reacción o propulsores.</p>

    <div  style="display:flex; flex-flow:row wrap; justify-content:center;">
      <figure>
        <img src="/img/spacecraft2.png" width="570px" />
        <figcaption><small>Fig .2: El Spacecraft Bus dentro del armazón circular de color bronce</small></figcaption>
      </figure>
    </div>
    <br>

    <p>Es una caja de fibra de carbono que alberga una gran cantidad de sistemas importantes que mantienen el telescopio en funcionamiento, como los paneles solares y las computadoras. También contiene el enfriador MIRI y algunos componentes electrónicos ISIM.</p>

    <p>Hay seis subsistemas principales que se encuentran dentro de él:</p>

    <ul>
      <li>Subsistema de Energía Eléctrica</li>
      <li>Subsistema de control de altitud</li>
      <li>Subsistema de comunicación</li>
      <li>Subsistema de manejo de datos (C&DH)</li>
      <li>Subsistema de propulsión</li>
      <li>Subsistema de Control Térmico</li>
    </ul>

    <p>Además, tiene dos rastreadores de estrellas, seis ruedas de reacción y los sistemas de propulsión (tanque de combustible y propulsores). Las dos tareas principales son apuntar el telescopio y realizar el mantenimiento de la estación para su órbita estable en el punto de Lagrange L2.</p>

    <div id="boton">
      <button class="boton-personalizado" onclick="window.history.back();">Volver</button></div>
  </page-container>
</template>

<script>
import PageContainer from "~/components/PageContainer";

export default {
  name: 'JwstSpacecraft',
  components: [
    PageContainer
  ]
}
</script>
