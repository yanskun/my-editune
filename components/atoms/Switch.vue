<template lang="pug">
  el-switch(
    v-model="handleValue"
    @change='onChange'
  )
</template>

<script lang="ts">
import Vue from "vue"
import { Switch } from "element-ui"

export default Vue.extend({
  components: {
    "el-switch": Switch
  },
  model: {
    prop: "value",
    event: "on-change"
  },

  props: {
    value: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      handleValue: true
    }
  },

  watch: {
    value: {
      immediate: true,
      handler (newValue: boolean) {
        this.handleValue = newValue
      }
    }
  },

  methods: {
    onChange (newValue: boolean) {
      this.$emit("on-change", newValue)
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
