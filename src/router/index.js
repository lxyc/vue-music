import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/Rank/rank'
import Search from 'components/Search/search'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/recommend'
  }, {
    path: '/recommend',
    component: Recommend
  }, {
    path: '/singer',
    component: Singer
  }, {
    path: '/rank',
    component: Rank
  }, {
    path: '/search',
    component: Search
  }]
})
