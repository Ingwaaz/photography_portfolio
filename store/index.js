import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      activeMenu: false
    },
    getters: {
      getActiveMenu: (state) => {
        return state.activeMenu
      }
    },
    mutations: {
      // TODO:
      // Делигирование событий приветствуется
      changeActiveMenu (state) {
        state.activeMenu = !state.activeMenu
      }
    }
  })

export default store
