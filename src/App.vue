<template>
    <div id="app">
         <top v-if="loginB"></top>
        <div class="content"  v-if="loginB">
          <!-- <router-view></router-view> -->

          <left></left>
          <div class="right"><router-view></router-view></div>
        </div>
        <bottom v-if="loginB"></bottom>
        <router-view v-else></router-view>
        <!-- <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition> -->
    </div>
</template>
<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>

<script>
  import left from '@/components/Content'
  import bottom from '@/components/Footer'
  import top from '@/components/Header'
    export default {
        name: 'app',
        data(){
          return{
            // loginB:true,
          }
        },
        components: {
          left,
          bottom,
          top
        },
        created(){

        },
        computed:{
          loginB(){
            if(this.$route.fullPath == '/login'){
              return false;
            }else{
              return true;
            }
          }
        }
    }
</script>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;
        // font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
        // font-size: 14px;
        -webkit-font-smoothing: antialiased;
    }
    .content{
      display: flex;
      justify-content: flex-start;
    }
    #app {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

    .el-submenu [class^=fa] {
        vertical-align: baseline;
        margin-right: 10px;
    }

    .el-menu-item [class^=fa] {
        vertical-align: baseline;
        margin-right: 10px;
    }

    .toolbar {
        background: #f2f2f2;
        padding: 10px;
        margin: 10px 0;
    .el-form-item {
        margin-bottom: 10px;
    }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.2s ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }
    .right{
      flex: 1;
      background-color: #F2F3F7;
    }
</style>
