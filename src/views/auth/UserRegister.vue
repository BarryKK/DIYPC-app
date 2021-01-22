<template lang="">
  <base-card>
    <div class="container">
      <Form @submit="onSubmit" id="form" class="form">
        <h2>注册</h2>
        <div class="form-control">
          <label for="username">用户名</label>
          <field type="username" name="username" placeholder="请输入用户名" :rules="validateUsername"/>
          <ErrorMessage name="username" style="color:red"/>
        </div>
        <div class="form-control">
          <label for="email">Email</label>
          <field type="email" name="email" placeholder="请输入邮箱" :rules="validateEmail"/>
          <ErrorMessage name="email" style="color:red"/>
        </div>
        <div class="form-control">
          <label for="password">密码</label>
          <field type="password" name="password" placeholder="请输入密码" :rules="validatePassword"/>
          <ErrorMessage name="password" style="color:red"/>
        </div> 
        <!-- <div class="form-control">
          <label for="password2">确认密码</label>
          <input type="password" id="password2" placeholder="请再次输入密码" v-model.trim="password2"/>
          <small>{{errorMessage}}</small>
        </div> -->
        <button type="submit">提交</button>
      </Form>
    </div>
  </base-card>
</template>
<script>
import {Form, Field, ErrorMessage} from 'vee-validate'

export default {
  components: {
   Form,
   Field,
   ErrorMessage
  },
  methods: {
    onSubmit(){
      alert('Submitted')
    },
    validateEmail(value){
      if(!value){
        return '邮箱不能为空'
      }

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return '邮箱的格式不正确';
      }

      return true;
    },
    validateUsername(value){
      if(!value){
        return '用户名不能为空'
      }

      return true;
    },
    validatePassword(value){
      if(!value){
        return '密码不能为空'
      }

      return true;
    }

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
