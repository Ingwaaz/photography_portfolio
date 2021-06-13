<template>
  <div class="wrapper">
    <div class="container">
      <Header />
      <main class="contacts">
        <div class="contacts-text">
          <div class="contacts-text-col">
            <Title
              tag="span"
              text="Привет, Я Юрий!"
              size="standart"
              weight="mediumWeight"
              text-align="left"
            />
            <Subtitle
              text="My name is Rémi, a freelance photographer shooting still shots in the city
              I am currently living in Paris, France. I am obsessed by nature, people I meet everyday in the streets.
              If you would like to hire me for a project or anything else please feel free to contact me."
              size="medium"
              weight="light"
              class="contacts-text-col__subtitle"
              text-align="left"
            />
          </div>
          <div class="contacts-text-col">
            <div>
              <span>ADDRESS: </span>
              <span>48 Boulevard Jourdan,</span>
              <span>75014 Paris,</span>
              <span>France</span>
            </div>
          </div>
          <div class="contacts-text-col">
            <div>
              <span>CONTACT: </span>
              <span>E: info@photodemo.com</span>
              <span>TEL: +1 (23) 456-7890</span>
              <span>FAX: +1 (23) 456-7890</span>
            </div>
          </div>
        </div>
      </main>
    </div>
    <FooterBlock />
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  components: {
    Header: () => import('@/components/blocks/Header'),
    Title: () => import('@/components/common/Title'),
    Subtitle: () => import('@/components/common/Subtitle'),
    FooterBlock: () => import('@/components/blocks/FooterBlock')
  }
}
</script>
