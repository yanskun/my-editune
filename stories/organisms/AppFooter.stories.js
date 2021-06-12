import { object, withKnobs } from "@storybook/addon-knobs"
import AppFooter from "../../components/organisms/AppFooter"

export default {
  title: "Organisms/AppFooter",
  decorators: [withKnobs]
}

export const Basic = () => {
  return {
    components: { AppFooter },
    props: {
      icons: {
        default: object("icons", [
          {
            src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            alt: "GitHub",
            href: "https://github.com/"
          }
        ])
      }
    },
    template: `
      <AppFooter :icons="icons" />
    `
  }
}
