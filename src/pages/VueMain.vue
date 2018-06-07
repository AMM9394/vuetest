<template>
  <div class="main-page">
    <el-menu
      :default-openeds="defaultOpenkeys"
      class="el-menu-vertical-demo"
      @select="handleClick"
      @open="handleOpen"
      @close="handleClose">
      <nav-item v-for="(item, index) in submenu" :item="item" :navIndex="String(index)" :key="index">
      </nav-item>
    </el-menu>
  </div>
</template>

<script>
import { URL } from '../mock/data.js'
import NavItem from '../components/NavItem'
import './style/main.less'
// import NavItem from '../components/NavItem'
export default {
  name: 'VueMain',
  components: {NavItem},
  data () {
    return {
      submenu: [],
      defaultOpenkeys: ['0']
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClick (key, keyPath, route) {
      this.$router.push(route.route.path)
      // console.log(key, route.route.path)
    }
  },
  computed: {
    // 首次进入页面时展开当前页面所属的菜单
    onRoutes () {
      return this.$router.path
    }
  },
  created: function () {
    // GET /someUrl
    this.$http.get(URL + 'navlist').then(function (response) {
      // const that = this
      // console.log(response.data.submenu)
      this.submenu = response.data.submenu
      // get body data
      // this.someData = response.body;
    }, response => {
      console.log('error')
    })
  }
  // components:{
  //   NavItem
  // }
}
</script>
