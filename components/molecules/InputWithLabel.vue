<template lang="pug">
  .input-with-label
    el-input.input(
      v-model='handleValue'
      @change='onChange'
      :type="type"
    )
</template>

<script lang="ts">
import Vue, { PropType } from "vue"

type DataType = {
  handleValue?: string | number
}

type InputType = "text" | "number"

export default Vue.extend({
  model: {
    prop: "value",
    event: "change"
  },

  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String as PropType<InputType>,
      required: false,
      default: "text"
    }
  },

  data ():DataType {
    return {
      handleValue: undefined
    }
  },

  watch: {
    value: {
      immediate: true,
      handler (newValue?: string | number) {
        this.handleValue = newValue
      }
    }
  },

  methods: {
    onChange (newValue?: string | number) {
      this.$emit("change", newValue)
    }
  }
})
</script>

<style lang="scss" scoped>
.input-with-label {
  display: flex;

  .input {
    align-self: center;
  }

  .label {
    margin-left: 10px;
  }
}
</style>
