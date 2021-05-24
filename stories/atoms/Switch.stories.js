import { withKnobs } from "@storybook/addon-knobs"
import Switch from "../../components/atoms/Switch"

export default {
  title: "Atoms/Switch",
  decorators: [withKnobs]
}

export const Basic = () => {
  return {
    components: { "el-switch": Switch },
    data () {
      return {
        value: true
      }
    },
    template: `
      <el-switch :value="value" @change="value = $event" />
    `
  }
}
