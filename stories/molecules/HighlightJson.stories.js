import { object, withKnobs } from "@storybook/addon-knobs"
import HighlightJson from "../../components/molecules/HighlightJson"

export default {
  title: "Molecules/HighlightJson",
  decorators: [withKnobs]
}

export const Basic = () => {
  return {
    components: { HighlightJson },
    props: {
      json: {
        default: object("json", {
          string: "value",
          number: 0,
          boolean: false
        })
      }
    },
    template: `
      <HighlightJson :json="json" />
    `
  }
}
