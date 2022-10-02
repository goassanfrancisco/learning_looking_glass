<template>
  <page-container>
    <heading tag="h1">Aprendiendo a través del Espejo</heading>

    <div class="flex flex-wrap items-center gap-16 justify-center">
      <grid-item image="img/telescopio.png" href="info/index.html" subtitle="El cielo a través del JWST" />
      <grid-item image="img/puzzle.png" href="puzzle/index.html" subtitle="Puzzles" />
      <grid-item image="img/trivia.png" href="trivia/index.php" subtitle="Trivia" />
      <grid-item image="img/alineando.png" href="alineando/index.php" subtitle="Alineando Espejos" />
    </div>
  </page-container>
</template>

<script>
import GridItem from "~/components/GridItem";
import Heading from "@/components/Heading";
import PageContainer from "@/components/PageContainer";

export default {
  name: 'IndexPage',
  components: {
    GridItem,
    Heading,
    PageContainer
  }
}
</script>
