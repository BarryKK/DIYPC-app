<template lang="">
  <li>
    <img src="../../assets/img/cpu/cpu-i5-10400f.png" style="width:100px;height:100px">
    <div class="essentials">
      <table border="0" cellpadding="4px" cellspacing="0">
         <tr>
             <td>处理器型号：</td>
             <td>{{ProcessorNumber}}</td>
         </tr>
         
          <tr>
             <td>核心数：</td>
             <td>{{Cores}}</td>
         </tr>
          <tr>
             <td>线程数：</td>
             <td>{{Threads}}</td>
         </tr>
          <tr>
             <td>基础频率</td>
             <td>{{BaseFrequency}}</td>
         </tr>
      </table>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
          ProcessorNumber: "i5-10400F",
          Cores: 6,
          Threads: 12,
          BaseFrequency: "2.90 GHZ",
    };
  }
};
</script>

<style lang="scss" scoped>
li {
  width: 77%;
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;

  .essentials {
    height: 100px;
  }
 
}
</style>