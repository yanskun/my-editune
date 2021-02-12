import { object, text, withKnobs } from "@storybook/addon-knobs"
import AppSelect from "../../components/atoms/AppSelect"

export default {
  title: "Atoms/AppSelect",
  decorators: [withKnobs],
  argTypes: {
    onChange: {
      action: "onChange"
    }
  }
}

export const Basic = () => {
  return {
    components: { AppSelect },
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
      <AppSelect :value="value" :placeholder="placeholder" :options="options" @on-change="value = $event" />
    `
  }
}
