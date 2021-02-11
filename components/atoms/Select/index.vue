<template lang="pug">
  el-select(v-model='handleValue' :placeholder='placeholder' @change='onChange')
    el-option(v-for='item in options' :label="item.label" :value="item.value" :key='item.value')
</template>

<script lang="ts">
import { Select, Option } from "element-ui"

export default {
  components: {
    "el-select": Select,
    "el-option": Option
  },
  model: {
    prop: "value",
    event: "on-change"
  },

  props: {
    value: {
      type: String,
      required: false,
      default: ""
    },

    placeholder: {
      type: String,
      required: true
    },

    options: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      handleValue: ""
    }
  },

  watch: {
    value: {
      immediate: true,
      handler (newValue: string) {
        this.handleValue = newValue
      }
    }
  },

  methods: {
    onChange (newValue: string) {
      this.$emit("on-change", newValue)
    }
  }
}
</script>
