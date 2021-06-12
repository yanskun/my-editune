<template lang="pug">
  .connection
    .icons
      .icon(v-for="icon in icons")
        a(
          target="_blank"
          :href="icon.href"
        )
          el-image.image(
            :src="icon.src"
            :alt="icon.alt"
          )
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api"

export type Icon = {
  src: string
  alt: string
  href: string
}

export default defineComponent({
  props: {
    icons: {
      type: Array as PropType<Icon[]>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.connection {
  width: 100%;
  align-items: center;
  display: flex;
  .icons {
    margin: 0 0 0 auto;
    display: flex;
    .image {
      height: 40px;
      width: 40px;
      margin: 0 0.5vw;
    }
  }
}
</style>
