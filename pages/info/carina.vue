<template>
  <page-container>
    <heading tag="h1">Nebulosa de Eta Carinae</heading>

    <paragraph>La nebulosa de la Quilla, también llamada nebulosa de Carina, nebulosa de Eta Carinae o NGC 3372, es una gran nebulosa de emisión que rodea varios cúmulos abiertos de estrellas. Entre estas estrellas se encuentran Eta Carinae y HD 93129A, dos de las estrellas más masivas y más luminosas en la Vía Láctea. La nebulosa se encuentra a una distancia estimada de 6.500 a 10.000 aL (años luz) de la Tierra y tiene un radio de 230 aL Se encuentra localizada en la constelación de la Quilla (Carina). </paragraph>

    <paragraph>La nebulosa de la Quilla es una de las más extensas en el cielo. Aunque es aproximadamente cuatro veces más grande y más brillante que la famosa nebulosa de Orión, NGC 3372 es mucho menos conocida debido a su localización en el hemisferio sur. Fue descubierta en 1751 por Nicolas Louis de Lacaille desde el cabo de Buena Esperanza.</paragraph>

    <paragraph>Dentro de esta gran nebulosa se encuentra otra nebulosa, rodeando a la propia Eta Carinae. Este objeto es conocido como nebulosa del Homúnculo, la cual se cree que fue expulsada en 1841 en una gran explosión que hizo que Eta Carinae se convirtiera brevemente en la segunda estrella más brillante del firmamento.</paragraph>

    <div  style="display:flex; flex-flow:row wrap; justify-content:center;">
      <figure>
        <img src="/img/anillo_sur1.png" width="570px" />
        <figcaption><small>Fig .1: Imagen de la Nebulosa del Homúnculo de Eta Carinae obtenida por el Telescopio Espacial Hubble</small></figcaption>
      </figure>
    </div>
    <br />

    <paragraph>Eta Carinae es una estrella hipergigante altamente luminosa. Se calcula una masa entre 100 y 150 veces la masa del Sol y su luminosidad es cerca de cuatro millones de veces la de este.</paragraph>

    <paragraph>Este objeto es actualmente la estrella más masiva que se puede estudiar en gran detalle. Es posible que otras estrellas conocidas tengan masas mayores, así como mayores luminosidades. Sin embargo, los datos disponibles acerca de estas últimas son mucho menos confiables. Hasta el 2006, Eta Carinae era la estrella más luminosa confirmada, basada en datos tomados en un amplio rango de longitudes de onda. Las estrellas con una masa de 80 veces la masa solar producen más de un millón de veces la luz que produce el Sol. Estas estrellas son bastante raras —existen solamente unas pocas docenas en una galaxia del tamaño de la nuestra— y pueden tener finales desastrosos al acercarse al límite de Eddington, en el cual la presión generada hacia fuera debida a su radiación puede ser tan grande como para compensar la fuerza de gravedad. Las estrellas con más de 120 masas solares exceden el límite de Eddington teórico y su gravedad es apenas suficiente para mantener su radiación y su gas, lo cual resulta en una supernova o una hipernova.</paragraph>

    <paragraph>Los datos de la cámara de infrarrojo cercano de Webb (NIRCam) se utilizaron para hacer esta imagen extremadamente detallada. Está repleto de información científica, y la investigación comenzará después de su publicación.</paragraph>

    <paragraph>Esta no es solo una imagen nítida de una nebulosa planetaria, sino que también nos muestra objetos en la vasta extensión de espacio detrás de ella. Las secciones rojas transparentes de la nebulosa planetaria, y todas las áreas fuera de ella, están llenas de galaxias distantes.</paragraph>

    <paragraph>Una porción de la nebulosa de Carina es conocida como la nebulosa Keyhole (del inglés «cerradura»). Esta nebulosa es mucho más pequeña y oscura, compuesta por moléculas frías y polvo que contiene filamentos brillantes de gas fluorescente caliente que se contrasta contra la nebulosa más brillante del fondo. El diámetro de la nebulosa Keyhole es de aproximadamente 7 años luz.</paragraph>

    <div  style="display:flex; flex-flow:row wrap; justify-content:center;">
      <figure>
        <img src="/img/carina2.png" width="570px" />
        <figcaption><small>Fig .2: Imagen de la Nebulosa de Eta Cariane obtenida a través del telescopio espacial James Webb</small></figcaption>
      </figure>
    </div>
    <br />

    <paragraph>Lo que se parece mucho a montañas escarpadas en una noche iluminada por la luna es en realidad el borde de una joven región de formación estelar NGC 3324 en la Nebulosa Eta Carina NGC 3372. Capturada en luz infrarroja por la cámara de infrarrojo cercano (NIRCam) en el telescopio espacial James Webb, esta imagen revela áreas previamente oscurecidas del nacimiento de estrellas.</paragraph>

    <paragraph>Llamada Cosmic Cliffs, la región es en realidad el borde de una gigantesca cavidad gaseosa dentro de NGC 3324, aproximadamente a 7600 años luz de distancia. El área cavernosa ha sido excavada en la nebulosa por la intensa radiación ultravioleta y los vientos estelares de estrellas jóvenes, calientes y extremadamente masivas ubicadas en el centro de la burbuja, sobre el área que se muestra en esta imagen. La radiación de alta energía de estas estrellas está esculpiendo la pared de la nebulosa al erosionarla lentamente.</paragraph>

    <paragraph>NIRCam, con su resolución nítida y sensibilidad sin igual, revela cientos de estrellas previamente ocultas e incluso numerosas galaxias de fondo.</paragraph>

    <div id="boton">
      <button class="boton-personalizado" onclick="window.history.back();">Volver</button></div>
  </page-container>
</template>

<script>
import PageContainer from "~/components/PageContainer";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

export default {
  name: 'AnilloSurPage',
  components: {
    PageContainer,
    Heading,
    Paragraph
  }
}
</script>
