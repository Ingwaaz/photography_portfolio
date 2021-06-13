<template>
  <header class="header">
    <Logo text-logo="YU_RI_NI" />
    <Menu />
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {
    Logo: () => import('@/components/common/Logo'),
    Menu: () => import('@/components/common/Menu')
  }
}
</script>
