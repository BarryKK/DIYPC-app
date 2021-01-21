<template>
  <img src="../../assets/img/cpu/components-cpu.jpg" style="width: 100%" />
  <cpu-filter
    @search="updateSearch"
    :search-term="enteredSearchTerm"
  ></cpu-filter>
  <base-card>
    <ul>
      <cpu-item
        v-for="cpu in availableCpus"
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
  <el-backtop></el-backtop>
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
    return {
      enteredSearchTerm: "",
      activeSearchTerm: "",
    };
  },
  computed: {
    availableCpus() {
      let cpus = [];
      if (this.activeSearchTerm) {
        cpus = this.cpus.filter((cpu) =>
          cpu.ProcessorNumber.includes(this.activeSearchTerm)
        );
      } else if (this.cpus) {
        cpus = this.cpus;
      }
      return cpus;
    },
    cpus() {
      return this.$store.getters["cpus/cpus"];
    },
  },
  methods: {
    updateSearch(val) {
      this.enteredSearchTerm = val;
    },
  },
  watch: {
    enteredSearchTerm(val) {
      setTimeout(() => {
        if (val === this.enteredSearchTerm) {
          this.activeSearchTerm = val;
        }
      }, 300);
    },
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
