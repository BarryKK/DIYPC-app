<template lang="">
  <el-button type="text" @click="dialogVisible = true"
    >点击打开 Dialog</el-button
  >

  <el-dialog
    title="提示"
    v-model="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <span>这是一段信息</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script>
export default {};
</script>
<style lang=""></style>
