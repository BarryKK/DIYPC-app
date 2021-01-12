<template>
  <img src="../../assets/img/cpu/components-cpu.jpg" style="width: 100%" />
  <cpu-filter></cpu-filter>
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
import CpuItem from "../../components/cpus/CpuItem.vue";
import CpuFilter from "../../components/cpus/CpuFilter.vue";

export default {
  components: {
    CpuItem,
    CpuFilter,
  },
  data() {
    return {};
  },
  computed: {
    cpus() {
      return this.$store.getters["cpus/cpus"];
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>