import { text, withKnobs } from "@storybook/addon-knobs"
import SwitchWithLabel from "../../components/molecules/SwitchWithLabel"

export default {
  title: "Molecules/SwitchWithLabel",
  decorators: [withKnobs]
}

export const Basic = () => {
  return {
    components: { SwitchWithLabel },
    props: {
      label: {
        default: text("label", "View the feature description here.")
      }
    },
    data () {
      return {
        value: true
      }
    },
    template: `
      <SwitchWithLabel :value="value" :label="label" @change="value = $event" />
    `
  }
}
