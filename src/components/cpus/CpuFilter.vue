<template lang="">
  <div class="container">
    <input type="search" @input="search" :value="searchTerm" placeholder="请输入型号" />
  </div>
</template>

<script>
export default {
  props:['searchTerm'],
  emits:['search'],
  methods: {
    search(event){
      this.$emit('search', event.target.value)
    }
  }
};
</script>

<style lang="scss">
.container {
  max-width: 40rem;
  margin: 2rem auto;

  input {
    font-size: 1.5rem;
    padding: 0;
    width: 100%;
    height: 2rem;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
  }
}
</style>
