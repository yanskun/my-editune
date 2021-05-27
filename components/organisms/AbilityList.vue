<template lang="pug">
  .abilityList
    .ability(
      v-for="ability in abilities"
    )
      template(
        v-if="getAbilityType(ability) === 'boolean'"
      )
        switch-with-label(
          :value="ability.value"
          :label="ability.label"
        )
      template(
        v-else
      )
        input-with-label(
          :value="ability.value"
          :label="ability.label"
          :type="getImputType(ability)"
        )
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { AbilityValue } from "../../assets/AppType"
import InputWithLabel from "../molecules/InputWithLabel.vue"
import SwitchWithLabel from "../molecules/SwitchWithLabel.vue"

type Ability = {
  value: AbilityValue
  label: string
}

export default Vue.extend({
  components: {
    InputWithLabel,
    SwitchWithLabel
  },

  props: {
    abilities: {
      type: Array as PropType<Ability[]>,
      required: true
    }
  },

  methods: {
    getAbilityType(ability: Ability): string {
      return typeof ability.value
    },

    getImputType(ability: Ability): string {
      const type = typeof ability.value
      switch (type) {
        case "string":
          return "text"
        case "number":
          return "number"
        default:
          return ""
      }
    }
  }
})
</script>
