import { object, withKnobs } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import ShowJsonModal from "../../components/molecules/ShowJsonModal"

export default {
  title: "Molecules/ShowJsonModal",
  decorators: [withKnobs]
}

export const Basic = () => {
  return {
    components: { ShowJsonModal },
    props: {
      abilities: {
        default: object("abilities", [])
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
          :abilities="abilities"
          @click-close="onClickClose"
          @click-copy="onClickCopy"
        />
      </div>
    `
  }
}
