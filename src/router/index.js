import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import VueMain from '@/pages/VueMain'
import ToDoDemo from '@/pages/ToDoDemo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
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
    }, {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
