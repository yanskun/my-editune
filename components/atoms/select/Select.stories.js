import { object, text, withKnobs } from "@storybook/addon-knobs"
import Select from "."

export default {
  title: "Atoms/Select",
  decorators: [withKnobs],
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
}

export const Basic = () => {
  return {
    components: { Select },
    props: {
      placeholder: {
        default: text("placeholder", "select here")
      },
      options: {
        default: object("options", [
          {
            value: "Option1",
            label: "Option1"
          },
          {
            value: "Option2",
            label: "Option2"
          }
        ])
      }
    },
    data () {
      return {
        value: ""
      }
    },
    template: `
      <Select :value="value" :placeholder="placeholder" :options="options" @on-change="value = $event" />
    `
  }
}
