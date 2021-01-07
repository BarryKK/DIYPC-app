<template >
  <div class="container">
    <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <el-input v-model="email" placeholder="请输入登录邮箱"></el-input>
        </div>
        <div class="form-control">
          <label for="密码">密码</label>
          <el-input
            placeholder="请输入密码"
            v-model="password"
            show-password
          ></el-input>
        </div>
      <el-button type="primary" native-type="submit">登入</el-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.container{
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width:40rem;
}    

form {
  margin: 1rem;
  padding: 1rem;

  .form-control {
    margin: 0.5rem 0;
  }

  label {
    margin-bottom: 0.5rem;
    display: block;
    font-weight: bold;
  }
}
</style>