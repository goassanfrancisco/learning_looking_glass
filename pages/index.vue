<template>
  <div class="px-4 sm:px-64 flex flex-col gap-8">
    <h1 class="text-2xl text-text-center text-red-500 font-extrabold mt-8">Aprendiendo a través del Espejo</h1>

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

export default {
  name: 'IndexPage',
  components: [
    GridItem
  ]
}
</script>

<style lang="css" scoped>
</style>
