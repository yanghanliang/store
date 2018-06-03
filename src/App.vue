<template>
  <div>
    <my-header></my-header>
     <div class="container-fluid">
      <div class="row">
          <my-sidebar></my-sidebar>
          <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <!-- 列表 -->
            <router-view></router-view>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入头部文件
import MyHeader from '@/components/myheader.vue';

// 导入左边栏-sidebar
import MySidebar from '@/components/mysidebar.vue';

export default {
  name: 'App',
  // 注册局部主键
  components: {
    MyHeader,
    MySidebar
  }
};
</script>

<style>
</style>
