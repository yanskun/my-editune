<template lang="pug">
  el-footer.footer
    connection(
      :icons="icons"
    )
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api"
import Connection, { Icon } from "../molecules/Connection.vue"

export default defineComponent({
  components: {
    Connection
  },

  props: {
    icons: {
      type: Array as PropType<Icon[]>,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  width: 100vw;
  position: absolute;
  bottom: 0;
  padding: 8px 50px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: #303133;
}
</style>
