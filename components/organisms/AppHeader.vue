<template lang="pug">
  el-header.header
    logo(
      width="10%"
    )
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import Logo from "../atoms/Logo.vue"

export default Vue.extend({
  components: {
    Logo
  }
})
</script>

<style lang="scss" scoped>
.header {
  padding: 1vw 10vw;
  display: flex;
  justify-content: space-between;
  background: #E3E3DD;
}
</style>
