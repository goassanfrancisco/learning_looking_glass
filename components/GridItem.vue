<template>
  <a class="flex flex-col flex-nowrap items-center" :href="href">
    <div class="w-64 h-64 rounded-2xl overflow-hidden border-2 border-transparent hover:border-red-500">
      <img :src="image" />
    </div>
    <span>
      {{subtitle}}
    </span>
  </a>
</template>

<script>
export default {
  name: 'GridItem',
  props: {
    image: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>
