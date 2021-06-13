<template lang="pug">
  .switch-with-label
    el-switch.switch(
      v-model="handleValue"
      @change="handleChange"
    )
    p.label {{ label }}
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from "@vue/composition-api"

type State = {
  handleValue: boolean
}

export default defineComponent({
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

  setup(props, { emit }) {
    const state = reactive<State>({
      handleValue: true
    })

    const handleChange = (newValue: boolean) => {
      emit("change", newValue)
    }

    watchEffect(() => {
      state.handleValue = props.value
    })

    return {
      ...state,
      handleChange
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
    min-width: 50px;
    justify-content: center;
  }

  .label {
    margin-left: 10px;
  }
}
</style>
