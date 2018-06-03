<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <!-- <a class="btn btn-success" href="add.html">Add</a> -->
    <router-link :to="{name: 'heroesadd'}" class="btn btn-success">添加英雄</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ index }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <a href="edit.html">edit</a>
              &nbsp;&nbsp;
              <a href="javascript:alert(111);" @click.prevent="headeDelete(item.id)">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 导入axios模块
import axios from 'axios';

export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    // 发送请求(渲染页面)
    this.loadDate();
  },
  methods: {
    loadDate() {
      // 发送请求(渲染页面)
      axios.get('http://localhost:3000/heroes')
        .then((res) => {
          if (res.status === 200) {
            this.list = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    headeDelete(id) {
    // 发送请求删除数据
      if (!confirm('您确定删除吗 ?')) return;
      axios.delete('http://localhost:3000/heroes/' + id)
        .then((res) => {
          if (res.status === 200) {
            this.loadDate(); // 重新加载数据(重新渲染页面)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style>

</style>
