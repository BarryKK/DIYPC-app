<template lang="">
    <img src="../../assets/img/graphiccard/components-graphiccard.jpg" style="width:100%;">
    
    <base-card>
      <ul>
        <gra-item></gra-item>
      </ul>
    </base-card>
</template>

<script>
import GraItem from "../../components/graphiccards/GraItem.vue";

export default {
  components: {
    GraItem,
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