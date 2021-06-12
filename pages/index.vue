<template lang="pug">
  top-template(
    :abilities="abilities"
    :json="json"
    :showJsonModal="state.showJsonModal"
    @change-value="handleChangeValue"
    @click-generate="handleClickGenerate"
    @click-close="handleClickClose"
    @click-copy="handleClickCopy"
  )
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "@vue/composition-api"
import SettingsStore, { Payload } from "../store/settings"
import TopTemplate from "../components/templates/Top.vue"

type State = {
  showJsonModal: boolean
}

export default defineComponent({
  components: {
    TopTemplate
  },

  setup(_) {
    const store = SettingsStore()
    const abilities = computed(() => store.settings)
    const json = computed(() => {
      let result = {}
      const mappedState = Object.entries(abilities.value).map(([_, v]) => {
        return { [v.key]: v.value }
      })

      mappedState.forEach((i) => {
        result = { ...result, ...i }
      })
      return result
    })

    const state = reactive<State>({ showJsonModal: false })

    const handleChangeValue = (params: Payload) => {
      store.changeSettings(store, params)
    }

    const handleClickGenerate = () => {
      state.showJsonModal = true
    }

    const handleClickClose = () => {
      state.showJsonModal = false
    }

    const handleClickCopy = () => {
      // TODO: copy logic
    }

    return {
      state,
      abilities,
      json,
      handleChangeValue,
      handleClickGenerate,
      handleClickClose,
      handleClickCopy
    }
  }
})
</script>
