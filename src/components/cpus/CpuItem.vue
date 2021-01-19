<template lang="">
  <li >
    <img :src="img" style="width:100px;height:100px">
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
  props: ["img", "id", "ProcessorNumber", "Cores", "Threads", "BaseFrequency"],
};
</script>

<style lang="scss" scoped>
li {
  width: 90%;
  height: 130px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
</style> 