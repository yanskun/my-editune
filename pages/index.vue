<template lang="pug">
  top-template(
    :abilities="abilities"
    @change-value="handleChangeValue"
  )
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "@vue/composition-api"
import { mapMutations } from "vuex"
import { AbilityValue } from "../assets/types/AppType"
import TopTemplate from "../components/templates/Top.vue"
import { Setting } from "../store/settings"
import { Ability } from "~/components/organisms/AbilityList.vue"

type ChangeEvent = {
  newValue: AbilityValue
  key: string
}

type State = {
  abilities: Ability[]
}

export default defineComponent({
  components: {
    TopTemplate
  },

  setup() {
    const state = reactive<State>({
      abilities: [
        {
          value: true,
          label: "switch",
          key: "switch1"
        },
        {
          value: false,
          label: "switch",
          key: "switch2"
        },
        {
          value: 1,
          label: "number",
          key: "number"
        },
        {
          value: "string",
          label: "text",
          key: "text"
        }
      ]
    })

    const getSettings = computed(() => {
      const settings: Setting = this.$store.state.settings.settings
      return Object.values(settings).map((v) => {
        return {
          value: v.value,
          label: v.label
        }
      })
    })

    return {
      ...state,

      getSettings
    }
  },

  methods: {
    ...mapMutations({
      changeSetting: "settings/changeSetting"
    }),
    handleChangeValue(event: ChangeEvent) {
      const param = {
        key: event.key,
        value: event.newValue
      }
      this.changeSetting(param)
    }
  }
})
</script>
