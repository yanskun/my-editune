<template lang="pug">
  div
    app-header
    el-container
      ability-list(
        :abilities="abilities"
        @change="$emit('change', $event)"
      )
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import AppHeader from "../organisms/AppHeader.vue"
import AbilityList, { Ability } from "../organisms/AbilityList.vue"

export default Vue.extend({
  components: {
    AppHeader,
    AbilityList
  },

  props: {
    abilities: {
      type: Array as PropType<Ability[]>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
</style>
