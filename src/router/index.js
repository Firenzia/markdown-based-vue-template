import Vue from 'vue'
import Router from 'vue-router'
import Doc from '../components/layout/Doc'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      redirect: '/doc/specifications/install'
    },
    {
      path: '/doc/:category',
      name: 'page',
      component: () => import(/* webpackChunkName: "about" */ '../components/layout/Page.vue'),
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: ':module',
          component: Doc
        }]
    },
    {
      path: '/demo/components/button',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/components/button.vue')
    }
  ]
})
