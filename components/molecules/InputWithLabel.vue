<template lang="pug">
  .input-with-label
    el-input.input(
      v-model='handleValue'
      @change='handleChange'
      :type="type"
    )
    p.label {{ label }}
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  watchEffect
} from "@vue/composition-api"

type InputType = "text" | "number"

type State = {
  handleValue?: string | number
}

export default defineComponent({
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

  setup(props, { emit }) {
    const state = reactive<State>({})

    const handleChange = (newValue?: string | number) => {
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
.input-with-label {
  display: flex;

  .input {
    align-self: center;
    width: 10%;
  }

  .label {
    margin-left: 10px;
  }
}
</style>
