<template>
  <background></background>
  <div class="container">
    <form @submit.prevent="submitForm" id="form" class="form">
      <h2>登录</h2>
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input placeholder="请输入密码" type="text" id="email" />
      </div>
      <div class="form-control">
        <label for="密码">密码</label>
        <input placeholder="请输入密码" type="password" id="password" />
      </div>
      <button type="submit">登入</button>
    </form>
  </div>
</template>

<script scoped>
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
* {
  box-sizing: border-box;
}

.container {
  position: absolute;
  top: 10rem;
  left: 50%;
  margin-left: -20rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 50rem;
}

h2 {
  text-align: center;
  margin: 0 0 20px;
}

.form {
  padding: 30px 40px;
}

.form-control {
  margin-bottom: 10px;
  padding-bottom: 20px;
  position: relative;

  label {
    color: black;
    display: block;
    margin-bottom: 5px;
  }

  input {
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 1rem;

    &:focus {
      outline: 0;
      border-color: #777;
    }
  }
}

.form button {
  cursor: pointer;
  background-color: #3498db;
  border: 2px solid #3498db;
  border-radius: 4px;
  color: #fff;
  display: block;
  font-size: 1rem;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
}
</style>
