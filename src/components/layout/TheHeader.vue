<template>
  <div class="nav-container">
    <nav class="nav">
      <!-- 添加一个链接 -->
      <div>
        <span @click="openSideBar()">
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
        <li v-else><a href="#">注册</a></li>
      </ul>
    </nav>

    <div id="mySideBar" class="sidebar">
      <img src="../../assets/img/sidebar-background.jpg" class="header"/>
      <a class="close"><i class="el-icon-close" @click="closeSideBar()"></i></a>
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
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: "ltr",
      isLoggedIn: false,
    };
  },
  methods: {
    openSideBar() {
     document.getElementById("mySideBar").style.width = "16rem";
    },
    closeSideBar() {
      document.getElementById("mySideBar").style.width = "0";
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
        background: gray;
        transition: all 0.5s;
      }
    }
  }
}

.sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    background-color: black;
    overflow-x: hidden;
    transition: all 0.5s;
  

    .header{
     width:100%;
     height:5rem;
     color: white;
     text-align: center;
     line-height:5rem;
     font-size: 2rem;
     background:url('../../assets/img/sidebar-background.jpg') no-repeat center / cover
     
   }

  .close{
     text-align:right;

    &:hover{
    background-color: black;
    cursor: pointer;
   }

   
  }

  a {
    color:white;
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    text-decoration: none;
    font-size: 1.5rem;
    display: block;
    transition: all 0.3s;
    border: none;
    

    &:hover{
      background-color:gray
    }
  }
}
</style>