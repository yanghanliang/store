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
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <!-- <router-link :to="'/heroes/edit/' + item.id">修改</router-link> -->
              <router-link :to="{name: 'heroesedit', params: {id: item.id}}">修改</router-link>
              &nbsp;&nbsp;
              <a href="javascript:video(0);" @click.prevent="headeDelete(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

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
      this.$http.get('http://localhost:3000/heroes')
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
    // 发送请求-删除数据
      if (!confirm('您确定删除吗 ?')) return;
      this.$http.delete('http://localhost:3000/heroes/' + id)
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
