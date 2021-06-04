<template lang="pug">
  el-dialog(
    :visible="open"
    :show-close="false"
  )
    span
      highlight-json(
        :json="json"
      )
    span(
      slot="footer"
    )
      el-button(
        @click="$emit('click-close')"
      )
        | 閉じる
      el-button(
        @click="$emit('click-copy')"
      )
        | コピーする
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import HighlightJson, { Json } from "../molecules/HighlightJson.vue"

export default Vue.extend({
  components: {
    HighlightJson
  },
  props: {
    json: {
      type: Object as PropType<Json>,
      required: true
    },
    open: {
      type: Boolean,
      required: true
    }
  }
})
</script>
