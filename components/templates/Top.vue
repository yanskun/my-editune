<template lang="pug">
  div
    app-header
    el-container
</template>

<script lang="ts">
import Vue from "vue"
import AppHeader from "../organisms/AppHeader.vue"

export default Vue.extend({
  components: {
    AppHeader
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
</style>
