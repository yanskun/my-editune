<template lang="pug">
  .switch-with-label
    el-switch.switch(
      v-model="handleValue"
      @change="handleChange"
    )
    p.label {{ label }}
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
    },
    label: {
      type: String,
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

<style lang="scss" scoped>
.switch-with-label {
  display: flex;

  .switch {
    align-self: center;
    width: 10%;
    justify-content: center;
  }

  .label {
    margin-left: 10px;
  }
}
</style>
