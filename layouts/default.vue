<template lang="pug">
  div
    app-header
    nuxt
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import AppHeader from "../components/organisms/AppHeader.vue"

export default defineComponent({
  components: {
    AppHeader
  }
})
</script>
