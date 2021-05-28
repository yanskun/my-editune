import { withKnobs } from "@storybook/addon-knobs"
import Logo from "../../components/atoms/Logo"

export default {
  title: "Atoms/Logo",
  decorators: [withKnobs]
}

export const White = () => {
  return {
    components: { Logo },
    template: `
      <div style="background-color: black;"> 
      <Logo />
      </div>
    `
  }
}

export const Black = () => {
  return {
    components: { Logo },
    template: `
      <div>
      <Logo color="black" />
      </div>
    `
  }
}
