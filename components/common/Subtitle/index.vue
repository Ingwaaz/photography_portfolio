<template>
  <p class="subtitle" :class="[size, textAlign, color, transform, weight]">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: 'Subtitle',
  props: {
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
