<template>
  <div class="main-page">
    <el-row class="tac">
      <el-col :span="6" >
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @select="handleClick"
          @open="handleOpen"
          @close="handleClose">
          <nav-item v-for="(item, index) in submenu" :item="item" :navIndex="String(index)" :key="index">
          </nav-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {submenu} from '../mock/data.js'
import NavItem from '../components/NavItem'
// import NavItem from '../components/NavItem'
export default {
  name: 'VueMain',
  components: {NavItem},
  data () {
    return {
      submenu
    }
  },
  // components: {NavItem},
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClick (key, keyPath) {
      this.$router.push(key)
      // console.log(typeof key)
    }
  },
  computed: {
    // 首次进入页面时展开当前页面所属的菜单
    onRoutes () {
      return this.$route.path
    }
  }
  // components:{
  //   NavItem
  // }
}
</script>

<style scoped>
.main-page{
  width: 1200px;
  margin: 0 auto;
  background: #f3eff3;
  min-height: calc(100vh - 10px);
}
.menu-left{
  background: #f3eff3;
  min-height: calc(100vh - 10px);
  height: 100%;
}
.main-page .el-submenu__title:hover, .main-page .el-submenu__title:focus{
  background-color: #efd9eb;
}
</style>
