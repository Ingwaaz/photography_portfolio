<template>
  <div class="container">
    <component :is="tag" class="title">
      {{ mainText }}
      <br>
      {{ subText }}
    </component>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    tag: {
      type: String,
      default: 'h2'
    },
    mainText: {
      type: String,
      default: ''
    },
    subText: {
      type: String,
      default: ''
    }
  }
}
</script>
