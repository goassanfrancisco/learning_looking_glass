<template>
  <page-container>
    <heading tag="h1">Telescopio Espacial James Webb (ISIM: Módulo de instrumentos científicos integrados -Integrated Science Instrument Module-)</heading>

    <paragraph>El módulo de instrumentos científicos integrados (ISIM) es un componente del telescopio espacial James Webb (JWST). ISIM es el corazón del JWST y alberga la principal carga útil científica, que incluye cuatro instrumentos científicos y el sensor de guía fina.</paragraph>

    <paragraph>Comprende el chasis de la nave espacial y los instrumentos que toman la luz del espejo principal y la convierten en datos científicos que luego se envían a la Tierra. ISIM tiene una masa de 1400 kg, aproximadamente el 23% de la masa del JWST.</paragraph>

    <article-item image="/img/isim1.png" caption="Fig .1: Ubicación del ISIM en el Telescopio Espacial James Webb">
      <paragraph>ISIM contiene estos instrumentos:</paragraph>
      <ul>
        <li>Cámara de infrarrojo cercano</li>
        <li>Espectrógrafo de infrarrojo cercano</li>
        <li>Instrumento de infrarrojo medio, llamado MIRI</li>
        <li>Sensor de orientación fina/generador de imágenes de infrarrojo cercano y espectrógrafo sin rendija, llamado FGS/NIRISS</li>
        <li>Estructura de medición óptica</li>
        <li>Sistema de Mando y Manejo de Datos</li>
        <li>Unidad de Servicios Remotos ISIM (IRSU)</li>
        <li>Sistema de arnés eléctrico</li>
        <li>Sistema de control térmico</li>
        <li>Sistema de software de vuelo</li>
      </ul>
      <paragraph>La lista anterior no es exhaustiva.</paragraph>
    </article-item>

    <article-item image="/img/isim2.png" caption='Fig .2: Imagen del telescopio espacial James Webb con una de sus dos "alas" plegadas' direction="reversed">
      <paragraph>El instrumento de cámara infrarroja integrado pasó sus pruebas térmicas a principios de 2016. Fue sometido a intensas pruebas de frío térmico desde finales de 2015 hasta principios de 2016. Este dispositivo es extremadamente importante para JWST, porque no sólo es una cámara infrarroja sensible, sino que también se usa para ajustar la alineación de los segmentos del espejo principal. Las pruebas fueron muy positivas porque demostró que era muy estable a través de pruebas térmicas y de vibración.</paragraph>
    </article-item>

    <article-item image="/img/isim3.png" caption="Fig .3: Instalación del ISIM en el Telescopio Webb">
      <paragraph>El Compartimiento de Electrónica (IEC: Electronics Compartment) es una sección de ISIM que alberga recursos informáticos y eléctricos para los instrumentos. La electrónica principal de cada uno de los instrumentos está alojada en esta caja envuelta térmicamente. Está montado en la estructura criogénica del telescopio principal, y el recinto debe mantener una temperatura mucho más cálida para los componentes electrónicos del interior, pero no debe permitir que el calor afecte negativamente al telescopio principal. La caja puede disipar unos 200 vatios de energía eléctrica. Una de las consideraciones es dirigir la mayor parte del calor (radiactivamente) en un ángulo de aproximadamente 20 grados entre la parte posterior de la estructura del espejo principal y los instrumentos y el parasol. No demasiado cerca de la parte posterior del telescopio ni demasiado cerca del parasol, que mediante el uso de deflectores y aislamiento, dirija el calor hacia el espacio.</paragraph>

      <paragraph>Hay un lado que está hecho de aluminio y los otros lados son compuestos. Está envuelto en varias capas de aislamiento. Algunas de las características para la gestión térmica incluyen un radiador y deflectores.</paragraph>
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
  name: 'JwstIsim',
  components: {
    PageContainer,
    Heading,
    Paragraph,
    ArticleItem
  }
}
</script>
