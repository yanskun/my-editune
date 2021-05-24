<template lang="pug">
  .switch-with-label
    app-switch.switch(
      v-model="handleValue"
      @change="onChange"
    )
    p.label {{ label }}
</template>

<script lang="ts">
import Vue from "vue"
import Switch from "../atoms/Switch.vue"

export default Vue.extend({
  components: {
    "app-switch": Switch
  },

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
  }

  .label {
    margin-left: 10px;
  }
}

</style>
