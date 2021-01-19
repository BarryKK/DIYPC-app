<template lang="">
  <base-card>
    <div class="container">
      <form id="form" class="form">
        <h2>注册</h2>
        <div class="form-control">
          <label for="username">用户名</label>
          <input type="text" id="username" placeholder="请输入用户名" />
          <small>Error message</small>
        </div>
        <div class="form-control">
          <label for="email">Email</label>
          <input type="text" id="email" placeholder="请输入E-Mail" />
          <small>Error message</small>
        </div>
        <div class="form-control">
          <label for="password">密码</label>
          <input type="text" id="password" placeholder="请输入密码" />
          <small>Error message</small>
        </div>
        <div class="form-control">
          <label for="password2">确认密码</label>
          <input type="text" id="password2" placeholder="请再次输入密码" />
          <small>Error message</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </base-card>
</template>
<script>
export default {
  methods: {
    showError(input, message) {
      const formControl = input.parentElement;
      formControl.className = "form-control error";
      const small = formControl.querySelector("small");
      small.innerText = message;
    },
    showSuccess(input) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
    },
    // checkEmail(input) {
    //   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   if (re.test(input.value.trim())) {
    //     this.showSuccess(input);
    //   } else {
    //     this.showError(input, "Email格式不正确");
    //   }
    // },
    checkRequired(inputArr) {
      inputArr.forEach(function(input) {
        if (input.value.trim() === "") {
          this.showError(input, `${this.getFieldName(input)} 不能为空`);
        } else {
          this.showSuccess(input);
        }
      });
    },
    checkLength(input, min, max) {
      if (input.value.length < min) {
        this.showError(input, `${this.getFieldName(input)} 至少需要 ${min} 个字符`);
      } else if (input.value.length > max) {
        this.showError(input, `${this.getFieldName(input)} 不超过 ${max} 个字符`);
      } else {
        this.showSuccess(input);
      }
    },
    checkPasswordsMatch(input1, input2) {
      if (input1.value !== input2.value) {
        this.showError(input2, "密码不匹配");
      }
    },
    getFieldName(input) {
      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    },
  },
  mounted() {
    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      this.checkRequired([username, email, password, password2]);
      this.checkLength(username, 3, 15);
      this.checkLength(password, 6, 25);
      //this.checkEmail(email), 
      this.checkPasswordsMatch(password, password2);
    });
  },
};
</script>

<style lang=""></style>
