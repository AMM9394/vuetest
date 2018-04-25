<template>
  <el-submenu v-if="item.submenu && item.submenu.length" :index="navIndex">
    <!-- 创建菜单分组 -->
    <template slot="title"><i v-show="item.iconName" :class="item.iconName"></i>{{ item.title }}</template>
    <!-- 递归调用自身，直到subItem不含有子节点 -->
    <nav-item v-for="(subItem,i) in item.submenu" :key="navIndex+'-'+i" :navIndex="navIndex+'-'+i" :item="subItem">
    </nav-item>
  </el-submenu>
  <!--// 如果当前item不含有子节点-->
  <el-menu-item v-else :index="navIndex" :route="{path : item.url}">{{ item.title }}</el-menu-item>
</template>

<script>
export default {
  name: 'NavItem',
  data () {
    return {
      indexInit: 'menu'
    }
  },
  props: ['item', 'navIndex'],
  methods: {
    setIndex (string, index) {
      return string + index
    }
  }
}

</script>

<style scoped>

</style>
