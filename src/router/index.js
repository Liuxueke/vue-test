import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import list from '../components/list.vue'
import footer from '../components/footer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: index,
        footer: footer
      }
    },
    {
      path: '/list',
      components: {
        default: list,
        footer: footer
      }
    }
  ]
})