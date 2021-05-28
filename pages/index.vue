<template lang="pug">
  top-template(
    :abilities="abilities"
  )
</template>

<script>
import TopTemplate from "../components/templates/Top"

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
  }
}
</script>
