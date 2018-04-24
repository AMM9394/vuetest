<template>
  <div class="main-page">
    <el-row class="tac">
      <el-col :span="6" >
        <el-menu
          router unique-opened  :default-active="onRoutes"
          class="el-menu-vertical-demo menu-left"
          @open="handleOpen"
          @close="handleClose">
          <nav-item v-for="(item, index) in submenu"  :item="item" :navIndex="String(index)" :key="index">
          </nav-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {submenu} from '../mock/data.js'
export default {
  name: 'VueMain',
  data() {
    return {
    submenu
  };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    // 首次进入页面时展开当前页面所属的菜单
    onRoutes(){
      return this.$route.path
    }
  }
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
}
.main-page .el-submenu__title:hover, .main-page .el-submenu__title:focus{
  background-color: #efd9eb;
}
</style>
