<template lang="">
  <li>
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
  props: ['img','id','ProcessorNumber', 'Cores', 'Threads', 'BaseFrequency']

};
</script>

<style lang="scss" scoped>
li {
  width: 100%;
  border: 1px solid black;
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom:1rem;

  .essentials {
    height: 100px;
  }
 
}
</style> 