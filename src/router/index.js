import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import list from '../components/list.vue'
import footer from '../components/footer.vue'
import wallet from '../components/wallet.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: index,
      children: [
        { path: '', component: footer }
      ]
    },
    {
      path: '/list',
      component: list,
      children: [
        { path: '', component: footer }
      ]
    },
    {
      path: '/wallet',
      component: wallet,
      children: [
        { path: '', component: footer }
      ]
    }
  ]
})