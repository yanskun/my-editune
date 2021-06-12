<template lang="pug">
  el-header.header
    logo.logo(
      color="white"
    )
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import Logo from "../atoms/Logo.vue"

export default defineComponent({
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
  background-color: #303133;
}
.logo {
  height: 100%;
}
</style>
