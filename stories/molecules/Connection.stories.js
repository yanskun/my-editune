import { object, withKnobs } from "@storybook/addon-knobs"
import Connection from "../../components/molecules/Connection"

export default {
  title: "Molecules/Connection",
  decorators: [withKnobs]
}

export const Basic = () => {
  return {
    components: { Connection },
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
      <Connection :icons="icons" />
    `
  }
}
