<template>
  <div class="nav-container">
    <nav class="nav">
      <div>
        <span id="btnSideBar" class="header_Button" @click="openSideBar()">
          <img
            src="../../assets/icons/icons8-menu-144.png"
            style="width: 40px; height: 40px"
          />
        </span>
        <h1><router-link to="/home">DIY 装机</router-link></h1>
      </div>
      <ul>
        <li><router-link to="/auth">登入</router-link></li>
        <li v-if="isLoggedIn"><a>登出</a></li>
        <li v-else><router-link to="/register" href="#">注册</router-link></li>
      </ul>
    </nav>

    <div id="mySideBar" class="sideBar">
      <div class="sideBar_Links">
        <a class="close" @click="closeSideBar()"
          ><i class="el-icon-close"></i
        ></a>
        <router-link to="/cpu">CPU</router-link>
        <router-link to="/graphiccard">显卡</router-link>
        <a href="#">主板</a>
        <a href="#">机箱</a>
        <a href="#">电源</a>
        <a href="#">散热</a>
        <a href="#">内存</a>
        <a href="#">存储</a>
        <a href="#">评测</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    openSideBar() {
      document.querySelector(".sideBar_Links").classList.add("sideBar--Open");
    },
    closeSideBar() {
      document
        .querySelector(".sideBar_Links")
        .classList.remove("sideBar--Open");
    },
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

  span:hover {
    background: #37c2f0;
  }

  //添加字体
  h1 {
    a {
      color: white;
      text-decoration: none;
    }
  }

  div {
    display: flex;
    align-items: center;
    img {
      margin: 0 1rem;
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
        color: white;
        padding: 0.75rem 1.5rem;
        text-decoration: none;
      }

      a:active,
      a:hover,
      a.router-link-active {
        cursor: pointer;
        border: none;
        background: #37c2f0;
        transition: all 0.5s;
      }
    }
  }
}

.sideBar_Links {
  height: 100%;
  width: 16rem;
  left: 0;
  position: fixed;
  z-index: 10;
  background-color: black;
  overflow-x: hidden;
  transform: translateX(-16rem);
  transition: transform 0.3s;

  .close {
    text-align: right;

    &:hover {
      background-color: black;
      cursor: pointer;
    }
  }

  a {
    color: white;
    padding: 0.5rem 0.5rem 0.5rem 6rem;
    text-decoration: none;
    font-size: 1.5rem;
    display: block;
    transition: all 0.3s;
    border: none;
    box-sizing: border-box;

    &:hover {
      background-color: #37c2f0;
    }
  }
}

.sideBar .sideBar--Open {
  transform: translateX(0);
}
</style>
