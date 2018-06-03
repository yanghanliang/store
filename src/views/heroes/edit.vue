<template>
    <div>
        <h2 class="sub-header">修改</h2>
            <form>
            <div class="form-group">
                <label for="name">姓名</label>
                <input type="text" v-model="formData.name" class="form-control" id="name" value="">
            </div>
            <div class="form-group">
                <label for="gender">性别</label>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" v-model="formData.gender" name="gender" id="gender" value="男"> 男
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" v-model="formData.gender" name="gender" id="gender" value="女"> 女
                </div>
            <button @click.prevent="headerEdit()" type="submit" class="btn btn-success">Submit</button>
            </form>
    </div>
</template>

<script>

export default {
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      },
      id: -1
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.loadData();
  },
  methods: {
    loadData() {
      // 发送请求-根据id获取当前数据
      this.$http.get(`/heroes/${this.id}`)
        .then((res) => {
          if (res.status === 200) {
            this.formData = res.data;
          };
        })
        .catch((err) => {
          console.log(err);
        });
    },
    headerEdit() {
      this.$http.patch(`/heroes/${this.id}`, this.formData)
        .then((res) => {
          if (res.status === 200) {
            this.$router.push({
              name: 'heroes'
            });
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
