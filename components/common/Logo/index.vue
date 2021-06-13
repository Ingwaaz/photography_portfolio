<template>
  <div class="logo">
    <img v-if="imageSrc" :src="require(imageSrc)" alt="logo">
    <span v-if="textLogo" class="logo-text">{{ textLogo }}</span>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    imageSrc: {
      type: String,
      default: ''
    },
    textLogo: {
      type: String,
      default: ''
    }
  }
}
</script>
