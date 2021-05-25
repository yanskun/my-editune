import { action } from "@storybook/addon-actions"
import { select, withKnobs } from "@storybook/addon-knobs"
import AppButton from "../../components/atoms/AppButton"

export default {
  title: "Atoms/AppButton",
  decorators: [withKnobs]
}

export const Basic = () => {
  return {
    components: { AppButton },
    props: {
      type: select("type", [
        "",
        "primary",
        "success",
        "warning",
        "danger",
        "info",
        "text"
      ])
    },
    methods: {
      onClick: action("click")
    },
    template: `
      <AppButton @click='onClick'>
        click here
      </AppButton>
    `
  }
}
