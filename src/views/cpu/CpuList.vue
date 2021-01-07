<template>
  <img src="../../assets/img/cpu/components-cpu.jpg" style="width:100%" >
  <common-filter></common-filter>
  <base-card>
    <ul>
      <cpu-items></cpu-items>
    </ul>
  </base-card>
  
</template>

<script>
import CpuItems from "../../components/component/CpuItems.vue";

export default {
  components: {
    CpuItems,
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>