<template>
  <div class="menu">
    <button
      v-if="!activeMenu"
      type="button"
      class="menu__button"
      @click="handleChangeActiveMenu"
    >
      MENU
    </button>
    <div :class="activeMenu ? 'active' : ''" class="menu-wrapper">
      <div class="container">
        <div class="menu-wrapper-content">
          <div class="menu-wrapper-content-button">
            <button
              type="button"
              class="menu__button--close"
              @click="handleChangeActiveMenu"
            >
              CLOSE
            </button>
          </div>

          <div class="menu-wrapper-content-links">
            <button @click="handleChangeActiveMenu">
              <nuxt-link to="/">
                Main Page
              </nuxt-link>
            </button>
            <button @click="handleChangeActiveMenu">
              <nuxt-link to="/about">
                About page
              </nuxt-link>
            </button>
            <button @click="handleChangeActiveMenu">
              <nuxt-link to="/contacts">
                Contacts
              </nuxt-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Menu',
  computed: {
    ...mapGetters({
      activeMenu: 'getActiveMenu'
    })
  },
  methods: {
    ...mapMutations({
      changeActiveMenu: 'changeActiveMenu'
    }),

    handleChangeActiveMenu () {
      this.changeActiveMenu()
    }
  }
}
</script>
