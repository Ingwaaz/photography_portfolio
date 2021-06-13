<template>
  <div class="container">
    <div class="gallery">
      <div class="gallery-filters">
        <span @click="handleChangeActiveFilter('')">All</span>
        <span @click="handleChangeActiveFilter('girl')">Girl</span>
        <span @click="handleChangeActiveFilter('merry')">Merry</span>
        <span @click="handleChangeActiveFilter('father')">Father</span>
      </div>
      <div class="gallery-images">
        <div class="gallery-images-col">
          <div
            v-for="item in imagesLeftCol"
            :key="item.src"
            class="gallery-images-col__image"
          >
            <img
              v-if="
                activeFilter === '' ? true : item.filterType === activeFilter
              "
              :src="require(`@/assets/images/${item.src}`)"
              :alt="item.src"
            >
          </div>
        </div>
        <div class="gallery-images-col">
          <div
            v-for="item in imagesRightCol"
            :key="item.src"
            class="gallery-images-col__image"
          >
            <img
              v-if="
                activeFilter === '' ? true : item.filterType === activeFilter
              "
              :src="require(`@/assets/images/${item.src}`)"
              :alt="item.src"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryBlock',
  data: () => ({
    images: [],
    imagesLeftCol: [],
    imagesRightCol: [],
    activeFilter: ''
  }),
  mounted () {
    this.parseImages()
  },
  methods: {
    parseImages () {
      // get all images in dir
      const images = require.context('@/assets/images', true, /^.*\.jpeg$/)
      this.images = images.keys()

      // parse images to object
      this.images = this.images.map((item) => {
        const splitedItem = item.split('./')
        const splitedItems = splitedItem[1].split('.')

        const obj = {
          filterType: splitedItems[0],
          src: splitedItem[1]
        }
        return obj
      })

      this.imagesLeftCol = this.images.slice(0, this.images.length / 2)
      this.imagesRightCol = this.images.slice(this.images.length / 2)
    },
    handleChangeActiveFilter (str) {
      this.activeFilter = str
    }
  }
}
</script>
