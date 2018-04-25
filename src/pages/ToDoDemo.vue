<template>
  <div class="todo">
    <!--<router-link to="/">返回目录</router-link>-->
    <h3 class="title">{{message1}}</h3>
    <h3 class="title">{{message2}}</h3>
    <input v-model="newItem" v-on:keyup.enter="addNew"/>
    <ul>
      <li v-for="(item, key) in items" :key="key" v-bind:class="{isStudent: item.student}" v-on:click="transColor(item)">
        {{parseInt(key+1) + '.'+ item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import Storage from '../localstorage'
import './style/todo.less'
export default {
  name: 'ToDoDemo',
  data () {
    return {
      message1: 'This is a demo.',
      message2: 'Now please input something in the following box and end with the enter key.',
      items: Storage.fetch(),
      newItem: ''
    }
  },
  methods: {
    transColor: function (item) {
      // 逆反布尔值
      item.student = !item.student
    },
    addNew: function () {
      this.items.push({
        name: this.newItem,
        student: false
      })
      // 清空文本栏
      this.newItem = null
    }
  },
  watch: {
    items: {
      handler: function (items) {
        Storage.save(items) // 监控li变化，将新增的值存入 sessionStorage 里
      }, // sessionStorage 里的数据将在页面关闭后删除
      deep: true // 深度监视，只要 items 有一点改变就会触发回调函数handler
    }
  }
}
</script>
