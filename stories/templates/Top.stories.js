import { object, withKnobs } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import Top from "../../components/templates/Top"

export default {
  title: "Templates/Top",
  decorators: [withKnobs],
  parameters: {
    layout: "fullscreen"
  }
}

export const Basic = () => {
  return {
    components: { Top },
    props: {
      abilities: {
        default: object("ability", [
          {
            value: true,
            label: "switch",
            key: "switch1"
          },
          {
            value: false,
            label: "switch",
            key: "switch2"
          },
          {
            value: 1,
            label: "number",
            key: "number"
          },
          {
            value: "string",
            label: "text",
            key: "text"
          }
        ])
      }
    },
    methods: {
      onChangeValue: action("change value"),
      onClickGenerate: action("click generate")
    },
    template: `
      <Top
        :abilities="abilities"
        @change-value="onChangeValue"
        @click-generate="onClickGenerate"
      />
    `
  }
}
