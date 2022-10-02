<template>
  <div class="flex justify-center cursor-pointer">
    <a type="button" :href="href" class="flex py-4 px-8 bg-blue-500 text-white rounded-lg">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ButtonLink',
  props: {
    href: {
      type: String
    }
  }
}
</script>
