import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import League from './components/League.vue'
import Blog from './components/Blog.vue'
// import Surgery from './components/Surgery.vue'
// import Surgery1 from './components/Surgery1.vue'
import WhitePaper from './components/WhitePaper.vue'
import Stats from './components/Stats.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/league-table',
      name: 'league',
      component: League
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/white-papers',
      name: 'whitePaper',
      component: WhitePaper
    },
    // {
    //   path: '/surgery',
    //   name: 'surgery',
    //   component: Surgery
    // },
    // {
    //   path: '/surgery1',
    //   name: 'surgery1',
    //   component: Surgery1
    // },
    {
      path: '/stats',
      name: 'stats',
      component: Stats
    },
  ]
})
