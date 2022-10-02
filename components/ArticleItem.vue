<template>
  <article class="grid grid-cols-12 gap-4">
    <div class="col-span-12 sm:col-span-6 flex flex-col gap-4" :class="{
      'sm:order-2': direction === 'reversed'
    }">
      <slot></slot>
    </div>
    <div class="col-span-12 sm:col-span-6 flex" :class="direction === 'normal' ? 'justify-end' : 'justify-start'">
      <figure>
        <img :src="image" />
        <figcaption v-if="caption">
          <small>{{caption}}</small>
        </figcaption>
      </figure>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    image: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: false
    },
    direction: {
      type: String,
      required: false,
      default: 'normal',
      validator(value) {
        return ['normal', 'reversed'].includes(value);
      }
    }
  }
}
</script>
