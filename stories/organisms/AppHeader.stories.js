import { withKnobs } from "@storybook/addon-knobs"
import AppHeader from "../../components/organisms/AppHeader"

export default {
  title: "Organisms/AppHeader",
  decorators: [withKnobs]
}

export const Basic = () => {
  return {
    components: { AppHeader },
    props: {},
    template: `
      <AppHeader />
    `
  }
}
