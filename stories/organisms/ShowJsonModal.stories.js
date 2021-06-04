import { object, withKnobs } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import ShowJsonModal from "../../components/organisms/ShowJsonModal"

export default {
  title: "Organisms/ShowJsonModal",
  decorators: [withKnobs]
}

export const Basic = () => {
  return {
    components: { ShowJsonModal },
    props: {
      json: {
        default: object("json", {
          string: "value",
          number: 0,
          boolean: false
        })
      }
    },
    data() {
      return {
        open: false
      }
    },
    methods: {
      onClickClose() {
        this.open = false
      },
      onClickCopy: action("click copy")
    },
    template: `
      <div>
        <el-button @click="open = true">click here</el-button>
        <ShowJsonModal
          :open="open"
          :json="json"
          @click-close="onClickClose"
          @click-copy="onClickCopy"
        />
      </div>
    `
  }
}
