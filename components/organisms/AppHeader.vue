<template lang="pug">
  el-header.header
    logo.logo
</template>

<script lang="ts">
import Vue from "vue"
import Logo from "../atoms/Logo.vue"

export default Vue.extend({
  components: {
    Logo
  }
})
</script>

<style lang="scss" scoped>
.header {
  padding: 8px 50px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background: #e3e3dd;
}
.logo {
  height: 100%;
}
</style>
