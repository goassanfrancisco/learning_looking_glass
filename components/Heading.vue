<template>
  <component :is="tag" :class="tagClasses">
    <slot></slot>
  </component>
</template>

<script>
const classes = {
  'h1': 'pt-6 text-2xl text-red-500 text-center font-bolder',
  'h2': 'text-xl text-blue-500 font-bold',
  'h3': 'text-lg text-blue-500 font-medium'
};
export default {
  name: 'HeadingComponent',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'h1'
    }
  },
  computed: {
    tagClasses() {
      if (this.tag in classes) {
        return classes[this.tag];
      }
      console.error('HeadingComponent: Invalid tag');
      return classes.h1;
    }
  }
}
</script>
