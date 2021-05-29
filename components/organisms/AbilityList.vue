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
          @change="$emit('change', { newValue: $event, key: ability.key })"
        )
      template(
        v-else
      )
        input-with-label(
          :value="ability.value"
          :label="ability.label"
          :type="getImputType(ability)"
          @change="$emit('change', { newValue:$event, key: ability.key })"
        )
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { AbilityValue } from "../../assets/types/AppType"
import InputWithLabel from "../molecules/InputWithLabel.vue"
import SwitchWithLabel from "../molecules/SwitchWithLabel.vue"

export type Ability = {
  value: AbilityValue
  label: string
  key: string
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
