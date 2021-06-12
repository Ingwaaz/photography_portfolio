<template>
  <main class="container">
    <div class="main-text">
      <div class="text__title">
        <Title
          tag="h2"
          main-text="Привет, меня зовут Юрий!"
          sub-text="Я фотограф"
        />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Main',
  components: {
    Title: () => import('@/components/Title')
  }
}
</script>
