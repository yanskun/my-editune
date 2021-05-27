import { object, withKnobs } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import AbilityList from "../../components/organisms/AbilityList"

export default {
  title: "Organisms/AbilityList",
  decorators: [withKnobs]
}

export const Basic = () => {
  return {
    components: { AbilityList },
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
      onChange: action("change")
    },
    template: `
      <AbilityList :abilities="abilities" @change="onChange" />
    `
  }
}
