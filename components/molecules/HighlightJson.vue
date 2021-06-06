<template lang="pug">
  pre(v-html="generateHighlight")
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "@vue/composition-api"
import highlightjs from "highlight.js"
import { AbilityValue } from "../../assets/types/AppType"

export type Json = {
  [key: string]: AbilityValue
}

export default defineComponent({
  props: {
    json: {
      type: Object as PropType<Json>,
      required: true
    }
  },

  setup(props) {
    const generateHighlight = computed(() => {
      const value = highlightjs.highlightAuto(
        JSON.stringify(props.json, null, "\t"),
        ["JSON"]
      ).value
      return value
    })

    return {
      generateHighlight
    }
  }
})
</script>

<style src="highlight.js/styles/isbl-editor-light.css"></style>
