<template>
  <component
    :is="tag"
    class="title"
    :class="[size, textAlign, color, transform, weight]"
  >
    {{ text }}
  </component>
</template>

<script>
export default {
  name: 'Title',
  props: {
    tag: {
      type: String,
      default: 'ызфт'
    },
    text: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'small'
    },
    textAlign: {
      type: String,
      default: 'center'
    },
    color: {
      type: String,
      default: 'black'
    },
    transform: {
      type: String,
      default: ''
    },
    weight: {
      type: String,
      default: 'regular'
    }
  }
}
</script>
