import { object, withKnobs } from "@storybook/addon-knobs"
import Connection from "../../components/molecules/Connection"
import SNSIcon from "../../assets/images/icons"

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
            src: SNSIcon.github,
            alt: "GitHub",
            href: "https://github.com/"
          },
          {
            src: SNSIcon.twitter,
            alt: "Twitter",
            href: "https://twitter.com/"
          }
        ])
      }
    },
    template: `
      <Connection :icons="icons" />
    `
  }
}
