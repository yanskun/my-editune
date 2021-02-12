<template lang="pug">
  el-select(v-model='handleValue' :placeholder='placeholder' @change='onChange')
    el-option(v-for='item in options' :label="item.label" :value="item.value" :key='item.value')
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { Select, Option as ElOption } from "element-ui"

export type Option = {
  value: string
  label: string
}

export default Vue.extend({
  components: {
    "el-select": Select,
    "el-option": ElOption
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
      required: false,
      default: ""
    },

    options: {
      type: Array as PropType<Option[]>,
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
})
</script>
