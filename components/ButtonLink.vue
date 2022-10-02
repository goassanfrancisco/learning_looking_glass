<template>
  <div class="flex justify-center cursor-pointer">
    <a type="button" href="../../index.html" class="flex py-4 px-8 bg-blue-500 text-white rounded-lg hover:bg-blue-400">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ButtonLink'
}
</script>
