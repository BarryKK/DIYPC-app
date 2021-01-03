<template>
  <div class="nav-container">
    <nav>
      <div>
        <!-- 添加一个链接 -->
        <img
          src="../..//assets/icons/icons8-menu-144.png"
          style="width: 2.5rem; height: 2.5rem"
        />
        <h1>{{ title }}</h1>
      </div>
      <ul>
        <li><a>登入</a></li>
        <li><a>登出</a></li>
        <li><a>注册</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "DIY 装机",
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-container {
  background: rgb(7, 7, 7);
  position: sticky;
  top: 0;
  z-index: 2;
}

nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: white;
  }

  div {
    display: flex;
    align-items: center;
    img {
      margin: 0 1rem;
    }
    //添加字体
    h1 {
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    li {
      padding: 0 1rem;
      color: white;

      a {
        padding: 0.75rem 1.5rem;
      }

      a:active,
      a:hover {
        cursor: pointer;
        border: none;
        background: gray;
        transition: all 0.5s;
      }
    }
  }
}
</style>