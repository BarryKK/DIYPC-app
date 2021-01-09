<template>
  <img src="../../assets/img/cpu/components-cpu.jpg" style="width: 100%" />
  <common-filter></common-filter>
  <base-card>
    <ul>
      <cpu-item
        v-for="cpu in cpus"
        :img="cpu.img"
        :key="cpu.id"
        :id="cpu.id"
        :ProcessorNumber="cpu.ProcessorNumber"
        :Cores="cpu.Cores"
        :Threads="cpu.Threads"
        :BaseFrequency="cpu.BaseFrequency"
      ></cpu-item>
    </ul>
  </base-card>
</template>

<script>
import CpuItem from "../../components/component/CpuItem.vue";

export default {
  components: {
    CpuItem,
  },
  computed: {
    cpus(){
      return this.$store.getters['cpus/cpus']
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>