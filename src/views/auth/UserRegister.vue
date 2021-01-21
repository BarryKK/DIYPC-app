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
          <input type="password" id="password" placeholder="请输入密码" />
          <small>Error message</small>
        </div>
        <div class="form-control">
          <label for="password2">确认密码</label>
          <input type="password" id="password2" placeholder="请再次输入密码" />
          <small>Error message</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </base-card>
</template>
<script>
export default {
  methods: {},
  mounted() {},
};
</script>

<style lang=""></style>
