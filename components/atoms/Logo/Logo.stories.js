import { number, withKnobs } from "@storybook/addon-knobs"
import Logo from "."

export default {
  title: "Atoms/Logo",
  decorators: [withKnobs]
}

export const Basic = () => {
  return {
    components: { Logo },
    props: {
      width: {
        default: number("width", 200)
      }
    },
    template: `
      <Logo :width="width" />
    `
  }
}
