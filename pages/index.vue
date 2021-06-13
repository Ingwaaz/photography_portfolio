<template>
  <div class="wrapper">
    <div class="container">
      <Header />
      <main class="main">
        <div class="main-text">
          <Title
            tag="span"
            text="Привет, Я Юрий!"
            size="extralarge"
            weight="bold"
            transform="uppercase"
          />
          <Subtitle
            text="Профессиональный фотограф, фотографирую пейзажи и моделей.
          Все фотографии я делаю на камеру Sony. Свяжитесь со мной ниже"
            size="large"
            weight="regular"
            class="main-text__subtitle"
          />
        </div>
        <div class="main-gallery">
          <Gallery />
        </div>
      </main>
    </div>
    <FooterBlock />
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    Header: () => import('@/components/blocks/Header'),
    Title: () => import('@/components/common/Title'),
    Subtitle: () => import('@/components/common/Subtitle'),
    FooterBlock: () => import('@/components/blocks/FooterBlock'),
    Gallery: () => import('@/components/blocks/Gallery')
  }
}
</script>
