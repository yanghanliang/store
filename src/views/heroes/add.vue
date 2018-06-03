<template>
    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input type="text" v-model="formData.name" class="form-control" id="name" placeholder="请输入英雄名称">
          </div>
          <div class="form-group">
            <label for="gender">英雄性别:</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" v-model="formData.gender" name="gender" id="gender" value="男"> 男
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" v-model="formData.gender" name="gender" id="gender" value="女"> 女
          </div>
          <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
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
      }
    };
  },
  methods: {
    handleAdd() {
      this.$http.post('/heroes', this.formData)
        .then((res) => {
          if (res.status === 201) {
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
