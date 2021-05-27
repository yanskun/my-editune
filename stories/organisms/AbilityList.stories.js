import { object, withKnobs } from "@storybook/addon-knobs"
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
            label: "switch"
          },
          {
            value: false,
            label: "switch"
          },
          {
            value: 1,
            label: "number"
          },
          {
            value: "string",
            label: "text"
          }
        ])
      }
    },
    template: `
      <AbilityList :abilities="abilities" />
    `
  }
}
