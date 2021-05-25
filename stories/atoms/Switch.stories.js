import { action } from "@storybook/addon-actions"
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
    methods: {
      onChange: action("change")
    },
    template: `
      <el-switch :value="value" @change="onChange" />
    `
  }
}
