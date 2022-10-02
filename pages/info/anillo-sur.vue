<template>
  <page-container>
    <heading tag="h1">Nebulosa Anillo del Sur NGC 3132 (Vela)</heading>
    <article-item image="img/anillo_sur1.png" caption="Fig .1: Imagen de la Nebulosa Anillo del Sur obtenida a través de NIRCam del telescopio espacial James Webb">
      <paragraph>Nebulosa planetaria NGC 3132 es una nebulosa planetaria en la constelación de Vela de magnitud aparente 9,87. Es conocida también con el nombre de Nebulosa del Anillo del Sur o Nebulosa de los Ocho Estallidos. Tiene un diámetro de cerca de medio año luz, y a una distancia de 2000 años luz de la Tierra es también una de las nebulosas planetarias más próximas. Los gases que se expanden desde el centro lo hacen a una velocidad de 15 km/s.</paragraph>

      <paragraph>La estrella brillante en el centro de NGC 3132, aunque destaca cuando se ve con el telescopio James Webb en luz infrarroja cercana, desempeña un papel secundario en el esculpido de la nebulosa circundante. Una segunda estrella, apenas visible en la parte inferior izquierda a lo largo de uno de los picos de difracción de la estrella brillante, es la fuente de la nebulosa. Ha expulsado al menos ocho capas de gas y polvo durante miles de años.</paragraph>

      <paragraph>Pero la brillante estrella central visible aquí ha ayudado a "revolver la olla", cambiando la forma de los intrincados anillos de esta nebulosa planetaria, al crear turbulencia. El par de estrellas están bloqueadas en una órbita estrecha, lo que lleva a la estrella más tenue a rociar el material expulsado en una variedad de direcciones mientras orbitan entre sí, lo que da como resultado estos anillos irregulares.</paragraph>

      <paragraph>Cientos de líneas rectas y brillantemente iluminadas atraviesan los anillos de gas y polvo. Estos "rayos" emanan de la estrella brillante y fluyen a través de los agujeros en la nebulosa como la luz del sol a través de los huecos en una nube.</paragraph>

      <paragraph>Pero no toda la luz de las estrellas puede escapar. La densidad de la región central, resaltada en verde azulado, se refleja en cuán transparente u opaca es. Las áreas que son de un verde azulado más profundo indican que el gas y el polvo son más densos, y que la luz no puede liberarse.</paragraph>

      <paragraph>Los datos de la cámara de infrarrojo cercano de Webb (NIRCam) se utilizaron para hacer esta imagen extremadamente detallada. Está repleto de información científica, y la investigación comenzará después de su publicación.</paragraph>

      <paragraph>Esta no es solo una imagen nítida de una nebulosa planetaria, sino que también nos muestra objetos en la vasta extensión de espacio detrás de ella. Las secciones rojas transparentes de la nebulosa planetaria, y todas las áreas fuera de ella, están llenas de galaxias distantes.</paragraph>

      <paragraph>Busque la línea brillante en ángulo en la parte superior izquierda. No es la luz de las estrellas, es una galaxia lejana vista de canto. Espirales distantes, de muchas formas y colores, también salpican la escena.</paragraph>
    </article-item>

    <article-item image="img/anillo_sur2.png" caption="Fig .2: Imagen de la Nebulosa Anillo del Sur obtenida a través de MIRI del telescopio espacial James Webb" direction="reversed">
      <paragraph>El Telescopio James Webb de NASA/ESA/CSA ha revelado por primera vez la capa de polvo alrededor de la segunda estrella, que se muestra en rojo a la izquierda, en el centro de la Nebulosa del Anillo Sur. Es una estrella enana blanca caliente y densa.</paragraph>

      <paragraph>A medida que se transformaba en una enana blanca, la estrella expulsaba masa periódicamente: las capas de material que ves aquí. Como si repitiera, se contrajo, se calentó y luego, incapaz de expulsar más material, pulsó.</paragraph>

      <paragraph>En esta etapa, debería haber arrojado sus últimas capas. Entonces, ¿por qué la estrella roja todavía está cubierta de polvo? ¿Se transfirió material de su compañera? Los investigadores comenzarán a buscar respuestas pronto.</paragraph>

      <paragraph>La estrella más azul a la derecha en esta imagen también ha dado forma a la escena. Ayuda a remover el material expulsado. El disco alrededor de las estrellas también se tambalea, lanzando espirales de gas y polvo durante largos períodos de tiempo. Esta escena es como presenciar un aspersor giratorio que ha terminado de disparar material en todas direcciones durante miles de años.</paragraph>

      <paragraph>Webb capturó esta escena en luz infrarroja media, la mayoría de la cual solo se puede observar desde el espacio. La luz del infrarrojo medio ayuda a los investigadores a detectar objetos envueltos en polvo, como la estrella roja.</paragraph>

      <paragraph>Esta imagen del Instrumento de infrarrojo medio (MIRI) también ofrece una increíble cantidad de detalles, incluida una colección de galaxias distantes en el fondo. La mayoría de los puntos de luz multicolores son galaxias, no estrellas. Diminutos triángulos marcan los bordes circulares de las estrellas, incluido uno azul dentro de los bordes inferiores rojos de la nebulosa, mientras que las galaxias parecen círculos deformes, líneas rectas y espirales.</paragraph>

    </article-item>

    <button-link>
      Volver
    </button-link>
  </page-container>
</template>

<script>
import PageContainer from "~/components/PageContainer";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import ArticleItem from "@/components/ArticleItem";
import ButtonLink from "@/components/ButtonLink";

export default {
  name: 'AnilloSurPage',
  components: {
    PageContainer,
    Heading,
    Paragraph,
    ArticleItem,
    ButtonLink
  }
}
</script>
