<template>
  <div class="px-4 sm:px-64 flex flex-col gap-8">
    <heading tag="h1" class="text-2xl text-text-center text-red-500 font-extrabold mt-8">Aprendiendo a través del Espejo</heading>

    <div class="flex flex-wrap items-center gap-16">
      <grid-item image="img/placeholder.png" href="puzzle/index.html" subtitle="Puzzles" />
      <grid-item image="img/placeholder.png" href="puzzle/index.html" subtitle="Puzzles" />
      <grid-item image="img/placeholder.png" href="puzzle/index.html" subtitle="Puzzles" />
      <grid-item image="img/placeholder.png" href="puzzle/index.html" subtitle="Puzzles" />
      <grid-item image="img/placeholder.png" href="puzzle/index.html" subtitle="Puzzles" />
      <grid-item image="img/placeholder.png" href="puzzle/index.html" subtitle="Puzzles" />
      <grid-item image="img/placeholder.png" href="puzzle/index.html" subtitle="Puzzles" />
      <grid-item image="img/placeholder.png" href="puzzle/index.html" subtitle="Puzzles" />
      <grid-item image="img/placeholder.png" href="puzzle/index.html" subtitle="Puzzles" />
      <grid-item image="img/placeholder.png" href="puzzle/index.html" subtitle="Puzzles" />
      <grid-item image="img/placeholder.png" href="puzzle/index.html" subtitle="Puzzles" />
    </div>
  </div>
</template>

<script>
import GridItem from "~/components/GridItem";
import Heading from "@/components/Heading";

export default {
  name: 'IndexPage',
  components: {
    GridItem,
    Heading
  }
}
</script>

<style lang="css" scoped>
</style>
