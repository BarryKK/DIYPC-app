<template lang="">
    <img src="../../assets/img/graphiccard/components-graphiccard.jpg" style="width:100%;">
    <common-filter></common-filter>
    <base-card>
      <ul>
        <gra-items></gra-items>
      </ul>
    </base-card>
</template>

<script>
import GraItems from '../../components/component/GraItem'

export default {
    components: {
       GraItems
    }
}
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>