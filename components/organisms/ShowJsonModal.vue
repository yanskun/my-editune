<template lang="pug">
  el-dialog(
    :visible="open"
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
import { AbilityValue } from "../../assets/types/AppType"
import HighlightJson, { Json } from "../molecules/HighlightJson.vue"

type Ability = {
  key: string
  value: AbilityValue
}

export default Vue.extend({
  components: {
    HighlightJson
  },
  props: {
    json: {
      type: Object as PropType<Json>,
      required: true
    },
    abilities: {
      type: Array as PropType<Ability[]>,
      required: true
    },
    open: {
      type: Boolean,
      required: true
    }
  }
})
</script>
