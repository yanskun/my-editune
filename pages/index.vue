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
import { Notification } from "element-ui"
import useClipboard from "vue-clipboard3"
import SettingsStore, { Payload } from "../store/settings"
import TopTemplate from "../components/templates/Top.vue"
import { Json } from "../components/molecules/HighlightJson.vue"

type State = {
  showJsonModal: boolean
}

export default defineComponent({
  components: {
    TopTemplate
  },

  setup(_) {
    const { toClipboard } = useClipboard()
    const store = SettingsStore()
    const abilities = computed(() => {
      return store.settings
    })
    const json = computed<Json>(() => {
      let result = {}
      const mappedState = Object.entries(abilities.value)
        .map(([_, v]) => {
          return v
        })
        .sort(function (a, b) {
          if (a.key < b.key) {
            return -1
          } else {
            return 1
          }
        })
        .map((v) => {
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

    const handleClickCopy = async () => {
      try {
        await toClipboard(JSON.stringify(json.value))
        Notification.success({
          title: "コピー成功",
          message:
            "作成した json データを\nクリップボードにコピーしました。\n\nVSCode を起動し\n設定ファイルに貼り付けてください。",
          customClass: "notificate"
        })
      } catch (e) {
        Notification.error({
          title: "コピー失敗",
          message: "管理者に連絡してください",
          customClass: "notificate"
        })
      }
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

<style lang="scss">
.notificate {
  white-space: pre;
}
</style>
