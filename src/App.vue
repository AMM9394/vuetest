<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="header"/>
    <div>
      <el-row>
        <el-col :span="6">
          <vue-main/>
        </el-col>
        <el-col :span="18">
          <router-view/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import VueMain from './pages/VueMain'
export default {
  name: 'App',
  components: {VueMain}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.header{
  background: #89058b;
  height: 10px;
  width: 100%;
}
</style>
