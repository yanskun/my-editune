<template lang="pug">
  top-template(
    :abilities="getSettings"
    @change-value="handleChangeValue"
  )
</template>

<script lang="ts">
import { mapMutations } from "vuex"
import { AbilityValue } from "../assets/types/AppType"
import TopTemplate from "../components/templates/Top.vue"
import { Setting } from "../store/settings"

type ChangeEvent = {
  newValue: AbilityValue
  key: string
}

export default {
  components: {
    TopTemplate
  },

  data() {
    return {
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
    }
  },

  computed: {
    getSettings() {
      const settings: Setting = this.$store.state.settings.settings
      return Object.values(settings).map((v) => {
        return {
          value: v.value,
          label: v.label
        }
      })
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
}
</script>
