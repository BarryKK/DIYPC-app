<template>
  <div class="showcase">
    <div class="showcase-content">
      <h1>
        <span class="txt-type" data-wait="3000" data-words='["Build"]'></span
        >属于你自己的主机
      </h1>
      <a class="btn">开始</a>
    </div>
  </div>
</template>

<script>
import TypeWriter from "../common/typewriter.js";

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  new TypeWriter(txtElement, words,wait);
}



export default {
  mounted(){
     init();
  }

};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}

.showcase {
  background: url("../assets/img/background.jpg") no-repeat center right / cover;
  height: 100vh;
  overflow: hidden;

  &-content {
    text-align: center;
    padding-top: 19%;
    padding-left: 40%;

    h1 {
      font-size: 4rem;
      color: white;
    }

    .btn {
      font-size: 1.5rem;
      background: #657380;
      border: none;
      padding: 1rem 2.2rem;
      border: none;
      transition: all 0.5s;
    }

    a:hover {
      cursor: pointer;
      color: white;
    }
  }
}
</style>
