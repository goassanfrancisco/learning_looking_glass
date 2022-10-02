<template>
  <page-container>
    <heading tag="h1">Telescopio Espacial Spitzer</heading>

    <paragraph>El telescopio espacial Spitzer (SST por sus siglas en inglés) (conocido inicialmente como Instalación de Telescopio Infrarrojo Espacial o SIRTF de sus siglas en inglés), fue un observatorio espacial infrarrojo de la NASA.</paragraph>

    <paragraph>Fue diseñado para estudiar "lo frío, lo viejo y lo polvoriento", que son las características para cuya observación resulta idónea el infrarrojo, dado que se trata de ondas fuera del espectro visible.</paragraph>

    <heading tag="h2">Historia</heading>

    <paragraph>Fue lanzado el 25 de agosto de 2003 desde el Centro Espacial Kennedy. Mantuvo una órbita heliocéntrica similar a la de la Tierra, pero que lo aleja de nuestro planeta a razón de unos 15 millones de kilómetros por año. El costo total de la misión se ha estimado en 670 millones de dólares. Entre los retos tecnológicos de esta misión se encontraba la realización del espejo principal de berilio.</paragraph>

    <heading tag="h2">Tecnología del Telescopio</heading>

    <article-item image="/img/spitzer1.png" caption="Fig .1: Imagen del Telescopio Espacial Spitzer">
      <heading tag="h3">Tamaño, Instrumentos y Vida Útil</heading>

      <paragraph>Spitzer va equipado con un telescopio reflector de 85 cm de diámetro. La estructura del Spitzer es octogonal en su base, donde están sus instrumentos, la electrónica y la aviónica. Todo esto se abastecía por la energía eléctrica generada a partir de los paneles solares, aunque su vida útil se veía limitada por la tasa de evaporación del helio líquido usado para su refrigeración (como otros telescopios espaciales de infrarrojos), agotándose el 15 de mayo de 2009.</paragraph>

      <paragraph>El observatorio Spitzer consiste en un telescopio de 0.85 metros con tres instrumentos científicos enfriados criogénicamente, capaces de tomar imágenes y espectros de 3 a 180 micras: IRAC (La Cámara de Arreglo Infrarrojo), IRS (El Espectrógrafo Infrarrojo) y MIPS (El Fotómetro de Imágenes en Multibanda).</paragraph>

      <paragraph> La vida útil del telescopio Spitzer viene limitada, como en otros telescopios infrarrojos espaciales, por la tasa de evaporación del helio líquido que se utiliza como refrigerante. Inicialmente se esperaba que el helio durase un mínimo de 2,5 años y un máximo de 5. El helio líquido se agotó el 15 de mayo de 2009, lo que supone una duración de más de 5,5 años.</paragraph>
    </article-item>


    <div class="flex flex-col gap-4">
      <heading tag="h2">Descubrimientos y Jubilación</heading>

      <paragraph> Spitzer ha contribuido con descubrimientos sobre cometas, galaxias, estrellas (vivas y muriendo), elementos de planetas, núcleos activos y agujeros negros supe masivos y estrellas enanas, además de los exoplanetas. </paragraph>

      <paragraph>Brindó información de galaxias comúnmente llamadas "big babies". Hasta entonces, los científicos creían que las galaxias grandes y modernas se formaron a través de la fusión gradual de galaxias más pequeñas. Pero las galaxias 'big baby' demostraron que las colecciones masivas de estrellas se juntaron muy temprano en la historia del universo.</paragraph>

      <paragraph>El telescopio capturó una colisión rocosa en sistemas solares distintos. La agencia asegura que este tipo de fenómenos en el espacio son muy comunes, puesto que el Sistema Solar en el que habita el planeta Tierra tuvo su propia colisión y fue esencial para la creación de los planetas.</paragraph>

      <paragraph>Fue el primer telescopio en capturar imágenes de la atmosfera de un exoplaneta.</paragraph>

      <paragraph>Los agujeros negros supermasivos acechan en los núcleos de la mayoría de las galaxias. El telescopio Spitzer capturó dos de los agujeros más distantes jamás descubiertos; expertos suponen que se formaron en mil millones de años después del nacimiento del universo.</paragraph>

      <paragraph>Tras más de 16 años estudiando el universo con luz infrarroja, revelando nuevas maravillas en nuestro sistema solar, nuestra galaxia e incluso más allá, la misión del Telescopio Espacial Spitzer de la NASA ha llegado a su fin el jueves 30 de enero de 2020 cesando todas las operaciones científicas “Este Gran Observatorio también planteó importantes y nuevas interrogantes, identificó objetos tentadores para estudios ulteriores, trazando el camino de las futuras investigaciones a seguir. Su inmenso impacto en la ciencia sin duda se extenderá más allá del fin de su misión”. afirmó Thomas Zurbuchen, Administrador Asociado de la Dirección de Misión Científica de la NASA en Washington.</paragraph>

    </div>

    <article-item image="/img/spitzer2.png" caption="Fig .2: Imagen la Gran Nube de Magallanes tomada por ambos telescopios espaciales" direction="reversed">
      <heading tag="h2">Principales diferencias entre los telescopios Spitzer y James Webb</heading>

      <paragraph>La NASA ha compartido una nueva imagen que ha sido capturada por el Telescopio Espacial James Webb y, al lado del mismo grupo de estrellas capturadas por el Telescopio Espacial Spitzer, está claro cuánto mejor es la cámara MIRI de Webb.</paragraph>

      <paragraph>MIRI, el instrumento de infrarrojo medio, es la cámara más fría de Webb. Esta imagen de prueba muestra parte de la Gran Nube de Magallanes, una pequeña galaxia satélite de la Vía Láctea que proporciona un denso campo de estrellas con el que probar el rendimiento de Webb.</paragraph>

      <paragraph>Webb tiene un espejo primario significativamente más grande y detectores mejorados que le permiten capturar imágenes con una claridad significativamente mejor que la que pudo Spitzer. En esta imagen de comparación, la imagen MIRI de Webb (a 7,7 micrones) muestra el gas interestelar con un detalle notable, mucho más que el disponible con Spitzer (a 8,0 micrones).</paragraph>

      <paragraph>Se puede ver la emisión de 'hidrocarburos aromáticos policíclicos' o moléculas de carbono e hidrógeno que juegan un papel importante en el equilibrio térmico y la química del gas interestelar. Webb ayudara a los astrónomos a comprender mejor el nacimiento de las estrellas y los sistemas protoplanetarios.</paragraph>

    </article-item>

    <div id="boton">
      <button class="boton-personalizado" onclick="window.history.back();">Volver</button></div>
  </page-container>
</template>

<script>
import PageContainer from "~/components/PageContainer";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import ArticleItem from "@/components/ArticleItem";

export default {
  name: 'AnilloSurPage',
  components: {
    PageContainer,
    Heading,
    Paragraph,
    ArticleItem
  }
}
</script>
