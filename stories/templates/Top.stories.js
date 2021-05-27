import { withKnobs } from "@storybook/addon-knobs"
// import { action } from "@storybook/addon-actions"
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
    props: {},
    template: `
      <Top />
    `
  }
}
