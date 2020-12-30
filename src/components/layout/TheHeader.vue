<template>
  <nav>
    <div>
      <img
        src="../..//assets/icons/icons8-menu-144.png"
        style="width: 58px; height: 58px"
      />
      <h1>DIY装机</h1>
    </div>
    <ul>
      <li>登入</li>
      <li>登出</li>
      <li>注册</li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 90%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

div {
  display: flex;
  align-items:center;
  img {
    margin: 0 1rem;
  }
}

nav ul {
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  list-style: none;
}
</style>