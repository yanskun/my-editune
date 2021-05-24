import { text, withKnobs } from "@storybook/addon-knobs"
import InputWithLabel from "../../components/molecules/InputWithLabel"

export default {
  title: "Molecules/InputWithLabel",
  decorators: [withKnobs]
}

export const Text = () => {
  return {
    components: { InputWithLabel },
    props: {
      label: {
        default: text("label", "View the feature description here.")
      }
    },
    data () {
      return {
        value: "test"
      }
    },
    template: `
      <InputWithLabel :value="value" :label="label" @change="value = $event" />
    `
  }
}

export const Number = () => {
  return {
    components: { InputWithLabel },
    props: {
      label: {
        default: text("label", "View the feature description here.")
      }
    },
    data () {
      return {
        value: 2
      }
    },
    template: `
      <InputWithLabel type="number" :value="value" :label="label" @change="value = $event" />
    `
  }
}
