<template>
  <page-container>
    <heading tag="h1">Neptuno</heading>

    <heading tag="h2">Sobre el planeta</heading>

    <paragraph>Neptuno es el último planeta del sistema solar, situado a una distancia del Sol 30 veces superior a la de la Tierra.</paragraph>

    <paragraph>Esta gran distancia hace que, a pesar de su tamaño, Neptuno no pueda ser visto a simple vista desde la Tierra. Esto explica que este planeta no fuera conocido por las civilizaciones antiguas. Su descubrimiento fue una consecuencia del descubrimiento de Urano. </paragraph>

    <article-item image="img/neptuno1.png" caption="Fig .1: Imágenes de Neptuno obtenidas a lo largo del tiempo.">
      <heading tag="h3">Características de Neptuno</heading>

      <paragraph>Neptuno tarda casi 164 años en dar una vuelta completa alrededor del Sol. Neptuno es el más pequeño de los cuatro gigantes gaseosos del sistema solar. Sin embargo, su alta densidad hace que la gravedad en su superficie sea de las más altas del sistema solar, solo superada por la gravedad en Júpiter.</paragraph>

      <paragraph>Mientras que Júpiter y Saturno están formados por prácticamente un 90% de hidrógeno y helio, Neptuno tiene estas sustancias en solo un 20%. Esta diferencia importante justifica la distinción entre gigantes gaseosos y gigantes helados.</paragraph>

      <paragraph>Neptuno gira muy rápido sobre su propio eje, completando una vuelta entera en 16 horas. Debido a la naturaleza gaseosa de sus capas más exteriores, Neptuno no tiene la misma velocidad de rotación a distintas latitudes.</paragraph>

      <paragraph>Además, su eje de rotación está ligeramente inclinado es de 28.3°. Esta inclinación es la que da lugar a las estaciones del año ya que hace que los rayos solares lleguen con distinta orientación dependiendo de la época del año.</paragraph>

      <paragraph>Una particularidad poco conocida de Neptuno es que tiene un sistema de anillos, aunque mucho más débil que los conocidos anillos de Saturno.</paragraph>

      <paragraph>Actualmente se conocen 14 lunas de Neptuno. Solo una de ellas, Tritón, es esférica y con un radio superior a los 1000 kilómetros. La luna Tritón tiene un diámetro de 2710 kilómetros y debido a su tamaño fue la primera luna en ser descubierta, tan solo 17 días después del descubrimiento del planeta.</paragraph>

    </article-item>

    <article-item image="img/neptuno2.png" caption="Fig .2: Imagen de Neptuno obtenidas a través del telescopio espacial James Webb." direction="reversed">
      <heading tag="h3">Estructura y atmósfera de Neptuno</heading>

      <paragraph>Se cree que la estructura interna de Neptuno es probablemente un núcleo sólido de pequeño tamaño recubierto por un manto en estado semifluido formado por distintos hielos de agua, amoníaco y metano.</paragraph>

      <paragraph>Encima de este manto empieza una capa de gases a alta presión que acaban dando lugar a la atmósfera en sus capas superiores. Las capas más exteriores de la atmósfera de Neptuno están formadas por un 80% de hidrógeno, un 19% de helio y en menor medida, metano. Estas pequeñas cantidades de metano son responsables del color azulado del planeta Neptuno.</paragraph>

      <paragraph>Se ha podido observar que en la atmósfera de Neptuno se forman grandes tormentas como en el caso de Júpiter. Estas tormentas resultan en grandes manchas oscuras que pueden verse con telescopios.  Se calcula que los vientos en la atmósfera de Neptuno pueden llegar a ser extremadamente rápidos y superar los 2000 km/h.</paragraph>

      <heading tag="h3">Exploración de Neptuno</heading>

      <paragraph>Debido a la gran distancia entre Neptuno y la Tierra solo ha habido una sonda espacial que ha pasado cerca de este planeta. La sonda Voyager 2, que llegó a Neptuno en 1989, pasó a 5000 km de altitud de Neptuno y durante su sobrevuelo capturó imágenes de su atmósfera, sus anillos y sus lunas.  Esta misión permitió descubrir 5 lunas de Neptuno desconocidas hasta el momento y envió imágenes detalladas de Proteo, Nereida y Tritón.</paragraph>

      <heading tag="h2">James Webb y Neptuno</heading>
    </article-item>

    <article-item image="img/neptuno3.png" caption="Fig .3: Imagen de Neptuno obtenidas a través del telescopio espacial James Webb.">
      <paragraph>La cámara de infrarrojo cercano de Webb (NIRCam, por sus siglas en inglés) genera imágenes de objetos en el rango del infrarrojo cercano entre 0,6 y 5 micras, por lo que Neptuno no se ve azul a través de los instrumentos de Webb. De hecho, el gas metano absorbe con tanta fuerza la luz roja e infrarroja que el planeta está bastante oscuro en estas longitudes de onda del infrarrojo cercano, excepto donde hay nubes de gran altitud. Tales nubes de hielo de metano se destacan como rayas y manchas brillantes, que reflejan la luz solar antes de que sea absorbida por el gas metano. Imágenes de otros observatorios, incluyendo el telescopio espacial Hubble y el Observatorio W.M. Keck, han registrado estas características de las nubes en rápida evolución a lo largo de los años.</paragraph>

      <paragraph>Sutilmente, una delgada línea de brillo que rodea el ecuador del planeta podría ser una señal visual de la circulación atmosférica global que alimenta los vientos y tormentas de Neptuno. La atmósfera desciende y se calienta en el ecuador, y por lo tanto brilla más en longitudes de onda del infrarrojo que los gases circundantes más fríos.</paragraph>

      <paragraph>La órbita de 164 años de Neptuno significa que su polo norte, en la parte superior de esta imagen, está fuera de la vista de los astrónomos, pero las imágenes de Webb sugieren un brillo intrigante en esa área. Un vórtice previamente conocido en el polo sur es evidente en la vista de Webb, pero por primera vez este telescopio ha revelado una banda continua de nubes de alta latitud que lo rodean.Webb también captó siete de las 14 lunas conocidas de Neptuno. En este retrato de Neptuno hecho por Webb se destaca un punto de luz muy brillante, esta es la luna grande e inusual de Neptuno, Tritón.</paragraph>

      <paragraph>Cubierta de un brillo helado de nitrógeno condensado, Tritón refleja un promedio del 70 por ciento de la luz solar que le llega. Eclipsa a Neptuno en esta imagen porque la atmósfera del planeta está oscurecida por la absorción de metano en estas longitudes de onda del infrarrojo cercano. Tritón orbita a Neptuno en una órbita retrógrada inusual, lo que lleva a los astrónomos a especular que esta luna era originalmente un objeto del cinturón de Kuiper que fue capturado gravitacionalmente por Neptuno. Para el próximo año, se tienen programados estudios adicionales con Webb tanto de Tritón como de Neptuno.</paragraph>

    </article-item>

    <button-link>
      Volver
    </button-link>
  </page-container>
</template>

<script>
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import ArticleItem from "@/components/ArticleItem";
import ButtonLink from "@/components/ButtonLink";

export default {
  name: 'NeptunePage',
  components: {
    Heading,
    Paragraph,
    ArticleItem,
    ButtonLink
  }
}
</script>
