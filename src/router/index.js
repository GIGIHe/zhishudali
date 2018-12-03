import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const components = {
  layout :()=>import('@/view/layout'),
  index :()=>import('@/view/index'),
  courseList :()=>import('@/view/course/courseList'),
  shareCatagory :()=>import('@/view/share/shareCatagory'),
  shareList :()=>import('@/view/share/shareList'),
  mainMenu :()=>import('@/view/menu/mainMenu'),
  listMenu :()=>import('@/view/menu/listMenu'),
  login :()=>import('@/view/login/index'),
  header:()=>import('@/components/Header')
}
export default new Router({
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: components.layout,
      redirect:'/layout/index',
      children: [
        {
          path: 'index',
          name: 'index',
          component: components.index
        },
        {
          path: 'courseList',
          name: 'courseList',
          component: components.courseList
        },
        {
          path: 'shareList',
          name: 'shareList',
          component: components.shareList
        },
        {
          path: 'shareCatagory',
          name: 'shareCatagory',
          component: components.shareCatagory
        },
        {
          path: 'mainMenu',
          name: 'mainMenu',
          component: components.mainMenu
        },
        {
          path: 'listMenu',
          name: 'listMenu',
          component: components.listMenu
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: components.login
    },
  ]
})
