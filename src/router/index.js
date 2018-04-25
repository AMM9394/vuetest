import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueMain from '@/pages/VueMain'
import ToDoDemo from '@/pages/ToDoDemo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/main',
      name: 'VueMain',
      component: VueMain
    }, {
      path: '/todo',
      name: 'ToDoDemo',
      component: ToDoDemo
    }
  ]
})
