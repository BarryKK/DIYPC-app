<template lang="">
  <li>
    <img src="../../assets/img/cpu/cpu-i5-10400f.png" style="width:100px;height:100px">
    <div class="essentials">
      <table border="0" cellpadding="4px" cellspacing="0">
          <tr>
             <td>产品名称：</td>
             <td>{{product}}</td>
         </tr>
          <tr>
             <td>核心数：</td>
             <td>{{Cores}}</td>
         </tr>
          <tr>
             <td>频率：</td>
             <td>{{Frequency}}</td>
         </tr>
          <tr>
             <td>显存容量</td>
             <td>{{Meomory}}</td>
         </tr>
      </table>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
          product: "技嘉 GIGABYTE",
          Cores: 4864,
          Frequency: "1770 MHz",
          Meomory: "8GB"
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