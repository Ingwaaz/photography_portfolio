<template>
  <div class="wrapper">
    <div class="container">
      <Header />
      <main class="about">
        <div class="about-text">
          <Title
            tag="span"
            text="Юрий Никитюк"
            size="extralarge"
            weight="bold"
            transform="uppercase"
          />
          <Subtitle
            text="Профессиональный фотограф"
            size="large"
            weight="light"
            class="about-text__subtitle"
            transform="uppercase"
          />
          <Subtitle
            text="Certainty listening no no behaviour existence assurance situation is.
            Because add why not esteems amiable him. Interested the unaffected mrs law friendship add principles.
            Indeed on people do merits to. Court heard which up above hoped grave do.
            Answer living law things either sir bed length. Looked before we an on merely.
            These no death he at share alone. Yet outward the him compass hearted are tedious"
            size="extralarge"
            weight="regular"
            class="about-text__text"
          />
        </div>
        <div class="about-icons">
          <img :src="emailIconSrc" alt="email-icon">
          <img :src="instagramIconSrc" alt="instagram-icon">
        </div>
      </main>
    </div>
    <FooterBlock />
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  components: {
    Header: () => import('@/components/blocks/Header'),
    Title: () => import('@/components/common/Title'),
    Subtitle: () => import('@/components/common/Subtitle'),
    FooterBlock: () => import('@/components/blocks/FooterBlock')
  },
  data: () => ({
    emailIconSrc: require('@/assets/icons/email.svg'),
    instagramIconSrc: require('@/assets/icons/instagram.svg')
  })
}
</script>
