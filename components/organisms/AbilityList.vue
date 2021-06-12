<template lang="pug">
  .abilityList
    .ability(
      v-for="ability in abilities"
    )
      template(
        v-if="typeof ability.value === 'boolean'"
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
          :type="getInputType(ability)"
          @change="$emit('change', { newValue:$event, key: ability.key })"
        )
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api"
import { AbilityValue } from "../../assets/types/AppType"
import InputWithLabel from "../molecules/InputWithLabel.vue"
import SwitchWithLabel from "../molecules/SwitchWithLabel.vue"

export type Ability = {
  value: AbilityValue
  label: string
  key: string
}

export default defineComponent({
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
    getInputType(ability: Ability): string {
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
