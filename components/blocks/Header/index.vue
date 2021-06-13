<template>
  <header class="header">
    <Logo text-logo="YU_RI_NI" />
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {
    Logo: () => import('@/components/common/Logo')
  }
}
</script>
