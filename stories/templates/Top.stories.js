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
      },
      json: {
        default: object("json", {
          string: "value",
          number: 0,
          boolean: false
        })
      }
    },
    data() {
      return {
        showJsonModal: false
      }
    },
    methods: {
      onChangeValue: action("change value"),
      onClickGenerate: action("click generate"),
      onClickCopy: action("click copy")
    },
    template: `
      <Top
        :abilities="abilities"
        :json="json"
        :show-json-modal="showJsonModal"
        @change-value="onChangeValue"
        @click-generate="showJsonModal = true"
        @click-close="showJsonModal = false"
        @click-copy="onClickCopy"
      />
    `
  }
}
