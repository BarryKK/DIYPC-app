<template lang="">
  <background></background>
  <div class="container">
    <Form @submit="onSubmit" id="form" class="form" :validation-schema="schema">
      <h2>注册</h2>
      <div class="form-control">
        <label for="username">用户名</label>
        <field type="username" name="username" placeholder="请输入用户名" />
        <ErrorMessage name="username" style="color:red" />
      </div>
      <div class="form-control">
        <label for="email">Email</label>
        <field type="email" name="email" placeholder="请输入邮箱" />
        <ErrorMessage name="email" style="color:red" />
      </div>
      <div class="form-control">
        <label for="password">密码</label>
        <field type="password" name="password" placeholder="请输入密码" />
        <ErrorMessage name="password" style="color:red" />
      </div>
      <div class="form-control">
        <label for="password2">确认密码</label>
        <field type="password" name="password2" placeholder="请再次输入密码" />
        <ErrorMessage name="password2" style="color:red"></ErrorMessage>
      </div>
      <button type="submit">提交</button>
    </Form>
  </div>
</template>

<script>
import { markRaw } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = markRaw(
      Yup.object().shape({
        username: Yup.string().required("用户名不能为空"),
        email: Yup.string()
          .email("邮箱格式不正确")
          .required("Email不能为空"),
        password: Yup.string()
          .min(8, "密码不得少于8个字符")
          .required("密码不能为空"),
        password2: Yup.string()
          .required("密码不能为空")
          .oneOf([Yup.ref("password")], "密码不匹配"),
      })
    );
    return {
      schema,
    };
  },
  methods: {
    onSubmit() {
      alert("success");
    },
  },
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
    border-radius: 5px;
    width: 100%;
    padding: 15px 10px;
    outline: none;
    font-size: 1rem;
    transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;

    &:focus {
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
