<template>
  <page-container>
    <heading tag="h1">Cúmulo de galaxias SMACS 0723 (Pez volador)</heading>

    <p>Es un aglomerado de galaxias con una distancia aprox. de 5.120 millones de años luz, dentro de la constelación austral de Pez Volador. Es un trozo de cielo visible desde el hemisferio sur de la Tierra que a menudo es visitado por el Hubble y otros telescopios en busca del pasado profundo del Universo. Fue el objetivo de la primera imagen a todo color revelada por el telescopio espacial James Webb, obtenida con el NIRCam, con espectros incluidos, que muestran corrimiento al rojo que implican objetos de 13.100 millones de años de antigüedad.</p>

    <div  style="display:flex; flex-flow:row wrap; justify-content:center;">
      <figure>
        <img src="/img/smacs1.png" width="570px" />
        <figcaption><small>Fig .1: Webb Spectrum muestra la composición de una galaxia distante (NIRSpec)</small></figcaption>
      </figure>
    </div>
    <br />

    <p>Esta galaxia emitió su luz hace 13.100 millones de años.</p>

    <p>Fue capturado por la matriz de micro obturadores de Webb, parte de su espectrógrafo de infrarrojo cercano (NIRSpec). Este instrumento es tan sensible que puede observar la luz de galaxias individuales que existieron en el universo primitivo. Esto resultará transformador para la investigación. Las capacidades de Webb han permitido por primera vez a los científicos observar espectros de galaxias tan lejanas.</p>

    <p>Cuando los investigadores separan la luz de una galaxia individual en un espectro, como el gráfico que se muestra arriba, pueden aprender sobre la composición química, la temperatura y la densidad del gas ionizado de la galaxia. Por ejemplo, el espectro de esta galaxia revelará las propiedades de su gas, lo que indicará cómo se están formando sus estrellas y cuánto polvo contiene. Estos datos nunca antes se habían detectado desde tan lejos con esta calidad.</p>

    <p>A medida que los astrónomos comiencen a analizar los datos de Webb, aprenderemos mucho sobre las galaxias que existieron a lo largo del tiempo cósmico, y cómo se comparan con las hermosas galaxias espirales y elípticas del universo cercano.</p>

    <div style="display:flex; flex-flow:row wrap; justify-content:center;">
      <figure>
        <img src="/img/smacs2.png" width="570px" />
        <figcaption><small>Fig .2: Imagen del cúmulo de galaxias SMACS 0723 obtenida a tevés del telescopio espacial James Webb</small></figcaption>
      </figure>
    </div>
    <br>

    <p>Miles de galaxias inundan esta imagen en el infrarrojo cercano del cúmulo de galaxias SMACS 0723. Las imágenes de alta resolución del telescopio espacial James Webb combinadas con un efecto natural conocido como lentes gravitacionales hicieron posible esta imagen finamente detallada.</p>

    <p>Primero, concéntrese en las galaxias responsables de la formación de lentes: la galaxia elíptica blanca brillante en el centro de la imagen y las galaxias blancas más pequeñas en toda la imagen. Unidos por la gravedad en un cúmulo de galaxias, están desviando la luz de las galaxias que aparecen en las grandes distancias detrás de ellos. La masa combinada de las galaxias y la materia oscura actúa como un telescopio cósmico, creando imágenes ampliadas, distorsionadas y, a veces, reflejadas de galaxias individuales.</p>

    <p>Ejemplos claros de reflejo se encuentran en los prominentes arcos naranjas a la izquierda y derecha del cúmulo de galaxias más brillante. Estas son galaxias con lentes: cada galaxia individual se muestra dos veces en un arco. La imagen de Webb ha revelado completamente sus núcleos brillantes, que están llenos de estrellas, junto con cúmulos de estrellas naranjas a lo largo de sus bordes.</p>

    <p>No todas las galaxias en este campo se reflejan, algunas se estiran. Otras aparecen dispersas por interacciones con otras galaxias, dejando rastros de estrellas detrás de ellas.</p>

    <p>Webb ha refinado el nivel de detalle que podemos observar en este campo. Las galaxias muy difusas aparecen como colecciones de semillas de diente de león sueltas en el aire en una brisa. Las "cápsulas" individuales de formación de estrellas prácticamente florecen dentro de algunas de las galaxias más distantes: las vistas más claras y detalladas de los cúmulos de estrellas en el universo primitivo hasta el momento.</p>

    <p>Las galaxias en esta escena que están más alejadas, las galaxias más pequeñas que se encuentran muy por detrás del cúmulo, no se parecen en nada a las galaxias espirales y elípticas observadas en el universo local. Son mucho más grumosas e irregulares. La imagen altamente detallada de Webb puede ayudar a los investigadores a medir las edades y masas de los cúmulos de estrellas dentro de estas galaxias distantes. Las próximas observaciones de Webb ayudarán a los astrónomos a comprender mejor cómo se forman y crecen las galaxias en el universo primitivo.</p>

    <div id="boton">
      <button class="boton-personalizado" onclick="window.history.back();">Volver</button></div>
  </page-container>
</template>

<script>
import PageContainer from "~/components/PageContainer";
import Heading from "@/components/Heading";

export default {
  name: 'AnilloSurPage',
  components: {
    PageContainer,
    Heading
  }
}
</script>
