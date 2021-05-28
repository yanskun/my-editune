<template lang="pug">
  div
    app-header
    nuxt
</template>

<script lang="ts">
import Vue from "vue"
import AppHeader from "../components/organisms/AppHeader.vue"

export default Vue.extend({
  components: {
    AppHeader
  }
})
</script>
