<template lang="pug">
  el-button(:type='type' @click='onClick')
    slot
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { Button } from "element-ui"
import { ButtonType } from "element-ui/types/button.d"

export default Vue.extend({
  components: {
    "el-button": Button
  },

  props: {
    type: {
      type: String as PropType<ButtonType>,
      required: false,
      default: ""
    }
  },

  methods: {
    onClick () {
      this.$emit("click")
    }
  }
})
</script>
