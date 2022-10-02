<template>
  <page-container>
    <heading tag="h1">Telescopio Espacial Hubble</heading>

    <heading tag="h2">Historia</heading>

    <paragraph>El telescopio Hubble fue puesto en órbita el 24 de abril de 1990, en una misión conjunta entre la NASA y la Agencia Espacial Europea. Su misión se bautizó STS-31, y fue la culminación de más de 20 años de trabajo y más de 2 millones de dólares de inversión. Puesto que el Hubble está en una órbita próxima a la Tierra (593 km), su perspectiva en el espacio es muy similar a la de un telescopio de base en la Tierra. Sin embargo, la ausencia de los borrosos efectos de la atmósfera, le proporciona una visión mucho más clara del universo.</paragraph>

    <heading tag="h2">Tecnología del Telescopio</heading>

    <div  style="display:flex; flex-flow:row wrap; justify-content:center;">
      <figure>
        <img src="/img/hubble1.png" width="570px" />
        <figcaption><small>Fig .1: Imagen del Telescopio Espacial Hubble</small></figcaption>
      </figure>
    </div>
    <br />

    <paragraph>El telescopio tiene un peso total en torno a los 11.000 kilos. Es de forma cilíndrica, con una longitud de 13,2 m y un diámetro máximo de 4,2 metros.</paragraph>

    <paragraph>El telescopio Hubble es reflector y dispone de dos espejos, teniendo el principal 2,4 metros de diámetro. Para la exploración del cielo incorpora varios espectrómetros y tres cámaras, una de campo estrecho para fotografiar zonas pequeñas del espacio (de brillo débil por su lejanía), otra de campo ancho para obtener imágenes de planetas y una tercera infrarroja.</paragraph>

    <paragraph>La calidad de imagen se vio gravemente afectada por un espejo principal indebidamente asentado, pero este problema fue superado por una misión de reparación en diciembre de 1993.</paragraph>

    <paragraph>Mediante dos paneles solares genera electricidad con la que alimenta las cámaras, los cuatro motores empleados para orientar y estabilizar el telescopio, y los equipos de refrigeración de la cámara infrarroja y el espectrómetro, que trabajan a -180ºC.</paragraph>

    <heading tag="h2">Principales Descubrimientos</heading>

    <paragraph>En 1994, descubrió claros indicios de la presencia de agujeros negros, en la galaxia M87 a 50 millones de años luz. Lo cual contribuyó a confirmar la existencia de dicho fenómeno astronómico. Además, permitió aclarar ideas sobre el nacimiento del Universo en una gran explosión, el Big Bang, ocurrida hace unos 13.700 millones de años.</paragraph>

    <paragraph>Ese mismo año tomó fotografías de gran calidad del cometa Shoemaker-Levy 9 en su senda de impacto hacia Júpiter.</paragraph>

    <paragraph>En 1995 tomó varias fotos instantáneas de una región cercana a la Osa Mayor, durante diez días consecutivos, y que al juntarse componen el “campo profundo del Hubble” con más de 3.000 objetos distintos.</paragraph>

    <paragraph>Ha tomado unas 500.000 fotografías del espacio exterior, suficiente material para llenar 1420 discos ópticos de 6,66 Gb cada uno. Se estima que con el Hubble se han observado más de un millón de objetos celestes.</paragraph>

    <paragraph>Gracias al Hubble se han podido estudiar las cefeidas, un grupo de estrellas de luminosidad variable en términos periódicos, lo cual fue fundamental para determinar la edad aproximada del universo.</paragraph>

    <paragraph>En 1995, sus fotografías de la nebulosa de Orión permitieron esclarecer la evolución de las nubes difusas que luego habrán de convertirse en estrellas, o sea, ayudaron a entender cómo nacen las estrellas.</paragraph>

    <heading tag="h2">Principales diferencias entre los telescopios Hubble y James Webb</heading>

    <paragraph>De acuerdo con la Nasa, el telescopio James Webb no reemplaza al Hubble, sino que es un sucesor, cuyas capacidades "no son idénticas".</paragraph>

    <paragraph>"Webb se dedica a observar el Universo con luces infrarrojas, mientras que el Hubble continuará estudiando principalmente en longitudes de onda ópticas y ultravioletas, aunque tiene cierta capacidad de infrarrojos", señaló la NASA.</paragraph>

    <paragraph>Aunque se destacan algunas diferencias:</paragraph>

    <heading tag="h3">Campo de Visión</heading>

    <paragraph>Una de las mayores diferencias entre ambos proyectos de la Nasa es el campo de visión, pues el del James Webb es significativamente mayor que el del Hubble. Asimismo, la resolución que maneja la cámara del más reciente telescopio espacial es superior al lanzado en 1990.</paragraph>

    <heading tag="h3">Tamaño</heading>

    <paragraph>El nuevo telescopio James Webb es mucho más grande que el del Hubble. Esto se puede observar en el espejo primario del James Webb, el cual es casi el triple de grande que el que posee el Hubble. En total, el telescopio James Webb es casi el doble de grande que el telescopio Hubble que mide 13 metros de largo. Solo su base mide 22x12 metros. Eso sí, pesa la mitad que el Hubble.</paragraph>

    <heading tag="h3">Órbita y observación</heading>

    <paragraph>El Hubble orbita la Tierra y el James Webb orbita el Sol, por lo que vuela hasta a 1.5 millones de kilómetros de nuestro planeta. Webb observará principalmente el universo en el espectro infrarrojo, mientras que el Hubble lo verá principalmente en longitudes de ondas ópticas y ultravioleta.</paragraph>

    <paragraph>Además, sus cuatro instrumentos científicos para capturar imágenes y espectros de objetos astronómicos proporcionarán una cobertura de longitud de onda de 0.6 a 28 micrómetros. Los instrumentos del Hubble pueden observar una pequeña porción del espectro infrarrojo de 0.8 a 2.5 micrones, pero sus capacidades principales se encuentran en las partes ultravioleta y visible del espectro de 0.1 a 0.8 micrones.</paragraph>

    <paragraph>Que el James Webb observe el universo con espectro infrarrojo le permite revelar los estados fríos de la materia, así como objetos sólidos en el espacio, lo que le ayuda a captar mejores imágenes a detalle del universo.</paragraph>

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
