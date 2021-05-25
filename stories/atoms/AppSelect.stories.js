import { action } from "@storybook/addon-actions"
import { object, text, withKnobs } from "@storybook/addon-knobs"
import AppSelect from "../../components/atoms/AppSelect"

export default {
  title: "Atoms/AppSelect",
  decorators: [withKnobs]
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
    methods: {
      onChange: action("change")
    },
    template: `
      <AppSelect :value="value" :placeholder="placeholder" :options="options" @change="onChange" />
    `
  }
}
