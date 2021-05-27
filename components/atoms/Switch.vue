<template lang="pug">
  el-switch(
    v-model="handleValue"
    @change='handleChange'
  )
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  model: {
    prop: "value",
    event: "change"
  },

  props: {
    value: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      handleValue: true
    }
  },

  watch: {
    value: {
      immediate: true,
      handler(newValue: boolean) {
        this.handleValue = newValue
      }
    }
  },

  methods: {
    handleChange(newValue: boolean) {
      this.$emit("change", newValue)
    }
  }
})
</script>
