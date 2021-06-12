import { object, withKnobs } from "@storybook/addon-knobs"
import AppFooter from "../../components/organisms/AppFooter"
import SNSIcon from "../../assets/images/icons"

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
      <AppFooter :icons="icons" />
    `
  }
}
