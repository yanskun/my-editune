<template lang="pug">
  div
    app-header
    nuxt
    app-footer(
      :icons="icons"
    )
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import AppHeader from "../components/organisms/AppHeader.vue"
import AppFooter from "../components/organisms/AppFooter.vue"
import SNSIcon from "../assets/images/icons"
import { Icon } from "~/components/molecules/Connection.vue"

export default defineComponent({
  components: {
    AppHeader,
    AppFooter
  },

  setup() {
    const icons: Icon[] = [
      {
        src: SNSIcon.github,
        alt: "GitHub",
        href: "https://github.com/yasudanaoya"
      },
      {
        src: SNSIcon.twitter,
        alt: "Twitter",
        href: "https://twitter.com/708yasuda"
      }
    ]

    return {
      icons
    }
  }
})
</script>
