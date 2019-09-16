import Vue from 'vue'
import Router from 'vue-router'
import FoodMenu from '@/components/FoodMenu'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FoodMenu',
      component: FoodMenu
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
