<template lang="">
  <base-card>
    <div class="container">
      <form @submit.prevent="submitForm" id="form" class="form">
        <h2>注册</h2>
        <div class="form-control">
          <label for="username">用户名</label>
          <input type="text" id="username" placeholder="请输入用户名" v-model.trim="email"/>
          <small>{{errorMessage}}</small>
        </div>
        <div class="form-control">
          <label for="email">Email</label>
          <input type="text" id="email" placeholder="请输入E-Mail" />
          <small>{{errorMessage}}</small>
        </div>
        <div class="form-control">
          <label for="password">密码</label>
          <input type="password" id="password" placeholder="请输入密码" />
          <small>{{errorMessage}}</small>
        </div>
        <div class="form-control">
          <label for="password2">确认密码</label>
          <input type="password" id="password2" placeholder="请再次输入密码" />
          <small>{{errorMessage}}</small>
        </div>
        <button type="submit">提交</button>
      </form>
    </div>
  </base-card>
</template>
<script>
export default {
  // data() {
  //   return {
  //     username: "",
  //     email: "",
  //     password: "",
  //     password2: "",
  //     errorMessage: "",
  //     formIsValid: true,
  //   };
  // },
  // methods: {
  //   showError(input, message) {
  //     const formControl = input.parentElement;
  //     formControl.className = "form-control error";
  //     this.errorMessage = message;
  //   },

  //   showSuccess(input) {
  //     const formControl = input.parentElement;
  //     formControl.className = "form-control success";
  //     this.errorMessage = message;
  //   },
  //   checkRequired(inputArr) {},
  //   submitForm() {},
  // },
};
</script>

<style lang="scss" scoped>
:root {
  --success-color: #2ecc71;
  --error-color: #e74c3c;
}

* {
  box-sizing: border-box;
}

.container {
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

  .success input {
    border-color: var(--success-color);
  }

  .error input {
    border-color: var(--error-color);
  }

  small {
    color: var(--error-color);
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: hidden;
  }

  .error small {
    visibility: visible;
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
