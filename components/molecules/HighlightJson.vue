<template lang="pug">
  pre(v-html="generateHighlight")
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import highlightjs from "highlight.js"
import { AbilityValue } from "../../assets/types/AppType"

export type Json = {
  [key: string]: AbilityValue
}

export default Vue.extend({
  props: {
    json: {
      type: Object as PropType<Json>,
      required: true
    }
  },

  computed: {
    generateHighlight() {
      const value = highlightjs.highlightAuto(
        JSON.stringify(this.json, null, "\t"),
        ["JSON"]
      ).value
      return value
    }
  }
})
</script>

<style src="highlight.js/styles/isbl-editor-light.css"></style>
