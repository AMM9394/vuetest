<template>
  <div class="todo">
    <a v-link="{ path: '/main'}">返回目录</a>
    <h3 class="title">{{message}}</h3>
    <input v-model="newItem" v-on:keyup.enter="addNew"/>
    <ul>
      <li v-for="(item, key) in items" :key="key" v-bind:class="{isStudent: item.stident}" v-on:click="turnRed(item)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import Storage from '../localstorage'
export default {
  name: 'ToDoDemo',
  data () {
    return {
      message: 'This is a to do demo,please input something in the follow box',
      items: Storage.fetch(),
      newItem: ''
    }
  },
  methods: {
    turnRed: function (item) {
      // 逆反布尔值
      item.student = !item.student
    },
    addNew: function () {
      this.items.push({
        name: this.itemNew,
        student: false
      })
      // 清空文本栏
      this.itemNew = null
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

<style scoped>
.isStudent{
  background: aquamarine;
  color: #fff;
}
</style>
