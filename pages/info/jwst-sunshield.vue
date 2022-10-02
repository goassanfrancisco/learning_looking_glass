<template>
  <page-container>
    <heading tag="h1">Telescopio Espacial James Webb (Barrera solar -multilayer sunshield-)</heading>

    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 sm:col-span-6 flex flex-col gap-4">
        <paragraph>Para realizar observaciones en el espectro infrarrojo, el JWST debe mantenerse a una temperatura muy baja, aproximadamente por debajo de 50 K (-220 °C), de lo contrario, la radiación infrarroja del propio telescopio podría bloquear o sobrecargar sus instrumentos.</paragraph>

        <paragraph>Para evitarlo utiliza un gran parasol que bloquea la luz y el calor del Sol, la Tierra y la Luna, además, su posición cercana al punto de Lagrange Tierra-Sol L2 mantiene los tres cuerpos en el mismo lado de la nave espacial en todo momento.</paragraph>

        <paragraph>Su órbita halo alrededor del punto L2 evita la sombra de la Tierra y la Luna, manteniendo una posición constante y aceptable para la barrera solar y los paneles solares. El parasol está hecho de película de poliimida y tiene membranas recubiertas con aluminio en un lado y silicio en el otro.</paragraph>

        <paragraph>El parasol está diseñado para doblarse doce veces, por lo que cabe dentro de la cubierta del cohete Ariane 5 de 4,57 m × 16,19 m. Una vez ubicado el telescopio en el punto L2, el parasol se desplega a 21,197 m × 14,162 m. El parasol fue ensamblado a mano en Man Tech (NeXolve) en Huntsville, Alabama, antes de ser entregado a Northrop Grumman en Redondo Beach, California, Estados Unidos, para su prueba.</paragraph>

        <paragraph>Cada capa está recubierta de aluminio, y el lado que mira al sol de las dos capas más calientes (designadas como Capa 1 y Capa 2) también tienen un recubrimiento de "silicio dopado" (o silicio tratado) para reflejar el calor del sol hacia el espacio. El parasol es una parte fundamental del telescopio Webb porque las cámaras e instrumentos infrarrojos de a bordo deben mantenerse muy fríos y fuera del calor y la luz del sol para funcionar correctamente.</paragraph>

        <paragraph>El kapton es una película de poliamida desarrollada por DuPont a finales de los años sesenta. Tiene una gran resistencia al calor y se mantiene estable en una amplia gama de temperaturas que van de menos 269 a más 400 Celsius (de menos 452 a más 752 grados Fahrenheit). No se funde ni se quema a las temperaturas más altas. En la Tierra, la película de poliimida Kapton puede utilizarse en una gran variedad de aplicaciones de aislamiento eléctrico y electrónico.</paragraph>

        <paragraph>Las capas del parasol también están recubiertas de aluminio y silicio dopado por sus propiedades ópticas y su longevidad en el entorno espacial. El dopaje es un proceso en el que se mezcla una pequeña cantidad de otro material durante el proceso de recubrimiento de silicio para que el recubrimiento sea conductor de la electricidad. El revestimiento debe ser conductor de la electricidad para que las membranas puedan conectarse a tierra con el resto del JWST y no acumulen una carga eléctrica estática en su superficie. El silicio tiene una alta emisividad, lo que significa que emite la mayor parte del calor y la luz y actúa bloqueando el calor del sol para que no llegue a los instrumentos infrarrojos que estarán situados debajo. Además, las superficies de aluminio, muy reflectantes, rebotan la energía restante en los huecos de los bordes del parasol. (Dato curioso: el tono rosado de la parte inferior del parasol se debe en realidad a este revestimiento).</paragraph>

      </div>
      <div class="col-span-12 sm:col-span-6">
        <div  style="display:flex; flex-flow:row wrap; justify-content:center;">
          <figure>
            <img src="/img/parasol1.png" width="570px" />
            <figcaption><small>Fig .1: Imagen de las capas del parasol del telescopio James Webb</small></figcaption>
          </figure>
        </div>
        <br>

        <div  style="display:flex; flex-flow:row wrap; justify-content:center;">
          <figure>
            <img src="/img/parasol2.png" width="570px" />
            <figcaption><small>Fig .2: Imagen de las capas del parasol del telescopio James Webb</small></figcaption>
          </figure>
        </div>
      </div>
    </div>

    <button-link>
      Volver
    </button-link>
  </page-container>
</template>

<script>
import PageContainer from "~/components/PageContainer";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import ButtonLink from "@/components/ButtonLink";

export default {
  name: 'JwstSunshield',
  components: {
    PageContainer,
    Heading,
    Paragraph,
    ButtonLink
  }
}
</script>
